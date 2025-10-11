import { BadgeDollarSign, HeartHandshake, ShieldCheck, ZapIcon } from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import InlineHighlight from '@/components/core/inline-highlight';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/product/Hero';
import How from '@/components/page/product/How';
import Need from '@/components/page/product/Need';
import What from '@/components/page/product/What';
import Why from '@/components/page/product/Why';
import Workflow from '@/components/page/product/Workflow';

const whatData = [
  [
    {
      title: 'Miscommunication',
      subtitle: 'Too many stakeholders, too many silos',
      description: 'Teams lose time and accuracy when information is scattered across emails and tools.',
    },
    {
      title: 'Rigid workflows',
      subtitle: 'Processes break when projects change',
      description: 'Static workflows cannot handle the pace or complexity of today’s packaging and marketing demands.',
    },
  ],
  [
    {
      title: 'Manual reporting',
      subtitle: 'Hours wasted building spreadsheets',
      description: 'Teams spend more time making reports than moving projects forward.',
    },
    {
      title: 'System chaos',
      subtitle: 'Too many tools that don’t connect',
      description: 'Copy-pasting between PIMs, DAMs, and ERPs slows everything down and increases errors.',
    },
  ],
];

const howData = [
  {
    title: 'Configurable workflows',
    subtitle: 'Flexibility built into every project',
    description:
      'Dragonfly adapts to your needs with templates, task-driven processes, and rules that make change easy.',
    buttonText: 'Discover Workflows',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Intuitive dashboards',
    subtitle: 'Clear visibility for every team member',
    description:
      'Customizable dashboards and task lists keep information where you need it, improving adoption and speed.',
    buttonText: 'Discover Dashboards',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Automated reporting',
    subtitle: 'Insights at the click of a button',
    description:
      'Schedule-driven reporting and PowerBI integration turn raw data into instant KPIs and process improvements.',
    buttonText: 'Discover Reporting',
    imageSrc: '/product/rectangle.png',
  },
  {
    title: 'Rich integrations',
    subtitle: 'Connect to your tech stack',
    description:
      'Out-of-the-box APIs and open architecture integrate Dragonfly with SAP, PLM, DAM, and e-commerce platforms.',
    buttonText: 'Discover Integrations',
    imageSrc: '/product/rectangle.png',
  },
];

const whyData = [
  {
    title: 'Faster execution',
    desc: 'Deliver projects on time, every time',
    sub: 'Agile workflows and automation reduce delays so launches stay on track.',
    icon: ZapIcon,
  },
  {
    title: 'Smarter decisions',
    desc: 'Real-time data you can act on',
    sub: 'Dashboards and automated reporting give leaders clarity without manual effort.',
    icon: HeartHandshake,
  },
  {
    title: 'Lower costs',
    desc: 'Less rework, more efficiency',
    sub: 'Integrated workflows reduce duplication, manual input, and costly delays.',
    icon: ShieldCheck,
  },
  {
    title: 'Confidence at scale',
    desc: 'One system, connected everywhere',
    sub: 'With global integrations, Dragonfly keeps every market aligned while giving local teams the agility they need.',
    icon: BadgeDollarSign,
  },
];

const workflowData = {
  title: 'Trusted by global leaders',
  subtitle:
    'L’Oréal, Colgate-Palmolive, and global FMCG leaders use Dragonfly as their packaging and marketing execution backbone.',
  buttonText: 'See Case Studies',
  statsData: [
    {
      value: '4,500+',
      label: 'global users at L’Oréal',
    },
    {
      value: 'Integration',
      label: 'with SAP, PLM, DAM, and Salsify systems',
    },
    {
      value: 'Faster',
      label: 'approvals, higher data quality, and improved user satisfaction',
    },
  ],
};

const needData = {
  title1: 'Flexible ',
  highlightTitle: 'pricing',
  title2: '  for every organization',
  subtitle: 'From small teams to global enterprises',
  description:
    "WAVE scales with your business. Whether you're managing a few artworks or thousands across multiple markets, our pricing has something for everyone.",
  buttonText: 'Talk to Us',
};

export default function Dragonfly() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="dragonfly" />

        <div className="flex flex-col gap-32">
          <Hero
            logoSrc="/product/wave.svg"
            logoAlt="Wave Brand"
            title="Make your projects fly"
            subtitle="Streamlined workflows for complex brand execution"
            description="Dragonfly is a web-based graphics and packaging management platform that cuts through miscommunication, complexity, and delays. Built for agility and scale, it keeps your brand projects moving on time, on budget, every time."
            imageSrc="/product/rectangle.png"
            imageWidth={292}
            imageAlt="rectangle"
          />
          <What whatData={whatData} />
          <How howData={howData} />
          <Why
            sectionTitle={
              <>
                <span className="text-foreground">Why You Need</span>
                <InlineHighlight className="text-background">Dragonfly</InlineHighlight>
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
                Trusted by <InlineHighlight>global leaders</InlineHighlight>
              </>
            }
            subtitle={workflowData.subtitle}
            statsData={workflowData.statsData}
          />
          <Contact />
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
