import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';
import HeroBg from './HeroBg';

const Hero = () => {
  return (
    <div className="relative flex min-h-dvh flex-col justify-center">
      {/* Hero Bg pixels */}
      <div className="pointer-events-none absolute top-[88px] bottom-0 left-1/2 -z-10 w-screen -translate-x-1/2">
        <HeroBg
          defaultColor="#ffffff"
          tileColors={[
            // row 0
            [undefined, undefined, undefined, '#D1DAFD', 'var(--accent1)', 'var(--success)', 'var(--primary)'],
            // row 1
            [
              undefined,
              undefined,
              undefined,
              undefined,
              '#D1DAFD',
              'var(--accent2)',
              'var(--success)',
              'var(--primary)',
            ],
            // row 2
            [
              undefined,
              undefined,
              undefined,
              undefined,
              '#D1DAFD',
              'var(--accent1)',
              'var(--accent2)',
              'var(--primary)',
            ],
            // row 3
            [undefined, undefined, undefined, '#D1DAFD', '#D1DAFD', '#D1DAFD', 'var(--accent1)', 'var(--primary)'],
          ]}
        />
      </div>
      {/* Hero content */}
      <div className="flex flex-col gap-14 px-2">
        <div className="mt-24 flex flex-col gap-4">
          <FullBleedLines>
            <p className="font-heading text-foreground max-w-4xl text-8xl font-semibold tracking-tighter">
              Take creative vision to market reality
            </p>
          </FullBleedLines>

          <FullBleedLines>
            <h1 className="font-heading text-primary text-5xl tracking-tighter">Faster. Smarter. At Scale.</h1>
          </FullBleedLines>
        </div>
        <FullBleedLines>
          <div className="font-body text-foreground/70 max-w-3xl tracking-tight">
            5FLOW helps global brands unify workflows, speed up execution, and keep every touchpoint consistent. With
            our expertise in packaging, content, and creative production powered by intelligent automation, we transform
            the way brands operate in today’s connected world.
          </div>
        </FullBleedLines>
        <FullBleedLines>
          <div className="flex gap-8">
            <Button variant="default" size="lg" className="rounded-none">
              Let&apos;s Talk Transformation
            </Button>
            <div className="bg-primary flex h-10 w-10 items-center justify-center">
              <MoveUpRight className="text-background" />
            </div>
          </div>
        </FullBleedLines>
      </div>
    </div>
  );
};

export default Hero;
