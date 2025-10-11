import { ArrowDownLeft } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

interface WhyCard {
  title: string;
  desc: string;
  sub: string;
  icon: React.ElementType;
}

interface WhyProps {
  whyData: WhyCard[];
}

const Why = ({ whyData }: WhyProps) => {
  return (
    <div className="text-gray font-heading box-border items-start gap-2 text-left">
      <FullBleedLines className="flex w-full justify-between">
        <p className="font-heading w-full max-w-4xl text-6xl leading-none font-bold tracking-tight">
          <InlineHighlight>Why</InlineHighlight> do we <br /> Solve ?
        </p>
        <ArrowDownLeft strokeWidth={1.5} className="text-accent1 h-32 w-32" />
      </FullBleedLines>

      <div className="bg-foreground/5 mt-10 grid grid-cols-2 gap-2 p-2">
        {whyData.map((card, i) => (
          <div key={i} className="bg-background border-border flex flex-col justify-between rounded-2xl border p-2">
            <div className="flex w-full items-start justify-between p-8">
              <p className="text-4xl font-bold tracking-tight">{card.title}</p>
              {card.icon && <card.icon className="text-primary" size={72} strokeWidth={1.5} />}
            </div>
            <div className="w-full max-w-xl p-8">
              <div className="w-full max-w-96 text-xl font-bold tracking-tight">{card.desc}</div>
              <div className="pt-2 tracking-tighter">{card.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
