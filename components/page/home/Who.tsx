import { ArrowDown, ArrowLeft, ArrowRight, Layers2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FullBleedLines from '@/components/core/full-bleed-lines';

const Who = () => (
  <div className="text-foreground font-heading relative box-border flex w-full flex-col items-stretch gap-16 py-16 text-left text-6xl">
    <FullBleedLines>
      <div className="text-background flex items-stretch justify-between gap-0 self-stretch">
        <div className="flex items-center justify-center gap-8 px-2">
          <ArrowDown className="text-accent1" size={126} />
          <div className="relative h-16 w-2xl">
            <div className="absolutew-32 h-12" />
            <b className="text-foreground absolute top-0 left-2 inline-block w-full leading-none tracking-tighter">
              <span>{`Who `}</span>
              <span>Do We Solve It For?</span>
            </b>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 self-stretch px-2 py-7">
          <Button className="bg-primary flex h-20 min-h-10 w-20 items-center justify-center rounded-none p-0">
            <ArrowLeft size={48} />
          </Button>
          <Button className="bg-primary flex h-20 min-h-10 w-20 items-center justify-center rounded-none p-0">
            <ArrowRight size={48} />
          </Button>
        </div>
      </div>
    </FullBleedLines>

    <div className="self-stretch">
      <FullBleedLines>
        <div className="bg-foreground/10 flex items-start gap-2 self-stretch overflow-hidden p-2 text-4xl">
          {[{ label: 'Logo !' }, { label: 'Logo @' }, { label: 'Logo #' }].map((item, idx) => (
            <Card
              className="border-gainsboro bg-background flex h-36 w-2xl shrink-0 flex-col items-center justify-center rounded-2xl border-solid p-2"
              key={item.label}
            >
              <div className="flex items-center justify-between gap-0 self-stretch p-8">
                <div className="flex flex-col items-start">
                  <b className="relative leading-none tracking-tight">{item.label}</b>
                </div>
                <Layers2 strokeWidth={1.5} className="text-primary" size={80} />
              </div>
            </Card>
          ))}
        </div>
      </FullBleedLines>
    </div>
  </div>
);

export default Who;
