'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownLeft, ArrowUpRight, BadgeCheck } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';

interface HowFeature {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

interface HowProps {
  howData: HowFeature[];
}

const How = ({ howData }: HowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  // Compute active section on scroll/resize using rAF for smoothness
  useLayoutEffect(() => {
    let frame: number | null = null;
    const initialized = { current: false } as { current: boolean };

    const computeActive = () => {
      const viewportCenter = window.innerHeight / 2;
      const bandHalf = Math.max(1, window.innerHeight * 0.12); // ~24% band height total

      let closestIdx = 0;
      let closestDist = Number.POSITIVE_INFINITY;
      let inBandIdx: number | null = null;
      let inBandDist = Number.POSITIVE_INFINITY;

      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);

        // Track absolute closest regardless of band
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }

        // If within the center band, consider it eligible
        if (dist <= bandHalf) {
          if (dist < inBandDist) {
            inBandDist = dist;
            inBandIdx = i;
          }
        }
      });

      // Prefer an index that is currently inside the center band
      if (inBandIdx !== null) {
        initialized.current = true;
        setActiveIndex(prev => (prev === inBandIdx! ? prev : inBandIdx!));
        return;
      }

      // On first run, if nothing is yet in band, fall back to closest
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

    // Compute once after refs are likely set and layout is stable
    const init = requestAnimationFrame(computeActive);

    return () => {
      if (frame != null) cancelAnimationFrame(frame);
      cancelAnimationFrame(init);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [howData.length]);

  return (
    <div className="font-heading relative flex w-full flex-col gap-14 overflow-x-hidden">
      <div className="bg-background/70 supports-[backdrop-filter]:bg-background/60 sticky top-22 z-20 px-6 backdrop-blur md:px-0">
        <FullBleedLines className="flex w-full justify-between">
          <div className="relative h-24 w-full max-w-xs sm:h-32 sm:max-w-sm">
            <b className="font-heading text-4xl leading-none tracking-tighter sm:text-6xl">
              <InlineHighlight className="text-background">How</InlineHighlight>
              <span className="text-foreground">
                Does<span className="block sm:inline"> it Work?</span>
              </span>
            </b>
          </div>
          <ArrowDownLeft size={80} className="text-accent1 sm:size-[126px]" strokeWidth={1.5} />
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
              className="flex min-h-[50vh] w-full flex-col justify-center gap-4 px-4 sm:min-h-[65vh] sm:px-6 lg:min-h-[70vh] lg:pr-0"
            >
              <div className="flex items-center gap-4 p-4 sm:gap-6 sm:p-6">
                <BadgeCheck className="text-foreground h-12 w-12 sm:h-18 sm:w-18" strokeWidth={1.5} />
                <div className="flex flex-col gap-2">
                  <b className="relative text-2xl leading-none tracking-tight sm:text-4xl">{feature.title}</b>
                  <p className="relative text-lg leading-none tracking-tight sm:text-xl">{feature.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 text-lg sm:gap-6 sm:p-6 sm:text-xl">
                <p className="relative leading-snug tracking-tight">{feature.description}</p>
                <div>
                  <Button
                    asChild
                    className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2 has-[>svg]:px-0"
                  >
                    <Link href="/" aria-label="Book a demo">
                      <span className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 inline-flex h-9 items-center px-3 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-2 sm:px-4 sm:group-hover/cta:px-3">
                        {feature.buttonText}
                      </span>
                      <span
                        className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 ml-0 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:ml-1 sm:group-hover/cta:ml-2"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          ))}
        </div>

        <aside className="relative -my-20 hidden sm:-my-40 lg:block">
          <div className="sticky top-0 flex h-screen items-center justify-center">
            <div className="bg-muted relative aspect-[16/9] w-[min(90%,42rem)] overflow-hidden rounded-2xl">
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
