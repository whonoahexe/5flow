import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Award, Shuffle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const Why = () => (
  <div className="flex flex-col gap-8">
    <FullBleedLines className="font-heading mx-auto w-full max-w-2xl gap-16 px-2 py-8">
      {/* make heading responsive: smaller on mobile, keep 64px on md+ */}
      <p className="text-center text-3xl leading-none font-bold tracking-tight sm:text-3xl md:text-[64px]">
        Redefining the way brands <InlineHighlight>create, scale,</InlineHighlight> and{' '}
        <InlineHighlight>deliver.</InlineHighlight>
      </p>
    </FullBleedLines>

    <FullBleedLines>
      <div className="bg-foreground/5 w-full p-2">
        {/* stack content on mobile, keep original horizontal layout on md+ */}
        <div className="bg-primary flex w-full flex-col items-start justify-between gap-6 rounded-2xl py-8 md:flex-row md:items-center md:gap-0">
          {/* responsive image: small on mobile, original size on md+ */}
          <Image
            className="h-45 w-44 object-cover sm:h-36 sm:w-36 md:h-[460px] md:w-[450px]"
            width={450}
            height={450}
            alt="rings showcasing brand identity"
            src="/svg/rings.svg"
          />

          <div className="flex flex-col gap-8 p-2 md:pr-8">
            {/* paragraph smaller on mobile, keep original weight */}
            <p className="text-background max-w-4xl text-sm font-medium tracking-tight sm:text-base md:text-base">
              5FLOW started as a cloud-smart technology spin-off of the Matthews International Group in 2011. Now, a
              part of the Propelis Group, reborn from the merger of SGK and SGS & Co., 5FLOW combines over 150 years of
              creative, packaging, and brand production leadership with our own technology-driven edge, creating a go-to
              ecosystem for the modern brand.
            </p>

            <div className="w-full">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {/* Card 1 - stack on mobile, row on md+; text size responsive */}
                <div className="bg-background flex flex-col items-start justify-between gap-3 rounded-lg p-3 md:flex-row md:items-center">
                  <Shuffle size={32} className="text-primary" strokeWidth={1.5} />
                  <p className="max-w-72 pr-2 text-base leading-none font-bold tracking-tight md:text-xl">
                    From fragmented workflows → to connected systems
                  </p>
                  <Link href="/contact">
                    <Button
                      className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
                      aria-label="Learn more about connected systems"
                    >
                      <ArrowUpRight size={24} className="size-6" />
                    </Button>
                  </Link>
                </div>

                {/* Card 2 - same responsive behavior */}
                <div className="bg-background flex flex-col items-start justify-between gap-3 rounded-lg p-3 md:flex-row md:items-center">
                  <Zap size={32} className="text-primary" strokeWidth={1.5} />
                  <p className="max-w-72 pr-2 text-base leading-none font-bold tracking-tight md:text-xl">
                    From slow cycles → to agile execution
                  </p>
                  <Link href="/contact">
                    <Button
                      className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
                      aria-label="Learn more about connected systems"
                    >
                      <ArrowUpRight size={24} className="size-6" />
                    </Button>
                  </Link>
                </div>

                {/* Card 3 spans columns on md+; keeps responsive stacking on mobile */}
                <div className="bg-background flex flex-col items-start justify-between gap-3 rounded-lg p-3 md:col-span-2 md:flex-row md:items-center">
                  {/* stack icon above text on mobile, row on md+ */}
                  <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-6">
                    <Award size={32} className="text-primary" strokeWidth={1.5} />
                    <p className="max-w-72 text-base leading-none font-bold tracking-tight md:text-xl">
                      From governance → to brand enablement at scale
                    </p>
                  </div>
                  <Link href="/contact">
                    <Button
                      className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
                      aria-label="Learn more about connected systems"
                    >
                      <ArrowUpRight size={24} className="size-6" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* center CTA on mobile, keep right on md+ */}
            <div className="flex w-full justify-center md:justify-end">
              <Button
                asChild
                className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2 has-[>svg]:px-0"
              >
                <Link href="/about" aria-label="Book a demo">
                  <span className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-3">
                    Read About Us
                  </span>
                  <span
                    className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 ml-0 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:ml-2"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FullBleedLines>
  </div>
);

export default Why;
