import { CircleDollarSign, HeartHandshake, Rocket, ShieldCheck } from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import InlineHighlight from '@/components/core/inline-highlight';
import Hero from '@/components/page/product/Hero';
import Need from '@/components/page/product/Need';
import What from '@/components/page/product/What';
import Workflow from '@/components/page/product/Workflow';
import How from '@/components/page/product/How';
import Why from '@/components/page/product/Why';
import Who from '@/components/page/home/Who';

const whatData = [
  [
    {
      title: 'Endless approval loops',
      subtitle: 'Too many rounds, too much wasted time',
      description: 'Without control, multiple versions float around, causing errors, confusion, and rework.',
    },
    {
      title: 'Version chaos',
      subtitle: 'No one knows which file is final?',
      description: 'Without control, multiple versions float around, causing errors, confusion, and rework.',
    },
  ],
  [
    {
      title: 'Compliance risks',
      subtitle: 'A single missed change can cost millions',
      description: 'Incorrect labels or missed regulatory updates create compliance nightmares and market delays.',
    },
    {
      title: 'No visibility',
      subtitle: 'Teams work blind to bottlenecks',
      description: 'Without live progress tracking, projects derail, deadlines slip, and accountability gets lost.',
    },
  ],
];

const howData = [
  {
    title: 'Smarter approvals',
    subtitle: 'Traceable, transparent, and faster loops',
    description:
      'WAVE digitizes approvals with annotations, comparisons, and automated reminders, keeping reviews clear and accountable.',
    buttonText: 'Discover Approvals',
    imageSrc: '/product/1.svg',
    iconName: 'CircleCheckBig',
  },
  {
    title: 'Centralized files',
    subtitle: 'One version, one source of truth',
    description: 'Every artwork, asset, and update lives in one platform, so teams always work from the right file.',
    buttonText: 'Discover Asset Hub',
    imageSrc: '/product/2.svg',
    iconName: 'FileStack',
  },
  {
    title: 'Compliance built in',
    subtitle: 'Every step documented, every change tracked',
    description:
      'With audit-ready records, version control, and regulatory checks, WAVE makes compliance part of the process.',
    buttonText: 'Discover Compliance',
    imageSrc: '/product/3.svg',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Live project visibility',
    subtitle: 'See status, spot bottlenecks, stay in control',
    description: 'Dashboards, milestones, and timelines give managers instant clarity with no chasing updates.',
    buttonText: 'Discover Visibility',
    imageSrc: '/product/4.svg',
    iconName: 'Eye',
  },
];

const whyData = [
  {
    title: 'Speed to market',
    desc: 'Cut approval times by up to 52%',
    sub: 'Faster launches mean earlier shelf presence, stronger campaigns, and quicker ROI.',
    icon: Rocket,
  },
  {
    title: 'Team confidence',
    desc: 'Clear roles, clear files, clear results',
    sub: 'Teams spend less time firefighting and more time delivering work that makes an impact.',
    icon: HeartHandshake,
  },
  {
    title: 'Risk reduction',
    desc: 'Protect revenue, reputation, and compliance',
    sub: 'Traceable workflows reduce costly errors, recalls, and regulatory fines.',
    icon: ShieldCheck,
  },
  {
    title: 'Cost efficiency',
    desc: 'Fewer errors, fewer reprints',
    sub: 'With accuracy built in, brands save on correction rounds and avoid wasted print runs.',
    icon: CircleDollarSign,
  },
];

const workflowData = {
  subtitle: 'From retailers to pharma to FMCG, everyone loves to surf the WAVE',
  buttonText: 'See Case Studies',
  statsData: [
    {
      value: '50,000+',
      label: 'active users',
    },
    {
      value: '300,000+',
      label: 'artworks managed',
    },
    {
      value: '2.5M+',
      label: 'collaboration mails reduced',
    },
    {
      value: '34-52%',
      label: 'faster with global rollouts',
    },
  ],
};

const needData = {
  title: 'Flexible ',
  highlightTitle: 'pricing',
  title2: ' for a smooth WAVE ride',
  subtitle: 'From small teams to global enterprises',
  description:
    "WAVE scales with your business. Whether you're managing a few artworks or thousands across multiple markets, our pricing has something for everyone.",
  buttonText: 'Talk to Us',
};

const clientData = [
  'bp.png',
  'Chick-fil-A.png',
  'Dr._Scholls.png',
  'gropper.webp',
  'herrs_snacks.png',
  'lanxess-2.webp',
  'ludwig-schokolade.webp',
  'maurer-and-wirtz.webp',
  'png-transparent-keurig-logo-household-brands-logos.png',
  'vitakraft.webp',
];

export default function Wave() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="wave" />

        <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-32">
          <Hero
            logoSrc="/product/wave.svg"
            logoAlt="Wave Brand"
            title="Artwork management, without the chaos"
            subtitle="Faster progress from first draft to final approval."
            description="WAVE gives brand, packaging, and regulatory teams a single platform to brief, review, and approve artwork. No more confusion, no more delays. Just clear workflows that move projects forward."
            imageSrc="/product/wave-svg.png"
            imageWidth={292}
            imageAlt="rectangle"
          />
          <What whatData={whatData} />
          <How howData={howData} />
          <Why
            sectionTitle={
              <>
                <span className="text-foreground">Why You Need</span>
                <InlineHighlight className="text-background">WAVE</InlineHighlight>
              </>
            }
            whyData={whyData}
          />
          <Need
            title1={needData.title}
            highlightTitle={needData.highlightTitle}
            title2={needData.title2}
            subtitle={needData.subtitle}
            description={needData.description}
            buttonText={needData.buttonText}
          />
          <Who path="product/wave-clients" clients={clientData} />
          <Workflow
            title={
              <>
                Trusted <InlineHighlight>worldwide</InlineHighlight>
              </>
            }
            subtitle={workflowData.subtitle}
            statsData={workflowData.statsData}
          />
          <Contact leadingText="Ready to " highlightedText="simplify" trailingText=" artwork management?" />
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
