import { Files, History, FileStack, LaptopMinimalCheck, EyeOff, RotateCw, Share2 } from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import How from '@/components/page/applications/How';

export default function Retail() {
  const heroData = {
    title: 'Retail moves fast. So should your brand.',
    subtitle: 'Tools built for retailers dealing with high SKU velocity and seasonal pressure',
    description:
      'Retailers juggle thousands of SKUs, constant refreshes, and time-sensitive promotions. 5Flow helps you simplify workflows, reduce delays, and keep every campaign on shelf, on time, and on brand.',
    imageSrc: '/applications/industries/retail.jpg',
    imageAlt: 'Artwork management preview',
  };

  const challengeItems = [
    {
      id: 'sku-refresh-overload',
      title: 'SKU refresh overload',
      desc: 'Too much volume, no control',
      sub: '5Flow centralizes artwork and content so retailers can manage SKU refreshes at scale without losing consistency.',
      icon: Files,
      buttonText: 'See How 5Flow Helps Retail',
    },
    {
      id: 'seasonal-promos-slip',
      title: 'Seasonal promos slip',
      desc: 'Campaigns miss the shelf date',
      sub: 'Automated workflows move approvals faster and give teams full visibility into promo deadlines.',
      icon: History,
      buttonText: 'See How 5Flow Helps Retail',
    },
    {
      id: 'private-label-growth',
      title: 'Private-label packaging growth',
      desc: 'More complexity, tighter timelines',
      sub: 'Dedicated workflows manage private-label artwork alongside branded products without confusion.',
      icon: FileStack,
      buttonText: 'See How 5Flow Helps Retail',
    },
    {
      id: 'fragmented-suppliers',
      title: 'Fragmented supplier collaboration',
      desc: 'Errors multiply across vendors',
      sub: 'Suppliers access validated assets directly from 5Flow, cutting misprints and delays.',
      icon: LaptopMinimalCheck,
      buttonText: 'See How 5Flow Helps Retail',
    },
    {
      id: 'lack-of-visibility',
      title: 'Lack of visibility',
      desc: 'Retailers can’t see where campaigns stall',
      sub: 'Dashboards and analytics show bottlenecks in real time, helping managers act before deadlines slip.',
      icon: EyeOff,
      buttonText: 'See How 5Flow Helps Retail',
    },
  ];

  const howData = [
    {
      title: 'Minimize SKU refresh chaos with automated workflows.',
      description: 'Keep promotions on schedule using centralized timelines.',
      imageSrc: '/solutions/1.svg',
      iconName: 'Workflow',
    },
    {
      title: 'Ensure brand consistency with one secure asset library.',
      description: 'Capture approvals with online annotations and version control.',
      imageSrc: '/solutions/2.svg',
      iconName: 'RefreshCcw',
    },
    {
      title: 'Cut manual work by integrating with PIM and ERP systems.',
      description: 'Gain visibility with real-time dashboards and alerts.',
      imageSrc: '/solutions/3.svg',
      iconName: 'MonitorCog',
    },
  ];

  const benefitItems = [
    {
      id: 'on-shelf-availability',
      title: 'On-shelf availability',
      desc: 'Campaigns hit stores on schedule',
      sub: 'Automated workflows keep promos and seasonal launches shelf-ready without delays.',
      icon: History,
    },
    {
      id: 'brand-consistency',
      title: 'Brand consistency',
      desc: 'Every SKU on message',
      sub: 'Centralized content and assets keep promotions aligned across channels and regions.',
      icon: RotateCw,
    },
    {
      id: 'scalable-operations',
      title: 'Scalable operations',
      desc: 'Handle thousands of SKUs with clarity',
      sub: '5Flow scales with retail complexity, managing massive SKU volumes without added overhead.',
      icon: Files,
    },
    {
      id: 'operational-agility',
      title: 'Operational agility',
      desc: 'Adapt to market shifts quickly',
      sub: 'Real-time visibility into workflows helps retailers pivot faster to seasonal and competitive demands.',
      icon: Share2,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="retail" />

        <div className="flex flex-col gap-10 md:gap-32">
          <Hero {...heroData} />
          <Challenges items={challengeItems} />
          <How howData={howData} />
          <Benefits items={benefitItems} highlightedText="Retail" />
          <Contact leadingText="The " highlightedText="Best Software" trailingText=" For Retailers" />
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
