import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Award, Shuffle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const Why = () => (
  <div className="flex flex-col gap-8">
    <FullBleedLines className="font-heading mx-auto w-full max-w-2xl gap-16 px-2 py-8">
      <p className="text-center text-[64px] leading-none font-bold tracking-tight">
        Redefining the way brands <InlineHighlight>create, scale,</InlineHighlight> and{' '}
        <InlineHighlight>deliver.</InlineHighlight>
      </p>
    </FullBleedLines>

    <FullBleedLines>
      <div className="bg-foreground/5 w-full p-2">
        <div className="bg-primary flex w-full items-center justify-between rounded-2xl py-8">
          <Image
            className="object-cover"
            width={450}
            height={450}
            alt="rings showcasing brand identity"
            src="/svg/rings.svg"
          />
          <div className="flex flex-col gap-8 pr-8">
            <p className="text-background max-w-4xl font-medium tracking-tight">
              5FLOW started as a cloud-smart technology spin-off of the Matthews International Group in 2011. Now, a
              part of the Propelis Group, reborn from the merger of SGK and SGS & Co., 5FLOW combines over 150 years of
              creative, packaging, and brand production leadership with our own technology-driven edge, creating a go-to
              ecosystem for the modern brand.
            </p>

            <div className="w-full">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="bg-background flex items-center justify-between rounded-lg p-3">
                  <Shuffle size={32} className="text-primary" strokeWidth={1.5} />
                  <p className="max-w-72 pr-2 text-xl leading-none font-bold tracking-tight">
                    From fragmented workflows → to connected systems
                  </p>
                  <Button
                    className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
                    aria-label="Learn more about connected systems"
                  >
                    <ArrowUpRight size={24} className="size-6" />
                  </Button>
                </div>

                <div className="bg-background flex items-center justify-between rounded-lg p-3">
                  <Zap size={32} className="text-primary" strokeWidth={1.5} />
                  <p className="max-w-72 pr-2 text-xl leading-none font-bold tracking-tight">
                    From slow cycles → to agile execution
                  </p>
                  <Button
                    className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
                    aria-label="Learn more about connected systems"
                  >
                    <ArrowUpRight size={24} className="size-6" />
                  </Button>
                </div>

                <div className="bg-background flex items-center justify-between rounded-lg p-3 md:col-span-2">
                  <div className="flex items-center gap-6">
                    <Award size={32} className="text-primary" strokeWidth={1.5} />
                    <p className="max-w-72 text-xl leading-none font-bold tracking-tight">
                      From governance → to brand enablement at scale
                    </p>
                  </div>
                  <Button
                    className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6"
                    aria-label="Learn more about connected systems"
                  >
                    <ArrowUpRight size={24} className="size-6" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-end">
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
