import Pixel from '@/components/core/pixel';
import { Button } from '@/components/ui/button';
import PatternOverlay from '@/components/core/pattern-overlay';
import { ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Hero() {
  return (
    <div className="relative min-h-[80vh] bg-white">
      {/* Left-side pattern overlay */}
      <PatternOverlay />
      {/* Left margin.svg above grid */}
      {/* Big bold text in second column, second row */}
      <div className="absolute top-[16%] z-30 w-full py-[96px] pl-[192px]">
        <div className="px-[8px]">
          <Separator className="my-0 h-5 w-full border-t-1" />
          <b
            className="text-gray relative inline-block w-[832px] text-left text-8xl leading-[100%] tracking-[-0.06em]"
            style={{ fontFamily: 'var(--font-century-gothic)' }}
          >
            Take creative vision to market reality
          </b>
          <Separator className="my-0 mt-4 h-5 w-full border-t-1" />
          <div
            className="relative mt-4 text-left text-5xl leading-[100%] tracking-[-0.06em] text-blue-800"
            style={{ fontFamily: 'var(--font-century-gothic)' }}
          >
            Faster. Smarter. At Scale.
          </div>
          <Separator className="my-0 h-5 w-full border-t-1" />
          <Separator className="my-0 mt-14 h-5 w-full border-t-1" />
          <div
            className="text-gray relative mt-14 inline-block w-[788px] text-left text-base leading-[150%] tracking-[-0.04em]"
            style={{ fontFamily: 'var(--font-metropolis)' }}
          >
            5FLOW helps global brands unify workflows, speed up execution, and keep every touchpoint consistent. With
            our expertise in packaging, content, and creative production powered by intelligent automation, we transform
            the way brands operate in today’s connected world.
          </div>
          <Separator className="my-0 h-5 w-full border-t-1" />
          <Separator className="my-0 mt-14 w-full border-t-1" />
          <div className="mt-14 flex flex-row gap-2">
            <Button className="font-aptos min-h-[40px] bg-[#0526A9] font-semibold text-white">
              Let&apos;s Talk Transformation
            </Button>
            <Button className="flex min-h-[40px] items-center justify-center bg-[#0526A9] p-0">
              <ArrowUpRight />
            </Button>
          </div>
          <Separator className="my-0 h-5 w-full border-t-1" />
        </div>
      </div>
      {/* Border grid layer (above) */}
      <div className="pointer-events-none absolute inset-0 z-10 grid h-full w-full grid-cols-8 grid-rows-4">
        {Array.from({ length: 32 }).map((_, i) => {
          const col = i % 8;
          let borderStyle = {};
          // Only show vertical (right) border for the 4th column
          if (col === 3) {
            borderStyle = {
              borderRight: '1px solid #e5e5e5',
            };
          }
          return <Pixel key={i} size="100%" background="transparent" style={borderStyle} />;
        })}
      </div>
      {/* Color grid layer (below) */}
      <div className="absolute inset-0 z-0 grid h-full w-full grid-cols-8 grid-rows-4">
        {(() => {
          const colorVarMap: Record<string, string> = {
            white: '#fff',
            lavender: 'var(--lavender)',
            mediumpurple: 'var(--mediumpurple)',
            limegreen: 'var(--limegreen)',
            darkblue: 'var(--darkblue)',
            lightskyblue: 'var(--lightskyblue)',
          };
          const gridColors = [
            ['white', 'white', 'white', 'lavender', 'mediumpurple', 'limegreen', 'darkblue', 'white'],
            ['white', 'white', 'white', 'white', 'lavender', 'lightskyblue', 'limegreen', 'darkblue'],
            ['white', 'white', 'white', 'white', 'lavender', 'mediumpurple', 'lightskyblue', 'darkblue'],
            ['white', 'white', 'white', 'lavender', 'lavender', 'lavender', 'mediumpurple', 'darkblue'],
          ];
          return gridColors.flatMap((row, rowIdx) =>
            row.map((color, colIdx) => (
              <Pixel key={rowIdx * 8 + colIdx} size="100%" style={{ background: colorVarMap[color] }} />
            ))
          );
        })()}
      </div>
    </div>
  );
}
