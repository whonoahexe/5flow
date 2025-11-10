import Link from 'next/link';
import { ArrowUpRight, ClockFading, Layers2, ServerOff, ZapOff } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const PainPoints = [
  {
    title: 'Growing Complexity',
    desc: 'Marketing, content, and supply chains are only getting more complex.',
    sub: 'With 5Flow, Bring everything into a single, connected ecosystem.',
    icon: Layers2,
  },
  {
    title: 'Inefficiencies & Silos',
    desc: 'Brands waste time and money juggling fragmented systems.',
    sub: 'With 5Flow, Eliminate silos and reduce costs with integrated workflows.',
    icon: ServerOff,
  },
  {
    title: 'Missed Time-to-Market',
    desc: 'Fast-paced markets leave no room for delays.',
    sub: 'With 5Flow, Accelerate approvals and keep launches on schedule.',
    icon: ClockFading,
  },
  {
    title: 'Scaling Without Control',
    desc: 'Global growth often sacrifices clarity and consistency.',
    sub: 'With 5Flow, Scale with a platform built to unify workflows end-to-end.',
    icon: ZapOff,
  },
];

const What = () => {
  return (
    <div className="text-foreground flex w-full flex-col gap-4 md:gap-8">
      <div className="px-2 py-8">
        <FullBleedLines className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-heading w-full max-w-full text-center text-4xl leading-none font-bold tracking-tight md:max-w-4xl md:text-left md:text-5xl lg:text-[64px]">
            Breaking Barriers in the <InlineHighlight>Modern</InlineHighlight>{' '}
            <InlineHighlight>Content</InlineHighlight> Supply Chain
          </p>
          <ArrowUpRight
            strokeWidth={1.5}
            className="text-accent1 h-16 w-16 origin-center sm:h-20 sm:w-20 md:h-32 md:w-32"
          />
        </FullBleedLines>
      </div>

      <FullBleedLines>
        <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2">
          {PainPoints.map((card, i) => (
            <div
              key={i}
              className="bg-background flex flex-col justify-between rounded-2xl p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)] sm:p-2"
            >
              <div className="flex w-full items-start justify-between p-4 sm:p-8">
                <p className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl">{card.title}</p>
                {card.icon && (
                  <card.icon className="text-primary h-10 w-10 sm:h-16 sm:w-16 md:h-18 md:w-18" strokeWidth={1.5} />
                )}
              </div>
              <div className="w-full max-w-xl p-4 sm:p-8">
                <p className="w-full max-w-96 text-base font-bold tracking-tight md:text-xl">{card.desc}</p>
                <p className="pt-2 text-xs tracking-tight sm:text-sm md:text-base md:tracking-tighter">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default What;
