import { ArrowDownLeft, ArrowUpRight, BadgeCheck } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

interface HowFeature {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  heading?: string; // optional heading for this feature (used for top heading)
}

interface HowProps {
  howData: HowFeature[];
}

const How = ({ howData }: HowProps) => {
  const headingTopic = howData?.[0]?.heading ?? 'Artwork Management'; // dynamic part
  return (
    <div className="text-gray font-heading relative box-border flex w-full flex-col items-start gap-5 text-left">
      <FullBleedLines className="flex w-full justify-between">
        <p className="font-heading w-full max-w-4xl text-6xl leading-none font-bold tracking-tight">
          <InlineHighlight>How</InlineHighlight> {headingTopic} <br /> Work ?
        </p>
        <ArrowDownLeft strokeWidth={1.5} className="text-accent1 h-32 w-32" />
      </FullBleedLines>

      {howData.map((feature, index) => (
        <div key={index} className="flex items-start gap-2 self-stretch bg-white p-2">
          <div className="text-gray font-century-gothic relative box-border flex w-full items-start justify-between gap-0 rounded-xl border border-gray-200 bg-white p-2 text-left text-4xl">
            <div className="flex w-full max-w-3xl flex-col items-start justify-center self-stretch">
              <div className="flex items-center gap-6 self-stretch p-6">
                <BadgeCheck className="text-foreground h-18 w-18" strokeWidth={1.5} />
                <div className="flex flex-col items-start justify-center gap-2">
                  <b className="relative leading-none tracking-tight">{feature.title}</b>
                  <div className="relative text-xl leading-tight tracking-tight">{feature.subtitle}</div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 self-stretch p-6 text-xl">
                <div className="relative self-stretch leading-tight tracking-tight">{feature.description}</div>
                <div className="flex w-full justify-start">
                  <Button variant="success" size="lg" className="rounded-none font-semibold tracking-tight">
                    {feature.buttonText}
                    <ArrowUpRight />
                  </Button>
                </div>
              </div>
            </div>
            <Image
              className="h-96 max-w-full flex-1 overflow-hidden rounded-2xl object-cover"
              width={752}
              height={400}
              sizes="100vw"
              alt=""
              src={feature.imageSrc}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default How;
