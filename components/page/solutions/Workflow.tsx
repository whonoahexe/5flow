import InlineHighlight from '@/components/core/inline-highlight';
import { ArrowDown } from 'lucide-react';

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

const Workflow = ({ title1, title2, highlightTitle, subtitle, statsData }: WorkflowProps) => {
  return (
    <div className="font-heading relative box-border flex w-full flex-col items-start gap-8 px-4 text-left sm:gap-12 sm:px-6 md:px-0">
      <div className="font-heading relative flex w-full flex-col items-center justify-center gap-6 text-center sm:items-start sm:gap-8 sm:text-left">
        <div className="relative flex w-full flex-col items-center justify-between gap-6 text-4xl sm:flex-row sm:items-start sm:gap-0 sm:text-6xl">
          <div className="sm:items-top flex flex-1 flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <div className="relative h-auto max-w-full sm:h-16 sm:max-w-xl">
              <b className="top-0 left-0 inline-block w-full leading-tight tracking-tight">
                <span>{title1}</span>
                <span className="text-white">
                  <InlineHighlight>{highlightTitle}</InlineHighlight>
                </span>
                <span>{title2}</span>
              </b>
            </div>
            <ArrowDown className="text-accent1 h-16 w-16 sm:h-32 sm:w-32" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-4 sm:items-start sm:gap-5 sm:py-7">
            <b className="relative inline-block max-w-full text-lg leading-tight sm:max-w-lg sm:text-xl">{subtitle}</b>
          </div>
        </div>
        <div
          className={`bg-foreground/5 grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 sm:gap-2 ${
            statsData.length === 2 ? 'lg:grid-cols-2' : statsData.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
          }`}
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="box-border flex h-48 flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white sm:h-56"
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <b className="font-body text-primary text-4xl sm:text-5xl">{stat.value}</b>
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
