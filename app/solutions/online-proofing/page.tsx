import { CircleDollarSign, Rocket, ShieldCheck, Users } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Contact } from '@/components/layout';
import { features } from '@/lib/features';
import { getSolution } from '@/lib/cms/solution';
import InlineHighlight from '@/components/core/inline-highlight';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/solutions/Hero';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';

// Utility
function toPascalCase(input: string) {
  return input
    .split(/[-_\s]+/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function resolveIconComponent(iconKey?: string) {
  if (!iconKey) return null;
  const name = toPascalCase(iconKey);
  const Icon = (LucideIcons as any)[name] as React.ElementType | undefined;
  return Icon || null;
}

// Fallback Data in case CMS is ununavailable
const heroData = {
  brandName: 'online proofing',
  logoSrc: '/logo.svg',
  logoAlt: '5Flow logo',
  title: 'Proofing made simple',
  subtitle: 'Centralize reviews and cut endless loops',
  description:
    '5Flow’s Online Proofing solution brings all stakeholders into one platform for clear, traceable approvals. From annotations to version comparisons, every review is faster, sharper, and audit ready.',
  buttonText: 'See it in Action',
  buttonLink: '/contact',
  imageSrc: '/solutions/online-proofing.png',
  imageAlt: 'Online proofing preview',
  mobileImageSrc: '/solutions/online-proofing-mobile.png',
};

const howData = [
  {
    heading: 'Online Proofing',
    title: 'Online annotations',
    subtitle: 'Markups where they belong',
    description: 'Reviewers add comments directly on artwork files, eliminating confusion and lost feedback.',
    buttonText: 'Book A Demo',
    imageSrc: '/solutions/2-1.svg',
    iconName: 'StickyNote',
  },
  {
    title: 'Version comparison',
    subtitle: 'Spot changes instantly',
    description: 'Compare old and new files side by side to ensure every requested update is complete and correct.',
    buttonText: 'Book A Demo',
    imageSrc: '/solutions/2-2.svg',
    iconName: 'SquareSplitHorizontal',
  },
  {
    title: 'Automated approvals',
    subtitle: 'Traceable, transparent sign offs',
    description: 'Sequential or parallel approval paths keep projects moving while documenting every decision.',
    buttonText: 'Book A Demo',
    imageSrc: '/solutions/2-3.svg',
    iconName: 'CircleCheckBig',
  },
  {
    title: 'Audit trails',
    subtitle: 'Compliance built into proofing',
    description: 'Every annotation, change, and approval is logged for full regulatory compliance.',
    buttonText: 'Book A Demo',
    imageSrc: '/solutions/2-4.svg',
    iconName: 'ShieldCheck',
  },
];

const whyData = [
  {
    heading: 'Online Proofing',
    title: 'Faster launches',
    subtitle: 'Cut approval cycles in half',
    description: 'Clear reviews and automated sign offs reduce cycle times, keeping launches on schedule.',
    icon: Rocket,
  },
  {
    title: 'Stronger compliance',
    subtitle: 'Always audit ready',
    description: 'Every approval loop is documented, giving regulatory teams full traceability.',
    icon: ShieldCheck,
  },
  {
    title: 'Lower costs',
    subtitle: 'Reduce error driven waste',
    description: 'Fewer mistakes mean fewer reprints and less wasted time and resources.',
    icon: CircleDollarSign,
  },
  {
    title: 'Better collaboration',
    subtitle: 'Everyone aligned in one system',
    description: 'With centralized proofing, feedback is structured, traceable, and easy to act on.',
    icon: Users,
  },
];

export default async function OnlineProofing() {
  let cms = null as Awaited<ReturnType<typeof getSolution>> | null;
  if (features.enabled) {
    try {
      cms = await getSolution('online-proofing');
    } catch {}
  }

  const heroProps = {
    ...heroData,
    title: cms?.hero?.title || heroData.title,
    subtitle: cms?.hero?.subtitle || heroData.subtitle,
    description: cms?.hero?.bodyHtml || heroData.description,
  };

  const howDataFinal = (
    cms?.how?.items?.length
      ? cms!.how!.items.map((item, idx) => ({
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.bodyHtml || (item as any).body_html || (item as any).description || '',
          buttonText: 'Book A Demo',
          buttonLink: (item as any).linkUrl || (item as any).link_url || undefined,
          imageSrc: (item as any).imageUrl || (item as any).image_url || `/solutions/2-${idx + 1}.svg`,
          iconName: toPascalCase(((item as any).iconKey || (item as any).icon_key || 'BadgeCheck') as string),
        }))
      : howData
  ) as typeof howData;

  const whyDataFinal = (
    cms?.why?.items?.length
      ? cms!.why!.items.map((item, i) => ({
          heading: i === 0 ? (item as any).heading || 'Online Proofing' : undefined,
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.bodyHtml || (item as any).body_html || (item as any).description || '',
          icon: resolveIconComponent((item as any).iconKey || (item as any).icon_key) || ShieldCheck,
        }))
      : whyData
  ) as typeof whyData;

  const workflowStatsFinal = cms?.workflow?.stats?.length
    ? cms.workflow.stats
    : [
        { label: 'faster product launches', value: '75%' },
        { label: 'fewer late files', value: '50%' },
        { label: 'rework reduction', value: '25%' },
      ];
  const workflowSubtitleFinal = cms?.workflow?.subtitle || '';

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="online proofing" />

        <div className="flex flex-col gap-32">
          <Hero {...heroProps} />
          <How howData={howDataFinal as any} />
          <Why whyData={whyDataFinal as any} />
          <Workflow
            title={
              <>
                Trusted by <InlineHighlight>global leaders</InlineHighlight>
              </>
            }
            subtitle={workflowSubtitleFinal}
            statsData={workflowStatsFinal}
          />
          <Contact leadingText="Ready to " highlightedText="error-proof" trailingText=" your launches?" />
        </div>
      </div>
    </div>
  );
}
