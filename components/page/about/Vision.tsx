import FullBleedLines from '@/components/core/full-bleed-lines';
import { ArrowUpRight } from 'lucide-react';
import type { NextPage } from 'next';

const Vision: NextPage = () => {
  return (
    <FullBleedLines>
      <div className="font-heading flex w-full flex-col items-start">
        <div className="flex items-center justify-between gap-0 self-stretch">
          <div className="flex h-48 w-96 flex-1">
            <div className="bg-accent2/40 h-48 w-48" />
            <div className="bg-accent1 h-48 w-48" />
            <div className="bg-success h-48 w-48" />
          </div>
          <p className="w-full max-w-4xl text-right text-3xl leading-none tracking-tight">
            To develop innovative cloud-smart solutions for brand owners supercharged by data, tech, and AI in order to
            streamline and accelerate the GTM process from ideation-to implementation so brand owners can adapt to
            changes faster.
          </p>
        </div>

        <div className="flex items-end justify-between gap-0 self-stretch">
          <div className="flex w-96 items-center justify-between gap-0">
            <b className="relative w-64 text-8xl leading-none tracking-tighter">The. Vision.</b>
          </div>
          <div className="relative flex items-center justify-center">
            <ArrowUpRight className="text-accent1 h-52 w-52" strokeWidth={1} />
          </div>

          <div className="flex flex-1 items-end justify-end">
            <div className="bg-primary flex h-48 w-48" />
          </div>
        </div>
      </div>
    </FullBleedLines>
  );
};

export default Vision;
