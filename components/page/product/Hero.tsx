import React from 'react';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageAlt?: string;
}

const Hero = ({ logoSrc, logoAlt, title, subtitle, description, imageSrc, imageWidth, imageAlt = '' }: HeroProps) => {
  return (
    <div className="relative mt-32 w-full flex-col">
      {/* Product logo */}
      <FullBleedLines className="flex h-20">
        <Image className="relative h-20" width={imageWidth} height={80} alt={logoAlt} src={logoSrc} />
      </FullBleedLines>

      {/* Product headling */}
      <div className="font-heading mt-14 flex flex-col gap-4">
        <FullBleedLines>
          <div className="max-w-5xl">
            <b className="text-8xl leading-none tracking-tighter">{title}</b>
          </div>
        </FullBleedLines>
        <div className="text-primary text-5xl leading-none tracking-tighter">
          <FullBleedLines>{subtitle}</FullBleedLines>
        </div>
      </div>

      {/* Product details */}
      <div className="relative mt-14 w-[642px] text-base leading-[150%] tracking-tight">
        <FullBleedLines>{description}</FullBleedLines>
      </div>

      <FullBleedLines className="mt-14">
        <Link href="/contact">
          <Button
            size="lg"
            className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
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
      </FullBleedLines>

      {/* Product image */}
      <FullBleedLines className="bg-foreground/5 mt-16 p-2">
        <Image className="relative w-full rounded-[20px]" width={1520} height={480} alt={imageAlt} src={imageSrc} />
      </FullBleedLines>
    </div>
  );
};

export default Hero;
