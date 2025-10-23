'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CtaPixelGrid from '@/components/core/cta-pixel-grid';

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
              <Button
                asChild
                className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2 has-[>svg]:px-0"
              >
                <Link href="/contact" aria-label="Book a demo">
                  <span className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-3">
                    {buttonText}
                  </span>
                  <span
                    className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 ml-0 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:ml-2"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
