import { Cta } from '@/components/layout';
import { Hero } from '@/components/page/about/Hero';
import Vision from '@/components/page/about/Vision';
import Mission from '@/components/page/about/Mission';
import Workflow from '@/components/page/about/Workflow';
import Apart from '@/components/page/about/Apart';
import Team from '@/components/page/about/Team';

export default function About() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <Hero />
        <Vision />
        <Mission />
        <Workflow />
        <Apart />
        <Team />
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
