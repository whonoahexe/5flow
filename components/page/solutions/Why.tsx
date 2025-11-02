import { ArrowDownLeft, ArrowUpRight, BadgeCheck } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface WhyFeature {
  title: string;
  subtitle: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heading?: string;
}

interface WhyProps {
  whyData: WhyFeature[];
}

const Why = ({ whyData }: WhyProps) => {
  const headingTopic = whyData?.[0]?.heading ?? 'Artwork Management';

  return (
    <div className="font-heading relative flex w-full flex-col gap-10 px-4 sm:gap-14 sm:px-6 md:px-0">
      <FullBleedLines className="flex flex-col items-center justify-between sm:flex-row">
        <div className="relative h-auto w-full max-w-full text-center sm:h-32 sm:max-w-2xl sm:text-left">
          <b className="font-heading text-4xl leading-tight tracking-tighter sm:text-6xl sm:leading-none">
            <InlineHighlight className="text-background">Why</InlineHighlight>
            <span className="text-foreground"> You Need {headingTopic}?</span>
          </b>
        </div>
        <ArrowDownLeft size={64} className="text-accent1 mt-4 sm:mt-0 sm:size-[126px]" strokeWidth={1.5} />
      </FullBleedLines>

      <FullBleedLines>
        <div className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 sm:gap-2">
          {whyData.map((card, i) => (
            <div
              key={i}
              className="bg-background border-border flex flex-col items-center justify-between rounded-2xl border p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)] sm:items-start sm:p-2"
            >
              <div className="flex flex-col items-center gap-4 p-4 text-center sm:flex-row sm:items-start sm:justify-between sm:p-8 sm:text-left">
                <p className="text-2xl font-bold tracking-tight sm:text-4xl">{card.title}</p>
                {card.icon && <card.icon className="text-primary h-12 w-12 sm:h-18 sm:w-18" strokeWidth={1.5} />}
              </div>
              <div className="flex flex-col items-center gap-4 p-4 text-center sm:items-start sm:p-8 sm:text-left">
                <p className="w-full text-lg font-bold tracking-tight sm:max-w-96 sm:text-xl">{card.subtitle}</p>
                <p className="pt-2 tracking-tighter">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Why;
