import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownLeft, ArrowUpRight, BadgeCheck } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import { Button } from '@/components/ui/button';

interface HowFeature {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
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
        <div key={index} className="flex w-full gap-2 p-2">
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
              <div>
                <Button
                  asChild
                  className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2 has-[>svg]:px-0"
                >
                  <Link href="/" aria-label="Book a demo">
                    <span className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-3">
                      {feature.buttonText}
                    </span>
                    <span
                      className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 ml-0 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:ml-2"
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>
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
        </div>
      ))}
    </div>
  );
};

export default How;
