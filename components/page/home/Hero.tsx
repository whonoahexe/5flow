import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex min-h-dvh flex-col justify-center">
      {/* Hero content */}
      <div className="flex flex-col gap-14 px-2">
        <div className="flex flex-col gap-4">
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
