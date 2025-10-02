import Pixel from '@/components/core/pixel';
import { cn } from '@/lib/utils';
import type { CSSProperties, ReactNode } from 'react';

const colorVarMap: Record<string, string> = {
  background: 'var(--background)',
  primary: 'var(--primary)',
  warning: 'var(--warning)',
  success: 'var(--success)',
  accent1: 'var(--accent1)',
  accent2: 'var(--accent2)',
};

export interface PixelGridProps {
  pattern: string[][];
  pixelSize?: string;
  icon?: {
    row: number;
    col: number;
    element: ReactNode;
  };
  className?: string;
}

const CtaPixelGrid = ({ pattern, pixelSize = '7.5rem', icon, className }: PixelGridProps) => {
  if (!pattern.length) return null;

  const columnCount = pattern[0]?.length ?? 0;
  const style: (CSSProperties & { ['--pixel-size']?: string }) | undefined = columnCount
    ? {
        '--pixel-size': pixelSize,
        gridTemplateColumns: `repeat(${columnCount}, var(--pixel-size))`,
        gridAutoRows: 'var(--pixel-size)',
      }
    : undefined;

  return (
    <div className={cn('grid w-fit', className)} style={style}>
      {pattern.flatMap((row, rowIdx) =>
        row.map((color, colIdx) => {
          const background = colorVarMap[color] ?? 'transparent';
          const isIconCell = icon && icon.row === rowIdx && icon.col === colIdx;

          return (
            <Pixel
              key={`${rowIdx}-${colIdx}`}
              size="var(--pixel-size)"
              background={background}
              className="flex items-center justify-center"
            >
              {isIconCell ? icon.element : null}
            </Pixel>
          );
        })
      )}
    </div>
  );
};

export default CtaPixelGrid;
