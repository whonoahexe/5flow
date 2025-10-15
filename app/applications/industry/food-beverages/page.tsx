import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import { Eye, ShieldCheck, Grid2X2, Timer, FileCheck } from 'lucide-react';
import { CheckCircle, ZapIcon, BarChart } from 'lucide-react';
import How from '@/components/page/applications/How';

export default function FoodBeverages() {
  const heroData = {
    title: 'Compliance you can trust',
    subtitle: 'Built for healthcare and pharma where accuracy saves lives',
    description:
      'In pharma and healthcare, a single label error can cause costly recalls and put patients at risk. 5Flow keeps every update traceable, every approval documented, and every product compliant with global regulations.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  // challenge items passed into Challenges component
  const challengeItems = [
    {
      id: 'constant-reformulations',
      title: 'Constant recipe reformulations',
      lead: 'Packaging can’t keep up',
      body: '5Flow centralizes ingredient data and pushes updates into artwork automatically, keeping labels accurate.',
      icon: Grid2X2,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
    {
      id: 'allergen-nutrition-risks',
      title: 'Allergen and nutritional labeling risks',
      lead: 'Small errors create big recalls',
      body: 'Automated validation rules check allergen and nutrition panels to prevent mislabeling.',
      icon: Timer,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
    {
      id: 'sustainability-claims',
      title: 'Sustainability and compliance claims',
      lead: 'Green messaging often inconsistent',
      body: 'Content hubs manage sustainability claims and certifications, ensuring consistent and compliant messaging.',
      icon: ShieldCheck,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
    {
      id: 'regional-regulations',
      title: 'Regional packaging regulations',
      lead: 'One product, multiple standards',
      body: 'Multi-language and regional workflows adapt packaging for each market without losing control.',
      icon: Eye,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
    {
      id: 'slow-approvals',
      title: 'Slow approvals delay launches',
      lead: 'Campaigns miss their shelf window',
      body: 'Automated workflows streamline approvals across marketing, regulatory, and suppliers, cutting delays.',
      icon: FileCheck,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
  ];

  // added: benefit items passed into Benefits component
  const benefitItems = [
    {
      id: 'consumer-safety',
      title: 'Consumer safety',
      desc: 'Labels you can trust',
      sub: 'Automated validation and version control ensure allergen and nutritional information is always accurate.',
      icon: CheckCircle,
    },
    {
      id: 'faster-reformulations',
      title: 'Faster reformulation rollouts',
      desc: 'Updates hit shelves on time',
      sub: 'Ingredient changes flow directly into packaging, cutting delays in product relaunches.',
      icon: ZapIcon,
    },
    {
      id: 'consistent-sustainability',
      title: 'Consistent sustainability claims',
      desc: 'Build consumer trust',
      sub: 'Centralized content keeps packaging claims clear, compliant, and aligned across markets.',
      icon: BarChart,
    },
    {
      id: 'regulatory-confidence',
      title: 'Regulatory confidence',
      desc: 'Compliance built into packaging',
      sub: 'From allergen labeling to local regulations, workflows ensure every SKU is audit ready.',
      icon: ShieldCheck,
    },
  ];

  const howData = [
    {
      heading: 'F&B',
      title: 'Keep ingredient and allergen labeling accurate with automated updates.',
      description: 'Manage sustainability claims consistently across SKUs.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Speed up reformulation launches with automated workflows.',
      description: 'Validate nutrition panels and prevent costly misprints.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Adapt packaging for regional regulations and multi-language markets.',
      description: 'Maintain full traceability for audits and recalls.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="food beverages" />

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />

          {/* pass items into Challenges */}
          <Challenges items={challengeItems} />
          <How howData={howData} />

          {/* added: Benefits section */}
          <Benefits items={benefitItems} highlightedText="Food & Beverages" />

          <Contact leadingText="The " highlightedText="Best Software" trailingText=" For Food & Beverage Brands" />
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
