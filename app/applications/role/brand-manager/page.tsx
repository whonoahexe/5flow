import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import { Eye, ShieldCheck, Grid2X2, Timer, FileCheck } from 'lucide-react';
import { CheckCircle, ZapIcon, BarChart } from 'lucide-react';

export default function BrandManager() {
  const heroData = {
    // replaced hero content per request
    title: 'Brand control, simplified',
    subtitle: 'Solutions built for brand managers who need speed and scale',
    description:
      'As a brand manager, you deal with exploding SKUs, endless approvals, and pressure to hit launch dates. 5Flow centralizes workflows, content, and artwork so you can keep projects moving and your brand consistent across markets.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  // challenge items passed into Challenges component
  const challengeItems = [
    {
      id: 'sku',
      title: 'SKU refresh overload',
      lead: 'Too many variants to keep track of',
      body: '5Flow unifies artwork, claims, and content in one platform so every SKU stays visible, aligned, and on brand.',
      icon: Grid2X2,
      buttonText: 'See How It Helps Brand Managers',
    },
    {
      id: 'approval',
      title: 'Approval bottlenecks',
      lead: 'Reviews drag out launch cycle',
      body: 'Automated workflows route tasks to the right people, track approvals, and cut wasted time.',
      icon: Timer,
      buttonText: 'See How It Helps Brand Managers',
    },
    {
      id: 'content',
      title: 'Content drift',
      lead: 'Inconsistent claims across markets',
      body: 'A central content hub ensures approved copy flows into every artwork and market without manual errors.',
      icon: ShieldCheck,
      buttonText: 'See How It Helps Brand Managers',
    },
    {
      id: 'visibility',
      title: 'No visibility',
      lead: 'You can’t see where projects stall',
      body: 'Dashboards highlight bottlenecks and delays so you can act early and keep launches on track.',
      icon: Eye,
      buttonText: 'See How It Helps Brand Managers',
    },
    {
      id: 'risk',
      title: 'Risk of compliance errors',
      lead: 'A single mistake costs millions',
      body: 'Built-in version control and audit trails ensure only validated files make it to market.',
      icon: FileCheck,
      buttonText: 'See How It Helps Brand Managers',
    },
  ];

  // added: benefit items passed into Benefits component
  const benefitItems = [
    {
      id: 'consistency',
      title: 'Consistency across markets',
      desc: 'Every SKU speaks the same brand language',
      sub: 'With centralized content and artwork, your brand identity stays intact globally while adapting locally.',
      icon: CheckCircle,
    },
    {
      id: 'speed',
      title: 'Faster go-to-market',
      desc: 'Hit launch dates every time',
      sub: 'Automated workflows and clear approvals reduce cycle times and accelerate product rollouts.',
      icon: ZapIcon,
    },
    {
      id: 'reduced-risk',
      title: 'Reduced risk',
      desc: 'Compliance built into the process',
      sub: 'Audit-ready records and version control protect you from errors and fines.',
      icon: ShieldCheck,
    },
    {
      id: 'data',
      title: 'Data-backed decisions',
      desc: 'See exactly where to act',
      sub: 'Analytics show delays, capacity, and trends, helping you fix problems proactively.',
      icon: BarChart,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="brand manager" />

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />

          {/* pass items into Challenges */}
          <Challenges items={challengeItems} />

          {/* added: Benefits section */}
          <Benefits items={benefitItems} highlightedText="Brand Managers" />
          <Workflow
            title1="Trusted by "
            title2=" Across The Globe"
            highlightTitle="Brand Managers"
            subtitle="Success stories that resonate."
            buttonText="See Case Studies"
            statsData={[
              { label: 'faster product launches', value: '75%' },
              { label: 'fewer late files', value: '50%' },
              { label: 'faster artwork adaptations', value: 'Up to 80%' },
            ]}
          />
          <Contact leadingText="The " highlightedText="Best Software" trailingText="For Brand Managers" />
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
