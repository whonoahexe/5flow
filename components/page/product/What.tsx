import { ArrowDownLeft, MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';

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
    <div className="text-gray font-heading relative box-border flex w-full flex-col items-start gap-12 py-16 text-left">
      <FullBleedLines className="flex w-full justify-between">
        <p className="font-heading w-full max-w-4xl text-6xl leading-none font-bold tracking-tight">
          <InlineHighlight>What</InlineHighlight> do we <br /> Solve ?
        </p>
        <ArrowDownLeft strokeWidth={1.5} className="text-accent1 h-32 w-32" />
      </FullBleedLines>

      <div className="text-gray font-heading flex w-full flex-col gap-8">
        {whatData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between gap-8 self-stretch">
            {row.map((problem, colIndex) => (
              <div
                key={colIndex}
                className="text-gray font-heading relative flex h-full w-full flex-1 flex-col items-start gap-8 text-left text-4xl"
              >
                <b className="relative self-stretch leading-none tracking-tight">{problem.title}</b>
                <div className="flex h-18 items-start justify-between gap-0 self-stretch text-xl">
                  <div className="flex flex-1 flex-col items-start self-stretch">
                    <div className="relative inline-block max-w-sm leading-tight tracking-tight">
                      {problem.subtitle}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center">
                    <div className="relative inline-block max-w-sm leading-tight tracking-tight">
                      {problem.description}
                    </div>
                  </div>
                </div>
                <div className="flex gap-8">
                  <Button variant="default" size="lg" className="rounded-none">
                    See the fix
                  </Button>
                  <div className="bg-primary flex h-10 w-10 items-center justify-center">
                    <MoveUpRight className="text-background" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default What;
