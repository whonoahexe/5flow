import type { ComponentType, SVGProps } from 'react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';

interface Item {
  title: string;
  desc: string;
  sub: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  buttonText?: string;
}

interface ChallengesProps {
  items: Item[];
}

const Challenges = ({ items = [] }: ChallengesProps) => {
  return (
    <div className="flex w-full flex-col gap-16 text-center">
      <FullBleedLines className="font-heading mx-auto w-full max-w-lg">
        <b className="text-6xl leading-none tracking-tighter">
          <span>{`Your `}</span> <InlineHighlight>Challenges,</InlineHighlight>
          Our <InlineHighlight>Solutions</InlineHighlight>
        </b>
      </FullBleedLines>

      <FullBleedLines>
        <div className="grid grid-cols-2 gap-2 p-2">
          {items.map((card, i) => (
            <div
              key={i}
              className={`bg-background flex flex-col justify-between rounded-2xl p-2 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)] ${
                items.length === 5 && i === items.length - 1 ? 'col-span-2' : ''
              }`}
            >
              <div className="flex w-full items-start justify-between p-8">
                <p className="text-4xl font-bold tracking-tight">{card.title}</p>
                {card.icon && <card.icon className="text-primary h-18 w-18" strokeWidth={1.5} />}
              </div>
              <div
                className={
                  items.length === 5 && i === items.length - 1
                    ? 'flex w-full items-end justify-between p-8'
                    : 'w-full p-8'
                }
              >
                <div>
                  <p className="w-full max-w-96 text-left text-2xl font-bold tracking-tight">{card.desc}</p>
                  <p className="pt-2 text-left tracking-tighter">{card.sub}</p>
                </div>
                <div
                  className={`justify-left flex ${
                    items.length === 5 && i === items.length - 1 ? 'w-full justify-end' : ''
                  }`}
                >
                  <Button
                    size="sm"
                    className="group/cta-hero active:ring-primary/50 active:ring-offset-background mt-6 inline-flex w-fit origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
                  >
                    <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                      {card.buttonText || 'Learn More'}
                    </span>
                    <span
                      className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 w-10 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)]"
                      aria-hidden="true"
                    >
                      <MoveUpRight className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Challenges;
