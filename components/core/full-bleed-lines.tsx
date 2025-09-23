import { cn } from '@/lib/utils';

interface FullBleedLinesProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const FullBleedLines = ({ className, children, ...rest }: FullBleedLinesProps) => {
  return (
    <div
      {...rest}
      className={cn(
        "relative before:absolute before:top-0 before:left-1/2 before:h-px before:w-[100dvw] before:-translate-x-[50dvw] before:transform before:bg-black/5 before:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[100dvw] after:-translate-x-[50dvw] after:transform after:bg-black/5 after:content-['']",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FullBleedLines;
