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
    <div className="flex w-full flex-col items-start gap-14 text-center">
      <FullBleedLines className="font-heading flex w-full justify-center">
        <b className="text-foreground text-6xl leading-none tracking-tighter">
          <span>{`Benefits for`}</span>
          <span className="block h-1.5 md:h-1.5" aria-hidden="true" />
          <InlineHighlight className="text-background">{highlightedText}</InlineHighlight>
        </b>
      </FullBleedLines>

      <FullBleedLines className="bg-foreground/5 grid w-full flex-1 grid-cols-2 gap-2 p-2">
        {items.map((card, i) => (
          <div key={card.id ?? i} className="bg-background border-border flex w-full flex-col rounded-2xl border p-2">
            <div className="flex w-full justify-between p-8">
              <b className="text-4xl tracking-tight">{card.title}</b>
              {card.icon && <card.icon className="text-primary" width={72} height={72} strokeWidth={1.5} />}
            </div>
            <div className="w-full max-w-xl p-8 text-left">
              <b className="w-full max-w-96 text-2xl tracking-tight">{card.desc}</b>
              <p className="pt-2 text-xl tracking-tighter">{card.sub}</p>
            </div>
          </div>
        ))}
      </FullBleedLines>
    </div>
  );
};

export default Benefits;
