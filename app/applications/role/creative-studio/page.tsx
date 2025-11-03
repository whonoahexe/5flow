import {
  SquareStack,
  Repeat2,
  EyeOff,
  MessageCircleQuestionMark,
  History,
  Lightbulb,
  MessagesSquare,
  FileStack,
  CircleCheckBig,
} from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import InlineHighlight from '@/components/core/inline-highlight';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';

export default function CreativeStudio() {
  const heroData = {
    title: 'More time to create, less time on admin',
    subtitle: 'Built for design teams who want to stay creative',
    description:
      'Creative studios should be focused on big ideas, not chasing files or juggling endless markups. 5Flow clears the clutter by automating production work, centralizing approvals, and giving designers back the time to design.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  const challengeItems = [
    {
      title: 'Endless revisions',
      desc: 'Feedback chaos from multiple stakeholders',
      sub: '5Flow consolidates markups, comments, and approvals in one place, so designers act on clear direction instead of conflicting feedback.',
      icon: SquareStack,
      buttonText: 'See How It Helps Creatives',
    },
    {
      title: 'Repetitive production work',
      desc: 'Creativity lost to resizing and adaptations',
      sub: 'Automated artwork tools handle resizing, formatting, and multilingual rollouts, freeing teams to focus on design.',
      icon: Repeat2,
      buttonText: 'See How It Helps Creatives',
    },
    {
      title: 'No version clarity',
      desc: 'Teams rework the wrong files',
      sub: 'Centralized version control ensures studios always work with the latest, approved artwork.',
      icon: EyeOff,
      buttonText: 'See How It Helps Creatives',
    },
    {
      title: 'Fragmented collaboration',
      desc: 'File sharing across email, drives, and chats',
      sub: 'Integrated communication tools connect creative, brand, and regulatory teams directly to the artwork.',
      icon: MessageCircleQuestionMark,
      buttonText: 'See How It Helps Creatives',
    },
    {
      title: 'Bottlenecks stall campaigns',
      desc: 'Designers left waiting for approvals',
      sub: 'Automated workflows route files to the right stakeholders at the right time, keeping creative projects on schedule.',
      icon: History,
      buttonText: 'See How It Helps Creatives',
    },
  ];

  const benefitItems = [
    {
      id: 'creative-focus',
      title: 'Creative focus restored',
      desc: 'More time for ideas, less time on admin',
      sub: 'By automating repetitive tasks, designers can focus on producing impactful creative work.',
      icon: Lightbulb,
    },
    {
      id: 'seamless-collab',
      title: 'Seamless collaboration',
      desc: 'Everyone aligned in one platform',
      sub: 'With integrated communication, creatives, brand managers, and regulators work together without silos or confusion.',
      icon: MessagesSquare,
    },
    {
      id: 'work-scales',
      title: 'Work that scales',
      desc: 'Handle 10 SKUs or 10,000',
      sub: 'Studios can manage high volumes of adaptations without breaking creative flow.',
      icon: FileStack,
    },
    {
      id: 'quality-holds',
      title: 'Quality that holds',
      desc: 'Consistent outputs across markets',
      sub: 'Automated checks and version control ensure design integrity, no matter how many adaptations are needed.',
      icon: CircleCheckBig,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="creative studio" />

        <div className="flex flex-col gap-10 md:gap-32">
          <Hero {...heroData} />
          <Challenges items={challengeItems} />
          <Benefits items={benefitItems} highlightedText="Creative Studios" />
          <Workflow
            title={
              <>
                The <InlineHighlight>Best Software </InlineHighlight> for Creative & Design Studios
              </>
            }
            subtitle="Proven results across industries."
            statsData={[
              { label: 'faster product launches', value: '75%' },
              { label: 'fewer late files', value: '50%' },
              { label: 'faster artwork adaptations', value: '80%' },
            ]}
          />
          <Contact leadingText="The Best Software For " highlightedText="Brand Managers" />
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
