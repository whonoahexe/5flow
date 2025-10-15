import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import { Eye, ShieldCheck, Grid2X2, Timer, FileCheck } from 'lucide-react';
import { CheckCircle, ZapIcon, BarChart } from 'lucide-react';
import How from '@/components/page/applications/How';

export default function HealthPharma() {
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
      id: 'multi-language-labeling',
      title: 'Multi-language labeling requirements',
      lead: 'One drug, dozens of SKUs',
      body: '5Flow manages translations centrally and applies them consistently across markets, reducing the risk of mislabeling.',
      icon: Grid2X2,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
    {
      id: 'regulatory-pressure',
      title: '21 CFR and EMA compliance pressure',
      lead: 'Regulations change, workflows don’t',
      body: 'Preconfigured compliance checklists and validation rules ensure every label meets FDA, EMA, and regional standards.',
      icon: Timer,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
    {
      id: 'documentation-burden',
      title: 'High documentation burden',
      lead: 'Audits require endless proof',
      body: 'Every approval, annotation, and change is logged, creating an instant audit trail for inspections.',
      icon: FileCheck,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
    {
      id: 'frequent-reformulations',
      title: 'Frequent reformulations and recalls',
      lead: 'Updates overwhelm manual workflows',
      body: 'Automated workflows distribute approved changes quickly, keeping packaging aligned with new formulations.',
      icon: Eye,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
    {
      id: 'patient-safety',
      title: 'Patient safety on the line',
      lead: 'Errors aren’t just costly, they’re dangerous',
      body: 'Built-in validation rules flag missing warnings, dosage errors, or misplaced barcodes before files go to print.',
      icon: ShieldCheck,
      buttonText: 'See How 5Flow Helps Pharma Teams',
    },
  ];

  // added: benefit items passed into Benefits component
  const benefitItems = [
    {
      id: 'patient-safety-protected',
      title: 'Patient safety protected',
      desc: 'Errors caught before they reach market',
      sub: 'With compliance and validation built in, every label is safe, accurate, and consistent.',
      icon: ShieldCheck,
    },
    {
      id: 'regulatory-confidence',
      title: 'Regulatory confidence',
      desc: 'Always ready for FDA, EMA, and local audits',
      sub: 'Automatic documentation ensures full compliance evidence for every SKU and region.',
      icon: CheckCircle,
    },
    {
      id: 'faster-approvals',
      title: 'Faster regulatory approvals',
      desc: 'Compliance without bottlenecks',
      sub: 'Structured workflows and automation speed up label approvals without sacrificing accuracy.',
      icon: ZapIcon,
    },
    {
      id: 'global-scale-local',
      title: 'Global scale, local compliance',
      desc: 'Manage thousands of SKUs accurately',
      sub: 'From dosage warnings to language variants, 5Flow scales compliance across regions and product lines.',
      icon: BarChart,
    },
  ];

  const howData = [
    {
      heading: 'Health & Pharma',
      title: 'Manage multi-language packaging from one central hub.',
      description: 'Stay audit ready with automated approval logs and version control.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Protect patient safety with built-in error detection tools.',
      description: 'Ensure FDA, EMA, and local compliance with rule-based validation.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Speed up reformulation updates with automated workflows.',
      description: 'Scale compliance globally without adding manual effort.',
      icon: '/solutions/rectangle.png',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="health pharma" />

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />

          {/* pass items into Challenges */}
          <Challenges items={challengeItems} />
          <How howData={howData} />

          {/* added: Benefits section */}
          <Benefits items={benefitItems} highlightedText="Health & Pharma" />

          <Contact leadingText="The " highlightedText="Best Software" trailingText=" For Healthcare & Pharma" />
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
