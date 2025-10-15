import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/applications/Hero';
import Workflow from '@/components/page/applications/Workflow';
import Challenges from '@/components/page/applications/Challenges';
import Benefits from '@/components/page/applications/Benefits';
import { Eye, ShieldCheck, Grid2X2, Timer, FileCheck } from 'lucide-react';
import { CheckCircle, ZapIcon, BarChart } from 'lucide-react';

export default function ProcurementSourcing() {
  const heroData = {
    title: 'Procurement made predictable',
    subtitle: 'Accuracy and efficiency across your supply chain',
    description:
      'Procurement teams are tasked with cutting costs and ensuring supplier efficiency — but artwork errors, misaligned assets, and reprints eat into budgets. 5Flow gives you control over assets, workflows, and approvals, so suppliers always receive the right files the first time.',
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  // challenge items passed into Challenges component
  const challengeItems = [
    {
      id: 'costly-reprints',
      title: 'Costly reprints',
      lead: 'Errors drive wasted spend',
      body: '5Flow ensures suppliers receive the right, validated files every time, eliminating costly mistakes and reprints.',
      icon: Grid2X2,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
    {
      id: 'supply-chain-delays',
      title: 'Supply chain delays',
      lead: 'Wrong files stall production',
      body: 'A centralized asset library gives suppliers direct access to approved artwork and cutter guides, keeping timelines intact.',
      icon: Timer,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
    {
      id: 'lack-of-visibility',
      title: 'Lack of visibility',
      lead: 'No clarity on project status or supplier readiness',
      body: 'Dashboards show procurement teams where projects stand, so supplier alignment is proactive, not reactive.',
      icon: Eye,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
    {
      id: 'manual-back-and-forth',
      title: 'Manual back-and-forth',
      lead: 'Email overload with suppliers',
      body: 'Integrated communication reduces supplier emails by structuring feedback, clarifications, and approvals in one system.',
      icon: FileCheck,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
    {
      id: 'inconsistent-quality',
      title: 'Inconsistent quality',
      lead: 'Errors slip through fragmented workflows',
      body: 'Automated checks and traceability ensure suppliers work only with approved, accurate files.',
      icon: ShieldCheck,
      buttonText: 'See How 5Flow Helps Procurement Teams',
    },
  ];

  // added: benefit items passed into Benefits component
  const benefitItems = [
    {
      id: 'predictable-supply',
      title: 'Predictable supply chain',
      desc: 'No surprises, fewer delays',
      sub: 'With validated files and structured workflows, suppliers receive exactly what they need, when they need it.',
      icon: CheckCircle,
    },
    {
      id: 'cost-efficiency',
      title: 'Cost efficiency',
      desc: 'Save budgets by eliminating waste',
      sub: 'Fewer reprints and less manual rework directly reduce costs across production.',
      icon: ZapIcon,
    },
    {
      id: 'supplier-alignment',
      title: 'Supplier alignment',
      desc: 'A single source of truth for partners',
      sub: 'Centralized access ensures suppliers always work with approved artwork and assets.',
      icon: BarChart,
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

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />

          {/* pass items into Challenges */}
          <Challenges items={challengeItems} />

          {/* added: Benefits section */}
          <Benefits items={benefitItems} highlightedText="Procurement & Sourcing" />
          <Workflow
            title1=""
            title2=" across industries"
            highlightTitle="Proven results"
            subtitle="Integration that delivers."
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
            trailingText=" For Procurement & Sourcing Teams"
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
