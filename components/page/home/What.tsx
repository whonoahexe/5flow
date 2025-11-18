import { ArrowUpRight, Layers2 } from 'lucide-react';
import * as Lucide from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

type WhatItem = {
  title: string;
  desc: string;
  sub?: string;
  iconKey?: string;
};

type WhatProps = {
  title?: string;
  items?: WhatItem[];
};

function toPascalCase(key: string): string {
  return key
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

const fallbackItems: WhatItem[] = [
  {
    title: 'Growing Complexity',
    desc: 'Too many solutions, agencies and teams create silos that slow execution.',
    sub: 'With 5Flow, Bring everything into a single, connected ecosystem.',
    iconKey: 'layers2',
  },
  {
    title: 'Faster Time-to-Market',
    desc: 'Increased pressure to deliver more, sooner',
    sub: 'With 5Flow: Meet demand and work faster with integrated workflows.',
    iconKey: 'server-off',
  },
  {
    title: 'Rising Content Demands',
    desc: 'Always-on channels require more assets than teams can keep up with.',
    sub: 'With 5Flow: Accelerate approvals and keep launches on schedule.',
    iconKey: 'clock-fading',
  },
  {
    title: 'Risk of Errors',
    desc: 'Inconsistent data and processes make it harder to stay on-brand and compliant.',
    sub: '5FLOW scales execution globally while keeping it locally responsive and consistent.',
    iconKey: 'zap-off',
  },
];

const What = ({ title, items }: WhatProps) => {
  const data = items && items.length > 0 ? items : fallbackItems;
  const sectionTitle = title || 'Breaking Barriers in the Modern Content Supply Chain';
  return (
    <div className="text-foreground flex w-full flex-col gap-4 md:gap-8">
      <div className="px-2 py-8">
        <FullBleedLines className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-heading w-full max-w-full text-center text-4xl leading-none font-bold tracking-tight md:max-w-4xl md:text-left md:text-5xl lg:text-[64px]">
            {sectionTitle.split(' ').map((word, i) => {
              const highlightWords = ['Modern', 'Content'];
              return highlightWords.includes(word) ? (
                <InlineHighlight key={i}>{word}</InlineHighlight>
              ) : (
                <span key={i}>{word} </span>
              );
            })}
          </p>
          <ArrowUpRight
            strokeWidth={1.5}
            className="text-accent1 h-16 w-16 origin-center sm:h-20 sm:w-20 md:h-32 md:w-32"
          />
        </FullBleedLines>
      </div>

      <FullBleedLines>
        <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2">
          {data.map((card, i) => {
            const Icon = (() => {
              if (!card.iconKey) return Layers2;
              const pascal = toPascalCase(card.iconKey);
              const Dynamic = (Lucide as Record<string, any>)[pascal];
              return Dynamic || Layers2;
            })();
            return (
              <div
                key={i}
                className="bg-background flex flex-col justify-between rounded-2xl p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)] sm:p-2"
              >
                <div className="flex w-full items-start justify-between p-4 sm:p-8">
                  <p className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl">{card.title}</p>
                  <Icon className="text-primary h-10 w-10 sm:h-16 sm:w-16 md:h-18 md:w-18" strokeWidth={1.5} />
                </div>
                <div className="w-full max-w-xl p-4 sm:p-8">
                  <p className="w-full max-w-96 text-base font-bold tracking-tight md:text-xl">{card.desc}</p>
                  {card.sub && (
                    <p className="pt-2 text-xs tracking-tight sm:text-sm md:text-base md:tracking-tighter">
                      {card.sub}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </FullBleedLines>
    </div>
  );
};

export default What;
