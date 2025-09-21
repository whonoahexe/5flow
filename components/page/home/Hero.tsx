import Pixel from '@/components/core/pixel';
import { Button } from '@/components/ui/button';
import PatternOverlay from '@/components/core/pattern-overlay';
import { ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Hero() {
  return (
    <div className="relative min-h-[80vh] bg-background">
      {/* Left-side pattern overlay */}
      <PatternOverlay /> 
      {/* Big bold text in second column, second row */}
  <div className="absolute top-[16%] z-30 w-full py-6 sm:py-10 md:py-16 lg:py-24 pl-2 sm:pl-6 md:pl-24 lg:pl-48">
        <div className="px-2">
          <Separator className='absolute left-0 w-full' />
          <h1
            className="font-heading text-foreground relative font-semibold w-full max-w-4xl text-left text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[100%] tracking-tighter"
          >
            Take creative vision to market reality
          </h1>
          <Separator className="mt-4 absolute left-0 w-full" />
          <div
            className="font-heading relative text-left text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-[100%] tracking-tighter text-primary mt-4"
          >
            Faster. Smarter. At Scale.
          </div>
          <Separator className="absolute left-0 w-full" />
          <Separator className="mt-14 absolute left-0 w-full" />
          <div
            className="font-body text-foreground/70 relative w-full max-w-3xl text-left text-base leading-[150%] tracking-tight mt-14"
          >
            5FLOW helps global brands unify workflows, speed up execution, and keep every touchpoint consistent. With
            our expertise in packaging, content, and creative production powered by intelligent automation, we transform
            the way brands operate in today’s connected world.
          </div>
          <Separator className="absolute left-0 w-full"/>
          <Separator className="mt-14 absolute left-0 w-full" />
          <div className=" flex flex-row gap-2 mt-14">
            <Button className="font-aptos bg-primary font-semibold text-background rounded-none">
              Let&apos;s Talk Transformation
            </Button>
            <Button className="flex items-center justify-center bg-primary p-0 rounded-none">
              <ArrowUpRight className="text-background" />
            </Button>
          </div>
          <Separator className="absolute left-0 w-full" />
        </div>
      </div>
      {/* Border grid layer (above) */}
  <div className="pointer-events-none absolute inset-0 z-10 grid h-full w-full grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 grid-rows-2 sm:grid-rows-3 md:grid-rows-4">
        {Array.from({ length: 32 }).map((_, i) => {
          const col = i % 8;
          let borderStyle = {};
          // Only show vertical (right) border for the 4th column
          if (col === 3) {
            return <Pixel key={i} size="100%" className="border-r border-border" />;
          }
          return <Pixel key={i} size="100%" />;
        })}
      </div>
      {/* Color grid layer (below) */}
  <div className="absolute inset-0 z-0 grid h-full w-full grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 grid-rows-2 sm:grid-rows-3 md:grid-rows-4">
        {(() => {
          const colorClassMap: Record<string, string> = {
            white: 'bg-background',
            lavender: 'bg-accent2/40',
            mediumpurple: 'bg-accent1',
            limegreen: 'bg-success',
            darkblue: 'bg-primary',
            lightskyblue: 'bg-accent2',
          };
          const gridColors = [
            ['white', 'white', 'white', 'lavender', 'mediumpurple', 'limegreen', 'darkblue', 'white'],
            ['white', 'white', 'white', 'white', 'lavender', 'lightskyblue', 'limegreen', 'darkblue'],
            ['white', 'white', 'white', 'white', 'lavender', 'mediumpurple', 'lightskyblue', 'darkblue'],
            ['white', 'white', 'white', 'lavender', 'lavender', 'lavender', 'mediumpurple', 'darkblue'],
          ];
          return gridColors.flatMap((row, rowIdx) =>
            row.map((color, colIdx) => (
              <Pixel key={rowIdx * 8 + colIdx} size="100%" className={colorClassMap[color]} />
            ))
          );
        })()}
      </div>
    </div>
  );
}
