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
        <div className="flex items-center gap-8 px-8">
          <ArrowDown className="text-accent1" size={126} />
          <p className="font-heading w-full text-[64px] leading-none font-bold tracking-tight">
            <InlineHighlight>Who</InlineHighlight> Do We Solve It For?
          </p>
        </div>
        <div className="flex items-center justify-center gap-8 self-stretch px-2">
          <Button
            className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-20 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll left"
          >
            <ArrowLeft size={48} className="size-8" />
          </Button>
          <Button
            className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-20 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll right"
          >
            <ArrowRight size={48} className="size-8" />
          </Button>
        </div>
      </FullBleedLines>

      <FullBleedLines>
        <div ref={logosRef} className="bg-foreground/5 flex gap-2 overflow-x-auto p-2">
          {clients.map((item, i) => (
            <div
              className="bg-background border-border flex h-38 min-w-lg flex-col items-center justify-start rounded-2xl border p-2"
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
