import { ArrowUpRight, Mail, User } from 'lucide-react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact: NextPage = () => (
  <div className="text-foreground font-heading relative box-border flex w-full flex-col items-start gap-16 pt-16 text-left text-6xl">
    <div className="relative w-full">
      {/* Small square in top left corner, now inside inner div */}
      <div className="bg-primary absolute top-0 left-0 z-50 h-10 w-10" />
      <div className="bg-primary absolute bottom-0 left-0 z-50 h-10 w-10" />
      <div className="font-body flex w-full items-center justify-between gap-0 px-8 py-0 text-sm">
        <div className="flex flex-col items-center justify-center gap-6 px-20 py-0">
          <div className="flex items-center gap-10">
            {/* First Name Input */}
            <div className="relative w-80">
              <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                <User />
              </span>
              <Input
                type="text"
                placeholder="First Name"
                className="font-body min-h-10 w-full rounded-none pl-12 text-base"
              />
            </div>
            {/* Last Name Input */}
            <div className="relative w-80">
              <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                <User />
              </span>
              <Input
                type="text"
                placeholder="Last Name"
                className="font-body min-h-10 w-full rounded-none pl-12 text-base"
              />
            </div>
          </div>
          <div className="relative w-full">
            <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
              <Mail />
            </span>
            <Input
              type="email"
              placeholder="Email"
              className="font-body min-h-10 w-full rounded-none pl-12 text-base"
            />
          </div>
          <div className="bg-success font-aptos box-border flex min-h-10 w-full max-w-2xl items-center justify-center gap-2 py-2 text-center">
            <Button className="bg-success text-foreground font-aptos min-h-10 w-full rounded-none font-semibold">
              Book a Demo <ArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="bg-primary relative flex h-144 w-144 items-center justify-end rounded-2xl">
          <span className="font-heading text-background pointer-events-none absolute top-1/2 left-12 z-10 -translate-y-1/2 text-6xl tracking-tighter select-none">
            Contact Us
          </span>
          <Image
            className="h-112 w-112 -scale-x-100 object-contain"
            width={448}
            height={448}
            sizes="100vw"
            alt="vector"
            src="Vector.svg"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
