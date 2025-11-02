import Link from 'next/link';
import Image from 'next/image';
import { MoveRightIcon } from 'lucide-react';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const Form = () => (
  <FullBleedLines className="bg-foreground/5 w-full p-2">
    {/* Stack image and form vertically on mobile, row on md+ */}
    <div className="bg-primary border-border flex w-full flex-col items-center justify-between rounded-2xl border md:flex-row md:py-8 md:pr-8">
      <div className="flex-1">
        <Image
          className="object-cover"
          width={450}
          height={450}
          alt="Rings showcasing brand identity"
          src="/svg/rings.svg"
        />
      </div>

      {/* Form */}
      <form className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-0">
        <b className="text-success font-heading flex w-full text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
          Contact Us
        </b>
        {/* Inputs */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <Input
              placeholder="First Name or Pseudonym"
              className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
            />
            <Input
              placeholder="Last Name"
              className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
            />
          </div>
          <Input
            type="email"
            placeholder="Work Email"
            className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
          />
          <Input
            placeholder="I'm interested in..."
            className="font-body border-boder bg-background focus:ring-success min-h-10 w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
          />
          <Textarea
            placeholder="Here's my message.."
            className="font-body border-boder bg-background focus:ring-success w-full flex-1 rounded-none border transition-all duration-300 ease-[var(--easing-smooth)] focus:ring-2 focus:ring-offset-2"
          />
        </div>
        {/* Terms */}
        <div className="text-background flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex max-w-xl flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox className="border-border bg-background cursor-pointer rounded-none" />
              <p className="text-xs leading-relaxed">
                {`I have read the `}
                <Link href="/privacy" target="_blank" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="border-border bg-background cursor-pointer rounded-none" />
              <p className="text-xs leading-relaxed">
                {`We'd love to keep in touch with solutions that may be of interest to you. Check this box if
                you authorize 5Flow to contact you by phone or email. You can opt out at any time.`}
              </p>
            </div>
          </div>
          <Button
            asChild
            type="submit"
            className="group/cta active:ring-primary/50 active:ring-offset-background inline-flex origin-left items-center justify-start gap-0 rounded-none !bg-transparent px-0 py-0 font-semibold tracking-tight transition-all duration-150 ease-[var(--easing-smooth)] active:translate-x-[1px] active:scale-[0.99] active:ring-2 active:ring-offset-2 has-[>svg]:px-0"
          >
            <Link href="#" aria-label="Submit the contact form">
              <span className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 inline-flex h-9 items-center px-4 transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:px-3">
                Submit
              </span>
              <span
                className="bg-success text-success-foreground group-hover/cta:bg-success/90 group-active/cta:bg-success/80 ml-0 inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-[var(--easing-smooth)] group-hover/cta:ml-2"
                aria-hidden="true"
              >
                <MoveRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>
      </form>
    </div>
  </FullBleedLines>
);

export default Form;
