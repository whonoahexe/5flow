import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import { Eye, ShieldCheck, Grid2X2, Timer, FileCheck } from 'lucide-react';
import { CheckCircle, ZapIcon, BarChart } from 'lucide-react';
import How from '@/components/page/applications/How';

export default function ConsumerGoods() {
  const heroData = {
    title: 'Packaging control for complex product lines',
    subtitle: 'Built for consumer goods brands managing scale and variety',
    description:
      'Consumer goods brands deal with endless SKUs, multi-part packaging, and global supply chains. 5Flow keeps packaging accurate, workflows connected, and launches on schedule — no matter the scale.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  // challenge items passed into Challenges component
  const challengeItems = [
    {
      id: 'multi-part-packaging',
      title: 'Multi-part packaging stalls launches',
      lead: 'Leaflet approved, label delayed, carton missing updates',
      body: '5Flow links every component in one workflow so labels, cartons, and inserts move forward together.',
      icon: Grid2X2,
      buttonText: 'See How 5Flow Helps Consumer Goods Brands',
    },
    {
      id: 'language-heavy-packs',
      title: 'Language-heavy packs drive reprints',
      lead: 'Multilingual detergent or appliance packs rarely pass error-free',
      body: 'Centralized translation and version control ensure approved text flows into every SKU variant without manual copy-paste errors.',
      icon: Timer,
      buttonText: 'See How 5Flow Helps Consumer Goods Brands',
    },
    {
      id: 'regional-promo-packs',
      title: 'Regional promo packs overwhelm sourcing',
      lead: 'Holiday or event packaging fragments supplier timelines',
      body: 'Automated workflows align suppliers and vendors on promo pack assets, cutting delays and misprints.',
      icon: ShieldCheck,
      buttonText: 'See How 5Flow Helps Consumer Goods Brands',
    },
    {
      id: 'global-sku-compliance',
      title: 'Global SKUs lack local compliance',
      lead: 'Same product, different labeling rules by region',
      body: 'Market-specific workflows adapt global packs to local labeling requirements while preserving brand consistency.',
      icon: FileCheck,
      buttonText: 'See How 5Flow Helps Consumer Goods Brands',
    },
    {
      id: 'zero-visibility',
      title: 'Zero visibility into bottlenecks',
      lead: 'One late component delays the entire launch',
      body: 'Dashboards give real-time status on every carton, leaflet, and label, so managers can unblock projects early.',
      icon: Eye,
      buttonText: 'See How 5Flow Helps Consumer Goods Brands',
    },
  ];

  // added: benefit items passed into Benefits component
  const benefitItems = [
    {
      id: 'launch-reliability',
      title: 'Launch reliability',
      desc: 'No delays, no last-minute surprises',
      sub: 'With every packaging component linked and tracked, launches run predictably, protecting revenue and shelf commitments.',
      icon: CheckCircle,
    },
    {
      id: 'portfolio-scalability',
      title: 'Portfolio scalability',
      desc: 'Growth without losing control',
      sub: 'Whether it’s 50 SKUs or 5,000, 5Flow scales with your product portfolio and keeps complexity in check.',
      icon: ZapIcon,
    },
    {
      id: 'supply-chain-trust',
      title: 'Supply chain trust',
      desc: 'Vendors and partners always aligned',
      sub: 'Direct supplier access to validated files builds trust, reduces disputes, and keeps global vendors in sync.',
      icon: BarChart,
    },
    {
      id: 'sustainable-efficiency',
      title: 'Sustainable efficiency',
      desc: 'Less rework, less waste',
      sub: 'By reducing misprints and reprints, 5Flow saves costs while also helping meet sustainability targets.',
      icon: ShieldCheck,
    },
  ];

  const howData = [
    {
      heading: 'Consumer Goods Brands',
      title: 'Launch multi-component packs on time by connecting cartons, leaflets, and inserts in one workflow.',
      description: 'Streamline seasonal and promotional packs with automated supplier workflows.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Monitor every component’s progress with real-time dashboards.',
      description: 'Manage multilingual packaging with centralized translation libraries.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Adapt global SKUs to local regulatory requirements without rework.',
      description: 'Reduce reprints by ensuring suppliers only access validated assets.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="consumer goods" />

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />

          {/* pass items into Challenges */}
          <Challenges items={challengeItems} />
          <How howData={howData} />

          {/* added: Benefits section */}
          <Benefits items={benefitItems} highlightedText="Consumer Goods" />

          <Contact leadingText="The " highlightedText="Best Software" trailingText=" For Consumer Goods Brands" />
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
