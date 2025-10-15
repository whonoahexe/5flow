import Image from 'next/image';
import { ArrowUpRight, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '../core/inline-highlight';
import React from 'react';

type ContactProps = {
  leadingText?: string;
  highlightedText?: string;
  trailingText?: string;
};

export function Contact({
  leadingText = 'Built for the Way Brands',
  highlightedText = 'Work Today.',
  trailingText = '',
}: ContactProps) {
  return (
    <div className="flex flex-col gap-8">
      <FullBleedLines className="font-heading mx-auto w-full max-w-3xl gap-16 px-2 py-8">
        <p className="text-center text-6xl leading-none font-bold tracking-tight">
          {leadingText} <InlineHighlight>{highlightedText}</InlineHighlight>
          {trailingText && <> {trailingText}</>}
        </p>
      </FullBleedLines>

      <FullBleedLines>
        <div className="bg-foreground/5 relative w-full p-2">
          {/* Small pixels in top & bottom left corners*/}
          <div className="bg-success absolute top-0 left-0 z-50 h-10 w-10" />
          <div className="bg-success absolute bottom-0 left-0 z-50 h-10 w-10" />

          <div className="bg-primary relative flex h-[562px] w-full items-center justify-between overflow-hidden rounded-2xl px-16">
            <form className="z-20 flex w-full max-w-4xl flex-col items-end justify-center gap-6">
              <InlineHighlight className="bg-success">
                <span className="font-heading text-foreground px-1 text-[64px] leading-none font-bold tracking-tighter">
                  Contact Us
                </span>
              </InlineHighlight>
              <div className="flex w-full items-center gap-6">
                {/* First Name Input */}
                <div className="text-foreground relative min-h-10 w-full">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                    <User size={20} />
                  </span>
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="font-body border-boder bg-background focus:ring-success w-full rounded-none border pl-12 transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                  />
                </div>
                {/* Last Name Input */}
                <div className="relative min-h-10 w-full">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                    <User size={20} />
                  </span>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="font-body border-boder bg-background focus:ring-success w-full rounded-none border pl-12 transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                  />
                </div>
              </div>
              {/* Email Input */}
              <div className="relative min-h-10 w-full">
                <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                  <Mail size={20} />
                </span>
                <Input
                  type="email"
                  placeholder="Email"
                  className="font-body border-boder bg-background focus:ring-success w-full rounded-none border pl-12 transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
                />
              </div>
              <Button className="bg-success text-foreground hover:bg-success/90 min-h-10 w-full rounded-none font-semibold tracking-tight transition-colors duration-300 ease-[var(--easing-smooth)]">
                Book a Demo <ArrowUpRight />
              </Button>
            </form>

            <Image
              className="absolute top-0 right-0 w-full object-cover"
              width={1520}
              height={562}
              alt="vector"
              src="/img/contact-form.png"
            />
          </div>
        </div>
      </FullBleedLines>
    </div>
  );
}
