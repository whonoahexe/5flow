'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface PatternOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right' | 'both';
  margin?: string | number | 'container';
  containerAlign?: 'inside' | 'outside';
  containerSelector?: string;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  zIndex?: number;
}

const normalize = (v?: string | number) => (v == null ? undefined : typeof v === 'number' ? `${v}px` : v);
const toPx = (v?: string | number): number | undefined => {
  if (v == null) return undefined;
  if (typeof v === 'number') return v;
  const m = /([\d.]+)px$/i.exec(v.trim());
  return m ? parseFloat(m[1]) : undefined;
};

const PatternOverlay = ({
  side = 'left',
  margin = '152px',
  containerAlign = 'outside',
  containerSelector = '.container',
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

  // Dynamic alignment to container
  const [containerOffsets, setContainerOffsets] = useState<{ left: number; right: number } | null>(null);
  const observedElRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (margin !== 'container') {
      setContainerOffsets(null);
      return;
    }

    const compute = () => {
      const root: HTMLElement | null = overlayRef.current?.parentElement ?? document.body;
      const el = (root?.querySelector(containerSelector) ??
        document.querySelector(containerSelector)) as HTMLElement | null;
      observedElRef.current = el;
      if (!el) {
        setContainerOffsets(null);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const overlayW = toPx(width) ?? 40; // default fallback

      const insideLeft = rect.left;
      const insideRight = Math.max(0, vw - rect.right);
      const outsideLeft = Math.max(0, rect.left - overlayW);
      const outsideRight = Math.max(0, vw - rect.right - overlayW);

      setContainerOffsets(
        containerAlign === 'inside'
          ? { left: insideLeft, right: insideRight }
          : { left: outsideLeft, right: outsideRight }
      );
    };

    // Initial and on resize
    compute();
    let rafId: number | null = null;
    const onResize = () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(compute);
    };
    window.addEventListener('resize', onResize);

    // Observe container size/position changes
    let ro: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => compute());
      const root: HTMLElement | null = overlayRef.current?.parentElement ?? document.body;
      const el = (root?.querySelector(containerSelector) ??
        document.querySelector(containerSelector)) as HTMLElement | null;
      if (el) ro.observe(el);
    }

    // Also re-compute on DOM changes that might affect layout
    const mo = new MutationObserver(() => compute());
    const observeRoot = overlayRef.current?.parentElement ?? document.body;
    mo.observe(observeRoot, { childList: true, subtree: true, attributes: true });

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafId != null) cancelAnimationFrame(rafId);
      if (ro && observedElRef.current) ro.unobserve(observedElRef.current);
      mo.disconnect();
    };
  }, [margin, containerSelector, containerAlign, width]);

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
          ref={overlayRef}
          style={{
            ...baseStyle,
            left:
              margin === 'container'
                ? containerOffsets
                  ? `${containerOffsets.left}px`
                  : undefined
                : normalize(margin),
            right: 'auto',
            // Hide until positioned when using container mode to avoid jank
            opacity: margin === 'container' && !containerOffsets ? 0 : baseStyle.opacity,
          }}
        />
        <div
          key="right"
          {...otherRest}
          aria-hidden
          className={commonClassName}
          style={{
            ...baseStyle,
            left: 'auto',
            right:
              margin === 'container'
                ? containerOffsets
                  ? `${containerOffsets.right}px`
                  : undefined
                : normalize(margin),
            opacity: margin === 'container' && !containerOffsets ? 0 : baseStyle.opacity,
          }}
        />
      </>
    );
  }

  const mergedStyle = {
    ...baseStyle,
    left:
      side === 'left'
        ? margin === 'container'
          ? containerOffsets
            ? `${containerOffsets.left}px`
            : undefined
          : normalize(margin)
        : 'auto',
    right:
      side === 'right'
        ? margin === 'container'
          ? containerOffsets
            ? `${containerOffsets.right}px`
            : undefined
          : normalize(margin)
        : 'auto',
    opacity: margin === 'container' && !containerOffsets ? 0 : baseStyle.opacity,
  } as React.CSSProperties;

  return <div {...rest} aria-hidden className={commonClassName} style={mergedStyle} ref={overlayRef} />;
};

export default PatternOverlay;
