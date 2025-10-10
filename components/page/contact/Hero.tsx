import { ArrowDownLeft } from 'lucide-react';
import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';

const Hero = () => {
  return (
    <div className="mt-32 flex flex-col gap-14 px-2">
      <FullBleedLines className="flex w-full justify-between">
        <div className="relative h-32 w-full max-w-sm">
          <b className="font-heading text-6xl leading-none tracking-tighter">
            <InlineHighlight className="text-background">Ready</InlineHighlight>
            <span className="text-foreground"> when you are.</span>
          </b>
        </div>
        <ArrowDownLeft size={126} className="text-accent1" strokeWidth={1.5} />
      </FullBleedLines>
      <div className="flex flex-col gap-4">
        <FullBleedLines className="text-primary font-heading max-w-5xl text-5xl leading-none tracking-tight">
          {`We're here to help you move faster, smarter, and with less complexity`}
        </FullBleedLines>
        <FullBleedLines className="max-w-2xl text-base">
          {`Whether you want a product demo, a pricing discussion, or just answers to your workflow questions, the 5Flow team is ready. Reach out to us by filling the form and we'll get back to you quickly.`}
        </FullBleedLines>
      </div>
    </div>
  );
};

export default Hero;
