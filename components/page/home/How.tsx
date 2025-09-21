import { ArrowDown, ArrowUpRight, Cloud, Puzzle, UserCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { NextPage } from 'next';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import PatternOverlay from '@/components/core/pattern-overlay';

const How: NextPage = () => (
  <>
    <div className="font-heading relative box-border flex w-full flex-col items-start gap-16 px-48 py-16 text-left text-6xl">
      {/* Left-side pattern overlay */}
      <PatternOverlay />
      <PatternOverlay left="auto" right="152px" height="100vh" />
      <div>
        <Separator className="absolute left-0 mt-4 w-full" />
        <div className="text-background flex items-center justify-between gap-0 self-stretch">
          <div className="flex flex-1 items-center gap-2 px-2 py-7">
            <div className="relative h-16 w-md">
              <div className="bg-accent1 absolute top-2 h-12 w-32" />
              <b className="text-background absolute inline-block w-full leading-none tracking-tighter">
                <span>{`How `}</span>
                <span className="text-foreground">We Solve?</span>
              </b>
            </div>

            <ArrowDown className="text-accent1" height={126} width={126} />
          </div>
          <div className="text-foreground flex flex-1 flex-col items-start justify-center gap-6 self-stretch px-2 py-2 text-4xl">
            <b className="relative self-stretch leading-none tracking-tight">{`Simplifying Complexity Across Marketing & Packaging Ecosystems.`}</b>
            <div className="font-body relative inline-block w-2xl text-base leading-[150%] font-semibold tracking-tight">
              Driven by AI, automation, and the power of Propelis.
            </div>
          </div>
        </div>
        <Separator className="absolute left-0 -mt-4 w-full" />
      </div>
      <div className="self-stretch">
        <Separator className="absolute left-0 w-full" />

        <div className="bg-foreground/10 flex flex-col items-start gap-2 self-stretch overflow-hidden p-2 text-4xl">
          <div className="flex items-start gap-2 self-stretch">
            {[
              {
                icon: Cloud,
                title: 'SaaS Platform',
                desc: 'Platform technology that streamlines workflows for packaging, content, and creative. Built for automation, approvals, and compliance, at scale.',
                descWidth: 'w-96',
              },
              {
                icon: Puzzle,
                title: 'Custom Solutions',
                desc: 'Tailored to your business needs. Enhanced with AI, automation, and seamless integration into your ecosystem.',
                descWidth: 'w-96',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card className="flex-1 gap-2 p-2" key={item.title}>
                  <div className="flex items-center gap-8 p-8">
                    <Icon strokeWidth={1.5} className="text-primary" height={80} width={80} />
                    <div className="flex flex-col items-start">
                      <b className="relative leading-none tracking-tight">{item.title}</b>
                    </div>
                  </div>
                  <div className="text-dimgray font-body flex items-center justify-between gap-0 self-stretch p-8 text-sm">
                    <div className={`${item.descWidth} relative inline-block shrink-0 leading-[150%] tracking-tight`}>
                      {item.desc}
                    </div>
                    <Button className="bg-primary flex min-h-16 w-16 items-center justify-center rounded-none p-0">
                      <ArrowUpRight height={40} width={40} />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
          <Card className="self-stretch p-2">
            <div className="flex items-center justify-between gap-0 self-stretch p-8">
              <div className="flex items-center gap-8">
                <UserCheck className="text-primary" strokeWidth={1.5} height={80} width={80} />
                <div className="flex flex-col items-start gap-2">
                  <b className="relative leading-none tracking-tight">Consulting</b>
                  <div className="font-body relative inline-block text-sm leading-tight tracking-tight">
                    Expert guidance to simplify complexity, optimize workflows, and unlock growth through strategy,
                    technology, and process transformation.
                  </div>
                </div>
              </div>
              <Button className="bg-primary flex min-h-16 w-16 items-center justify-center rounded-none p-0">
                <ArrowUpRight height={40} width={40} />
              </Button>
            </div>
          </Card>
        </div>
        <Separator className="absolute left-0 w-full" />
      </div>
    </div>
  </>
);
export default How;
