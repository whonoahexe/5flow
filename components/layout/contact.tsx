import Image from 'next/image';
import { ArrowUpRight, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '../core/inline-highlight';

export function Contact() {
  return (
    <div className="flex flex-col gap-8">
      <FullBleedLines className="font-heading mx-auto w-full max-w-2xl gap-16 px-2 py-8">
        <p className="text-center text-[64px] leading-none font-bold tracking-tight">
          Built for the Way Brands <InlineHighlight>Work Today.</InlineHighlight>
        </p>
      </FullBleedLines>

      <FullBleedLines>
        <div className="relative w-full">
          {/* Small pixels in top & bottom left corners*/}
          <div className="bg-primary absolute top-0 left-0 z-50 h-10 w-10" />
          <div className="bg-primary absolute bottom-0 left-0 z-50 h-10 w-10" />

          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-end justify-center gap-6 pl-40">
              <span className="font-heading text-[64px] font-bold tracking-tighter">Placeholder</span>
              <div className="flex items-center gap-10">
                {/* First Name Input */}
                <div className="text-foreground relative min-h-10 w-80">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                    <User size={20} />
                  </span>
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="font-body border-boder w-full rounded-none border pl-12"
                  />
                </div>
                {/* Last Name Input */}
                <div className="relative min-h-10 w-80">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                    <User size={20} />
                  </span>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="font-body border-boder w-full rounded-none border pl-12"
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
                  className="font-body border-boder w-full rounded-none border pl-12"
                />
              </div>
              <Button className="bg-success text-foreground min-h-10 w-full rounded-none font-semibold">
                Book a Demo <ArrowUpRight />
              </Button>
            </div>

            <div className="bg-foreground/5 h-[576px] w-xl p-2">
              <div className="bg-primary relative flex h-full w-full items-center justify-end rounded-2xl">
                <span className="font-heading text-background absolute top-1/2 left-12 z-10 -translate-y-1/2 text-[64px] font-bold tracking-tighter">
                  Contact Us
                </span>
                <Image
                  className="-scale-x-100 object-contain"
                  width={448}
                  height={448}
                  alt="vector"
                  src="/svg/rings.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </FullBleedLines>
    </div>
  );
}
