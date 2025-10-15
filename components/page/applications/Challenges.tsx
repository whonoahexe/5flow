import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

// removed the internal items array and accept items via props
type Item = {
  id: string;
  title: string;
  lead: string;
  body: string;
  // lucide icon component
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  // optional per-item button text
  buttonText?: string;
};

// added prop typing and default via options object
type ChallengesProps = {
  items: Item[];
};

const Challenges = ({ items = [] }: ChallengesProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-14 text-center">
      <FullBleedLines className="font-heading flex w-full justify-center">
        <b className="text-foreground text-6xl leading-none tracking-tighter">
          <span>{`Your `}</span> <InlineHighlight className="text-background">Challenges,</InlineHighlight>
          {/* spacer added for extra vertical gap between the two lines */}
          <span className="block h-1.5 md:h-1.5" aria-hidden="true" />
          Our <InlineHighlight className="text-background">Solutions</InlineHighlight>
        </b>
      </FullBleedLines>

      <div className="bg-foreground/5 text-gray font-heading relative box-border flex w-full flex-col items-start gap-1 overflow-hidden p-2 text-left">
        <div className="grid grid-cols-1 gap-2 self-stretch md:grid-cols-2">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const spanClass = idx === items.length - 1 ? 'md:col-span-2' : '';
            return (
              <article
                key={item.id}
                className={`border-gainsboro text-gray font-century-gothic relative box-border w-full flex-col items-start overflow-hidden rounded-2xl border bg-white p-4 ${spanClass}`}
              >
                <header className="flex w-full items-start justify-between gap-5 px-4 py-6">
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl leading-tight font-semibold">{item.title}</h3>
                  </div>
                  <Icon className="text-primary h-16 w-16" strokeWidth={1} />
                </header>

                <div className="px-4 pb-6">
                  <div className="max-w-full md:max-w-2xl">
                    <p className="text-lg leading-tight font-semibold">{item.lead}</p>
                    <p className="mt-2 text-base leading-relaxed">{item.body}</p>
                  </div>

                  <div className="mt-4 inline-flex">
                    <Button
                      size="lg"
                      className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex w-fit origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
                    >
                      <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                        {item.buttonText ?? item.buttonText}
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
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
