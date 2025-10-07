import { Contact, Cta } from '@/components/layout';
import Hero from '@/components/page/home/Hero';
import What from '@/components/page/home/What';
import How from '@/components/page/home/How';
import Who from '@/components/page/home/Who';
import Why from '@/components/page/home/Why';

export default function Home() {
  return (
    <div className="relative">
      {/* Scrolls */}
      <div className="container mx-auto mb-32">
        <Hero />
        <div className="flex flex-col gap-32">
          <What />
          <Who />
          <How />
          <Why />
          <Contact />
        </div>
      </div>

      {/* Cta */}
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
