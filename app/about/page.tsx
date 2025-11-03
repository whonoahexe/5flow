import { Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/about/Hero';
import Vision from '@/components/page/about/Vision';
import Mission from '@/components/page/about/Mission';
import Workflow from '@/components/page/about/Workflow';
import Apart from '@/components/page/about/Apart';

export default function About() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="we. are." />
        <div className="mt-16 flex flex-col gap-16 md:mt-32 md:gap-32">
          <Hero />
          <Vision />
          <Mission />
          <Workflow />
          <Apart />
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
