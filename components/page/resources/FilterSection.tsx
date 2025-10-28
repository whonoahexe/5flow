import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Card } from '@/components/ui/card';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// changed: accept tabsData as a prop instead of using internal data
type TabItem = {
  title: string;
  desc: string;
  image?: string;
  link?: string;
  buttonLabel?: string;
  date?: string; // added: optional date for webinars/upcoming items
};
type TabData = {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  items: TabItem[];
};

const FilterSection = ({ tabsData }: { tabsData: TabData[] }) => {
  return (
    <div className="relative w-full flex-col">
      <FullBleedLines className="bg-foreground/5 mt-16 p-2">
        <Tabs defaultValue={tabsData?.[0]?.value ?? 'industry'} className="w-full rounded-none pt-2">
          <TabsList className="flex gap-4 rounded-none">
            {tabsData.map(tab => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:text-primary data-[state=active]:ring-primary data-[state=active]:bg-background flex min-h-[48px] items-center gap-3 px-4 py-3 text-lg data-[state=active]:rounded-lg data-[state=active]:ring-2"
                >
                  <Icon className="inline-block h-5 w-5" />
                  <span className="leading-none">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {tabsData.map(tab => (
            <TabsContent key={tab.value} value={tab.value} className="">
              <div className="mt-6 flex flex-col gap-2">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {tab.items.map((item, i) => (
                    <Card
                      key={`${tab.value}-${i}`}
                      className="border-gainsboro text-gray relative box-border flex w-full flex-1 shrink-0 flex-col items-start overflow-hidden rounded-2xl border border-solid bg-white p-4 text-left text-base"
                    >
                      {/* use Tailwind sizing for the image container and Image fill */}
                      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                        <Image
                          src={item.image ?? '/product/rectangle.png'}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex items-center self-stretch px-2 py-4">
                        <div className="flex flex-1 flex-col items-start gap-4">
                          {item.date && <div className="text-muted-foreground text-sm">{item.date}</div>}
                          <div className="w-full">
                            <b className="leading-tight tracking-tight">{item.title}</b>
                            <div className="mt-2 text-lg leading-tight tracking-tight">{item.desc}</div>
                          </div>
                          <Link href={item.link ?? '/contact'}>
                            <Button
                              size="lg"
                              className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex w-fit origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-0.5 active:scale-[0.99] active:ring-2 active:ring-offset-2"
                            >
                              <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                                {item.buttonLabel ?? 'Read Case Study'}
                              </span>
                              <span
                                className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 w-10 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)]"
                                aria-hidden="true"
                              >
                                <MoveUpRight className="h-4 w-4" />
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </FullBleedLines>
    </div>
  );
};

export default FilterSection;
