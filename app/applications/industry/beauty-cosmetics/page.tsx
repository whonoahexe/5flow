import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import { Eye, ShieldCheck, Grid2X2, Timer, FileCheck } from 'lucide-react';
import { CheckCircle, ZapIcon, BarChart } from 'lucide-react';
import How from '@/components/page/applications/How';

export default function BeautyCosmetics() {
  // replaced hero content per request
  const heroData = {
    title: 'Beauty packaging without the chaos',
    subtitle: 'Built for brands managing endless variants and shade launches',
    description:
      'In beauty, packaging complexity grows fast. New shades, finish updates, local claims, and regional rules. 5Flow helps cosmetics brands manage rapid product cycles with workflows that protect consistency, speed up launches, and keep every claim compliant.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  // challenge items passed into Challenges component
  const challengeItems = [
    {
      id: 'shade-finish-launches',
      title: 'Shade and finish launches multiply',
      lead: 'Variants overwhelm workflows',
      body: '5Flow automates variant artwork creation so new shades and finishes roll out consistently across packaging lines.',
      icon: Grid2X2,
      buttonText: 'See How 5Flow Helps Beauty Brands',
    },
    {
      id: 'inconsistent-claims',
      title: 'Inconsistent claims',
      lead: 'Marketing and packaging out of sync',
      body: 'Centralized content hubs keep approved claims aligned across regions, SKUs, and campaigns.',
      icon: ShieldCheck,
      buttonText: 'See How 5Flow Helps Beauty Brands',
    },
    {
      id: 'regional-labeling',
      title: 'Regional labeling rules',
      lead: 'One product, many standards',
      body: 'Multi-language workflows adapt labels for each region while preserving brand consistency.',
      icon: Timer,
      buttonText: 'See How 5Flow Helps Beauty Brands',
    },
    {
      id: 'high-sku-velocity',
      title: 'High SKU velocity',
      lead: 'Deadlines missed for seasonal launches',
      body: 'Automated approvals and real-time dashboards keep new launches and promos shelf-ready on time.',
      icon: FileCheck,
      buttonText: 'See How 5Flow Helps Beauty Brands',
    },
    {
      id: 'fragmented-collaboration',
      title: 'Fragmented collaboration',
      lead: 'Teams and suppliers working in silos',
      body: 'Integrated workflows connect brand, design, regulatory, and suppliers in one traceable system.',
      icon: Eye,
      buttonText: 'See How 5Flow Helps Beauty Brands',
    },
  ];

  // added: benefit items passed into Benefits component
  const benefitItems = [
    {
      id: 'consistency-variants',
      title: 'Consistency across variants',
      desc: 'Shades and finishes stay on brand',
      sub: 'Automation ensures brand identity is protected across thousands of variants.',
      icon: CheckCircle,
    },
    {
      id: 'faster-launches',
      title: 'Faster launches',
      desc: 'Keep pace with beauty trends',
      sub: 'Automated workflows and dashboards cut delays, keeping seasonal launches and new collections on track.',
      icon: ZapIcon,
    },
    {
      id: 'stronger-brand-trust',
      title: 'Stronger brand trust',
      desc: 'Claims accurate in every region',
      sub: 'Centralized content guarantees compliance and consistency for consumers worldwide.',
      icon: BarChart,
    },
    {
      id: 'scalable-operations',
      title: 'Scalable operations',
      desc: 'Handle growth without added chaos',
      sub: 'From a few products to thousands of SKUs, 5Flow scales as your beauty brand expands globally.',
      icon: ShieldCheck,
    },
  ];

  const howData = [
    {
      heading: 'Beauty & Cosmetics',
      title: 'Roll out shade and finish variants with automated artwork generation.',
      description: 'Adapt labels for multi-language and region-specific regulations.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Reduce errors and reprints with centralized asset libraries.',
      description: 'Keep packaging and marketing claims consistent across SKUs.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Manage seasonal launches with automated workflows and dashboards.',
      description: 'Collaborate seamlessly with design, regulatory, and suppliers.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="beauty cosmetics" />

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />

          {/* pass items into Challenges */}
          <Challenges items={challengeItems} />
          <How howData={howData} />

          {/* added: Benefits section */}
          <Benefits items={benefitItems} highlightedText="Beauty & Cosmetics" />
          <Contact leadingText="The " highlightedText="Best Software" trailingText=" For Beauty & Cosmetics Brands" />
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
