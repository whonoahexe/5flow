import FullBleedLines from '@/components/core/full-bleed-lines';
import type { NextPage } from 'next';

const Why2: NextPage = () => (
  <div className="font-heading relative box-border flex w-full flex-col items-center gap-16 py-16 text-left text-6xl">
    <FullBleedLines>
      <div className="box-border flex w-full flex-col items-center justify-center overflow-hidden px-2 text-center text-8xl">
        <div className="">
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
        </div>
      </div>
    </FullBleedLines>
  </div>
);

export default Why2;
