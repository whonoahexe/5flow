import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';

interface NeedProps {
  title1: string;
  highlightTitle: string;
  title2: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const Need = ({ title1, highlightTitle, title2, subtitle, description, buttonText }: NeedProps) => {
  return (
    <div className="text-gray font-heading relative box-border flex w-full flex-col items-start gap-12 px-48 py-16 text-left">
      <div className="bg-foreground/5 font-century-gothic relative box-border flex w-full flex-col items-start overflow-hidden p-2 text-left text-6xl text-white">
        <div className="bg-primary flex flex-col items-center justify-center self-stretch rounded-2xl py-16 pr-0 pl-8">
          <div className="flex flex-col items-start gap-14 self-stretch px-2 py-0">
            <div className="flex items-start justify-between gap-0 self-stretch">
              <div className="flex flex-col items-start gap-4">
                <div className="relative max-w-4xl">
                  <b className="top-0 left-0 inline-block w-full leading-none tracking-tight">
                    <span>{title1}</span>
                    <InlineHighlight>{highlightTitle}</InlineHighlight>
                    <span>{title2}</span>
                  </b>
                </div>
                <div className="text-success relative text-5xl leading-none tracking-tight">{subtitle}</div>
              </div>
              <ArrowUpRight className="max-h-full w-48" width={192} height={192} strokeWidth={1} />
            </div>
            <div className="font-metropolis relative text-base">
              <div className="inline-block max-w-2xl leading-relaxed tracking-tight">{description}</div>
              <div className="text-foreground mt-8 box-border flex items-center justify-start text-center text-sm">
                <div className="flex gap-8">
                  <Button variant="default" size="lg" className="bg-success text-foreground rounded-none font-bold">
                    {buttonText}
                  </Button>
                  <div className="bg-success flex h-10 w-10 items-center justify-center">
                    <MoveUpRight className="text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Need;
