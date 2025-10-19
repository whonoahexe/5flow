import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import type { ComponentType, SVGProps } from 'react';

type BenefitItem = {
  id?: string;
  title: string;
  desc: string;
  sub: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

type BenefitsProps = {
  items?: BenefitItem[];
  options?: {
    buttonText?: string;
  };
  highlightedText?: string;
};

const Benefits = ({ items = [], highlightedText }: BenefitsProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-16 text-center">
      <FullBleedLines className="font-heading mx-auto w-full max-w-2xl">
        <b className="text-6xl leading-none tracking-tighter">
          <span>{`Benefits for `}</span> <InlineHighlight>{highlightedText}</InlineHighlight>
        </b>
      </FullBleedLines>

      <FullBleedLines className="w-full">
        <div className="bg-foreground/5 grid grid-cols-2 gap-2 p-2">
          {items.map((card, i) => (
            <div key={i} className="bg-background border-border flex flex-col justify-between rounded-2xl border p-2">
              <div className="flex w-full items-start justify-between p-8">
                <p className="text-4xl font-bold tracking-tight">{card.title}</p>
                {card.icon && <card.icon className="text-primary h-18 w-18" strokeWidth={1.5} />}
              </div>
              <div className="w-full max-w-xl p-8">
                <p className="w-full max-w-96 text-left text-xl font-bold tracking-tight">{card.desc}</p>
                <p className="pt-2 text-left tracking-tighter">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Benefits;
