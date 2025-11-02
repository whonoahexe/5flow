import { ArrowUpLeft } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';

const Mission = () => {
  return (
    <FullBleedLines>
      <div className="font-heading flex w-full flex-col items-start gap-8 sm:gap-0">
        <div className="flex flex-col items-center justify-between gap-4 self-stretch sm:flex-row sm:items-start sm:gap-0">
          <p className="order-2 w-full text-center text-lg leading-snug tracking-tight sm:order-none sm:max-w-2xl sm:text-left sm:text-4xl sm:leading-none">
            Develop industry leading tools across the entire GTM funnel, ultimately becoming a platform used by all
            manufacturers, brand owners, and retailers.
          </p>
          <div className="order-1 flex h-48 w-96 flex-1 justify-end sm:order-none">
            <div className="bg-success h-16 w-16 sm:h-48 sm:w-48" />
            <div className="bg-primary h-16 w-16 sm:h-48 sm:w-48" />
            <div className="bg-accent2 h-16 w-16 sm:h-48 sm:w-48" />
            <div className="bg-accent2/40 h-16 w-16 sm:h-48 sm:w-48" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 self-stretch sm:items-start sm:gap-0">
          <div className="relative order-last mx-auto h-16 w-16 overflow-hidden sm:order-none sm:mx-0 sm:h-48 sm:w-48">
            <div className="bg-accent1 absolute h-16 w-16 sm:h-48 sm:w-48" />
          </div>
          <div className="flex w-full items-center justify-center gap-4 sm:w-3xl sm:items-start sm:justify-between sm:gap-0">
            <ArrowUpLeft className="text-accent1 h-20 w-20 sm:h-52 sm:w-52" strokeWidth={1} />
            <b className="text-center text-4xl leading-snug tracking-tighter sm:text-left sm:text-8xl sm:leading-none">
              <span className="sm:hidden">The. Mission.</span>
              <span className="hidden sm:inline">
                The. <br /> Mission.
              </span>
            </b>
          </div>
        </div>
      </div>
    </FullBleedLines>
  );
};

export default Mission;
