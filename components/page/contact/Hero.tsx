import { ArrowDownLeft } from 'lucide-react';
import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';

const Hero = () => {
  return (
    // mobile-first: smaller top margin and tighter gaps; md+ preserves original sizes
    <div className="mt-12 flex flex-col gap-6 px-2 md:mt-32 md:gap-14">
      {/* stack on mobile, row on md+ */}
      <FullBleedLines className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <div className="relative w-full md:max-w-sm">
          <b className="font-heading text-4xl leading-none tracking-tighter sm:text-5xl md:text-6xl">
            <InlineHighlight className="text-background">Ready</InlineHighlight>
            <span className="text-foreground"> when you are.</span>
          </b>
        </div>

        {/* responsive arrow: small on mobile, original size at md+ */}
        <ArrowDownLeft className="text-accent1 h-14 w-14 md:h-[126px] md:w-[126px]" strokeWidth={1.5} />
      </FullBleedLines>

      <div className="flex flex-col gap-4">
        <FullBleedLines className="text-primary font-heading max-w-5xl text-2xl leading-none tracking-tight md:text-5xl">
          {`We're here to help you move faster, smarter, and with less complexity`}
        </FullBleedLines>
        <FullBleedLines className="max-w-2xl text-sm md:text-base">
          {`Whether you want a product demo, a pricing discussion, or just answers to your workflow questions, the 5Flow team is ready. Reach out to us by filling the form and we'll get back to you quickly.`}
        </FullBleedLines>
      </div>
    </div>
  );
};

export default Hero;
