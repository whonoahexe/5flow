import Image from 'next/image';
import { ArrowDownLeft, BadgeCheck } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

interface HowFeature {
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  imageSrc: string;
}

interface HowProps {
  howData: HowFeature[];
}

const How = ({ howData }: HowProps) => {
  return (
    <div className="font-heading relative flex w-full flex-col gap-14">
      <FullBleedLines className="flex w-full justify-between">
        <div className="relative h-32 w-full max-w-sm">
          <b className="font-heading text-6xl leading-none tracking-tighter">
            <InlineHighlight className="text-background">How</InlineHighlight>
            <span className="text-foreground"> Does it Work?</span>
          </b>
        </div>
        <ArrowDownLeft size={126} className="text-accent1" strokeWidth={1.5} />
      </FullBleedLines>

      {howData.map((feature, index) => (
        <FullBleedLines key={index} className="flex w-full gap-2 p-2">
          <div className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-6 p-6">
              <BadgeCheck className="text-foreground h-18 w-18" strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <b className="relative text-4xl leading-none tracking-tight">{feature.title}</b>
                <p className="relative text-xl leading-none tracking-tight">{feature.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6 text-xl">
              <p className="relative leading-none tracking-tight">{feature.description}</p>
            </div>
          </div>

          <Image
            className="h-96 flex-1 rounded-2xl object-cover"
            width={752}
            height={400}
            sizes="100vw"
            alt=""
            src={feature.imageSrc}
          />
        </FullBleedLines>
      ))}
    </div>
  );
};

export default How;
