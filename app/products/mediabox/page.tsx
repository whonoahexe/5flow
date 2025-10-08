import { Cta } from '@/components/layout';
import { Hero } from '@/components/page/product/Hero';
import How from '@/components/page/product/How';
import Need from '@/components/page/product/Need';
import What from '@/components/page/product/What';
import Why from '@/components/page/product/Why';
import Workflow from '@/components/page/product/Workflow';
import Contact from '@/components/page/product/Contact';
import { BadgeDollarSign, HeartHandshake, ShieldCheck, ZapIcon } from 'lucide-react';

const whatData = [
  [
    {
      title: 'Disconnected tools',
      subtitle: 'Creative work scattered across platforms',
      description: 'Teams waste time moving between systems, losing files, and duplicating tasks.',
    },
    {
      title: 'Approval bottlenecks',
      subtitle: 'Campaigns stuck in endless reviews',
      description: 'Delays build when feedback is unstructured and approvals are hard to track.',
    },
  ],
  [
    {
      title: 'Costly errors',
      subtitle: 'Late or inaccurate assets impact campaigns',
      description: 'Wrong files, missed versions, or compliance slip-ups drive costly rework and missed deadlines.',
    },
    {
      title: 'Lack of visibility',
      subtitle: 'No clarity on project status',
      description: 'Without transparent workflows, managers struggle to track progress, spot risks, or plan resources.',
    },
  ],
];

const howData = [
  {
    title: 'Centralized platform',
    subtitle: 'One place for every asset',
    description:
      'Mediabox organizes creative projects and assets in a single system, reducing duplication and confusion.',
    buttonText: 'Discover the Platform',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Streamlined approvals',
    subtitle: 'Faster, traceable reviews',
    description: 'Online approvals with version history and annotations keep projects clear, compliant, and on track.',
    buttonText: 'Discover Approvals',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Error reduction',
    subtitle: 'Accuracy built into every step',
    description: 'Automated validation and structured workflows reduce mistakes, reprints, and compliance risks.',
    buttonText: 'Discover Accuracy',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Clear reporting',
    subtitle: 'Real-time insights for better control',
    description: 'Dashboards and analytics give teams full visibility of project health, deadlines, and bottlenecks.',
    buttonText: 'Discover Reporting',
    imageSrc: '/product/rectangle.png',
  },
];

const whyData = [
  {
    title: 'Faster time-to-market',
    desc: 'Launch campaigns without delays',
    sub: 'Cut validation lead time by up to 67 percent with streamlined approvals and workflow automation.',
    icon: ZapIcon,
  },
  {
    title: 'Fewer errors',
    desc: 'Reduce costly mistakes and late files',
    sub: 'Up to 45 percent fewer errors and 50 percent fewer late assets keep campaigns accurate and reliable.',
    icon: HeartHandshake,
  },
  {
    title: 'Cost savings',
    desc: 'Do more with the same resources',
    sub: 'Lower error rates and faster cycles reduce rework, save on budgets, and maximize efficiency.',
    icon: ShieldCheck,
  },
  {
    title: 'Team productivity',
    desc: 'Clear workflows, confident delivery',
    sub: 'With 60,000 users worldwide, Mediabox empowers teams to collaborate effectively and focus on creative impact.',
    icon: BadgeDollarSign,
  },
];

const workflowData = {
  title: 'Trusted by global leaders',
  subtitle: 'Leading companies rely on Mediabox to keep creative workflows efficient and on brand.',
  buttonText: 'See Case Studies',
  statsData: [
    {
      value: '45%',
      label: 'reduction in errors',
    },
    {
      value: '67%',
      label: 'faster validation lead time',
    },
    {
      value: '50%',
      label: 'fewer late files',
    },
    {
      value: '60,000+',
      label: 'active users worldwide',
    },
  ],
};

const needData = {
  title1: '',
  highlightTitle: 'Pricing',
  title2: ' that grows with you',
  subtitle: 'Flexible options for every team size',
  description:
    'Whether you’re managing a small creative team or coordinating global campaigns, Mediabox offers flexible pricing tailored to your workflow needs.',
  buttonText: 'Talk to Us',
};

const contactData = {
  title1: 'Ready for out-of-the-box ',
  highlightTitle: 'creative',
  title2: ' workflows?',
  description: 'See how Mediabox centralizes creative projects, speeds approvals, and ensures accuracy at scale.',
  buttonText: 'Book A Demo',
  imageSrc: '/product/contact.png',
  imageAlt: 'contact-image',
};

export default function Mediabox() {
  return (
    <div className="relative">
      <Hero
        brandName="mediabox"
        logoSrc="/product/wave.svg"
        logoAlt="Wave Brand"
        title="Bring your brand to life"
        subtitle="Creative workflows made easy and accurate"
        description="Mediabox is a web-based workflow management platform that simplifies creative and marketing operations. From briefing to approvals, it keeps projects moving, reduces errors, and helps teams deliver on-brand campaigns faster."
        buttonText="Book A Demo"
        imageSrc="/product/rectangle.png"
        imageAlt="rectangle"
      />
      <What whatData={whatData} />
      <How howData={howData} />
      <Why whyData={whyData} />
      <Need
        title1={needData.title1}
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
