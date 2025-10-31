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
    <div className="font-heading relative flex w-full flex-col gap-14">
      <FullBleedLines className="flex w-full justify-between">
        <div className="relative h-32 w-full max-w-2xl">
          <b className="font-heading text-6xl leading-none tracking-tighter">
            <InlineHighlight className="text-background">Why</InlineHighlight>
            <span className="text-foreground"> You Need {headingTopic}?</span>
          </b>
        </div>
        <ArrowDownLeft size={126} className="text-accent1" strokeWidth={1.5} />
      </FullBleedLines>

      <FullBleedLines>
        <div className="grid grid-cols-2 gap-2 p-2">
          {whyData.map((card, i) => (
            <div
              key={i}
              className="bg-background border-border flex flex-col justify-between rounded-2xl border p-2 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)]"
            >
              <div className="flex w-full items-start justify-between p-8">
                <p className="text-4xl font-bold tracking-tight">{card.title}</p>
                {card.icon && <card.icon className="text-primary h-18 w-18" strokeWidth={1.5} />}
              </div>
              <div className="w-full max-w-xl p-8">
                <p className="w-full max-w-96 text-xl font-bold tracking-tight">{card.subtitle}</p>
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
