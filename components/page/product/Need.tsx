import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';

interface NeedProps {
  title1: string;
  highlightTitle: string;
  title2: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const Need = ({ title1, highlightTitle, title2, subtitle, description }: NeedProps) => {
  return (
    <FullBleedLines className="bg-foreground/5 relative w-full p-2">
      <div className="bg-primary flex flex-col gap-14 rounded-2xl py-16 pl-8">
        <div className="flex w-full justify-between">
          <div className="font-heading flex flex-col gap-4">
            <div className="relative max-w-4xl">
              <b className="text-background w-full text-6xl leading-none tracking-tight">
                <span>{title1}</span>
                <InlineHighlight>{highlightTitle}</InlineHighlight>
                <span>{title2}</span>
              </b>
            </div>
            <div className="text-success text-5xl leading-none tracking-tight">{subtitle}</div>
          </div>
          <ArrowUpRight className="text-background" width={192} height={192} strokeWidth={1} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-background max-w-2xl leading-relaxed tracking-tight">{description}</div>
          <Button
            size="sm"
            className="group/cta-hero active:ring-success/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
          >
            <span className="bg-success text-success-foreground group-hover/cta-hero:bg-success/90 group-active/cta-hero:bg-success/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
              Talk to Us
            </span>
            <span
              className="bg-success text-success-foreground group-hover/cta-hero:bg-success/90 group-active/cta-hero:bg-success/80 inline-flex h-10 w-10 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)]"
              aria-hidden="true"
            >
              <MoveUpRight className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </FullBleedLines>
  );
};

export default Need;
