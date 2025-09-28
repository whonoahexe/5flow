import React, { forwardRef, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface PatternOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  zIndex?: number;
}

const normalize = (v?: string | number) => (v == null ? undefined : typeof v === 'number' ? `${v}px` : v);

const PatternOverlay = forwardRef<HTMLDivElement, PatternOverlayProps>(
  (
    {
      left = '152px',
      right = '152px',
      top = 0,
      width = '40px',
      height = '100%',
      zIndex = 0,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const mergedStyle = useMemo(
      () => ({
        left: normalize(left),
        right: normalize(right),
        top: normalize(top),
        width: normalize(width),
        height: normalize(height),
        zIndex,
        ...((style as React.CSSProperties) || {}),
      }),
      [left, right, top, width, height, zIndex, style]
    );

    return (
      <div
        {...rest}
        ref={ref}
        aria-hidden
        className={cn(
          'pointer-events-none absolute bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10',
          className
        )}
        style={mergedStyle}
      />
    );
  }
);

export default React.memo(PatternOverlay);
