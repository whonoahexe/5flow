import {
  ShieldCheck,
  CircleDollarSign,
  History,
  EyeOff,
  Repeat2,
  ShieldAlert,
  CircleCheckBig,
  LaptopMinimalCheck,
} from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import InlineHighlight from '@/components/core/inline-highlight';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';

export default function ProcurementSourcing() {
  const heroData = {
    title: 'Procurement made predictable',
    subtitle: 'Accuracy and efficiency across your supply chain',
    description:
      'Procurement teams are tasked with cutting costs and ensuring supplier efficiency — but artwork errors, misaligned assets, and reprints eat into budgets. 5Flow gives you control over assets, workflows, and approvals, so suppliers always receive the right files the first time.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  const challengeItems = [
    {
      id: 'costly-reprints',
      title: 'Costly reprints',
      desc: 'Errors drive wasted spend',
      sub: '5Flow ensures suppliers receive the right, validated files every time, eliminating costly mistakes and reprints.',
      icon: CircleDollarSign,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
    {
      id: 'supply-chain-delays',
      title: 'Supply chain delays',
      desc: 'Wrong files stall production',
      sub: 'A centralized asset library gives suppliers direct access to approved artwork and cutter guides, keeping timelines intact.',
      icon: History,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
    {
      id: 'lack-of-visibility',
      title: 'Lack of visibility',
      desc: 'No clarity on project status or supplier readiness',
      sub: 'Dashboards show procurement teams where projects stand, so supplier alignment is proactive, not reactive.',
      icon: EyeOff,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
    {
      id: 'manual-back-and-forth',
      title: 'Manual back-and-forth',
      desc: 'Email overload with suppliers',
      sub: 'Integrated communication reduces supplier emails by structuring feedback, clarifications, and approvals in one system.',
      icon: Repeat2,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
    {
      id: 'inconsistent-quality',
      title: 'Inconsistent quality',
      desc: 'Errors slip through fragmented workflows',
      sub: 'Automated checks and traceability ensure suppliers work only with approved, accurate files.',
      icon: ShieldAlert,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
  ];

  const benefitItems = [
    {
      id: 'predictable-supply',
      title: 'Predictable supply chain',
      desc: 'No surprises, fewer delays',
      sub: 'With validated files and structured workflows, suppliers receive exactly what they need, when they need it.',
      icon: CircleCheckBig,
    },
    {
      id: 'cost-efficiency',
      title: 'Cost efficiency',
      desc: 'Save budgets by eliminating waste',
      sub: 'Fewer reprints and less manual rework directly reduce costs across production.',
      icon: CircleDollarSign,
    },
    {
      id: 'supplier-alignment',
      title: 'Supplier alignment',
      desc: 'A single source of truth for partners',
      sub: 'Centralized access ensures suppliers always work with approved artwork and assets.',
      icon: LaptopMinimalCheck,
    },
    {
      id: 'risk-reduction',
      title: 'Risk reduction',
      desc: 'Compliance built into procurement',
      sub: 'Every file is tracked and validated, minimizing risks from errors or outdated materials.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="procurement sourcing" />

        <div className="flex flex-col gap-10 md:gap-32">
          <Hero {...heroData} />
          <Challenges items={challengeItems} />
          <Benefits items={benefitItems} highlightedText="Procurement & Sourcing" />
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
          <Contact leadingText="The Best Software For " highlightedText="Procurement & Sourcing Teams" />
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
