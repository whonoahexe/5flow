import { ArrowUpRight, ClockFading, Layers2, ServerOff, ZapOff } from 'lucide-react';
import type { NextPage } from 'next';
import { Card } from '@/components/ui/card';
import PatternOverlay from '@/components/core/pattern-overlay';
import { Separator } from '@/components/ui/separator';
const FeatureCard: NextPage = () => {
  return (
    <div className="font-heading relative box-border flex w-full flex-col items-start gap-16 px-48 py-16 text-left text-6xl">
      {/* Pattern overlays on both sides */}
      <PatternOverlay />
      <PatternOverlay left="auto" right="152px" height="100vh" />
      <Separator className="absolute left-0 w-full" />
      <div className="flex items-end self-stretch">
        <div className="flex flex-1 items-end justify-between gap-0 px-2 py-7">
          <div className="relative h-32 w-full max-w-4xl">
            <div className="absolute top-2 left-3/4 h-12 w-56" />

            <div className="absolute top-16 left-0 h-12 w-56" />
            <b className="absolute left-0 inline-block w-full max-w-4xl leading-none tracking-tighter">
              <span>{`Breaking Barriers in the `}</span>
              <span className="bg-accent1 relative mx-1 mb-4 inline-block align-middle">
                <span className="absolute inset-0 -z-10 rounded"></span>
                <span className="text-background relative">Modern</span>
              </span>
              <br />
              <span className="bg-accent1 relative mb-4 inline-block align-middle">
                <span className="absolute inset-0 -z-10 rounded"></span>
                <span className="text-background relative">Content</span>
              </span>
              <span> Supply Chain</span>
            </b>
          </div>
          <ArrowUpRight size={126} className="text-accent1" />
        </div>
        <Separator className="absolute left-0 w-full" />
      </div>
      <div className="self-stretch">
        <Separator className="absolute left-0 w-full" />
        <div className="bg-foreground/10 flex flex-col items-start gap-2 self-stretch overflow-hidden p-2 text-4xl">
          {[
            [
              {
                title: 'Growing Complexity',
                desc: 'Marketing, content, and supply chains are only getting more complex.',
                sub: 'With 5Flow, Bring everything into a single, connected ecosystem.',
                icon: Layers2,
              },
              {
                title: 'Inefficiencies & Silos',
                desc: 'Brands waste time and money juggling fragmented systems.',
                sub: 'With 5Flow, Eliminate silos and reduce costs with integrated workflows.',
                icon: ServerOff,
              },
            ],
            [
              {
                title: 'Missed Time-to-Market',
                desc: 'Fast-paced markets leave no room for delays.',
                sub: 'With 5Flow, Accelerate approvals and keep launches on schedule.',
                icon: ClockFading,
              },
              {
                title: 'Scaling Without Control',
                desc: 'Global growth often sacrifices clarity and consistency.',
                sub: 'With 5Flow, Scale with a platform built to unify workflows end-to-end.',
                icon: ZapOff,
              },
            ],
          ].map((row, i) => (
            <div key={i} className="flex items-start gap-2 self-stretch">
              {row.map((card, j) => {
                const Icon = card.icon;
                return (
                  <Card className="h-72 flex-1" key={card.title}>
                    <div className="flex h-full flex-col justify-center">
                      <div className="flex items-start justify-between gap-0 self-stretch p-8">
                        <div className="flex flex-col items-start">
                          <b className="relative leading-none tracking-tight">{card.title}</b>
                        </div>
                        <Icon strokeWidth={1.5} size={80} className="text-primary" />
                      </div>
                      <div className="flex items-center self-stretch p-8 text-xl">
                        <div className="flex flex-col items-start gap-2">
                          <b className="font-heading relative inline-block w-80 leading-[120%] tracking-tight md:w-96">
                            {card.desc}
                          </b>
                          <div className="font-body relative inline-block w-80 text-base leading-[150%] tracking-tight md:w-96">
                            {card.sub}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          ))}
        </div>
        <Separator className="absolute left-0 w-full" />
      </div>
    </div>
  );
};

export default FeatureCard;
