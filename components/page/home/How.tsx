import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Cloud, Puzzle, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const Explainers = [
  {
    icon: Cloud,
    title: 'SaaS Platform',
    desc: 'Platform technology that streamlines workflows for packaging, content, and creative. Built for automation, approvals, and compliance, at scale.',
  },
  {
    icon: Puzzle,
    title: 'Custom Solutions',
    desc: 'Tailored to your business needs. Enhanced with AI, automation, and seamless integration into your ecosystem.',
  },
  {
    icon: UserCheck,
    title: 'Consulting',
    desc: 'Expert guidance to simplify complexity, optimize workflows, and unlock growth through strategy, technology, and process transformation.',
  },
];

const How = () => (
  <>
    <div className="text-foreground flex w-full flex-col gap-8">
      <div className="px-2 py-8">
        <FullBleedLines className="flex w-full items-center justify-between">
          <div className="flex flex-1 items-center gap-8">
            <p className="font-heading text-[64px] leading-none font-bold tracking-tight">
              <InlineHighlight>How</InlineHighlight> We Solve?
            </p>
            <ArrowDown className="text-accent1" size={126} />
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-6">
            <b className="font-heading text-4xl leading-none tracking-tight">
              Simplifying Complexity Across Marketing & Packaging Ecosystems.
            </b>
            <p className="font-medium tracking-tight">Driven by AI, automation, and the power of Propelis.</p>
          </div>
        </FullBleedLines>
      </div>

      <FullBleedLines>
        <div className="bg-foreground/5 flex gap-2 overflow-x-auto p-2">
          {Explainers.map((item, i) => (
            <div className="bg-background border-border flex flex-1 flex-col gap-2 rounded-2xl border p-2" key={i}>
              <div className="flex w-full items-center gap-8 p-8">
                <item.icon className="text-primary" size={72} strokeWidth={1.5} />
                <p className="text-4xl leading-none font-bold tracking-tight">{item.title}</p>
              </div>
              <div className="flex w-full items-center justify-between gap-8 p-8">
                <p className="text-sm tracking-tight">{item.desc}</p>
                <Link href="/contact">
                  <Button className="bg-primary hover:ring-primary/50 hover:ring-offset-background size-16 origin-center cursor-pointer rounded-none transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6">
                    <ArrowUpRight size={48} className="size-8" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FullBleedLines>
    </div>
  </>
);

export default How;
