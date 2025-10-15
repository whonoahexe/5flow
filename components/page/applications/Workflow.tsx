import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';
import { ArrowDown, MoveUpRight } from 'lucide-react';

interface WorkflowStat {
  value: string;
  label: string;
}

interface WorkflowProps {
  title1: string;
  title2: string;
  highlightTitle: string;
  subtitle: string;
  buttonText: string;
  statsData: WorkflowStat[];
}

const Workflow = ({ title1, title2, highlightTitle, subtitle, buttonText, statsData }: WorkflowProps) => {
  return (
    <div className="font-heading relative box-border flex w-full flex-col items-start gap-12 text-left">
      <div className="font-heading relative flex w-full flex-col items-center justify-center gap-8 text-left">
        <div className="relative flex w-full items-center justify-between gap-0 text-left text-6xl">
          <div className="items-top flex flex-1 gap-8">
            <div className="relative h-16 max-w-3xl">
              <b className="top-0 left-0 inline-block w-full leading-none tracking-tight">
                <span>{title1}</span>
                <span className="text-white">
                  <InlineHighlight>{highlightTitle}</InlineHighlight>
                </span>
                <span>{title2}</span>
              </b>
            </div>
            <ArrowDown className="text-accent1 h-32 w-32" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col items-end justify-center gap-5 self-stretch py-7">
            <b className="relative inline-block max-w-lg text-xl leading-tight">{subtitle}</b>
            <div className="flex gap-2">
              <div className="bg-primary flex h-10 w-10 items-center justify-center">
                <MoveUpRight className="text-background" />
              </div>
              <Button variant="default" size="lg" className="bg-primary text-background rounded-none font-bold">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-foreground/5 flex items-start gap-2 self-stretch overflow-hidden p-2">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="box-border flex h-56 flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <b className="font-heading text-primary text-5xl">{stat.value}</b>
                <b className="font-body relative text-center font-bold">{stat.label}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
