import Image from 'next/image';
import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';

const Hero = () => {
  const topRowImages = ['/about/about1.png', '/about/about2.png', '/about/about3.png'];
  const bottomRowImages = ['/about/about5.png', '/about/about6.png'];

  return (
    <>
      {/* Content */}
      <div className="flex flex-col gap-14 pb-4 md:pb-0">
        {/* Logo */}
        <FullBleedLines className="px-2">
          <Image
            width={356}
            height={80}
            sizes="100vw"
            alt="5Flow Brand"
            src="/brand.svg"
            className="flex w-full justify-center px-24 md:w-auto md:justify-start md:p-0"
          />
        </FullBleedLines>

        {/* Images */}
        <FullBleedLines className="flex w-full flex-col gap-4 sm:flex-row sm:gap-0">
          <div className="flex w-full flex-col">
            <div className="bg-accent1 grid grid-cols-2 sm:flex sm:flex-nowrap">
              {topRowImages.map((src, index) => (
                <Image
                  key={index}
                  className="relative h-48 w-full object-cover sm:h-72 sm:flex-1"
                  width={304}
                  height={295}
                  alt={`About image ${index + 1}`}
                  src={src}
                />
              ))}
              <div className="3xl:block 3xl:h-72 relative hidden h-48 w-full flex-1" />
              <Image
                className="relative h-48 w-full object-cover sm:h-72 sm:flex-1"
                width={304}
                height={295}
                alt="About image 4"
                src="/about/about4.png"
              />
            </div>

            <div className="bg-primary flex w-full flex-wrap sm:flex-nowrap">
              <div className="relative h-full w-full sm:w-[614px]">
                <div className="text-background flex h-full w-full flex-col justify-center gap-6 px-4 py-6 sm:w-140 sm:px-6 md:py-0">
                  <div className="font-heading text-4xl leading-snug font-semibold tracking-tight sm:leading-none">
                    We are 5Flow.
                  </div>

                  <div className="text-lg leading-snug tracking-tight sm:text-xl sm:leading-tight">
                    {`The technology backbone for modern brand execution. Our intelligent platform services simplify
                      complexity, connect workflows, and give brands the speed, accuracy and agility to thrive in
                      today’s fast moving world.`}
                  </div>
                </div>
              </div>
              <div className="bg-accent2 3xl:block relative hidden h-48 w-full flex-1 sm:h-74" />
              {bottomRowImages.map((src, index) => (
                <Image
                  key={index}
                  className="relative h-48 w-full object-cover sm:h-74 sm:flex-1"
                  width={304}
                  height={295}
                  sizes="100vw"
                  alt={`Gallery image ${index + 5}`}
                  src={src}
                />
              ))}
            </div>
          </div>
        </FullBleedLines>

        {/* Propelis */}
        <div className="font-heading flex w-full flex-col items-center justify-center gap-8 text-center sm:gap-14">
          <FullBleedLines className="text-foreground text-4xl leading-none font-bold tracking-tight sm:text-6xl sm:leading-none">
            <InlineHighlight>Powering</InlineHighlight>
            <div>The Propelis Group</div>
          </FullBleedLines>
          <FullBleedLines className="text-foreground max-w-3xl text-lg leading-snug tracking-tight sm:max-w-6xl sm:text-4xl md:leading-none">
            {`We bring together decades of global brand expertise with the technology to define what’s next. A
                powerful blend of creative mastery and intelligent automation that transforms the way brands move from
                concept to market.`}
          </FullBleedLines>
          <FullBleedLines>
            <Image
              width={300}
              height={45}
              alt="Propelis Group"
              src="/about/propelis.svg"
              className="mx-auto px-12 sm:h-[60px] sm:w-[400px] md:px-0"
            />
          </FullBleedLines>
        </div>
      </div>
    </>
  );
};

export default Hero;
