'use client';

import { useEffect, useRef, useState } from 'react';

type HeroBgProps = {
  columns?: number;
  className?: string;
  colors?: string[];
  tileColors?: Array<Array<string | null | undefined>>;
  defaultColor?: string;
};

// Renders a full-size background divided into N columns, each filled with square tiles
const HeroBg: React.FC<HeroBgProps> = ({
  columns = 8,
  className = '',
  colors = [
    'var(--chart-1)',
    'var(--chart-2)',
    'var(--chart-3)',
    'var(--chart-4)',
    'var(--chart-5)',
    'var(--primary)',
    'var(--secondary)',
    'var(--accent)',
  ],
  tileColors,
  defaultColor = '#ffffff',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        setSize({ width: cr.width, height: cr.height });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { width, height } = size;

  const colWidth = columns > 0 ? width / columns : 0;
  // Use floor to avoid rendering a partial bottom row that would overflow the container
  const rows = colWidth > 0 ? Math.floor(height / colWidth) : 0;

  // Avoid hydration mismatches and flicker before measured
  const ready = width > 0 && height > 0 && rows > 0;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none h-full w-full ${className}`}
      style={{
        // Create a new stacking context to be safe, actual z-index should be managed by parent
        contain: 'layout paint size style',
      }}
    >
      {ready && (
        <div className="flex h-full w-full">
          {Array.from({ length: columns }).map((_, colIdx) => (
            <div key={colIdx} style={{ width: `${100 / columns}%` }} className="flex h-full flex-col">
              {Array.from({ length: rows }).map((_, rowIdx) => {
                const explicit = tileColors?.[rowIdx]?.[colIdx];
                // If tileColors is provided, only use explicit entries, otherwise fall back to patterned colors
                const color = tileColors
                  ? explicit // may be undefined/null
                  : colors[(colIdx + rowIdx) % colors.length];
                return (
                  <div
                    key={rowIdx}
                    className="w-full"
                    style={{
                      aspectRatio: '1 / 1',
                      background: color ?? defaultColor,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroBg;
