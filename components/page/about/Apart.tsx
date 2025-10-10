import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { ArrowDown, Award, BadgeCheck, ShieldCheck, TrendingUp } from 'lucide-react';
import type { NextPage } from 'next';

const Apart: NextPage = () => {
  const features = [
    {
      icon: BadgeCheck,
      title: 'Customer First',
      description:
        'We design around your needs, not ours. Every solution is built in partnership with the people who use it.',
    },
    {
      icon: Award,
      title: 'Strong & Experienced Team',
      description:
        'Decades of expertise in packaging, creative production, and workflow automation delivered by people who know how brands really work.',
    },
    {
      icon: TrendingUp,
      title: 'Flexibility at Scale',
      description:
        'One size never fits all. Our platforms adapt to your workflows, with the ability to customize, scale, and integrate seamlessly.',
    },
    {
      icon: ShieldCheck,
      title: 'Backed by Propelis',
      description:
        "As part of the Propelis Group, we're supported by the combined strength of global leaders SGK and SGS & Co.",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col gap-8">
        <FullBleedLines className="font-heading flex w-full gap-8 px-2">
          <b className="text-foreground text-6xl leading-none tracking-tighter">
            <span>What Sets</span>
            <br />
            <span>{`Us `}</span>
            <span>
              <InlineHighlight className="text-background">Apart?</InlineHighlight>
            </span>
          </b>
          <ArrowDown className="text-accent1 h-32 w-32" strokeWidth={1.5} />
        </FullBleedLines>

        <FullBleedLines className="flex w-full justify-between">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex flex-1 flex-col gap-4 px-8">
                <div className="flex flex-col gap-2 py-7">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <feature.icon className="text-primary h-5 w-5" strokeWidth={2} />
                  </div>
                  <b className="text-foreground relative text-2xl leading-relaxed tracking-tight">{feature.title}</b>
                </div>
                <div className="flex items-center px-0 py-7">
                  <p className="text-foreground text-base leading-relaxed tracking-tight">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </FullBleedLines>
      </div>
    </>
  );
};

export default Apart;
