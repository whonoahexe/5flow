'use client';

import CtaPixelGrid from '@/components/core/cta-pixel-grid';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';

interface CtaProps {
  leftTitle: string;
  leftSubtitle: string;
  rightTitle: string;
  rightDesc: string;
  buttonText: string;
}

export function Cta({ leftTitle, leftSubtitle, rightTitle, rightDesc, buttonText }: CtaProps) {
  const pixelPattern = [
    ['background', 'accent1', 'background', 'background', 'background'],
    ['background', 'primary', 'accent1', 'background', 'success'],
    ['background', 'success', 'primary', 'warning', 'background'],
    ['accent1', 'primary', 'accent1', 'accent1', 'accent1'],
  ];

  return (
    <section className="relative w-full">
      {/* Pixel grid */}
      <div className="relative z-10 ml-[-40px] flex justify-start px-6 py-10 md:px-16">
        <CtaPixelGrid
          pattern={pixelPattern}
          pixelSize="128px"
          icon={{ row: 2, col: 1, element: <ArrowUp size={48} className="text-foreground" /> }}
        />
      </div>

      {/* Cta */}
      <div className="bg-accent1 relative z-0 mt-[-168px] flex min-h-[560px] w-full flex-col items-center justify-center px-6 pt-[200px] pb-[7.5rem] md:px-48">
        <div className="text-background relative flex w-full flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex w-full max-w-md flex-col gap-4">
            <b className="text-5xl tracking-tighter">{leftTitle}</b>
            <div className="flex items-center justify-between" onClick={() => alert('Arrow clicked!')}>
              <ArrowRight size={48} />
              <b className="text-5xl tracking-tighter">{leftSubtitle}</b>
            </div>
          </div>

          <div className="flex w-full flex-col items-end justify-center gap-4 lg:max-w-xl">
            <b className="text-5xl tracking-tighter">{rightTitle}</b>
            <div className="flex w-full flex-col items-end justify-end gap-4 sm:flex-row sm:items-center">
              <p className="w-full max-w-96 text-right tracking-tight">{rightDesc}</p>
              <Button variant="success" className="rounded-none" size="lg">
                {buttonText}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
