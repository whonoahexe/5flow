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
    <div className="font-heading relative flex w-full flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:px-0">
      <FullBleedLines className="flex flex-1 flex-col items-center justify-between gap-6 sm:flex-row sm:items-start sm:gap-0">
        <div className="flex flex-1 flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
          <b className="max-w-full text-4xl leading-tight tracking-tight sm:max-w-lg sm:text-6xl sm:leading-none">
            {title}
          </b>
          <ArrowDown className="text-accent1 h-16 w-16 sm:h-32 sm:w-32" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col items-center gap-6 py-4 text-center sm:items-start sm:gap-10 sm:py-7 sm:text-left">
          <b className="relative max-w-full text-xl leading-tight tracking-tight sm:max-w-xl sm:text-2xl sm:leading-none">
            {subtitle}
          </b>
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

      <FullBleedLines
        className={`grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 sm:gap-2 ${
          statsData.length === 2 ? 'lg:grid-cols-2' : statsData.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
        }`}
      >
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-background flex h-48 flex-1 flex-col items-center justify-center gap-2 rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.102),0px_10px_15px_-3px_rgba(0,0,0,0.102)] sm:h-56"
          >
            <b className="font-heading text-primary text-4xl sm:text-6xl">{stat.value}</b>
            <b className="relative text-center text-lg leading-tight sm:text-2xl sm:leading-none">{stat.label}</b>
          </div>
        ))}
      </FullBleedLines>
    </div>
  );
};

export default Workflow;
