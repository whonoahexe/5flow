import FullBleedLines from '@/components/core/full-bleed-lines';
import { ArrowUpLeft } from 'lucide-react';
import type { NextPage } from 'next';

const Mission: NextPage = () => {
  return (
    <div className="py-16">
      <FullBleedLines>
        <div className="text-gray font-heading relative box-border flex w-full flex-col items-start gap-32 px-48 text-left">
          <div className="text-gray font-heading relative box-border flex w-full flex-col items-start px-0 text-left text-4xl">
            <div className="flex items-center justify-between gap-0 self-stretch">
              <div className="relative inline-block w-180 shrink-0 leading-none tracking-tight">
                Develop industry leading tools across the entire GTM funnel, ultimately becoming a platform used by all
                manufacturers, brand owners, and retailers.
              </div>
              <div className="flex h-48 w-96 flex-1 flex-row items-end justify-end">
                <div className="bg-success h-48 w-48" />
                <div className="bg-primary h-48 w-48" />
                <div className="bg-accent2 h-48 w-48" />
                <div className="bg-accent2/40 h-48 w-48" />
              </div>
            </div>
            <div className="flex items-center justify-between gap-0 self-stretch text-8xl">
              <div className="relative h-48 w-48">
                <div className="bg-accent1 absolute h-48 w-48" />
              </div>
              <div className="flex w-3xl items-start justify-between gap-0">
                <ArrowUpLeft className="text-accent1 h-52 w-52" strokeWidth={0.8} />
                <b className="relative inline-block shrink-0 leading-none tracking-tighter">
                  The. <br /> Mission.
                </b>
              </div>
            </div>
          </div>
        </div>
      </FullBleedLines>
    </div>
  );
};

export default Mission;
