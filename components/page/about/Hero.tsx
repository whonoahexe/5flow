import Image from 'next/image';
import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';

export function Hero() {
  // Define image arrays for mapping
  const topRowImages = ['/about/about1.png', '/about/about2.png', '/about/about3.png'];
  const bottomRowImages = ['/about/about5.png', '/about/about6.png'];

  return (
    <>
      {/* Page header */}
      <div className="text-gray font-heading relative box-border w-full flex-col items-start gap-32 px-48 py-52 text-left text-4xl">
        <FullBleedLines>
          <div className="font-heading relative flex w-full items-end justify-end text-right text-5xl">
            <div className="flex items-center gap-2">
              <b className="text-foreground leading-none tracking-tight">we. are.</b>
              <div className="bg-primary h-10 w-10" />
            </div>
          </div>
        </FullBleedLines>

        {/* Content */}
        <div className="mt-32 flex flex-col items-start gap-12 self-stretch">
          <div className="box-border flex h-20 items-start gap-1 overflow-hidden">
            <Image
              className="relative h-20 w-86"
              width={384}
              height={80}
              sizes="100vw"
              alt="5Flow Brand"
              src="/brand.svg"
            />
          </div>
          <div className="font-body bg-foreground/5 box-border flex w-full items-start pt-2 pr-2 pl-2 text-left text-4xl text-white">
            <div className="flex flex-1 flex-col items-start gap-2">
              <div className="border-gainsboro bg-accent1 flex items-start self-stretch overflow-hidden border border-solid">
                {topRowImages.map((src, index) => (
                  <Image
                    key={index}
                    className="relative h-72 max-w-full flex-1 overflow-hidden object-cover"
                    width={304}
                    height={295}
                    sizes="100vw"
                    alt={`About image ${index + 1}`}
                    src={src}
                  />
                ))}
                <div className="relative h-72 flex-1" />
                <Image
                  className="relative h-72 max-w-full flex-1 overflow-hidden object-cover"
                  width={304}
                  height={295}
                  sizes="100vw"
                  alt="About image 4"
                  src="/about/about4.png"
                />
              </div>
              <div className="border-gainsboro font-body bg-primary relative box-border flex w-full items-start overflow-hidden border border-solid text-left text-4xl text-white">
                <div className="relative h-72 w-152">
                  <div className="absolute top-16 left-6 flex w-140 flex-col items-start gap-6">
                    <div className="relative self-stretch leading-none font-semibold tracking-tight">We are 5Flow.</div>

                    <div className="font-heading relative self-stretch text-xl leading-tight tracking-tight">
                      {`The technology backbone for modern brand execution. Our intelligent platform services simplify
                      complexity, connect workflows, and give brands the speed, accuracy and agility to thrive in
                      today’s fast moving world.`}
                    </div>
                  </div>
                </div>
                <div className="bg-accent2 relative h-74 w-full flex-1" />
                {bottomRowImages.map((src, index) => (
                  <Image
                    key={index}
                    className="relative h-74 max-w-full flex-1 overflow-hidden object-cover"
                    width={304}
                    height={295}
                    sizes="100vw"
                    alt={`Gallery image ${index + 5}`}
                    src={src}
                  />
                ))}
              </div>
              <FullBleedLines></FullBleedLines>
            </div>
          </div>
        </div>
        <div className="text-gray font-heading box-border flex w-full flex-col items-center justify-center px-2 pt-8 text-center text-6xl">
          <div className="flex h-44 w-full items-center justify-center">
            <b className="absolute inline-block w-full max-w-2xl tracking-tighter">
              <FullBleedLines>
                {' '}
                <div className="mb-2 text-white">
                  <InlineHighlight>Powering</InlineHighlight>
                </div>
                <div>The Propelis Group</div>
              </FullBleedLines>
            </b>
          </div>
          <div className="flex items-center justify-center self-stretch text-4xl">
            <div className="relative inline-block w-full max-w-6xl shrink-0 py-14 leading-none tracking-tight">
              <FullBleedLines>
                {`We bring together decades of global brand expertise with the technology to define what’s next. A
                powerful blend of creative mastery and intelligent automation that transforms the way brands move from
                concept to market.`}
              </FullBleedLines>
            </div>
          </div>
          <div className="relative box-border flex flex-col items-center justify-center self-stretch px-0 py-2.5">
            <FullBleedLines>
              <Image width={400} height={60} alt="Propelis Group" src="/about/propelis.svg" />
            </FullBleedLines>
          </div>
        </div>
      </div>
    </>
  );
}
