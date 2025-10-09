import { Cta } from '@/components/layout';
import Form from '@/components/page/contact/Form';
import { Hero } from '@/components/page/contact/Hero';

export default function Contact() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <Hero />
        <Form />
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
