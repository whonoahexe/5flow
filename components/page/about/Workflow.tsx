import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';
import type { NextPage } from 'next';
import Image from 'next/image';

const Workflow: NextPage = () => {
  const workflowImages = [
    { src: '/about/workflow2.png', width: 400, height: 120, alt: 'Workflow security process 1' },
    { src: '/about/workflow1.png', width: 250, height: 120, alt: 'Workflow security process 2' },
    { src: '/about/workflow2.png', width: 400, height: 120, alt: 'Workflow security process 3' },
  ];

  return (
    <div className="font-heading relative box-border flex w-full flex-col items-start gap-32 px-48 py-16">
      <div className="relative flex w-full flex-col items-center justify-center gap-14 text-center text-4xl">
        <div className="relative text-7xl">
          <FullBleedLines>
            <b className="inline-block leading-none tracking-tighter">
              <span>{`Trust Built into Every `}</span>
              <br />
              <span className="text-white">
                <InlineHighlight>Workflow.</InlineHighlight>
              </span>
            </b>
          </FullBleedLines>
        </div>
        <b className="w-5xl text-2xl leading-none tracking-tight">
          <FullBleedLines>
            At 5Flow, security is the foundation of how we work. Every workflow, every approval, every piece of data is
            protected with enterprise-grade security standards.
          </FullBleedLines>
        </b>
        <FullBleedLines>
          <div className="bg-foreground/5 flex items-center gap-2 self-stretch overflow-hidden p-2">
            {workflowImages.map((image, index) => (
              <div
                key={index}
                className="box-border flex h-38 flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-300 bg-white"
              >
                <div className="flex items-center justify-center self-stretch">
                  <Image
                    className="max-h-full object-cover"
                    width={image.width}
                    height={image.height}
                    sizes="100vw"
                    alt={image.alt}
                    src={image.src}
                  />
                </div>
              </div>
            ))}
          </div>
        </FullBleedLines>
        <div className="font-heading flex flex-col items-center justify-center self-stretch">
          <div className="relative h-36 w-full max-w-5xl">
            <div className="absolute top-0 left-0 inline-block leading-none tracking-tight">
              <FullBleedLines>
                {`We’re ISO 27001 certified, but we go beyond compliance. Our Information Security Management System
                (ISMS) continuously monitors risks, applies preventive measures, and evolves to stay ahead of emerging
                threats.`}
              </FullBleedLines>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
