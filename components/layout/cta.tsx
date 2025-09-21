"use client";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Pixel from '@/components/core/pixel';
import { ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';

const colorVarMap: Record<string, string> = {
  white: 'bg-background',
  lavender: 'bg-accent2/40',
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
  // Responsive colCount based on window width
  const [colCount, setColCount] = useState(16);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1536) setColCount(16); // 2xl
      else if (width >= 1280) setColCount(14); // xl
      else if (width >= 1024) setColCount(12); // lg
      else if (width >= 768) setColCount(8); // md
      else if (width >= 640) setColCount(6); // sm
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
          className="absolute left-0 bg-primary"
          style={{ top: 3 * 120 + 'px', width: '100%', height: '120px', zIndex: 0 }}
        />
        <div
          className="z-10 grid gap-0 overflow-hidden w-full"
          style={{
            gridTemplateRows: 'repeat(4, 120px)',
            gridTemplateColumns:
              colCount <= 5
                ? `repeat(${colCount}, 120px)`
                : `repeat(5, 120px) repeat(${colCount - 5}, 1fr)`
          }}
        >
          {gridColors.flatMap((row, rowIdx) =>
            row.slice(0, colCount).map((color, colIdx) => {
              // First 5: fixed square, rest: flexible
              const isFixed = colIdx < 5;
              // 3rd row (rowIdx 2), 2nd col (colIdx 1): add ArrowUpRight icon
              if (rowIdx === 2 && colIdx === 1) {
                return (
                  <Pixel
                    key={`${rowIdx}-${colIdx}`}
                    size={isFixed ? 120 : '100%'}
                    className={`${colorVarMap[color] || ''} flex items-center justify-center${isFixed ? '' : ' w-full h-full'}`}
                  >
                    <ArrowUp size={48} className="text-foreground" />
                  </Pixel>
                );
              }
              return (
                <Pixel
                  key={`${rowIdx}-${colIdx}`}
                  size={isFixed ? 120 : '100%'}
                  className={colorVarMap[color] || '' + (isFixed ? '' : ' w-full h-full')}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="bg-primary font-heading relative box-border flex h-auto md:h-112 w-full flex-col items-center justify-center px-4 md:px-24 lg:px-48 pb-10 md:pb-20 text-left text-2xl md:text-5xl text-background">
        <div className="font-heading relative m-0 flex w-full items-start justify-between gap-0 border-none p-0 text-left text-2xl md:text-5xl text-background">
          <div className="flex w-full md:w-96 flex-col items-start gap-4">
            <b className="relative self-stretch leading-[100%] tracking-tighter">{leftTitle}</b>
            <div className="flex items-center justify-between gap-0 self-stretch">
              <ArrowRight size={48} />
              <b className="relative leading-[100%] tracking-tighter">{leftSubtitle}</b>
            </div>
          </div>
          <div
            className="flex flex-col items-end justify-end gap-4 font-heading">
            <b className="relative leading-[100%] tracking-tighter">{rightTitle}</b>
            <div className="font-aptos flex flex-col md:flex-row items-end md:items-center justify-end gap-4 text-right text-base w-full">
              <div
                className="relative w-full md:w-96 shrink-0 leading-[150%] font-semibold tracking-tight font-body"
              >
                {rightDesc}
              </div>
              <div className="bg-success text-foreground box-border flex min-h-10 items-center justify-center gap-2 py-2 text-center text-sm w-full md:w-auto">
              <Button variant="success" className="rounded-none font-semibold tracking-tight">
                Book A Demo
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
