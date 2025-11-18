import { cn } from '@/lib/utils';

interface FullBleedLinesProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

// Hid the grid lines (add border in future if needed)
const FullBleedLines = ({ className, children, ...rest }: FullBleedLinesProps) => {
  return (
    <div
      {...rest}
      className={cn(
        "relative before:absolute before:top-0 before:left-1/2 before:h-px before:w-[100dvw] before:-translate-x-[50dvw] before:transform before:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-[100dvw] after:-translate-x-[50dvw] after:transform after:content-['']",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FullBleedLines;
