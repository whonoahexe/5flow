import Link from 'next/link';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';
import HeroLottieBg from './HeroLottieBg';

const Hero = () => {
  return (
    <div className="relative flex min-h-dvh flex-col justify-center">
      {/* Hero background: Lottie (replaces pixel grid for now) */}
      <div className="pointer-events-none absolute top-[88px] bottom-0 left-1/2 -z-10 w-screen -translate-x-1/2">
        <HeroLottieBg />
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
          <div className="font-body text-foreground max-w-3xl tracking-tight">
            {`5FLOW helps global brands unify workflows, speed up execution, and keep every touchpoint consistent. With
            our expertise in packaging, content, and creative production powered by intelligent automation, we transform
            the way brands operate in today’s connected world.`}
          </div>
        </FullBleedLines>
        <FullBleedLines>
          <Link href="/contact" className="flex">
            <Button
              size="lg"
              className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2"
            >
              <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 items-center px-6 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7">
                {`Let’s Talk Transformation`}
              </span>
              <span
                className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-10 w-10 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)]"
                aria-hidden="true"
              >
                <MoveUpRight className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </FullBleedLines>
      </div>
    </div>
  );
};

export default Hero;
