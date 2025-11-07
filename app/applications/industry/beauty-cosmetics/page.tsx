import {
  Grid2X2,
  LayoutDashboard,
  GlobeLock,
  History,
  MessageCircleQuestionMark,
  RefreshCcw,
  Rocket,
  Star,
  Scaling,
} from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import How from '@/components/page/applications/How';

export default function BeautyCosmetics() {
  const heroData = {
    title: 'Beauty packaging without the chaos',
    subtitle: 'Built for brands managing endless variants and shade launches',
    description:
      'In beauty, packaging complexity grows fast. New shades, finish updates, local claims, and regional rules. 5Flow helps cosmetics brands manage rapid product cycles with workflows that protect consistency, speed up launches, and keep every claim compliant.',
    imageSrc: '/applications/industries/beauty.png',
    imageAlt: 'Artwork management preview',
  };

  const challengeItems = [
    {
      id: 'shade-finish-launches',
      title: 'Shade and finish launches multiply',
      desc: 'Variants overwhelm workflows',
      sub: '5Flow automates variant artwork creation so new shades and finishes roll out consistently across packaging lines.',
      icon: LayoutDashboard,
      buttonText: 'Discover Automated Artwork',
      buttonLink: '/solutions/automated-artwork',
    },
    {
      id: 'inconsistent-claims',
      title: 'Inconsistent claims',
      desc: 'Marketing and packaging out of sync',
      sub: 'Centralized content hubs keep approved claims aligned across regions, SKUs, and campaigns.',
      icon: Grid2X2,
      buttonText: 'Discover Content Management',
      buttonLink: '/solutions/content-management',
    },
    {
      id: 'regional-labeling',
      title: 'Regional labeling rules',
      desc: 'One product, many standards',
      sub: 'Multi-language workflows adapt labels for each region while preserving brand consistency.',
      icon: GlobeLock,
      buttonText: 'Discover Content Management',
      buttonLink: '/solutions/content-management',
    },
    {
      id: 'high-sku-velocity',
      title: 'High SKU velocity',
      desc: 'Deadlines missed for seasonal launches',
      sub: 'Automated approvals and real-time dashboards keep new launches and promos shelf-ready on time.',
      icon: History,
      buttonText: 'Discover Artwork Management',
      buttonLink: '/solutions/artwork-management',
    },
    {
      id: 'fragmented-collaboration',
      title: 'Fragmented collaboration',
      desc: 'Teams and suppliers working in silos',
      sub: 'Integrated workflows connect brand, design, regulatory, and suppliers in one traceable system.',
      icon: MessageCircleQuestionMark,
      buttonText: 'Discover Artwork Management',
      buttonLink: '/solutions/artwork-management',
    },
  ];

  const howData = [
    {
      title: 'Roll out shade and finish variants with automated artwork generation.',
      description: 'Adapt labels for multi-language and region-specific regulations.',
      iconName: 'Files',
      imageSrc: '/applications/4-1.svg',
      buttonText: 'Discover Automated Artwork',
      buttonLink: '/solutions/automated-artwork',
    },
    {
      title: 'Reduce errors and reprints with centralized asset libraries.',
      description: 'Keep packaging and marketing claims consistent across SKUs.',
      iconName: 'Images',
      imageSrc: '/applications/4-2.svg',
      buttonText: 'Discover Asset Library',
      buttonLink: '/solutions/asset-library',
    },
    {
      title: 'Manage seasonal launches with automated workflows and dashboards.',
      description: 'Collaborate seamlessly with design, regulatory, and suppliers.',
      iconName: 'Workflow',
      imageSrc: '/applications/4-3.svg',
      buttonText: 'Discover Artwork Management',
      buttonLink: '/solutions/artwork-management',
    },
  ];

  const benefitItems = [
    {
      id: 'consistency-variants',
      title: 'Consistency across variants',
      desc: 'Shades and finishes stay on brand',
      sub: 'Automation ensures brand identity is protected across thousands of variants.',
      icon: RefreshCcw,
    },
    {
      id: 'faster-launches',
      title: 'Faster launches',
      desc: 'Keep pace with beauty trends',
      sub: 'Automated workflows and dashboards cut delays, keeping seasonal launches and new collections on track.',
      icon: Rocket,
    },
    {
      id: 'stronger-brand-trust',
      title: 'Stronger brand trust',
      desc: 'Claims accurate in every region',
      sub: 'Centralized content guarantees compliance and consistency for consumers worldwide.',
      icon: Star,
    },
    {
      id: 'scalable-operations',
      title: 'Scalable operations',
      desc: 'Handle growth without added chaos',
      sub: 'From a few products to thousands of SKUs, 5Flow scales as your beauty brand expands globally.',
      icon: Scaling,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="beauty cosmetics" />

        <div className="flex flex-col gap-10 md:gap-32">
          <Hero {...heroData} />
          <Challenges items={challengeItems} />
          <How howData={howData} />
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
