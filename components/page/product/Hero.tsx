import FullBleedLines from '@/components/core/full-bleed-lines';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';

interface HeroProps {
  brandName: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt?: string;
}

export function Hero({
  brandName,
  logoSrc,
  logoAlt,
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  imageAlt = '',
}: HeroProps) {
  return (
    <>
      {/* Page header */}
      <div className="text-gray font-heading relative box-border w-full flex-col items-start gap-32 px-12 pt-52 text-left text-4xl lg:px-48">
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
          <div className="box-border flex h-20 items-start gap-1 overflow-hidden">
            <Image className="relative h-20 w-76" width={384} height={80} sizes="100vw" alt={logoAlt} src={logoSrc} />
          </div>
          <div className="font-heading flex flex-col items-start gap-4">
            <FullBleedLines>
              <div className="max-w-5xl">
                <b className="leading-none tracking-tighter">{title}</b>
              </div>
            </FullBleedLines>
            <div className="text-primary text-5xl leading-none tracking-tighter">
              <FullBleedLines>{subtitle}</FullBleedLines>
            </div>
          </div>
          <div className="font-body relative inline-block w-[642px] text-base leading-[150%] tracking-[-0.04em]">
            <FullBleedLines>{description}</FullBleedLines>
          </div>
          <FullBleedLines>
            <div className="flex gap-8">
              <Button variant="default" size="lg" className="rounded-none">
                {buttonText}
              </Button>
              <div className="bg-primary flex h-10 w-10 items-center justify-center">
                <MoveUpRight className="text-background" />
              </div>
            </div>
          </FullBleedLines>
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
