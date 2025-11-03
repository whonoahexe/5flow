import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    <FullBleedLines className="bg-foreground/5 relative w-full p-4 sm:p-2">
      <div className="bg-primary flex flex-col gap-10 rounded-2xl px-6 py-10 sm:gap-14 sm:py-16 sm:pl-8">
        <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row sm:items-start sm:gap-0">
          <div className="font-heading flex flex-col gap-4 text-center sm:text-left">
            <div className="relative max-w-full sm:max-w-4xl">
              <b className="text-background w-full text-4xl leading-tight tracking-tight sm:text-6xl sm:leading-none">
                <span>{title1}</span>
                <InlineHighlight>{highlightTitle}</InlineHighlight>
                <span>{title2}</span>
              </b>
            </div>
            <div className="text-success text-2xl leading-tight tracking-tight sm:text-5xl sm:leading-none">
              {subtitle}
            </div>
          </div>
          <ArrowUpRight className="text-background hidden sm:block" width={192} height={192} strokeWidth={1} />
        </div>

        <div className="flex flex-col gap-6 text-center sm:gap-4 sm:text-left">
          <div className="text-background max-w-full leading-relaxed tracking-tight sm:max-w-2xl">{description}</div>
          <Link href="/contact">
            <Button
              size="sm"
              className="group/cta-hero active:ring-success/50 active:ring-offset-background inline-flex w-fit origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
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
          </Link>
        </div>
      </div>
    </FullBleedLines>
  );
};

export default Need;
