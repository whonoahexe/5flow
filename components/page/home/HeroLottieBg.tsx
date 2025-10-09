'use client';

import { useEffect, useRef, useState } from 'react';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import HeroBg from './HeroBg';

type AnimationData = Record<string, unknown>;

const HeroLottieBg = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const [data, setData] = useState<AnimationData | null>(null);
  const [mode, setMode] = useState<'loading' | 'playing' | 'scrub'>('loading');

  // Respect reduced motion: render only static background
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  // Load animation JSON (keeps static fallback visible while loading)
  useEffect(() => {
    let mounted = true;
    if (reduced) return; // skip loading if reduced motion
    fetch('/lottie/landing-commence.json')
      .then(res => (res.ok ? res.json() : null))
      .then(json => {
        if (mounted && json) {
          setData(json as AnimationData);
          setMode('playing');
        }
      })
      .catch(() => {
        // If it fails, we'll just keep showing the static background
      });
    return () => {
      mounted = false;
    };
  }, [reduced]);

  // Scroll-driven reverse scrubbing
  useEffect(() => {
    if (!data || reduced) return;

    let ticking = false;
    let totalFrames = 0;

    const initFrames = () => {
      try {
        // getDuration(true) returns total frames
        totalFrames = Math.floor(lottieRef.current?.getDuration?.(true) || 0);
      } catch {
        totalFrames = 0;
      }
    };

    const calcProgress = () => {
      const el = containerRef.current;
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // When the top of the container hits top of viewport => progress 0
      // When the bottom of the container hits top of viewport => progress 1
      const total = rect.height + vh; // extend range a bit for smoother exit
      const scrolled = Math.min(Math.max(vh - rect.top, 0), total);
      return Math.min(Math.max(scrolled / total, 0), 1);
    };

    const update = () => {
      ticking = false;
      if (!lottieRef.current) return;
      if (mode !== 'scrub') return; // only scrub when in scrub mode
      if (!totalFrames) initFrames();
      const progress = calcProgress();
      const frame = Math.floor((1 - progress) * totalFrames);
      lottieRef.current.goToAndStop?.(frame + 8, true);
    };

    const onScroll = () => {
      // If user scrolls while playing, switch to scrub mode immediately
      if (mode === 'playing') {
        // Do not clear the canvas, pause keeps the last rendered frame
        lottieRef.current?.pause?.();
        // Immediately set the correct frame so there's no visual gap
        try {
          if (!totalFrames) initFrames();
          const progress = calcProgress();
          const frame = Math.floor((1 - progress) * totalFrames);
          lottieRef.current?.goToAndStop?.(frame + 8, true);
        } catch {}
        setMode('scrub');
      }
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // Initialize once on mount and when data is ready
    requestAnimationFrame(() => {
      initFrames();
      update();
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [data, reduced, mode]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10">
      {/* Always render a safe background so the canvas can never flash white */}
      {/* <HeroBg
        defaultColor="#ffffff"
        tileColors={[
          // row 0
          [undefined, undefined, undefined, '#D1DAFD', 'var(--accent1)', 'var(--success)', 'var(--primary)'],
          // row 1
          [undefined, undefined, undefined, undefined, '#D1DAFD', 'var(--accent2)', 'var(--success)', 'var(--primary)'],
          // row 2
          [undefined, undefined, undefined, undefined, '#D1DAFD', 'var(--accent1)', 'var(--accent2)', 'var(--primary)'],
          // row 3
          [undefined, undefined, undefined, '#D1DAFD', '#D1DAFD', '#D1DAFD', 'var(--accent1)', 'var(--primary)'],
        ]}
      /> */}

      {/* Lottie overlay */}
      {!reduced && data ? (
        <div className="absolute inset-0 -mt-22">
          <Lottie
            lottieRef={lottieRef}
            animationData={data}
            loop={false}
            autoplay={mode === 'playing'}
            onComplete={() => {
              // Ensure we stay on the last frame and transition to scrubbing seamlessly
              try {
                const total = Math.floor(lottieRef.current?.getDuration?.(true) || 0);
                if (total) lottieRef.current?.goToAndStop?.(total - 1, true);
              } catch {}
              setMode('scrub');
            }}
            className="h-full w-full"
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default HeroLottieBg;
