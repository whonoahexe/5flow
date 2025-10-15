import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import { Eye, ShieldCheck, Grid2X2, Timer, FileCheck } from 'lucide-react';
import { CheckCircle, ZapIcon, BarChart } from 'lucide-react';

export default function QualityRegulatory() {
  const heroData = {
    title: 'Compliance without compromise',
    subtitle: 'Tools built for regulatory and quality leaders who can’t afford mistakes',
    description:
      'Regulatory and quality managers need accuracy at every step. From label updates to final approvals, 5Flow ensures complete traceability, audit-ready workflows, and risk-free compliance.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  // challenge items passed into Challenges component
  const challengeItems = [
    {
      id: 'high-compliance-risk',
      title: 'High compliance risk',
      lead: 'A single missed warning can trigger fines',
      body: '5Flow provides audit-ready workflows with version control and approval trails, so nothing slips through.',
      icon: Grid2X2,
      buttonText: 'See How It Helps Regulatory Teams',
    },
    {
      id: 'cascading-label-updates',
      title: 'Cascading label updates',
      lead: 'One change creates errors across markets',
      body: 'Centralized content management pushes validated updates consistently into every SKU and region.',
      icon: Timer,
      buttonText: 'See How It Helps Regulatory Teams',
    },
    {
      id: 'lack-of-traceability',
      title: 'Lack of traceability',
      lead: 'Approvals get lost in email chains',
      body: 'All approvals are tracked, timestamped, and linked directly to artwork, giving you end-to-end visibility.',
      icon: ShieldCheck,
      buttonText: 'See How It Helps Regulatory Teams',
    },
    {
      id: 'fragmented-documentation',
      title: 'Fragmented documentation',
      lead: 'Teams can’t prove compliance quickly',
      body: 'With built-in records, reports are generated instantly for audits and inspections.',
      icon: Eye,
      buttonText: 'See How It Helps Regulatory Teams',
    },
    {
      id: 'slow-manual-processes',
      title: 'Slow, manual processes',
      lead: 'Delays put launches at risk',
      body: 'Automated workflows move files faster while maintaining full accuracy and compliance checks.',
      icon: FileCheck,
      buttonText: 'See How It Helps Regulatory Teams',
    },
  ];

  // added: benefit items passed into Benefits component
  const benefitItems = [
    {
      id: 'risk-reduction',
      title: 'Risk reduction',
      desc: 'Compliance built into every workflow',
      sub: 'With approvals and traceability hardwired into the system, you protect your brand from costly mistakes.',
      icon: ShieldCheck,
    },
    {
      id: 'audit-readiness',
      title: 'Audit readiness',
      desc: 'Be prepared at any moment',
      sub: 'Automatic documentation means audit trails are always up to date, cutting stress and prep time.',
      icon: FileCheck,
    },
    {
      id: 'faster-approvals',
      title: 'Faster approvals',
      desc: 'Compliance without delays',
      sub: 'Clear, automated approvals keep compliance strong while accelerating time to market.',
      icon: ZapIcon,
    },
    {
      id: 'confidence-scale',
      title: 'Confidence at scale',
      desc: 'Manage thousands of SKUs accurately',
      sub: 'Even in complex global portfolios, accuracy stays consistent across every product and market.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="quality regulatory" />

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />

          {/* pass items into Challenges */}
          <Challenges items={challengeItems} />

          {/* added: Benefits section */}
          <Benefits items={benefitItems} highlightedText="Quality & Regulatory" />
          <Workflow
            title1="Trusted in "
            title2=" industries"
            highlightTitle="regulated"
            subtitle="Proven with pharma, healthcare, and FMCG."
            buttonText="See Case Studies"
            statsData={[
              { label: 'faster product launches', value: '75%' },
              { label: 'fewer late files', value: '50%' },
              { label: 'faster artwork adaptations', value: 'Up to 80%' },
            ]}
          />
          <Contact
            leadingText="The "
            highlightedText="Best Software"
            trailingText=" For Regulatory & Quality Managers"
          />
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
