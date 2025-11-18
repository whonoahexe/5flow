import Image from 'next/image';
import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';

type HeroProps = { description?: string; propelisDescription?: string };

const Hero = ({ description, propelisDescription }: HeroProps) => {
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
            {/* Top row: 5 columns at sm+ */}
            <div className="bg-accent1 grid grid-cols-2 sm:grid-cols-5">
              {topRowImages.map((src, index) => (
                <Image
                  key={index}
                  className="relative h-48 w-full object-cover sm:h-72"
                  width={304}
                  height={295}
                  alt={`About image ${index + 1}`}
                  src={src}
                />
              ))}
              <div className="3xl:block 3xl:h-72 relative hidden h-48 w-full" />
              <Image
                className="relative h-48 w-full object-cover sm:h-72"
                width={304}
                height={295}
                alt="About image 4"
                src="/about/about4.png"
              />
            </div>

            {/* Bottom row: 4 columns at sm+; 5 at 3xl to include accent */}
            <div className="bg-primary 3xl:grid-cols-5 grid w-full grid-cols-1 sm:grid-cols-4">
              <div className="relative h-48 w-full sm:col-span-2 sm:h-74">
                <div className="text-background flex h-full w-full flex-col justify-center gap-6 px-4 py-6 sm:w-140 sm:px-6 md:py-0">
                  <div className="font-heading text-4xl leading-snug font-semibold tracking-tight sm:leading-none">
                    We are 5Flow.
                  </div>

                  <div className="text-lg leading-snug tracking-tighter sm:text-xl sm:leading-tight">
                    {description ||
                      `We are 5Flow - The technology company transforming how brands leverage content to their advantage.
                      As the critical backbone of modern content management, our intelligent platforms, tools & services streamline every part of
                      the go-to-market journey, empowering brands to move faster, adapt quicker and stay ahead of change.
                      Our smart, innovation-fuelled and restless mindset means we don't just see the future, we define it.
                    `}
                  </div>
                </div>
              </div>
              <div className="bg-accent2 3xl:block relative hidden h-48 w-full sm:h-74" />
              {bottomRowImages.map((src, index) => (
                <Image
                  key={index}
                  className="relative h-48 w-full object-cover sm:h-74"
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
            {propelisDescription ||
              `We bring together decades of global brand expertise with the technology to define whats next. A
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
