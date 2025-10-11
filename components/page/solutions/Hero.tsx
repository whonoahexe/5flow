import FullBleedLines from '@/components/core/full-bleed-lines';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

interface HeroProps {
  brandName: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink?: string; // added
  imageSrc: string;
  imageAlt?: string;
}

export function Hero({
  brandName,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink = '/', // default
  imageSrc,
  imageAlt = '',
}: HeroProps) {
  return (
    <>
      {/* Page header */}
      <div className="text-gray font-heading relative box-border w-full flex-col items-start gap-32 pt-52 text-left text-4xl">
        <FullBleedLines>
          <div className="font-heading relative flex w-full items-end justify-end text-right text-5xl">
            <div className="flex items-center gap-6">
              <b className="text-foreground leading-none tracking-tight">{brandName}</b>
              <div className="bg-primary h-10 w-10" />
            </div>
          </div>
        </FullBleedLines>

        {/* Content */}
        <div className="text-gray font-body relative mt-32 box-border flex w-full flex-col items-start gap-14 px-2 py-0 text-left text-8xl">
          <div className="text-gray font-century-gothic relative flex w-full items-start gap-[60px] text-left text-8xl">
            <b className="relative inline-block h-96 flex-1 leading-[100%] tracking-[-0.06em]">{title}</b>
            <div className="relative max-h-full w-4 max-w-full self-stretch overflow-hidden" aria-hidden="true" />
            <div className="text-darkblue flex flex-1 flex-col items-start justify-between gap-4 self-stretch text-5xl">
              <div className="relative self-stretch leading-[100%] tracking-[-0.06em]">{subtitle}</div>
              <div className="text-gray font-metropolis flex flex-col items-start gap-8 text-base">
                <div className="relative inline-block w-[642px] leading-[150%] tracking-[-0.04em]">{description}</div>
                <Link href={buttonLink} className="flex">
                  <Button
                    size="lg"
                    className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
                  >
                    <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                      {buttonText}
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
          <div className="bg-foreground/5 flex flex-col items-center justify-center self-stretch overflow-hidden p-2">
            <Image
              className="relative w-full max-w-full shrink-0 self-stretch overflow-hidden rounded-[20px] object-contain"
              width={1520}
              height={480}
              sizes="100vw"
              alt={imageAlt}
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </>
  );
}
