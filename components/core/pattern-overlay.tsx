interface PatternOverlayProps {
  left?: string;
  right?: string;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  zIndex?: number;
  className?: string;
}

const PatternOverlay: React.FC<PatternOverlayProps> = ({
  left = '152px',
  right = '152px',
  top = 0,
  width = '40px',
  height = '100%',
  zIndex = 0,
  className = '',
}) => (
  <div
    className={`absolute bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10 ${className}`}
    style={{
      left,
      right,
      top,
      width,
      height,
      zIndex,
    }}
  />
);

export default PatternOverlay;
