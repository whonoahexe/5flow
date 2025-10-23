import Image from 'next/image';
import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';

const Hero = () => {
  const topRowImages = ['/about/about1.png', '/about/about2.png', '/about/about3.png'];
  const bottomRowImages = ['/about/about5.png', '/about/about6.png'];

  return (
    <>
      {/* Content */}
      <div className="mt-32 flex flex-col gap-14">
        {/* Logo */}
        <FullBleedLines className="px-2">
          <Image width={356} height={80} sizes="100vw" alt="5Flow Brand" src="/brand.svg" />
        </FullBleedLines>

        {/* Images */}
        <FullBleedLines className="bg-foreground/5 flex w-full p-2">
          <div className="flex w-full flex-col">
            <div className="border-border bg-accent1 flex border">
              {topRowImages.map((src, index) => (
                <Image
                  key={index}
                  className="relative h-72 max-w-full flex-1 object-cover"
                  width={304}
                  height={295}
                  alt={`About image ${index + 1}`}
                  src={src}
                />
              ))}
              <div className="relative h-72 flex-1" />
              <Image
                className="relative h-72 max-w-full flex-1 object-cover"
                width={304}
                height={295}
                alt="About image 4"
                src="/about/about4.png"
              />
            </div>

            <div className="border-border bg-primary flex w-full border">
              <div className="relative h-full w-152">
                <div className="text-background flex h-full w-140 flex-col justify-center gap-6 px-6">
                  <div className="font-heading text-4xl leading-none font-semibold tracking-tight">We are 5Flow.</div>

                  <div className="text-xl leading-tight tracking-tight">
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
          </div>
        </FullBleedLines>

        {/* Propelis */}
        <div className="font-heading flex w-full flex-col items-center justify-center gap-14 text-center">
          <FullBleedLines className="text-foreground text-6xl leading-none font-bold tracking-tight">
            <InlineHighlight>Powering</InlineHighlight>
            <div>The Propelis Group</div>
          </FullBleedLines>
          <FullBleedLines className="text-foreground max-w-6xl text-4xl tracking-tight">
            {`We bring together decades of global brand expertise with the technology to define what’s next. A
                powerful blend of creative mastery and intelligent automation that transforms the way brands move from
                concept to market.`}
          </FullBleedLines>
          <FullBleedLines>
            <Image width={400} height={60} alt="Propelis Group" src="/about/propelis.svg" />
          </FullBleedLines>
        </div>
      </div>
    </>
  );
};

export default Hero;
