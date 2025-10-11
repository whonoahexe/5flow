import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/product/Hero';
import Need from '@/components/page/product/Need';
import What from '@/components/page/product/What';
import Workflow from '@/components/page/product/Workflow';

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

export default function Wave() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="wave" />

        <div className="flex flex-col gap-32">
          <Hero
            logoSrc="/product/wave.svg"
            logoAlt="Wave Brand"
            title="Artwork management, without the chaos"
            subtitle="Faster progress from first draft to final approval."
            description="WAVE gives brand, packaging, and regulatory teams a single platform to brief, review, and approve artwork. No more confusion, no more delays. Just clear workflows that move projects forward."
            imageSrc="/product/rectangle.png"
            imageWidth={292}
            imageAlt="Product logo"
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
          <Workflow title={workflowData.title} subtitle={workflowData.subtitle} statsData={workflowData.statsData} />
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
