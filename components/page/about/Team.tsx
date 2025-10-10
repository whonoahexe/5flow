import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { ArrowUpRight } from 'lucide-react';
import type { NextPage } from 'next';

const Team: NextPage = () => {
  return (
    <div className="font-heading flex w-full flex-col gap-8 text-6xl">
      <FullBleedLines className="flex items-start justify-end gap-8 px-2">
        <ArrowUpRight
          size={126}
          strokeWidth={1.5}
          className="text-background bg-accent1 hover:ring-primary/50 hover:ring-offset-background origin-center cursor-pointer transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
        />
        <b className="text-right leading-none tracking-tighter">
          <span>{`Meet The `}</span>
          <br />
          <span className="text-bacgkground">
            <InlineHighlight>Team</InlineHighlight>
          </span>
        </b>
      </FullBleedLines>

      <FullBleedLines>
        <div className="bg-foreground/5 text-background bg- flex h-[536px] p-2 text-center">
          <div className="bg-primary flex flex-1 items-center justify-center rounded-2xl">
            <b className="leading-none tracking-tight">[placeholder for video]</b>
          </div>
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Team;
