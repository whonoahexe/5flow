import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Card } from '@/components/ui/card';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface TabItem {
  title: string;
  desc: string;
  image?: string;
  link?: string;
  buttonLabel?: string;
  date?: string;
}

interface TabData {
  value: string;
  label: string;
  icon: React.ElementType;
  items: TabItem[];
}

const FilterSection = ({ tabsData }: { tabsData: TabData[] }) => {
  return (
    <div className="relative w-full flex-col">
      <Tabs defaultValue={tabsData?.[0]?.value ?? 'industry'} className="flex w-full flex-col gap-8 px-4 sm:px-0">
        <FullBleedLines className="overflow-hidden">
          <TabsList className="bg-foreground/5 flex min-h-16 gap-5 overflow-x-auto whitespace-nowrap rounded-none px-3 py-2 sm:overflow-visible">
            {tabsData.map(tab => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:text-primary data-[state=active]:ring-primary data-[state=active]:bg-background flex min-h-11 min-w-8 cursor-pointer items-center gap-2 px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg data-[state=active]:rounded-sm data-[state=active]:ring-2"
                >
                  <Icon className="h-5 w-5" />
                  <span className="leading-none">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </FullBleedLines>

        <FullBleedLines>
          {tabsData.map(tab => (
            <TabsContent key={tab.value} value={tab.value} className="p-2">
              <div className="flex flex-col gap-4 sm:gap-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {tab.items.map((item, i) => (
                    <Card
                      key={`${tab.value}-${i}`}
                      className="relative flex flex-1 flex-col gap-0 rounded-2xl border p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)]"
                    >
                      <div className="relative h-48 sm:h-65 w-full overflow-hidden rounded-[20px]">
                        <Image
                          src={item.image ?? '/product/rectangle.png'}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="px-2 py-4">
                        <div className="flex flex-1 flex-col items-start gap-4 sm:gap-6">
                          <div className="flex w-full flex-col gap-2">
                            <b className="font-heading text-xl sm:text-2xl leading-tight tracking-tight">{item.title}</b>
                            <div className="text-base sm:text-lg leading-tight tracking-tight">{item.desc}</div>
                          </div>
                          <Link href={item.link ?? '/contact'}>
                            <Button
                              size="lg"
                              className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex w-fit origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-0.5 active:scale-[0.99] active:ring-2 active:ring-offset-2"
                            >
                              <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-4 sm:px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-5 sm:group-hover/cta-hero:px-7">
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
        </FullBleedLines>
      </Tabs>
    </div>
  );
};

export default FilterSection;
