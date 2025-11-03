import { Lightbulb, Rocket, Scaling, ShieldCheck } from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/product/Hero';
import How from '@/components/page/product/How';
import Need from '@/components/page/product/Need';
import What from '@/components/page/product/What';
import Why from '@/components/page/product/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

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
    imageSrc: '/product/4-1.svg',
    iconName: 'Settings',
  },
  {
    title: 'Creative consistency',
    subtitle: 'Guardrails built into every file',
    description: 'Templates, brand rules, and quality checks keep everything looking sharp and on brand.',
    buttonText: 'Discover Consistency',
    imageSrc: '/product/4-2.svg',
    iconName: 'RefreshCcw',
  },
  {
    title: 'Scalable capacity',
    subtitle: 'More output without more headcount',
    description:
      'We extend your team with production firepower so you can handle ten times the work without the stress.',
    buttonText: 'Discover Scale',
    imageSrc: '/product/4-3.svg',
    iconName: 'Scaling',
  },
  {
    title: 'Faster delivery',
    subtitle: 'Campaigns go live on time',
    description: 'Agile workflows and parallel production cycles mean deadlines are always met.',
    buttonText: 'Discover Speed',
    imageSrc: '/product/4-4.svg',
    iconName: 'Zap',
  },
];

const whyData = [
  {
    title: 'Time back for creativity',
    desc: 'Free your team from production grind',
    sub: 'Designers focus on ideas, not endless adaptations. More energy for the work that matters.',
    icon: Lightbulb,
  },
  {
    title: 'Confidence in quality',
    desc: 'Every asset, on brand',
    sub: 'Automated checks and smart templates mean fewer mistakes and more consistent results.',
    icon: ShieldCheck,
  },
  {
    title: 'Faster campaigns',
    desc: 'Market ready in record time',
    sub: 'Roll out campaigns across markets in days, not weeks, without cutting corners.',
    icon: Rocket,
  },
  {
    title: 'Scalable production',
    desc: 'Grow without the growing pains',
    sub: 'Handle big bursts of work, seasonal peaks, and global rollouts without adding headcount.',
    icon: Scaling,
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

export default function Wavestudio() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="wavestudio" />

        <div className="flex flex-col gap-10 md:gap-32">
          <Hero
            logoSrc="/product/wave-studio.svg"
            logoAlt="Wave Brand"
            title="Big ideas. Bigger execution"
            subtitle="Scale your artwork production without scaling your team"
            description="WaveStudio combines automation with creative expertise. We turn endless artwork requests into fast, accurate, on-brand outputs so you can keep creating without burning out."
            imageSrc="/product/wavestudio-svg.png"
            imageWidth={682}
            imageAlt="rectangle"
          />
          <What whatData={whatData} />
          <How howData={howData} />
          <Why
            sectionTitle={
              <>
                <span className="text-foreground">Why You Need</span>
                <InlineHighlight className="text-background">WaveStudio</InlineHighlight>
              </>
            }
            whyData={whyData}
          />
          <Need
            title1={needData.title1}
            highlightTitle={needData.highlightTitle}
            title2={needData.title2}
            subtitle={needData.subtitle}
            description={needData.description}
            buttonText={needData.buttonText}
          />
          <Workflow
            title={
              <>
                <InlineHighlight>Faster</InlineHighlight> rollouts, <InlineHighlight>fewer </InlineHighlight> headaches
              </>
            }
            subtitle={workflowData.subtitle}
            statsData={workflowData.statsData}
          />
          <Contact leadingText="Ready to make " highlightedText="more" trailingText=" with less?" />
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
