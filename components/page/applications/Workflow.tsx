import { ArrowDown, MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';

interface WorkflowStat {
  value: string;
  label: string;
}

interface WorkflowProps {
  title: React.ReactNode;
  subtitle: string;
  statsData: WorkflowStat[];
}

const Workflow = ({ title, subtitle, statsData }: WorkflowProps) => {
  return (
    <div className="font-heading relative flex w-full flex-col gap-8">
      <FullBleedLines className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 items-center gap-8">
          <b className="max-w-3xl text-6xl leading-none tracking-tight">{title}</b>
          <ArrowDown className="text-accent1 h-32 w-32" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-10 py-7">
          <b className="relative max-w-xl text-2xl leading-none tracking-tight">{subtitle}</b>
          <Button
            size="lg"
            className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex w-fit origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
          >
            <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
              See Case Studies
            </span>
            <span
              className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 w-10 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)]"
              aria-hidden="true"
            >
              <MoveUpRight className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </FullBleedLines>

      <FullBleedLines className="flex w-full flex-1 gap-2 p-2">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-background flex h-56 flex-1 flex-col items-center justify-center gap-2 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)]"
          >
            <b className="font-heading text-primary text-6xl">{stat.value}</b>
            <b className="relative text-center text-2xl leading-none">{stat.label}</b>
          </div>
        ))}
      </FullBleedLines>
    </div>
  );
};

export default Workflow;
