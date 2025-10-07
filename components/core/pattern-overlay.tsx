import { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface PatternOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right' | 'both';
  margin?: string | number;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  zIndex?: number;
}

const normalize = (v?: string | number) => (v == null ? undefined : typeof v === 'number' ? `${v}px` : v);

const PatternOverlay = ({
  side = 'left',
  margin = '152px',
  top = 0,
  width = '40px',
  height = '100%',
  zIndex = 0,
  className,
  style,
  ...rest
}: PatternOverlayProps) => {
  const commonClassName = cn(
    'pointer-events-none absolute bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10',
    className
  );

  const baseStyle = useMemo(
    () => ({
      top: normalize(top),
      width: normalize(width),
      height: normalize(height),
      zIndex,
      ...((style as React.CSSProperties) || {}),
    }),
    [top, width, height, zIndex, style]
  );

  if (side === 'both') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...otherRest } = rest;
    return (
      <>
        <div
          key="left"
          {...otherRest}
          aria-hidden
          className={commonClassName}
          style={{ ...baseStyle, left: normalize(margin), right: 'auto' }}
        />
        <div
          key="right"
          {...otherRest}
          aria-hidden
          className={commonClassName}
          style={{ ...baseStyle, left: 'auto', right: normalize(margin) }}
        />
      </>
    );
  }

  const mergedStyle = {
    ...baseStyle,
    left: side === 'left' ? normalize(margin) : 'auto',
    right: side === 'right' ? normalize(margin) : 'auto',
  };

  return <div {...rest} aria-hidden className={commonClassName} style={mergedStyle} />;
};

export default PatternOverlay;
