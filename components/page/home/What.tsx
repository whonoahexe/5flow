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
    <div className="text-foreground flex w-full flex-col gap-8">
      <div className="px-2 py-8">
        <FullBleedLines className="flex w-full justify-between">
          <p className="font-heading w-full max-w-4xl text-[64px] leading-none font-bold tracking-tight">
            Breaking Barriers in the <InlineHighlight>Modern</InlineHighlight>{' '}
            <InlineHighlight>Content</InlineHighlight> Supply Chain
          </p>
          <Link href="/about">
            <ArrowUpRight
              size={126}
              strokeWidth={1.5}
              className="text-background bg-accent1 hover:ring-primary/50 hover:ring-offset-background origin-center cursor-pointer transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
            />
          </Link>
        </FullBleedLines>
      </div>

      <FullBleedLines>
        <div className="grid grid-cols-2 gap-2 p-2">
          {PainPoints.map((card, i) => (
            <div
              key={i}
              className="bg-background border-border flex flex-col justify-between rounded-2xl border p-2 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)]"
            >
              <div className="flex w-full items-start justify-between p-8">
                <p className="text-4xl font-bold tracking-tight">{card.title}</p>
                {card.icon && <card.icon className="text-primary" size={72} strokeWidth={1.5} />}
              </div>
              <div className="w-full max-w-xl p-8">
                <p className="w-full max-w-96 text-xl font-bold tracking-tight">{card.desc}</p>
                <p className="pt-2 tracking-tighter">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default What;
