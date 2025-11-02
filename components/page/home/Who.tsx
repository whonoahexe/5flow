'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const clients = ['gropper.webp', 'lanxess.webp', 'ludwig-schokolade.webp', 'maurer-and-wirtz.webp', 'vitakraft.webp'];

const Who = () => {
  const logosRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = logosRef.current;
    if (!el) return;

    const amount = direction === 'left' ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <FullBleedLines className="flex justify-between">
        <div className="flex items-center gap-8 px-4 sm:px-8">
          {/* Make the arrow responsive via width/height classes instead of fixed size prop */}
          <ArrowDown className="text-accent1 h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32" aria-hidden />
          <p className="font-heading w-full text-2xl leading-none font-bold tracking-tight sm:text-4xl md:text-[64px]">
            <InlineHighlight>Who</InlineHighlight> Do We Solve It For?
          </p>
        </div>

        {/* Controls: stack on small screens and reduce size */}
        <div className="flex items-center justify-center gap-3 self-stretch px-2 sm:gap-8 sm:px-2">
          <Button
            className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none px-2 py-2 transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.96] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6 sm:size-20 sm:px-4 sm:py-2"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll left"
          >
            <ArrowLeft size={28} className="sm:size-8" />
          </Button>
          <Button
            className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none px-2 py-2 transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.96] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6 sm:size-20 sm:px-4 sm:py-2"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll right"
          >
            <ArrowRight size={28} className="sm:size-8" />
          </Button>
        </div>
      </FullBleedLines>

      <FullBleedLines>
        <div ref={logosRef} className="bg-background scrollbar-none flex gap-2 overflow-x-auto p-2">
          {clients.map((item, i) => (
            <div
              className="bg-background flex h-24 min-w-[140px] flex-col items-center justify-start rounded-2xl p-2 sm:h-32 sm:min-w-[220px] md:h-38 md:min-w-lg"
              key={i}
            >
              <div className="flex w-full items-center justify-center p-4 sm:p-8">
                {/* use sizes so Next/Image serves smaller images on mobile; keep intrinsic aspect ratio */}
                <Image
                  src={`/home/${item}`}
                  alt="Client Logo"
                  width={150}
                  height={75}
                  sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 200px"
                />
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Who;
