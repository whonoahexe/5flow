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
          {/* Header: stack on mobile, keep original layout on web (md+) */}
          <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <p className="font-heading text-2xl leading-none font-bold tracking-tight md:text-2xl md:sm:text-4xl lg:text-[64px]">
              <InlineHighlight>How</InlineHighlight> We Solve?
            </p>
            {/* responsive big arrow: small on mobile, original size restored at md (web) */}
            <ArrowDown className="text-accent1 h-10 w-10 md:h-[126px] md:w-[126px]" aria-hidden />
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-6">
            <b className="font-heading text-base leading-none tracking-tight md:text-4xl">
              Simplifying Complexity Across Marketing & Packaging Ecosystems.
            </b>
            <p className="text-sm font-medium tracking-tight md:text-base">
              Driven by AI, automation, and the power of Propelis.
            </p>
          </div>
        </FullBleedLines>
      </div>

      <FullBleedLines>
        {/* stack vertically on mobile, row on md+ */}
        <div className="flex flex-col gap-2 p-2 md:flex-row">
          {Explainers.map((item, i) => (
            <div
              key={i}
              className="bg-background flex w-full flex-col gap-2 rounded-2xl p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)] md:flex-1 md:p-2"
            >
              <div className="flex w-full items-center gap-4 p-2 md:gap-8 md:p-8">
                {/* icon: smaller on mobile, original 72px restored at md (web) */}
                <item.icon className="text-primary h-6 w-6 md:h-[72px] md:w-[72px]" strokeWidth={1.5} />
                <p className="text-base leading-none font-bold tracking-tight md:text-4xl">{item.title}</p>
              </div>

              {/* Changed: stack description and button on mobile; row layout on md+ to preserve web look */}
              <div className="flex w-full flex-col items-start gap-4 p-2 md:flex-row md:items-center md:gap-8 md:p-8">
                <p className="text-sm tracking-tight">{item.desc}</p>

                {/* Button sits below description on mobile (md:flex-row will place it to the right on desktop) */}
                <Link href="/contact">
                  <Button
                    className="bg-primary hover:ring-primary/50 hover:ring-offset-background mt-2 size-16 origin-center cursor-pointer rounded-none px-2 py-1 transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6 md:mt-0 md:ml-auto md:px-4 md:py-2"
                    aria-label="Contact"
                  >
                    <ArrowUpRight size={24} className="size-6" />
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
