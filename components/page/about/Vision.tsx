import { ArrowUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';

type VisionProps = { visionText?: string };

const Vision = ({ visionText }: VisionProps) => {
  return (
    <FullBleedLines>
      <div className="font-heading flex w-full flex-col items-start gap-8 sm:gap-0">
        <div className="flex flex-col items-center justify-between gap-4 self-stretch sm:flex-row sm:items-start sm:gap-0">
          <div className="flex h-48 w-full flex-1 sm:w-96">
            <div className="bg-accent2/40 h-16 w-16 sm:h-48 sm:w-48" />
            <div className="bg-accent1 h-16 w-16 sm:h-48 sm:w-48" />
            <div className="bg-success h-16 w-16 sm:h-48 sm:w-48" />
          </div>
          <p className="w-full text-center text-lg leading-snug tracking-tight sm:max-w-4xl sm:text-right sm:text-4xl sm:leading-none">
            {visionText ||
              `We will revolutionise how brands leverage content - to transform the entire go-to market journey and become their indispensable partner`}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 self-stretch sm:flex-row sm:items-end sm:gap-0">
          <div className="flex w-full items-center justify-center gap-4 sm:w-96 sm:justify-between sm:gap-0">
            <b className="relative text-4xl leading-none tracking-tighter sm:w-64 sm:text-8xl">The. Vision.</b>
            <ArrowUpRight className="text-accent1 h-20 w-20 sm:hidden" strokeWidth={1} />
          </div>
          <div className="relative hidden items-center justify-center sm:flex">
            <ArrowUpRight className="text-accent1 h-20 w-20 sm:h-52 sm:w-52" strokeWidth={1} />
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-end sm:justify-end">
            <div className="bg-primary flex h-16 w-16 sm:h-48 sm:w-48" />
          </div>
        </div>
      </div>
    </FullBleedLines>
  );
};

export default Vision;
