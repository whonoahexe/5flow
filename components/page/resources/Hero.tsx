import React from 'react';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonLabel?: string;
}

const Hero = ({ title, subtitle, buttonLabel = "See What's Possible" }: HeroProps) => {
  return (
    <div className="relative mt-32 w-full flex-col">
      {/* Product headling */}
      <div className="font-heading mt-14 flex flex-col gap-14">
        <FullBleedLines>
          <div className="max-w-5xl">
            <b className="text-8xl leading-none tracking-tighter">{title}</b>
          </div>
        </FullBleedLines>

        <FullBleedLines className="flex items-end justify-between">
          <div className="text-primary max-w-5xl text-5xl leading-none tracking-tighter">
            <FullBleedLines>{subtitle}</FullBleedLines>
          </div>
          <Link href="/contact">
            <Button
              size="lg"
              className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
            >
              <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                {buttonLabel}
              </span>
              <span
                className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 w-10 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)]"
                aria-hidden="true"
              >
                <MoveUpRight className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </FullBleedLines>
      </div>
    </div>
  );
};

export default Hero;
