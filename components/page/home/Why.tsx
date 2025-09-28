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

            <div className="w-full p-2">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="bg-background flex items-center justify-between rounded-lg p-3">
                  <Shuffle size={32} className="text-primary" strokeWidth={1.5} />
                  <p className="max-w-72 pr-2 text-xl leading-none font-bold tracking-tight">
                    From fragmented workflows → to connected systems
                  </p>
                  <Button className="bg-primary size-16 rounded-none" aria-label="Learn more about connected systems">
                    <ArrowUpRight size={24} className="size-6" />
                  </Button>
                </div>

                <div className="bg-background flex items-center justify-between rounded-lg p-3">
                  <Zap size={32} className="text-primary" strokeWidth={1.5} />
                  <p className="max-w-72 pr-2 text-xl leading-none font-bold tracking-tight">
                    From slow cycles → to agile execution
                  </p>
                  <Button className="bg-primary size-16 rounded-none" aria-label="Learn more about connected systems">
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
                  <Button className="bg-primary size-16 rounded-none" aria-label="Learn more about connected systems">
                    <ArrowUpRight size={24} className="size-6" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-end">
              <Button variant="success" size="lg" className="rounded-none font-semibold tracking-tight">
                Read About Us
                <ArrowUpRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FullBleedLines>
  </div>
);

export default Why;
