import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Cloud, MessagesSquare, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const Explainers = [
  {
    icon: Cloud,
    title: 'SaaS Platform',
    desc: 'Platform technology that streamlines workflows for packaging, content, and creative. Built for automation, approvals, and compliance, at scale.',
    link: '/products/wave', // Added dynamic link
  },
  {
    icon: Puzzle,
    title: 'Custom Solutions',
    desc: 'Tailored to your business needs. Enhanced with AI, automation, and seamless integration into your ecosystem.',
    link: '/products/wave', // Added dynamic link
  },
  {
    icon: MessagesSquare,
    title: 'Consulting',
    desc: 'Expert guidance to simplify complexity, optimize workflows, and unlock growth through strategy, technology, and process transformation.',
    link: '/contact', // Added dynamic link
  },
];

const How = () => (
  <>
    <div className="text-foreground flex w-full flex-col gap-4 md:gap-8">
      <div className="px-2 py-8">
        <FullBleedLines className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <p className="font-heading text-center text-4xl leading-none font-bold tracking-tight md:text-left lg:text-[64px]">
              <InlineHighlight>How</InlineHighlight> We Solve?
            </p>
            <ArrowDown className="text-accent1 hidden h-16 w-16 sm:h-24 sm:w-24 md:block md:h-32 md:w-32" aria-hidden />
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-4 px-8 md:gap-6 md:px-0">
            <b className="font-heading text-center text-lg leading-none tracking-tight md:text-left md:text-4xl">
              Simplifying Complexity Across Marketing & Packaging Ecosystems.
            </b>
            <p className="w-full text-center text-base font-medium tracking-tight md:text-left md:text-lg">
              Driven by AI, automation, and the power of Propelis.
            </p>
          </div>
        </FullBleedLines>
      </div>

      <FullBleedLines>
        <div className="flex flex-col gap-2 p-2 md:flex-row">
          {Explainers.map((item, i) => (
            <div
              key={i}
              className="bg-background flex w-full flex-col gap-2 rounded-2xl p-4 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)] md:flex-1 md:p-2"
            >
              <div className="flex w-full items-center gap-4 p-2 md:gap-8 md:p-8">
                <item.icon className="text-primary h-10 w-10 sm:h-16 sm:w-16 md:h-18 md:w-18" strokeWidth={1.5} />
                <p className="text-xl leading-none font-bold tracking-tight sm:text-2xl md:text-4xl">{item.title}</p>
              </div>

              <div className="flex w-full flex-col items-start gap-4 p-2 md:flex-row md:items-center md:gap-8 md:p-8">
                <p className="text-sm tracking-tight">{item.desc}</p>

                <Link href={item.link}>
                  <Button
                    className="bg-primary hover:ring-primary/50 hover:ring-offset-background mt-2 size-12 origin-center cursor-pointer rounded-none px-2 py-1 transition-all duration-300 ease-[var(--easing-smooth)] hover:translate-x-[1px] hover:scale-[0.92] hover:ring-4 hover:ring-offset-2 active:scale-[0.9] active:ring-6 md:mt-0 md:ml-auto md:size-16 md:px-4 md:py-2"
                    aria-label="Contact"
                  >
                    <ArrowUpRight className="size-6 sm:size-8" />
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
