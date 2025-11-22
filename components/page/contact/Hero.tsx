import { ArrowDownLeft } from 'lucide-react';
import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';

type HeroProps = {
  headline?: string;
  highlightWords?: number;
};

const DEFAULT_HEADLINE = 'Ready when you are.';

function splitHeadlineCopy(value: string, highlightWords: number) {
  const normalized = value?.trim() || DEFAULT_HEADLINE;
  const words = normalized.split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return { highlight: DEFAULT_HEADLINE, remainder: '' };
  }
  const safeHighlightCount = Math.max(1, Math.min(highlightWords, words.length));
  const highlight = words.slice(0, safeHighlightCount).join(' ');
  const remainder = words.slice(safeHighlightCount).join(' ');
  return { highlight, remainder };
}

const Hero = ({ headline = DEFAULT_HEADLINE, highlightWords = 1 }: HeroProps) => {
  const { highlight, remainder } = splitHeadlineCopy(headline, highlightWords);

  return (
    <div className="mt-12 flex flex-col gap-6 px-4 md:gap-14 md:px-2">
      <FullBleedLines className="flex w-full flex-col items-start justify-between gap-2 md:flex-row md:items-center md:gap-0">
        <div className="relative w-full md:max-w-sm">
          <b className="font-heading text-4xl leading-none tracking-tighter sm:text-5xl md:text-6xl">
            <InlineHighlight className="text-background">{highlight}</InlineHighlight>
            {remainder && <span className="text-foreground"> {remainder}</span>}
          </b>
        </div>

        {/* responsive arrow: small on mobile, original size at md+ */}
        <ArrowDownLeft className="text-accent1 h-14 w-14 md:h-[126px] md:w-[126px]" strokeWidth={1.5} />
      </FullBleedLines>
    </div>
  );
};

export default Hero;
