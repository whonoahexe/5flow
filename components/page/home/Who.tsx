'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const clients = [
  'gropper.webp',
  'lanxess.webp',
  'ludwig-schokolade.webp',
  'maurer-and-wirtz.webp',
  'vitakraft.webp',
  'Anheuser_Busch.webp',
  'loreal.webp',
  'Mondelez_internationa.webp',
  'Albertsons.webp',
  'Chick-fil-A_Logo.webp',
  'LVMH-black.webp',
  'Purina.webp',
  'Kroger.webp',
  'Renault.webp',
];

const Who = () => {
  const logosRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = logosRef.current;
    if (!el) return;

    const amount = direction === 'left' ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="flex w-full flex-col gap-4 md:gap-8">
      <FullBleedLines className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-8 px-4 sm:px-8">
          <ArrowDown className="text-accent1 hidden h-16 w-16 sm:h-24 sm:w-24 md:block md:h-32 md:w-32" aria-hidden />
          <p className="font-heading w-full text-center text-4xl leading-none font-bold tracking-tight md:text-left md:text-[64px]">
            <InlineHighlight>Who</InlineHighlight> Do We Solve It For?
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 self-stretch px-2 sm:gap-8 sm:px-2">
          <Button
            className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6 sm:size-20"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll left"
          >
            <ArrowLeft className="size-7 sm:size-8" />
          </Button>
          <Button
            className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6 sm:size-20"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll right"
          >
            <ArrowRight className="size-7 sm:size-8" />
          </Button>
        </div>
      </FullBleedLines>

      <FullBleedLines>
        <div ref={logosRef} className="bg-background scrollbar-none flex gap-2 overflow-x-auto p-2">
          {clients.map((item, i) => (
            <div
              className="bg-background flex h-32 min-w-[180px] flex-col items-center justify-center rounded-2xl p-2 sm:min-w-[220px] md:h-38 md:min-w-lg"
              key={i}
            >
              <div className="flex w-full items-center justify-center p-8">
                <Image src={`/home/${item}`} alt="Client Logo" width={150} height={75} />
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Who;
