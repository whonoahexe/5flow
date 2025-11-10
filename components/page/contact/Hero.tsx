import { ArrowDownLeft } from 'lucide-react';
import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';

const Hero = () => {
  return (
    <div className="mt-12 flex flex-col gap-6 px-4 md:gap-14 md:px-2">
      <FullBleedLines className="flex w-full flex-col items-start justify-between gap-2 md:flex-row md:items-center md:gap-0">
        <div className="relative w-full md:max-w-sm">
          <b className="font-heading text-4xl leading-none tracking-tighter sm:text-5xl md:text-6xl">
            <InlineHighlight className="text-background">Ready</InlineHighlight>
            <span className="text-foreground"> when you are.</span>
          </b>
        </div>

        {/* responsive arrow: small on mobile, original size at md+ */}
        <ArrowDownLeft className="text-accent1 h-14 w-14 md:h-[126px] md:w-[126px]" strokeWidth={1.5} />
      </FullBleedLines>
    </div>
  );
};

export default Hero;
