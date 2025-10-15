import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import { Eye, ShieldCheck, Grid2X2, Timer, FileCheck } from 'lucide-react';
import { CheckCircle, ZapIcon, BarChart } from 'lucide-react';

export default function CreativeStudio() {
  const heroData = {
    title: 'More time to create, less time on admin',
    subtitle: 'Built for design teams who want to stay creative',
    description:
      'Creative studios should be focused on big ideas, not chasing files or juggling endless markups. 5Flow clears the clutter by automating production work, centralizing approvals, and giving designers back the time to design.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  // challenge items passed into Challenges component
  const challengeItems = [
    {
      id: 'endless-revisions',
      title: 'Endless revisions',
      lead: 'Feedback chaos from multiple stakeholders',
      body: '5Flow consolidates markups, comments, and approvals in one place, so designers act on clear direction instead of conflicting feedback.',
      icon: Grid2X2,
      buttonText: 'See How It Helps Creatives',
    },
    {
      id: 'repetitive-production',
      title: 'Repetitive production work',
      lead: 'Creativity lost to resizing and adaptations',
      body: 'Automated artwork tools handle resizing, formatting, and multilingual rollouts, freeing teams to focus on design.',
      icon: Timer,
      buttonText: 'See How It Helps Creatives',
    },
    {
      id: 'no-version-clarity',
      title: 'No version clarity',
      lead: 'Teams rework the wrong files',
      body: 'Centralized version control ensures studios always work with the latest, approved artwork.',
      icon: ShieldCheck,
      buttonText: 'See How It Helps Creatives',
    },
    {
      id: 'fragmented-collaboration',
      title: 'Fragmented collaboration',
      lead: 'File sharing across email, drives, and chats',
      body: 'Integrated communication tools connect creative, brand, and regulatory teams directly to the artwork.',
      icon: Eye,
      buttonText: 'See How It Helps Creatives',
    },
    {
      id: 'bottlenecks-stall',
      title: 'Bottlenecks stall campaigns',
      lead: 'Designers left waiting for approvals',
      body: 'Automated workflows route files to the right stakeholders at the right time, keeping creative projects on schedule.',
      icon: FileCheck,
      buttonText: 'See How It Helps Creatives',
    },
  ];

  // added: benefit items passed into Benefits component
  const benefitItems = [
    {
      id: 'creative-focus',
      title: 'Creative focus restored',
      desc: 'More time for ideas, less time on admin',
      sub: 'By automating repetitive tasks, designers can focus on producing impactful creative work.',
      icon: CheckCircle,
    },
    {
      id: 'seamless-collab',
      title: 'Seamless collaboration',
      desc: 'Everyone aligned in one platform',
      sub: 'With integrated communication, creatives, brand managers, and regulators work together without silos or confusion.',
      icon: ZapIcon,
    },
    {
      id: 'work-scales',
      title: 'Work that scales',
      desc: 'Handle 10 SKUs or 10,000',
      sub: 'Studios can manage high volumes of adaptations without breaking creative flow.',
      icon: BarChart,
    },
    {
      id: 'quality-holds',
      title: 'Quality that holds',
      desc: 'Consistent outputs across markets',
      sub: 'Automated checks and version control ensure design integrity, no matter how many adaptations are needed.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="creative studio" />

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />

          {/* pass items into Challenges */}
          <Challenges items={challengeItems} />

          {/* added: Benefits section */}
          <Benefits items={benefitItems} highlightedText="Creative Studios" />
          <Workflow
            title1="The "
            title2=" for Creative & Design Studios"
            highlightTitle="Best Software"
            subtitle="Proven results across industries."
            buttonText="See Case Studies"
            statsData={[
              { label: 'faster product launches', value: '75%' },
              { label: 'fewer late files', value: '50%' },
              { label: 'faster artwork adaptations', value: 'Up to 80%' },
            ]}
          />
          <Contact leadingText="The " highlightedText="Best Software" trailingText="For Creative & Design Studios" />
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
