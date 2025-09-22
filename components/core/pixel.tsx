interface pixelProps {
  size?: string | number;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const Pixel: React.FC<pixelProps> = ({ size = '100%', background = 'transparent', className, children }) => (
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
    }}
  >
    {children}
  </div>
);

export default Pixel;
