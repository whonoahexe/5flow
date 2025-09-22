import type { NextPage } from 'next';

const Why1: NextPage = () => (
  <div className="font-heading relative box-border flex w-full flex-col items-start gap-16 py-16 text-left text-6xl">
    <div className="flex flex-col items-start self-stretch text-center">
      <div className="self-stretch">
        <div className="flex flex-col items-center justify-center self-stretch overflow-hidden px-2">
          <div className="relative h-48 w-full max-w-2xl">
            <div className="absolute top-20 left-60 h-14 w-96" />
            <div className="absolute top-32 left-72 h-14 w-52" />
            <b className="absolute top-0 left-0 inline-block w-full max-w-2xl leading-none tracking-tighter">
              <span>{`Redefining the way brands `}</span>
              <span className="relative mx-1 mb-2 inline-block align-middle">
                <span className="bg-accent1 absolute inset-0 -z-10"></span>
                <span className="relative text-white">create, scale,</span>
              </span>

              <span>{` and `}</span>
              <span className="relative mx-1 mb-4 inline-block align-middle">
                <span className="bg-accent1 absolute inset-0 -z-10"></span>
                <span className="relative text-white">deliver.</span>
              </span>
            </b>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Why1;
