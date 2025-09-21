import { Button } from '@/components/ui/button';
import Pixel from '@/components/core/pixel';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const colorVarMap: Record<string, string> = {
  white: '#fff',
  lavender: 'var(--lavender)', // you can do this by using bg-accent1/[lightness]
  mediumpurple: 'var(--mediumpurple)', // accent1
  limegreen: 'var(--limegreen)', // success
  darkblue: 'var(--darkblue)', // primary
  lightskyblue: 'var(--lightskyblue)', // accent2
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

export function Cta({ leftTitle, leftSubtitle, rightTitle, rightDesc, buttonText }: CtaProps) {
  return (
    <>
      {/* Full-area colored grid background */}
      <div className="relative mt-14 flex w-full flex-col items-center">
        {/* Dark blue background behind last row */}
        <div
          className="absolute left-0"
          style={{ top: 3 * 120 + 'px', width: '100%', height: '120px', background: '#0526A9', zIndex: 0 }}
        />
        <div
          className="z-10 grid gap-0"
          style={{ gridTemplateRows: 'repeat(4, 120px)', gridTemplateColumns: 'repeat(16, 120px)' }}
        >
          {gridColors.flatMap((row, rowIdx) =>
            row.map((color, colIdx) => {
              // 3rd row (rowIdx 2), 2nd col (colIdx 1): add ArrowUpRight icon
              if (rowIdx === 2 && colIdx === 1) {
                return (
                  <Pixel
                    key={`${rowIdx}-${colIdx}`}
                    size={120}
                    background={colorVarMap[color] || color}
                    className="flex items-center justify-center"
                  >
                    <ArrowUp size={48} color="#000" />
                  </Pixel>
                );
              }
              return <Pixel key={`${rowIdx}-${colIdx}`} size={120} background={colorVarMap[color] || color} />;
            })
          )}
        </div>
      </div>
      <div className="bg-darkblue font-century-gothic relative box-border flex h-[460px] w-full flex-col items-center justify-center bg-[#0526A9] px-48 pb-[80px] text-left text-5xl text-white">
        <div className="font-century-gothic relative m-0 flex w-full items-start justify-between gap-0 border-none p-0 text-left text-5xl text-white">
          <div className="flex w-[473px] flex-col items-start gap-4">
            <b className="relative self-stretch leading-[100%] tracking-[-0.06em]">{leftTitle}</b>
            <div className="flex items-center justify-between gap-0 self-stretch">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 24L38 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M24 10L38 24L24 38"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <b className="relative leading-[100%] tracking-[-0.06em]">{leftSubtitle}</b>
            </div>
          </div>
          <div
            className="flex flex-col items-end justify-end gap-4"
            style={{ fontFamily: 'var(--font-century-gothic)', fontWeight: 700 }}
          >
            <b className="relative leading-[100%] tracking-[-0.06em]">{rightTitle}</b>
            <div className="font-aptos flex items-center justify-end gap-4 text-right text-base">
              <div
                className="relative inline-block w-[391px] shrink-0 leading-[150%] font-semibold tracking-[-0.04em]"
                style={{ fontFamily: 'var(--font-metropolis)', fontWeight: 400 }}
              >
                {rightDesc}
              </div>
              <div className="bg-limegreen text-gray box-border flex min-h-[40px] items-center justify-center gap-2 py-[9.5px] text-center text-sm">
                <Button className="font-aptos bg-success min-h-[40px] font-semibold text-black">
                  Book a Demo
                  <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
