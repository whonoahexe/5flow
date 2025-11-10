import { ArrowDown } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';

interface WorkflowStat {
  value: string;
  label: string;
}

interface WorkflowProps {
  title: React.ReactNode;
  subtitle: string;
  statsData: WorkflowStat[];
}

const Workflow = ({ title, statsData }: WorkflowProps) => {
  return (
    <div className="font-heading relative flex w-full flex-col gap-8 px-4 sm:px-6">
      <FullBleedLines className="flex flex-1 flex-col items-center justify-between gap-8 sm:flex-row sm:gap-0">
        <div className="flex flex-1 flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <b className="max-w-full text-center text-4xl leading-none tracking-tight sm:max-w-3xl sm:text-left sm:text-6xl">
            {title}
          </b>
          <ArrowDown className="text-accent1 h-20 w-20 sm:h-32 sm:w-32" strokeWidth={1.5} />
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
            <b className="font-body text-primary text-4xl sm:text-6xl">{stat.value}</b>
            <b className="relative text-center text-lg leading-none sm:text-2xl">{stat.label}</b>
          </div>
        ))}
      </FullBleedLines>
    </div>
  );
};

export default Workflow;
