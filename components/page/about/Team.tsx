import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { ArrowUpRight } from 'lucide-react';
import type { NextPage } from 'next';

const Team: NextPage = () => {
  return (
    <div className="py-16">
      <FullBleedLines></FullBleedLines>
      <div className="text-gray font-heading relative box-border flex w-full flex-col items-start gap-32 text-left">
        <div className="text-gray font-heading text- relative flex w-full flex-col items-start gap-8 text-right text-6xl">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex items-start justify-end gap-8 self-stretch px-2">
              <ArrowUpRight className="bg-accent1 h-32 w-32 text-white" strokeWidth={1.5} />
              <div className="h-32">
                <b className="top-0 left-0 inline-block leading-none tracking-tighter">
                  <span>{`Meet The `}</span>
                  <br />
                  <span className="text-white">
                    <InlineHighlight>Team</InlineHighlight>
                  </span>
                </b>
              </div>
            </div>
          </div>

          <div className="box-border flex h-142 shrink-0 flex-col items-start self-stretch overflow-hidden p-2 text-center text-white">
            <div className="bg-primary flex flex-1 items-center justify-center self-stretch rounded-2xl py-7 pr-8 pl-0">
              <div className="flex flex-col items-end justify-end">
                <b className="relative leading-none tracking-tight">[placeholder for video]</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
