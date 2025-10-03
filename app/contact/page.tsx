import PatternOverlay from '@/components/core/pattern-overlay';
import { Cta } from '@/components/layout';
import Form from '@/components/page/contact/Form';
import { Hero } from '@/components/page/contact/Hero';

export default function Contact() {
  return (
    <div className="relative">
      {/* Fixed*/}
      <PatternOverlay />
      <PatternOverlay left="auto" right="152px" zIndex={-20} />

      <Hero />
      <Form />
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
