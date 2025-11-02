import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';
import HeroLottieBg from './HeroLottieBg';

const Hero = () => {
  return (
    <div className="relative flex min-h-dvh flex-col justify-center">
      {/* background lottie - position adjusted responsively */}
      <div className="pointer-events-none absolute top-16 bottom-0 left-1/2 -z-10 w-screen -translate-x-1/2 sm:top-20 md:top-24">
        <HeroLottieBg />
      </div>

      {/* Hero content */}
      <div className="flex flex-col gap-8 px-4 sm:px-6 md:gap-14 lg:px-8">
        <div className="mt-16 flex flex-col gap-4 md:mt-24">
          <FullBleedLines>
            <p className="font-heading text-foreground max-w-full text-3xl leading-tight font-semibold tracking-tighter sm:max-w-2xl sm:text-5xl md:max-w-4xl md:text-8xl">
              Take creative vision to market reality
            </p>
          </FullBleedLines>

          <FullBleedLines>
            <h1 className="font-heading text-primary text-2xl tracking-tighter sm:text-3xl md:text-5xl">
              Faster. Smarter. At Scale.
            </h1>
          </FullBleedLines>
        </div>
        <FullBleedLines>
          <div className="font-body text-foreground max-w-full text-sm tracking-tight sm:max-w-2xl sm:text-base md:max-w-3xl">
            {`5FLOW helps global brands unify workflows, speed up execution, and keep every touchpoint consistent. With
            our expertise in packaging, content, and creative production powered by intelligent automation, we transform
            the way brands operate in today’s connected world.`}
          </div>
        </FullBleedLines>
        <FullBleedLines>
          <Link href="/contact" className="flex">
            <Button
              size="lg"
              className="group/cta-hero active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-3 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-300 ease-[var(--easing-smooth)] hover:gap-0 active:translate-x-px active:scale-95 active:ring-2 active:ring-offset-2"
            >
              <span className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta-hero:px-7 sm:h-10 sm:px-6">
                {`Let’s Talk Transformation`}
              </span>
              <span
                className="bg-primary text-primary-foreground group-hover/cta-hero:bg-primary/90 group-active/cta-hero:bg-primary/80 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] sm:h-10 sm:w-10"
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
