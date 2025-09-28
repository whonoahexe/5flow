'use client';

import { useRef } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, Layers2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

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
            className="bg-primary size-20 rounded-none"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll left"
          >
            <ArrowLeft size={48} className="size-8" />
          </Button>
          <Button
            className="bg-primary size-20 rounded-none"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll right"
          >
            <ArrowRight size={48} className="size-8" />
          </Button>
        </div>
      </FullBleedLines>

      <FullBleedLines>
        <div ref={logosRef} className="bg-foreground/5 flex gap-2 overflow-x-auto p-2">
          {[{ label: 'Logo !' }, { label: 'Logo @' }, { label: 'Logo #' }].map((item, i) => (
            <div
              className="bg-background border-border flex h-38 min-w-2xl flex-col items-center justify-start rounded-2xl border p-2"
              key={i}
            >
              <div className="flex w-full items-center justify-between p-8">
                <p className="relative text-4xl leading-none font-bold tracking-tight">{item.label}</p>
                <Layers2 strokeWidth={1.5} className="text-primary" size={72} />
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Who;
