import FullBleedLines from '@/components/core/full-bleed-lines';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import InlineHighlight from '@/components/core/inline-highlight';

interface ContactProps {
  title1: string;
  highlightTitle: string;
  title2: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

const Contact = ({ title1, highlightTitle, title2, description, buttonText, imageSrc, imageAlt }: ContactProps) => {
  return (
    <div className="text-gray font-heading relative box-border flex w-full flex-col items-start gap-5 py-16 text-left">
      {/* Content */}
      <div className="text-gray font-century-gothic relative flex w-full flex-col items-start gap-8 text-center text-8xl">
        <div className="box-border flex w-full flex-col items-center justify-center overflow-hidden px-2 py-7">
          <div className="relative h-48 max-w-7xl">
            <b className="top-0 left-0 inline-block w-full leading-none tracking-tight">
              <span>{title1}</span>
              <span className="text-white">
                <InlineHighlight>{highlightTitle}</InlineHighlight>
              </span>
              <span>{title2}</span>
            </b>
          </div>
          <b className="max-w-6xl py-10 text-2xl leading-none tracking-tight">
            <FullBleedLines>{description}</FullBleedLines>
          </b>
        </div>
        <div className="font-body flex items-center justify-center self-stretch text-left text-sm">
          <div className="bg-foreground/5 flex flex-1 overflow-hidden p-2">
            <div className="bg-primary relative box-border flex flex-1 items-center justify-end gap-0 rounded-2xl pt-10">
              {/* Top left corner square */}
              <div className="bg-success absolute top-0 left-0 z-20 h-8 w-8"></div>

              {/* Bottom left corner square */}
              <div className="bg-success absolute bottom-0 left-0 z-20 h-8 w-8"></div>

              <div className="absolute top-1/2 left-0 z-10 flex w-2/3 -translate-y-1/2 transform flex-col items-end gap-6 p-10">
                <div className="font-heading flex items-center justify-center py-2 text-left text-6xl">
                  <b className="leading-none tracking-tight">
                    <InlineHighlight className="bg-success text-foreground">Contact Us</InlineHighlight>
                  </b>
                </div>
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="flex items-start justify-between gap-3 self-stretch">
                    <Input placeholder="First Name" className="bg-background flex-1 rounded-none" />
                    <Input placeholder="Last Name" className="bg-background flex-1 rounded-none" />
                  </div>
                  <Input type="email" placeholder="Email" className="bg-background w-full rounded-none" />
                </div>

                <div className="flex gap-8 self-stretch">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-success text-foreground flex-1 rounded-none font-bold"
                  >
                    {buttonText}
                  </Button>
                  <div className="bg-success flex h-10 w-10 items-center justify-center">
                    <MoveUpRight className="text-foreground" />
                  </div>
                </div>
              </div>
              <Image className="" src={imageSrc} alt={imageAlt} width={800} height={800} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
