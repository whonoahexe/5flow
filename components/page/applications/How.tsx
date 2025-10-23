'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDownLeft, BadgeCheck } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

interface HowFeature {
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  imageSrc: string;
}

interface HowProps {
  howData: HowFeature[];
}

const How = ({ howData }: HowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useLayoutEffect(() => {
    let frame: number | null = null;
    const initialized = { current: false } as { current: boolean };

    const computeActive = () => {
      const viewportCenter = window.innerHeight / 2;
      const bandHalf = Math.max(1, window.innerHeight * 0.12); // ~24% band

      let closestIdx = 0;
      let closestDist = Number.POSITIVE_INFINITY;
      let inBandIdx: number | null = null;
      let inBandDist = Number.POSITIVE_INFINITY;

      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);

        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }

        if (dist <= bandHalf) {
          if (dist < inBandDist) {
            inBandDist = dist;
            inBandIdx = i;
          }
        }
      });

      if (inBandIdx !== null) {
        initialized.current = true;
        setActiveIndex(prev => (prev === inBandIdx! ? prev : inBandIdx!));
        return;
      }

      if (!initialized.current) {
        initialized.current = true;
        setActiveIndex(prev => (prev === closestIdx ? prev : closestIdx));
      }
    };

    const onScroll = () => {
      if (frame != null) return;
      frame = requestAnimationFrame(() => {
        computeActive();
        frame = null;
      });
    };

    const onResize = () => {
      if (frame != null) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        computeActive();
        frame = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    const init = requestAnimationFrame(computeActive);

    return () => {
      if (frame != null) cancelAnimationFrame(frame);
      cancelAnimationFrame(init);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [howData.length]);

  return (
    <div className="font-heading relative flex w-full flex-col gap-14">
      <div className="bg-background/70 supports-[backdrop-filter]:bg-background/60 sticky top-22 z-20 backdrop-blur">
        <FullBleedLines className="flex w-full justify-between">
          <div className="relative h-32 w-full max-w-sm">
            <b className="font-heading text-6xl leading-none tracking-tighter">
              <InlineHighlight className="text-background">How</InlineHighlight>
              <span className="text-foreground"> Does it Work?</span>
            </b>
          </div>
          <ArrowDownLeft size={126} className="text-accent1" strokeWidth={1.5} />
        </FullBleedLines>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col">
          {howData.map((feature, index) => (
            <section
              key={index}
              ref={el => {
                sectionRefs.current[index] = el;
              }}
              data-index={index}
              className="flex min-h-[65vh] w-full flex-col justify-center gap-4 px-2 py-12 lg:min-h-[70vh] lg:pr-0"
            >
              <div className="flex items-center gap-6 p-6">
                <BadgeCheck className="text-foreground h-18 w-18" strokeWidth={1.5} />
                <div className="flex flex-col gap-2">
                  <b className="relative text-4xl leading-none tracking-tight">{feature.title}</b>
                  {feature.subtitle && (
                    <p className="relative text-xl leading-none tracking-tight">{feature.subtitle}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-6 p-6 text-xl">
                <p className="relative leading-snug tracking-tight">{feature.description}</p>
              </div>
            </section>
          ))}
        </div>

        <aside className="relative -my-40 hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center justify-center">
            <div className="bg-muted relative aspect-[16/9] w-[min(42rem,90%)] overflow-hidden rounded-2xl">
              {howData[activeIndex] && (
                <Image
                  key={activeIndex}
                  className="h-full w-full object-cover"
                  fill
                  sizes="(min-width: 1024px) 42rem, 100vw"
                  alt=""
                  src={howData[activeIndex].imageSrc}
                  priority={activeIndex === 0}
                />
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default How;
