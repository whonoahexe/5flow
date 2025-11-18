import {
  CalendarSync,
  CircleDollarSign,
  EyeOff,
  FileStack,
  HeartHandshake,
  Rocket,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import InlineHighlight from '@/components/core/inline-highlight';
import Hero from '@/components/page/product/Hero';
import Need from '@/components/page/product/Need';
import What from '@/components/page/product/What';
import Workflow from '@/components/page/product/Workflow';
import How from '@/components/page/product/How';
import Why from '@/components/page/product/Why';
import Who from '@/components/page/home/Who';
import * as LucideIcons from 'lucide-react';
import { features } from '@/lib/features';
import { getProduct } from '@/lib/cms/product';

const heroData = {
  logoSrc: '/product/wave.svg',
  logoAlt: 'Wave Brand',
  title: 'Artwork management, without the chaos',
  subtitle: 'Faster progress from first draft to final approval.',
  description:
    'WAVE gives brand, packaging, and regulatory teams a single platform to brief, review, and approve artwork. No more confusion, no more delays. Just clear workflows that move projects forward.',
  imageSrc: '/product/Solution_Banner_WAVE.jpg',
  mobileImageSrc: '/product/Solution_Banner_WAVE_mobile.jpg',
  imageWidth: 291,
  imageAlt: 'rectangle',
};

const whatData = [
  [
    {
      title: 'Endless approval loops',
      subtitle: 'Too many rounds, too much wasted time',
      description: 'Without control, multiple versions float around, causing errors, confusion, and rework.',
      buttonLink: '/solutions/online-proofing',
      icon: CalendarSync,
    },
    {
      title: 'Version chaos',
      subtitle: 'No one knows which file is final?',
      description: 'Without control, multiple versions float around, causing errors, confusion, and rework.',
      buttonLink: '/solutions/asset-library',
      icon: FileStack,
    },
  ],
  [
    {
      title: 'Compliance risks',
      subtitle: 'A single missed change can cost millions',
      description: 'Incorrect labels or missed regulatory updates create compliance nightmares and market delays.',
      buttonLink: '/solutions/artwork-management',
      icon: ShieldAlert,
    },
    {
      title: 'No visibility',
      subtitle: 'Teams work blind to bottlenecks',
      description: 'Without live progress tracking, projects derail, deadlines slip, and accountability gets lost.',
      buttonLink: '/solutions/artwork-management',
      icon: EyeOff,
    },
  ],
];

const howData = [
  {
    title: 'Smarter approvals',
    subtitle: 'Traceable, transparent, and faster loops',
    description:
      'WAVE digitizes approvals with annotations, comparisons, and automated reminders, keeping reviews clear and accountable.',
    buttonText: 'Discover Online Proofing',
    buttonLink: '/solutions/online-proofing',
    imageSrc: '/product/1.svg',
    iconName: 'CircleCheckBig',
  },
  {
    title: 'Centralized files',
    subtitle: 'One version, one source of truth',
    description: 'Every artwork, asset, and update lives in one platform, so teams always work from the right file.',
    buttonText: 'Discover Asset Library',
    buttonLink: '/solutions/asset-library',
    imageSrc: '/product/2.svg',
    iconName: 'FileStack',
  },
  {
    title: 'Compliance built in',
    subtitle: 'Every step documented, every change tracked',
    description:
      'With audit-ready records, version control, and regulatory checks, WAVE makes compliance part of the process.',
    buttonText: 'Discover Artwork Management',
    buttonLink: '/solutions/artwork-management',
    imageSrc: '/product/3.svg',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Live project visibility',
    subtitle: 'See status, spot bottlenecks, stay in control',
    description: 'Dashboards, milestones, and timelines give managers instant clarity with no chasing updates.',
    buttonText: 'Discover Artwork Management',
    buttonLink: '/solutions/artwork-management',
    imageSrc: '/product/4.svg',
    iconName: 'Eye',
  },
];

const whyData = [
  {
    title: 'Speed to market',
    desc: 'Cut approval times by up to 52%',
    sub: 'Faster launches mean earlier shelf presence, stronger campaigns, and quicker ROI.',
    icon: Rocket,
  },
  {
    title: 'Team confidence',
    desc: 'Clear roles, clear files, clear results',
    sub: 'Teams spend less time firefighting and more time delivering work that makes an impact.',
    icon: HeartHandshake,
  },
  {
    title: 'Risk reduction',
    desc: 'Protect revenue, reputation, and compliance',
    sub: 'Traceable workflows reduce costly errors, recalls, and regulatory fines.',
    icon: ShieldCheck,
  },
  {
    title: 'Cost efficiency',
    desc: 'Fewer errors, fewer reprints',
    sub: 'With accuracy built in, brands save on correction rounds and avoid wasted print runs.',
    icon: CircleDollarSign,
  },
];

const workflowData = {
  subtitle: 'From retailers to pharma to FMCG, everyone loves to surf the WAVE',
  buttonText: 'See Case Studies',
  statsData: [
    {
      value: '50k+',
      label: 'active users',
    },
    {
      value: '300K+',
      label: 'artworks managed',
    },
    {
      value: '2.5M+',
      label: 'collaboration mails reduced',
    },
    {
      value: '52%',
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

const clientData = [
  'bp.png',
  'Chick-fil-A.png',
  'Dr._Scholls.png',
  'gropper.webp',
  'herrs_snacks.png',
  'lanxess-2.webp',
  'ludwig-schokolade.webp',
  'maurer-and-wirtz.webp',
  'png-transparent-keurig-logo-household-brands-logos.png',
  'vitakraft.webp',
];

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

export default async function Wave() {
  let cms = null as Awaited<ReturnType<typeof getProduct>> | null;
  if (features.enabled) {
    try {
      cms = await getProduct('wave');
    } catch {}
  }

  const heroProps = {
    ...heroData,
    title: cms?.hero?.title || heroData.title,
    subtitle: cms?.hero?.subtitle || heroData.subtitle,
    description: cms?.hero?.bodyHtml || heroData.description,
  };

  const mappedWhat = (cms?.what?.items?.length ? cms!.what!.items : null) as any[] | null;
  const whatDataFinal = mappedWhat
    ? [
        mappedWhat.slice(0, 2).map(item => ({
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.bodyHtml || item.body_html || item.description || '',
          buttonLink: item.linkUrl || item.link_url || undefined,
          icon: resolveIconComponent(item.iconKey || item.icon_key) || CalendarSync,
        })),
        mappedWhat.slice(2, 4).map(item => ({
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.bodyHtml || item.body_html || item.description || '',
          buttonLink: item.linkUrl || item.link_url || undefined,
          icon: resolveIconComponent(item.iconKey || item.icon_key) || FileStack,
        })),
      ]
    : whatData;

  const howDataFinal = (
    cms?.how?.items?.length
      ? cms!.how!.items.map(item => ({
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.bodyHtml || item.body_html || item.description || '',
          buttonText: 'Learn more',
          buttonLink: item.linkUrl || item.link_url || undefined,
          imageSrc: item.imageUrl || item.image_url || '/product/1.svg',
          iconName: toPascalCase((item.iconKey || item.icon_key || 'BadgeCheck') as string),
        }))
      : howData
  ) as typeof howData;

  const whyDataFinal = (
    cms?.why?.items?.length
      ? cms!.why!.items.map(item => ({
          title: item.title || '',
          desc: item.subtitle || '',
          sub: item.bodyHtml || item.body_html || item.description || '',
          icon: resolveIconComponent(item.iconKey || item.icon_key) || ShieldCheck,
        }))
      : whyData
  ) as typeof whyData;

  const workflowStatsFinal = cms?.workflow?.stats?.length ? cms.workflow.stats : workflowData.statsData;
  const workflowSubtitleFinal = cms?.workflow?.subtitle || workflowData.subtitle;

  const needFinal = {
    title1: cms?.need?.title1 ?? needData.title,
    highlightTitle: cms?.need?.highlightTitle ?? needData.highlightTitle,
    title2: cms?.need?.title2 ?? needData.title2,
    subtitle: cms?.need?.subtitle ?? needData.subtitle,
    description: cms?.need?.bodyHtml ?? needData.description,
    buttonText: cms?.need?.buttonText ?? needData.buttonText,
  };

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="wave" />

        <div className="mt-12 flex flex-col gap-16 md:gap-32">
          <Hero {...heroProps} />
          <What whatData={whatDataFinal as any} />
          <How howData={howDataFinal as any} />
          <Why
            sectionTitle={
              <>
                <span className="text-foreground">Why You Need</span>
                <InlineHighlight className="text-background">WAVE</InlineHighlight>
              </>
            }
            whyData={whyDataFinal as any}
          />
          <Need
            title1={needFinal.title1}
            highlightTitle={needFinal.highlightTitle}
            title2={needFinal.title2}
            subtitle={needFinal.subtitle}
            description={needFinal.description}
            buttonText={needFinal.buttonText}
          />
          {cms?.who?.clients?.length ? (
            <Who title={cms.who.title} clients={cms.who.clients} />
          ) : (
            <Who path="product/wave-clients" clients={clientData.map(name => ({ imageUrl: name }))} />
          )}
          <Workflow
            title={
              <>
                Trusted <InlineHighlight>worldwide</InlineHighlight>
              </>
            }
            subtitle={workflowSubtitleFinal}
            statsData={workflowStatsFinal}
          />
          <Contact leadingText="Ready to " highlightedText="simplify" trailingText=" artwork management?" />
        </div>
      </div>
    </div>
  );
}
