import { ArrowDownLeft, MoveUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

interface Problem {
  title: string;
  subtitle: string;
  description: string;
}

interface WhatProps {
  whatData: Problem[][];
}

const What = ({ whatData }: WhatProps) => {
  return (
    <div className="relative flex w-full flex-col gap-14">
      <FullBleedLines className="flex w-full justify-between">
        <div className="relative h-32 w-full max-w-sm">
          <b className="font-heading text-6xl leading-none tracking-tighter">
            <InlineHighlight className="text-background">What</InlineHighlight>
            <span className="text-foreground"> Do We Solve?</span>
          </b>
        </div>
        <ArrowDownLeft size={126} className="text-accent1" strokeWidth={1.5} />
      </FullBleedLines>

      <FullBleedLines className="flex w-full flex-col gap-8">
        {whatData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full justify-between gap-8">
            {row.map((problem, colIndex) => (
              <div key={colIndex} className="relative flex flex-1 flex-col justify-between gap-8">
                <b className="text-4xl leading-none tracking-tight">{problem.title}</b>
                <div className="flex justify-between text-xl">
                  <p className="flex max-w-88 flex-1 leading-none tracking-tight">{problem.subtitle}</p>
                  <p className="flex max-w-88 flex-1 leading-none tracking-tight">{problem.description}</p>
                </div>
                <Button
                  size="sm"
                  className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
                >
                  <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                    See the fix
                  </span>
                  <span
                    className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 w-10 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)]"
                    aria-hidden="true"
                  >
                    <MoveUpRight className="h-4 w-4" />
                  </span>
                </Button>
              </div>
            ))}
          </div>
        ))}
      </FullBleedLines>
    </div>
  );
};

export default What;
