import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

const Hero = ({ title, subtitle, description, imageSrc, imageAlt = '' }: HeroProps) => {
  return (
    <div className="relative mt-32 w-full flex-col">
      <div className="flex w-full gap-14">
        {/* Product headling */}
        <div className="font-heading flex flex-1">
          <b className="max-w-2xl text-8xl leading-none tracking-tighter">{title}</b>
        </div>

        {/* Product details */}
        <div className="flex h-auto flex-1 flex-col justify-between gap-16">
          <p className="text-primary font-heading text-5xl leading-none tracking-tighter">{subtitle}</p>

          <div className="flex flex-col gap-8">
            <p className="relative text-base leading-[150%] tracking-tight">{description}</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex w-fit origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
              >
                <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                  {`See What’s Possible`}
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

      {/* Product image */}
      <FullBleedLines className="bg-foreground/5 mt-16 p-2">
        <Image className="relative w-full rounded-[20px]" width={1520} height={480} alt={imageAlt} src={imageSrc} />
      </FullBleedLines>
    </div>
  );
};

export default Hero;
