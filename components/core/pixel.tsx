interface pixelProps {
  size?: string | number;
  background?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Pixel: React.FC<pixelProps> = ({ size = '100%', background = 'transparent', style, className, children }) => {
  // If className is provided, don't set background inline (let Tailwind handle it)
  const mergedStyle = className
    ? { width: size, height: size, boxSizing: 'border-box' as 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }
    : { width: size, height: size, boxSizing: 'border-box' as 'border-box', background, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style };
  return (
    <div className={className} style={mergedStyle}>
      {children}
    </div>
  );
};

export default Pixel;
