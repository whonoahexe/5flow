import InlineHighlight from '@/components/core/inline-highlight';
import FullBleedLines from '@/components/core/full-bleed-lines';
import { ArrowDownLeft } from 'lucide-react';

export function Hero() {
  return (
    <>
      {/* Page header */}
      <div className="text-gray font-heading relative box-border w-full flex-col items-start gap-32 px-12 pt-52 text-left text-4xl lg:px-48">
        <FullBleedLines>
          <div className="font-heading relative flex w-full items-end justify-end text-right text-5xl">
            <div className="flex items-center gap-6">
              <b className="text-foreground leading-none tracking-tight">contact</b>
              <div className="bg-primary h-10 w-10" />
            </div>
          </div>
        </FullBleedLines>

        {/* Content */}
        <div className="mt-32 flex flex-col items-start gap-12 self-stretch">
          <div className="text-gray font-century-gothic relative flex w-full flex-col items-start gap-14 text-left text-4xl lg:text-6xl">
            <div className="flex flex-col items-start gap-14 self-stretch overflow-hidden px-2 py-0">
              <div className="flex items-start justify-between gap-0 self-stretch py-0 pr-16 pl-0 text-white">
                <div className="relative h-32 w-full max-w-sm">
                  <div className="absolute top-0 left-0 h-16 w-48" />
                  <b className="leading-tighter absolute top-0 left-0 inline-block w-full tracking-tighter">
                    <span>
                      <InlineHighlight>Ready</InlineHighlight>
                    </span>
                    <span className="text-foreground"> when you are.</span>
                  </b>
                </div>
                <ArrowDownLeft size={126} className="text-accent1" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-start gap-4 text-3xl lg:text-5xl">
                <div className="text-primary relative inline-block max-w-5xl leading-tight tracking-tight">
                  {`We're here to help you move faster, smarter, and with less complexity`}
                </div>
                <div className="font-body text-gray relative inline-block max-w-3xl text-base leading-relaxed">
                  {`Whether you want a product demo, a pricing discussion, or just answers to your workflow questions, the
                  5Flow team is ready. Reach out to us by filling the form and we'll get back to you quickly.`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
