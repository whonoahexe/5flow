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
  sectionTitle: React.ReactNode;
  whyData: WhyCard[];
}

const Why = ({ sectionTitle, whyData }: WhyProps) => {
  return (
    <div className="font-heading flex w-full flex-col gap-8">
      <FullBleedLines className="flex flex-1 justify-between">
        <div className="relative h-32 w-full max-w-lg">
          <b className="font-heading text-6xl leading-none tracking-tighter">{sectionTitle}</b>
        </div>
        <ArrowDownLeft size={126} className="text-accent1" strokeWidth={1.5} />
      </FullBleedLines>

      <FullBleedLines className="bg-foreground/5 grid flex-1 grid-cols-2 gap-2 p-2">
        {whyData.map((card, i) => (
          <div key={i} className="bg-background border-border flex flex-col justify-between rounded-2xl border p-2">
            <div className="flex w-full justify-between p-8">
              <b className="text-4xl tracking-tight">{card.title}</b>
              {card.icon && <card.icon className="text-primary" size={72} strokeWidth={1.5} />}
            </div>
            <div className="w-full max-w-xl p-8">
              <b className="w-full max-w-96 text-2xl tracking-tight">{card.desc}</b>
              <p className="pt-2 text-xl tracking-tighter">{card.sub}</p>
            </div>
          </div>
        ))}
      </FullBleedLines>
    </div>
  );
};

export default Why;
