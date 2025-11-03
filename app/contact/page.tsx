import { Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Form from '@/components/page/contact/Form';
import Hero from '@/components/page/contact/Hero';

export default function Contact() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="let's talk." />
        <div className="mt-8 flex flex-col gap-14 md:mt-0">
          <Hero />
          <Form />
        </div>
      </div>

      <Cta
        leftTitle="Experience"
        leftSubtitle="What’s Next in"
        rightTitle="Artwork Management"
        rightDesc="Get a live demo of our advanced artwork management software by our product experts."
        buttonText="Book A Demo"
      />
    </div>
  );
}
