import { Cta } from '@/components/layout';
import PatternOverlay from '@/components/core/pattern-overlay';
import Hero from '@/components/page/home/Hero';
import About from '@/components/page/home/About';
import Contact from '@/components/page/home/Contact';
import FeatureCard from '@/components/page/home/FeatureCard';
import How from '@/components/page/home/How';
import Who from '@/components/page/home/Who';
import Why1 from '@/components/page/home/Why1';
import Why2 from '@/components/page/home/Why2';

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed*/}
      <PatternOverlay />
      <PatternOverlay left="auto" right="152px" zIndex={-20} />

      {/* Scrolls */}
      <div className="container mx-auto mb-32">
        <Hero />
        <FeatureCard />
        <Who />
        <How />
        <Why1 />
        <About />
        <Why2 />
        <Contact />
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
