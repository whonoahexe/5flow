import { Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Form from '@/components/page/contact/Form';
import Hero from '@/components/page/contact/Hero';
import FullBleedLines from '@/components/core/full-bleed-lines';

export default function Contact() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="let's talk." />
        <div className="mt-8 flex flex-col gap-14 md:mt-0">
          <Hero />
          <Form />
          <div className="flex flex-col gap-8">
            <FullBleedLines className="text-primary font-heading max-w-5xl text-xl leading-none tracking-tight md:text-5xl">
              {`We're here to help you move faster, smarter, and with less complexity`}
            </FullBleedLines>
            <FullBleedLines className="max-w-2xl text-sm md:text-base">
              {`Whether you want a product demo, a pricing discussion, or just answers to your workflow questions, the 5Flow team is ready. Let's bring your vision to life.`}
            </FullBleedLines>
          </div>
        </div>
      </div>

      <div className="pt-12 md:pt-20">
        <Cta
          leftTitle="Experience"
          leftSubtitle="What’s Next in"
          rightTitle="Artwork Management"
          rightDesc="Get a live demo of our advanced artwork management solution."
          buttonText="Book A Demo"
        />
      </div>
    </div>
  );
}
