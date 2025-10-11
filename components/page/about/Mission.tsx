import { ArrowUpLeft } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';

const Mission = () => {
  return (
    <FullBleedLines>
      <div className="font-heading flex w-full flex-col items-start">
        <div className="flex items-center justify-between gap-0 self-stretch">
          <p className="w-full max-w-2xl text-4xl leading-none tracking-tight">
            Develop industry leading tools across the entire GTM funnel, ultimately becoming a platform used by all
            manufacturers, brand owners, and retailers.
          </p>
          <div className="flex h-48 w-96 flex-1 justify-end">
            <div className="bg-success h-48 w-48" />
            <div className="bg-primary h-48 w-48" />
            <div className="bg-accent2 h-48 w-48" />
            <div className="bg-accent2/40 h-48 w-48" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-0 self-stretch">
          <div className="relative h-48 w-48">
            <div className="bg-accent1 absolute h-48 w-48" />
          </div>
          <div className="flex w-3xl items-start justify-between gap-0">
            <ArrowUpLeft className="text-accent1 h-52 w-52" strokeWidth={1} />
            <b className="text-8xl leading-none tracking-tighter">
              The. <br /> Mission.
            </b>
          </div>
        </div>
      </div>
    </FullBleedLines>
  );
};

export default Mission;
