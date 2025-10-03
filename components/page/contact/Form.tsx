import { MoveRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

const Form = () => (
  <div className="font-heading relative box-border flex w-full flex-col items-start gap-32 px-12 py-20 text-left lg:px-48">
    <div className="bg-primary relative box-border flex w-full items-center justify-between rounded-2xl py-12 pr-8 pl-0 text-left">
      <div className="w-full max-w-3xl">
        <Image
          className="object-cover"
          width={450}
          height={450}
          alt="rings showcasing brand identity"
          src="/svg/rings.svg"
        />
      </div>
      <div className="text-success font-metropolis relative flex w-full flex-1 flex-col items-start gap-8 text-left">
        <b className="relative flex h-14 w-full max-w-xs shrink-0 items-center justify-center text-center text-5xl leading-tight tracking-tight lg:text-6xl">
          Contact Us
        </b>
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex items-start justify-between gap-3 self-stretch">
            <Input placeholder="First Name or Pseudonym*" className="bg-background flex-1 rounded-none" />
            <Input placeholder="Last Name" className="bg-background flex-1 rounded-none" />
          </div>
          <Input type="email" placeholder="Work Email" className="bg-background w-full rounded-none" />
          <Input placeholder="I'm interested in..." className="bg-background w-full rounded-none" />
          <Textarea placeholder="Here's my message.." className="bg-background resize-none rounded-none" />
        </div>
        <div className="flex items-center justify-between gap-2 self-stretch text-white">
          <div className="flex max-w-xl flex-col items-start gap-2">
            <div className="flex h-6 items-center gap-2 self-stretch">
              <Checkbox className="h-4 w-4 rounded-none border-white bg-white" />
              <div className="text-xs">
                {`I have read the `}
                <span className="underline">Privacy Policy</span>.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4 rounded-none border-white bg-white" />
              <div className="text-xs leading-relaxed">
                We'd love to keep in touch with solutions that may be of interest to you. Check this box if <br />
                you authorize 5Flow to contact you by phone or email. You can opt out at any time.
              </div>
            </div>
          </div>
          <Button className="bg-success text-foreground h-8 gap-1.5 rounded-none px-3">
            <div className="relative font-semibold">Submit</div>
            <MoveRightIcon className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Form;
