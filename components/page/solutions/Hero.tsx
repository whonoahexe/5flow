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
    <div className="relative mt-32 w-full flex-col px-4 sm:px-6 md:px-0">
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-14">
        {/* Product heading */}
        <div className="font-heading flex flex-1 text-center sm:text-left">
          <b className="max-w-full text-4xl leading-tight tracking-tighter sm:max-w-2xl sm:text-8xl sm:leading-none">
            {title}
          </b>
        </div>

        {/* Product details */}
        <div className="flex h-auto flex-1 flex-col items-center justify-between gap-8 text-center sm:items-start sm:gap-16 sm:text-left">
          <p className="text-primary font-heading text-2xl leading-tight tracking-tighter sm:text-5xl sm:leading-none">
            {subtitle}
          </p>

          <div className="flex flex-col items-center gap-6 sm:items-start sm:gap-8">
            <p className="relative text-sm leading-[150%] tracking-tight sm:text-base">{description}</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex w-fit origin-left items-center justify-center gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
              >
                <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                  {`Let’s Talk Transformation`}
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
      <FullBleedLines className="bg-foreground/5 mt-8 p-2 sm:mt-16">
        <Image
          className="relative w-full rounded-[10px] sm:rounded-[20px]"
          width={1520}
          height={480}
          alt={imageAlt}
          src={imageSrc}
        />
      </FullBleedLines>
    </div>
  );
};

export default Hero;
