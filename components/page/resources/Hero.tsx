import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  buttonLabel?: string; // added
}

const Hero = ({ title, subtitle, imageSrc, imageAlt = '', buttonLabel }: HeroProps) => {
  return (
    <div className="relative mt-32 w-full flex-col">
      <div className="flex w-full gap-14">
        {/* Product headling */}
        <div className="font-heading flex flex-1 flex-col">
          <b className="max-w-6xl text-8xl leading-none tracking-tighter">{title}</b>
          <p className="text-primary font-heading mt-6 max-w-5xl text-5xl leading-none tracking-tighter">{subtitle}</p>
        </div>

        {/* Product details */}
        <div className="relative flex h-auto flex-col items-end justify-end">
          <Link href="/contact">
            <Button
              size="lg"
              className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex w-fit origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
            >
              <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                {buttonLabel ?? `See What’s Possible`}
              </span>
              <span
                className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 w-10 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)]"
                aria-hidden="true"
              >
                <MoveUpRight className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
