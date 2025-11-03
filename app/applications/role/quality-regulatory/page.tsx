import {
  ShieldCheck,
  ZapIcon,
  ShieldAlert,
  FileStack,
  FileSearch2,
  ShieldQuestionMark,
  History,
  SquareCheckBig,
} from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import InlineHighlight from '@/components/core/inline-highlight';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';

export default function QualityRegulatory() {
  const heroData = {
    title: 'Compliance without compromise',
    subtitle: 'Tools built for regulatory and quality descers who can’t afford mistakes',
    description:
      'Regulatory and quality managers need accuracy at every step. From label updates to final approvals, 5Flow ensures complete traceability, audit-ready workflows, and risk-free compliance.',
    imageSrc: '/applications/icp/Quality.jpg',
    imageAlt: 'Artwork management preview',
  };

  const challengeItems = [
    {
      id: 'high-compliance-risk',
      title: 'High compliance risk',
      desc: 'A single missed warning can trigger fines',
      sub: '5Flow provides audit-ready workflows with version control and approval trails, so nothing slips through.',
      icon: ShieldAlert,
      buttonText: 'See How It Helps Regulatory Teams',
    },
    {
      id: 'cascading-label-updates',
      title: 'Cascading label updates',
      desc: 'One change creates errors across markets',
      sub: 'Centralized content management pushes validated updates consistently into every SKU and region.',
      icon: FileStack,
      buttonText: 'See How It Helps Regulatory Teams',
    },
    {
      id: 'lack-of-traceability',
      title: 'Lack of traceability',
      desc: 'Approvals get lost in email chains',
      sub: 'All approvals are tracked, timestamped, and linked directly to artwork, giving you end-to-end visibility.',
      icon: FileSearch2,
      buttonText: 'See How It Helps Regulatory Teams',
    },
    {
      id: 'fragmented-documentation',
      title: 'Fragmented documentation',
      desc: 'Teams can’t prove compliance quickly',
      sub: 'With built-in records, reports are generated instantly for audits and inspections.',
      icon: ShieldQuestionMark,
      buttonText: 'See How It Helps Regulatory Teams',
    },
    {
      id: 'slow-manual-processes',
      title: 'Slow, manual processes',
      desc: 'Delays put launches at risk',
      sub: 'Automated workflows move files faster while maintaining full accuracy and compliance checks.',
      icon: History,
      buttonText: 'See How It Helps Regulatory Teams',
    },
  ];

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
      icon: SquareCheckBig,
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
      icon: FileStack,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="quality regulatory" />

        <div className="flex flex-col gap-10 md:gap-32">
          <Hero {...heroData} />
          <Challenges items={challengeItems} />
          <Benefits items={benefitItems} highlightedText="Quality & Regulatory" />
          <Workflow
            title={
              <>
                Trusted in <InlineHighlight>regulated </InlineHighlight>industries
              </>
            }
            subtitle="Proven with pharma, healthcare, and FMCG."
            statsData={[
              { label: 'faster product launches', value: '75%' },
              { label: 'fewer late files', value: '50%' },
              { label: 'faster artwork adaptations', value: '80%' },
            ]}
          />
          <Contact leadingText="The Best Software For " highlightedText="Regulatory & Quality Managers" />
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
