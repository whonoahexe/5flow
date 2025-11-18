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
              {`Whether you want a product demo, a pricing discussion, or just answers to your workflow questions, the 5Flow team is ready. Reach out to us by filling the form and we'll get back to you quickly.`}
            </FullBleedLines>
          </div>
        </div>
      </div>
    </div>
  );
}
