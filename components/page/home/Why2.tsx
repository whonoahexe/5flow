import PatternOverlay from '@/components/core/pattern-overlay';
import type { NextPage } from 'next';
import { Separator } from '@/components/ui/separator';

const Why2: NextPage = () => (
  <div className="font-heading relative box-border flex w-full flex-col items-center gap-16 px-48 py-16 text-left text-6xl">
    {/* Left-side pattern overlay */}
    <PatternOverlay />
    <PatternOverlay left="auto" right="152px" height="100vh" />
    <div className="box-border flex w-full flex-col items-center justify-center overflow-hidden px-2 py-7 text-center text-8xl">
      <div className="">
        <Separator className="absolute left-0 w-full" />
        <div className="relative h-48 w-250">
          <div className="absolute top-28 left-1/2 h-20 w-128 -translate-x-1/2" />
          <b className="absolute top-0 left-0 inline-block w-250 leading-none tracking-tighter">
            <span>{`Built for the Way Brands `}</span>

            <span className="relative mx-1 mb-4 inline-block align-middle">
              <span className="bg-accent1 absolute inset-0 -z-10"></span>
              <span className="text-background relative">Work Today</span>
            </span>
          </b>
        </div>
        <Separator className="absolute left-0 w-full" />
      </div>
    </div>
  </div>
);
export default Why2;
