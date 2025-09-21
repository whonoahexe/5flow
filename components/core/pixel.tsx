interface pixelProps {
  size?: string | number;
  background?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Pixel: React.FC<pixelProps> = ({ size = '100%', background = 'transparent', style, className, children }) => (
  <div
    className={className}
    style={{
      width: size,
      height: size,
      boxSizing: 'border-box',
      background,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

export default Pixel;
