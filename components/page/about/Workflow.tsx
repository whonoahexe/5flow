import Image from 'next/image';
import FullBleedLines from '@/components/core/full-bleed-lines';
import InlineHighlight from '@/components/core/inline-highlight';

const workflowImages = [
  { src: '/about/workflow2.png', width: 200, height: 120, alt: 'Workflow security process 1' },
  { src: '/about/workflow1.png', width: 160, height: 120, alt: 'Workflow security process 2' },
  { src: '/about/workflow3.png', width: 180, height: 120, alt: 'Workflow security process 3' },
];

type WorkflowProps = { introText?: string; isoText?: string };

const Workflow = ({ introText, isoText }: WorkflowProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-8 px-4 text-center sm:gap-14 sm:px-0">
      <FullBleedLines className="font-heading flex w-full justify-center">
        <b className="text-foreground text-4xl leading-none tracking-tighter sm:text-6xl sm:leading-none">
          <span>{`Trust Built into Every `}</span>
          <br />
          <InlineHighlight className="text-background">Workflow.</InlineHighlight>
        </b>
      </FullBleedLines>
      <FullBleedLines className="text-foreground mx-auto w-full max-w-3xl text-center text-lg leading-relaxed tracking-tight sm:max-w-5xl sm:text-4xl sm:leading-none">
        {introText ||
          `At 5Flow, security is the foundation of how we work. Every workflow, every approval, every piece of data is
        protected with enterprise-grade security standards.`}
      </FullBleedLines>
      <FullBleedLines className="w-full">
        <div className="flex flex-col items-center gap-4 self-stretch overflow-hidden p-2 sm:flex-row sm:gap-2">
          {workflowImages.map((image, index) => (
            <div
              key={index}
              className="bg-background flex h-32 w-full items-center justify-center overflow-hidden rounded-xl px-20 sm:h-38 sm:flex-1 sm:rounded-2xl md:px-0"
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
      <FullBleedLines className="text-foreground mx-auto w-full max-w-3xl text-center text-lg leading-relaxed tracking-tight sm:max-w-6xl sm:text-4xl sm:leading-none">
        {isoText ||
          `We’re ISO 27001 certified, but we go beyond compliance. Our Information Security Management System (ISMS) continuously monitors risks, applies preventive measures, and evolves to stay ahead of emerging threats.`}
      </FullBleedLines>
    </div>
  );
};

export default Workflow;
