import Image from 'next/image';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const workflowImages = [
  { src: '/about/workflow2.png', width: 400, height: 120, alt: 'Workflow security process 1' },
  { src: '/about/workflow1.png', width: 250, height: 120, alt: 'Workflow security process 2' },
  { src: '/about/workflow2.png', width: 400, height: 120, alt: 'Workflow security process 3' },
];

const Workflow = () => {
  return (
    <div className="flex w-full flex-col items-start gap-14 text-center">
      <FullBleedLines className="font-heading flex w-full justify-center">
        <b className="text-foreground text-6xl leading-none tracking-tighter">
          <span>{`Trust Built into Every `}</span>
          <br />
          <InlineHighlight className="text-background">Workflow.</InlineHighlight>
        </b>
      </FullBleedLines>
      <FullBleedLines className="text-foreground mx-auto w-full max-w-5xl text-center text-2xl leading-none tracking-tight">
        At 5Flow, security is the foundation of how we work. Every workflow, every approval, every piece of data is
        protected with enterprise-grade security standards.
      </FullBleedLines>
      <FullBleedLines className="w-full">
        <div className="bg-foreground/5 flex items-center gap-2 self-stretch overflow-hidden p-2">
          {workflowImages.map((image, index) => (
            <div
              key={index}
              className="border-border bg-background flex h-38 flex-1 items-center justify-center overflow-hidden rounded-2xl border"
            >
              <Image
                className="object-cover"
                width={image.width}
                height={image.height}
                sizes="100vw"
                alt={image.alt}
                src={image.src}
              />
            </div>
          ))}
        </div>
      </FullBleedLines>
      <FullBleedLines className="text-foreground mx-auto w-full max-w-6xl text-center text-4xl leading-none tracking-tight">
        {`We’re ISO 27001 certified, but we go beyond compliance. Our Information Security Management System (ISMS) continuously monitors risks, applies preventive measures, and evolves to stay ahead of emerging threats.`}
      </FullBleedLines>
    </div>
  );
};

export default Workflow;
