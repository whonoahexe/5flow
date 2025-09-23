import { ArrowUpRight, Award, Shuffle, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';

const About: NextPage = () => (
  <div className="font-heading relative box-border flex w-full flex-col items-stretch gap-16 py-16 text-left text-6xl">
    <FullBleedLines>
      <div className="bg-foreground/10 self-stretch p-2">
        <div className="text-background font-body bg-primary flex flex-col items-start self-stretch overflow-hidden rounded-2xl text-base">
          <div className="bg-darkblue box-border flex h-144 items-center justify-between gap-0 self-stretch rounded-2xl py-7 pr-8 pl-0">
            <Image
              className="relative max-h-full w-112 object-cover"
              width={449}
              height={470}
              sizes="100vw"
              alt=""
              src="Vector.svg"
            />
            <div className="relative flex h-full w-full flex-col items-end justify-between gap-8">
              <div className="mt-16 flex w-4xl flex-col gap-8">
                <div className="font-body relative inline-block leading-[150%] font-semibold tracking-tight whitespace-pre-wrap">{`5FLOW started as a cloud-smart technology spin-off of the Matthews International Group in 2011.  Now, a part of the Propelis Group, reborn from the merger of SGK and SGS & Co., 5FLOW combines over 150 years of creative, packaging, and brand production leadership with our own technology-driven edge, creating a go-to ecosystem for the modern brand.`}</div>
                <div className="font-heading flex flex-col gap-2 overflow-hidden text-xl">
                  <div className="flex flex-row items-start gap-2">
                    {[
                      {
                        icon: Shuffle,
                        iconWidth: 32,
                        iconHeight: 32,
                        title: 'From fragmented workflows → to connected systems',
                        titleWidth: 'w-64',
                        iconBoxWidth: 'w-80',
                      },
                      {
                        icon: Zap,
                        iconWidth: 32,
                        iconHeight: 32,
                        title: 'From slow cycles → to agile execution',
                        titleWidth: 'w-48',
                        iconBoxWidth: 'w-64',
                      },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Card className="flex-1 p-2" key={item.title}>
                          <div className="flex items-center justify-between gap-0 self-stretch p-3">
                            <div className={`${item.iconBoxWidth} relative h-12`}>
                              <Icon
                                strokeWidth={1.5}
                                className="text-primary"
                                height={item.iconHeight}
                                width={item.iconWidth}
                              />
                              <div className={`absolute top-0 left-14 flex flex-col items-start`}>
                                <b
                                  className={`${item.titleWidth} text-foreground relative inline-block leading-[120%] tracking-tight`}
                                >
                                  {item.title}
                                </b>
                              </div>
                            </div>
                            <Button className="bg-primary flex min-h-16 w-16 items-center justify-center rounded-none p-0">
                              <ArrowUpRight height={48} width={48} />
                            </Button>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                  <Card className="mt-2 p-2">
                    <div className="flex items-center justify-between gap-0 self-stretch p-3">
                      <div className="flex items-center gap-6">
                        <Award strokeWidth={1.5} className="text-primary" height={32} width={32} />
                        <div className="flex flex-col items-start">
                          <b className="text-foreground relative inline-block w-64 leading-[120%] tracking-tight">
                            From governance → to brand enablement at scale
                          </b>
                        </div>
                      </div>
                      <Button className="bg-primary flex min-h-16 w-16 items-center justify-center rounded-none p-0">
                        <ArrowUpRight height={48} width={48} />
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="flex flex-row gap-2 self-end">
                <Button className="bg-success text-foreground font-aptos min-h-10 rounded-none font-semibold">
                  Read About Us
                </Button>
                <Button className="bg-success text-foreground flex min-h-10 items-center justify-center rounded-none p-0">
                  <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullBleedLines>
  </div>
);

export default About;
