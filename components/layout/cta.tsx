'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Pixel from '@/components/core/pixel';

const colorVarMap: Record<string, string> = {
  white: 'bg-white',
  lavender: 'bg-accent2',
  mediumpurple: 'bg-accent1',
  limegreen: 'bg-success',
  darkblue: 'bg-primary',
  lightskyblue: 'bg-accent2',
};

const gridColors = [
  ['white', 'lightskyblue', ...Array(14).fill('white')],
  ['white', 'darkblue', 'lightskyblue', 'white', 'limegreen', ...Array(11).fill('white')],
  ['white', 'limegreen', 'mediumpurple', 'darkblue', ...Array(12).fill('white')],
  ['darkblue', 'mediumpurple', ...Array(14).fill('darkblue')],
];

interface CtaProps {
  leftTitle: string;
  leftSubtitle: string;
  rightTitle: string;
  rightDesc: string;
  buttonText: string;
}

export function Cta({ leftTitle, leftSubtitle, rightTitle, rightDesc }: CtaProps) {
  const [colCount, setColCount] = useState(16);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1536)
        setColCount(16); // 2xl
      else if (width >= 1280)
        setColCount(14); // xl
      else if (width >= 1024)
        setColCount(12); // lg
      else if (width >= 768)
        setColCount(8); // md
      else if (width >= 640)
        setColCount(6); // sm
      else setColCount(4); // xs
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Full-area colored grid background */}
      <div className="relative mt-14 flex w-full flex-col items-center">
        {/* Dark blue background behind last row */}
        <div
          className="bg-primary absolute left-0"
          style={{ top: 3 * 120 + 'px', width: '100%', height: '120px', zIndex: 0 }}
        />
        <div
          className="z-10 grid w-full gap-0 overflow-hidden"
          style={{
            gridTemplateRows: 'repeat(4, 120px)',
            gridTemplateColumns:
              colCount <= 5 ? `repeat(${colCount}, 120px)` : `repeat(5, 120px) repeat(${colCount - 5}, 1fr)`,
          }}
        >
          {gridColors.flatMap((row, rowIdx) =>
            row.slice(0, colCount).map((color, colIdx) => {
              // First 5: fixed square, rest: flexible
              const isFixed = colIdx < 5;
              // Map color names to CSS variable values for background
              const colorMapToVar: Record<string, string> = {
                white: 'var(--background)',
                lavender: 'var(--accent2)',
                mediumpurple: 'var(--accent1)',
                limegreen: 'var(--success)',
                darkblue: 'var(--primary)',
                lightskyblue: 'var(--accent2)',
              };
              const pixelBg = colorMapToVar[color] || 'transparent';
              if (rowIdx === 2 && colIdx === 1) {
                return (
                  <Pixel
                    key={`${rowIdx}-${colIdx}`}
                    size={isFixed ? 120 : '100%'}
                    background={pixelBg}
                    className={['flex items-center justify-center', !isFixed && 'h-full w-full']
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <ArrowUp size={48} className="text-foreground" />
                  </Pixel>
                );
              }
              return (
                <Pixel
                  key={`${rowIdx}-${colIdx}`}
                  size={isFixed ? 120 : '100%'}
                  background={pixelBg}
                  className={!isFixed ? 'h-full w-full' : ''}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="bg-primary flex h-[560px] w-full flex-col items-center justify-center px-48 py-30">
        <div className="text-background flex w-full justify-between">
          <div className="flex w-full max-w-md flex-col gap-4">
            <b className="text-5xl tracking-tighter">{leftTitle}</b>
            <div className="flex items-center justify-between">
              <ArrowRight size={48} />
              <b className="text-5xl tracking-tighter">{leftSubtitle}</b>
            </div>
          </div>

          <div className="flex w-full flex-col items-end justify-center gap-4">
            <b className="text-5xl tracking-tighter">{rightTitle}</b>
            <div className="flex w-full items-center justify-end gap-4">
              <p className="w-full max-w-96 text-right tracking-tight">{rightDesc}</p>
              <Button variant="success" className="rounded-none" size="lg">
                Book A Demo
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
