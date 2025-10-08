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
      title: 'Endless resizing requests',
      subtitle: 'The same design, 100 times over',
      description: 'Creative teams lose days resizing and adapting assets instead of focusing on new ideas.',
    },
    {
      title: 'Inconsistent outputs',
      subtitle: 'Assets that look off brand',
      description: 'Without guardrails, production work drifts, creating quality issues and brand headaches.',
    },
  ],
  [
    {
      title: 'Bottlenecked studios',
      subtitle: 'Too much work, not enough people',
      description: 'In house teams get stuck in production loops instead of doing creative work.',
    },
    {
      title: 'Slow campaign rollouts',
      subtitle: 'Missed deadlines, missed moments',
      description: 'Manual production slows launches, leaving marketing out of sync with market demand.',
    },
  ],
];

const howData = [
  {
    title: 'Smart automation',
    subtitle: 'Automation handles the repetitive stuff',
    description: "Our tech automates resizing, formatting, and versioning so your designers don't have to.",
    buttonText: 'Discover Automation',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Creative consistency',
    subtitle: 'Guardrails built into every file',
    description: 'Templates, brand rules, and quality checks keep everything looking sharp and on brand.',
    buttonText: 'Discover Consistency',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Scalable capacity',
    subtitle: 'More output without more headcount',
    description:
      'We extend your team with production firepower so you can handle ten times the work without the stress.',
    buttonText: 'Discover Scale',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Faster delivery',
    subtitle: 'Campaigns go live on time',
    description: 'Agile workflows and parallel production cycles mean deadlines are always met.',
    buttonText: 'Discover Speed',
    imageSrc: '/product/rectangle.png',
  },
];

const whyData = [
  {
    title: 'Time back for creativity',
    desc: 'Free your team from production grind',
    sub: 'Designers focus on ideas, not endless adaptations. More energy for the work that matters.',
    icon: ZapIcon,
  },
  {
    title: 'Confidence in quality',
    desc: 'Every asset, on brand',
    sub: 'Automated checks and smart templates mean fewer mistakes and more consistent results.',
    icon: HeartHandshake,
  },
  {
    title: 'Faster campaigns',
    desc: 'Market ready in record time',
    sub: 'Roll out campaigns across markets in days, not weeks, without cutting corners.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable production',
    desc: 'Grow without the growing pains',
    sub: 'Handle big bursts of work, seasonal peaks, and global rollouts without adding headcount.',
    icon: BadgeDollarSign,
  },
];

const workflowData = {
  title: 'Faster rollouts, fewer headaches',
  subtitle: 'Retailers and consumer brands rely on WaveStudio to scale artwork production without scaling',
  buttonText: 'See Case Studies',
  statsData: [
    {
      value: '60%',
      label: 'faster artwork turnaround',
    },
    {
      value: '90%',
      label: 'First-time Accuracy',
    },
    {
      value: '1M+',
      label: 'Designs Created',
    },
    {
      value: '50K+',
      label: 'Active Users',
    },
  ],
};

const needData = {
  title1: '',
  highlightTitle: 'Pay',
  title2: ' for what you need',
  subtitle: 'Pricing that cares about you',
  description:
    'From one-off projects to ongoing production, WaveStudio adapts to your workload. Pricing scales with output so you only pay for what you need.',
  buttonText: 'Talk to Us',
};

const contactData = {
  title1: 'Ready to make ',
  highlightTitle: 'more',
  title2: ' with less?',
  description: 'Scale artwork production, cut turnaround times, and keep your brand sharp without adding headcount.',
  buttonText: 'Book A Demo',
  imageSrc: '/product/contact.png',
  imageAlt: 'contact-image',
};

export default function Wavestudio() {
  return (
    <div className="relative">
      <Hero
        brandName="wavestudio"
        logoSrc="/product/wave.svg"
        logoAlt="Wave Brand"
        title="Big ideas. Bigger execution"
        subtitle="Scale your artwork production without scaling your team"
        description="WaveStudio combines automation with creative expertise. We turn endless artwork requests into fast, accurate, on-brand outputs so you can keep creating without burning out."
        buttonText="Start A Project"
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
