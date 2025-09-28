interface pixelProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string | number;
  background?: string;
  children?: React.ReactNode;
}

const Pixel = ({ size = '100%', background = 'transparent', className, children, ...rest }: pixelProps) => (
  <div
    {...rest}
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
