import PatternOverlay from '@/components/core/pattern-overlay';
import { Cta } from '@/components/layout';
import { Hero } from '@/components/page/product/Hero';
import Need from '@/components/page/product/Need';
import What from '@/components/page/product/What';
import Workflow from '@/components/page/product/Workflow';
import Contact from '@/components/page/product/Contact';
import { BadgeDollarSign, HeartHandshake, ShieldCheck, ZapIcon } from 'lucide-react';

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
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Centralized files',
    subtitle: 'One version, one source of truth',
    description: 'Every artwork, asset, and update lives in one platform, so teams always work from the right file.',
    buttonText: 'Discover Asset Hub',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Compliance built in',
    subtitle: 'Every step documented, every change tracked',
    description:
      'With audit-ready records, version control, and regulatory checks, WAVE makes compliance part of the process.',
    buttonText: 'Discover Compliance',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Live project visibility',
    subtitle: 'See status, spot bottlenecks, stay in control',
    description: 'Dashboards, milestones, and timelines give managers instant clarity with no chasing updates.',
    buttonText: 'Discover Visibility',
    imageSrc: '/product/rectangle.png',
  },
];

const whyData = [
  {
    title: 'Speed to market',
    desc: 'Cut approval times by up to 52 percent',
    sub: 'Faster launches mean earlier shelf presence, stronger campaigns, and quicker ROI.',
    icon: ZapIcon,
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
    icon: BadgeDollarSign,
  },
];

const workflowData = {
  title: 'Trusted',
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

const contactData = {
  title1: 'Ready to ',
  highlightTitle: 'simplify',
  title2: ' artwork management?',
  description: 'See how WAVE can cut approval cycles, improve compliance, and give your team more control.',
  buttonText: 'Book A Demo',
  imageSrc: '/product/contact.png',
  imageAlt: 'contact-image',
};

export default function Wave() {
  return (
    <div className="relative">
      {/* Fixed*/}
      <PatternOverlay />
      <PatternOverlay left="auto" right="152px" zIndex={-20} />

      <Hero
        brandName="wave"
        logoSrc="/product/wave.svg"
        logoAlt="Wave Brand"
        title="Artwork management, without the chaos"
        subtitle="Faster progress from first draft to final approval."
        description="WAVE gives brand, packaging, and regulatory teams a single platform to brief, review, and approve artwork. No more confusion, no more delays. Just clear workflows that move projects forward."
        buttonText="Let's Talk Transformation"
        imageSrc="/product/rectangle.png"
        imageAlt="rectangle"
      />
      <What whatData={whatData} />
      <Need
        title1={needData.title}
        highlightTitle={needData.highlightTitle}
        title2={needData.title2}
        subtitle={needData.subtitle}
        description={needData.description}
        buttonText={needData.buttonText}
      />
      <Workflow
        title={workflowData.title}
        subtitle={workflowData.subtitle}
        buttonText={workflowData.buttonText}
        statsData={workflowData.statsData}
      />
      <Contact
        title1={contactData.title1}
        highlightTitle={contactData.highlightTitle}
        title2={contactData.title2}
        description={contactData.description}
        buttonText={contactData.buttonText}
        imageSrc={contactData.imageSrc}
        imageAlt={contactData.imageAlt}
      />
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
