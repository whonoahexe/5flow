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
    <div className="py-16">
      <FullBleedLines>
        <div className="text-gray font-heading relative box-border flex w-full flex-col items-start gap-32 px-48 text-left">
          <div className="text-gray relative flex w-full flex-col items-start gap-8 text-left text-6xl">
            <div className="box-border flex w-full flex-row items-start gap-8 px-2 text-left">
              <div className="flex h-32">
                <b className="top-0 left-0 inline-block leading-none tracking-tighter">
                  <span>{`What Sets`}</span>
                  <br />
                  <span>{`Us `}</span>
                  <span className="text-white">
                    <InlineHighlight>Apart?</InlineHighlight>
                  </span>
                </b>
              </div>
              <ArrowDown className="text-accent1 h-32 w-32" strokeWidth={2} />
            </div>

            <div className="flex items-start justify-between gap-0 self-stretch text-2xl">
              {features.map((feature, index) => {
                return (
                  <div key={index} className="flex flex-1 flex-col items-start gap-4 self-stretch px-8 py-0">
                    <div className="flex flex-col items-start justify-center gap-2 py-7">
                      <div className="bg-primary/10 box-border flex min-h-10 min-w-10 items-center justify-center rounded-lg">
                        <feature.icon className="text-primary h-5 w-5" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col items-start">
                        <b className="relative text-2xl leading-relaxed tracking-tight">{feature.title}</b>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center self-stretch px-0 py-7 text-base">
                      <div className="relative self-stretch leading-relaxed font-medium tracking-tight">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Apart;
