import {
  CircleDollarSign,
  Lightbulb,
  LineSquiggle,
  MessageSquareWarning,
  RailSymbol,
  Rocket,
  ShieldCheck,
  UserPen,
} from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import InlineHighlight from '@/components/core/inline-highlight';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/product/Hero';
import How from '@/components/page/product/How';
import Need from '@/components/page/product/Need';
import What from '@/components/page/product/What';
import Why from '@/components/page/product/Why';
import Workflow from '@/components/page/product/Workflow';
import Who from '@/components/page/home/Who';
import * as LucideIcons from 'lucide-react';
import { features } from '@/lib/features';
import { getProduct } from '@/lib/cms/product';

const heroData = {
  logoSrc: '/product/dragonfly.svg',
  logoAlt: 'Wave Brand',
  title: 'Make your projects fly',
  subtitle: 'Streamlined workflows for complex brand execution',
  description:
    'Dragonfly is a web-based graphics and packaging management platform that cuts through miscommunication, complexity, and delays. Built for agility and scale, it keeps your brand projects moving on time, on budget, every time.',
  imageSrc: '/product/Solution_Banner_Dragonfly.jpg',
  mobileImageSrc: '/product/Solution_Banner_Dragonfly_mobile.jpg',
  imageWidth: 376,
  imageAlt: 'rectangle',
};

const whatData = [
  [
    {
      title: 'Miscommunication',
      subtitle: 'Too many stakeholders, too many silos',
      description: 'Teams lose time and accuracy when information is scattered across emails and tools.',
      icon: MessageSquareWarning,
      buttonLink: '/solutions/artwork-management',
    },
    {
      title: 'Rigid workflows',
      subtitle: 'Processes break when projects change',
      description: 'Static workflows cannot handle the pace or complexity of today’s packaging and marketing demands.',
      icon: RailSymbol,
      buttonLink: '/solutions/artwork-management',
    },
  ],
  [
    {
      title: 'Manual reporting',
      subtitle: 'Hours wasted building spreadsheets',
      description: 'Teams spend more time making reports than moving projects forward.',
      icon: UserPen,
      buttonLink: '/solutions/data-analytics',
    },
    {
      title: 'System chaos',
      subtitle: 'Too many tools that don’t connect',
      description: 'Copy-pasting between PIMs, DAMs, and ERPs slows everything down and increases errors.',
      icon: LineSquiggle,
      buttonLink: '/solutions/integration',
    },
  ],
];

const howData = [
  {
    title: 'Configurable workflows',
    subtitle: 'Flexibility built into every project',
    description:
      'Dragonfly adapts to your needs with templates, task-driven processes, and rules that make change easy.',
    buttonText: 'Discover Artwork Management',
    buttonLink: '/solutions/artwork-management',
    imageSrc: '/product/2-1.svg',
    iconName: 'Workflow',
  },
  {
    title: 'Intuitive dashboards',
    subtitle: 'Clear visibility for every team member',
    description:
      'Customizable dashboards and task lists keep information where you need it, improving adoption and speed.',
    buttonText: 'Discover Artwork Management',
    buttonLink: '/solutions/artwork-management',
    imageSrc: '/product/2-2.svg',
    iconName: 'LayoutDashboard',
  },
  {
    title: 'Automated reporting',
    subtitle: 'Insights at the click of a button',
    description:
      'Schedule-driven reporting and PowerBI integration turn raw data into instant KPIs and process improvements.',
    buttonText: 'Discover Data Analysis',
    buttonLink: '/solutions/data-analytics',
    imageSrc: '/product/2-3.svg',
    iconName: 'ChartNoAxesCombined',
  },
  {
    title: 'Rich integrations',
    subtitle: 'Connect to your tech stack',
    description:
      'Out-of-the-box APIs and open architecture integrate Dragonfly with SAP, PLM, DAM, and e-commerce platforms.',
    buttonText: 'Discover Integrations',
    buttonLink: '/solutions/integration',
    imageSrc: '/product/2-4.svg',
    iconName: 'Import',
  },
];

const whyData = [
  {
    title: 'Faster execution',
    desc: 'Deliver projects on time, every time',
    sub: 'Agile workflows and automation reduce delays so launches stay on track.',
    icon: Rocket,
  },
  {
    title: 'Smarter decisions',
    desc: 'Real-time data you can act on',
    sub: 'Dashboards and automated reporting give leaders clarity without manual effort.',
    icon: Lightbulb,
  },
  {
    title: 'Lower costs',
    desc: 'Less rework, more efficiency',
    sub: 'Integrated workflows reduce duplication, manual input, and costly delays.',
    icon: CircleDollarSign,
  },
  {
    title: 'Confidence at scale',
    desc: 'One system, connected everywhere',
    sub: 'With global integrations, Dragonfly keeps every market aligned while giving local teams the agility they need.',
    icon: ShieldCheck,
  },
];

const needData = {
  title1: 'Flexible ',
  highlightTitle: 'pricing',
  title2: '  for every organization',
  subtitle: 'From small teams to global enterprises',
  description:
    "WAVE scales with your business. Whether you're managing a few artworks or thousands across multiple markets, our pricing has something for everyone.",
  buttonText: 'Talk to Us',
};

const clientData = [
  'Best_Buy.png',
  'Grupo_BIMBO.png',
  'Kellanova.png',
  'MARS_Petcare.png',
  'Molson_Coors.png',
  'Mondelez.png',
  'Morrison.png',
  'Orkla.png',
  'Reynolds International Logo.png',
  'Shiseido.png',
  'Wellness_Pet.png',
];

const workflowData = {
  title: 'Trusted by global leaders',
  subtitle:
    'Mondelez, Kellanova, and global FMCG leaders use Dragonfly as their packaging and marketing execution backbone.',
  buttonText: 'See Case Studies',
  statsData: [
    {
      value: '4.5K+',
      label: 'global users at Mondelez',
    },
    {
      value: 'Integration',
      label: 'with SAP, PLM, DAM, and Salsify systems',
    },
    {
      value: 'Faster',
      label: 'approvals, higher data quality, and improved user satisfaction',
    },
  ],
};

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

export default async function Dragonfly() {
  let cms = null as Awaited<ReturnType<typeof getProduct>> | null;
  if (features.enabled) {
    try {
      cms = await getProduct('dragonfly');
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
          icon: resolveIconComponent(item.iconKey || item.icon_key) || MessageSquareWarning,
        })),
        mappedWhat.slice(2, 4).map(item => ({
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.bodyHtml || item.body_html || item.description || '',
          buttonLink: item.linkUrl || item.link_url || undefined,
          icon: resolveIconComponent(item.iconKey || item.icon_key) || UserPen,
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
          imageSrc: item.imageUrl || item.image_url || '/product/2-1.svg',
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
    title1: cms?.need?.title1 ?? needData.title1,
    highlightTitle: cms?.need?.highlightTitle ?? needData.highlightTitle,
    title2: cms?.need?.title2 ?? needData.title2,
    subtitle: cms?.need?.subtitle ?? needData.subtitle,
    description: cms?.need?.bodyHtml ?? needData.description,
    buttonText: cms?.need?.buttonText ?? needData.buttonText,
  };

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="dragonfly" />

        <div className="mt-12 flex flex-col gap-10 md:gap-32">
          <Hero {...heroProps} />
          <What whatData={whatDataFinal as any} />
          <How howData={howDataFinal as any} />
          <Why
            sectionTitle={
              <>
                <span className="text-foreground">Why You Need</span>
                <InlineHighlight className="text-background">Dragonfly</InlineHighlight>
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
            <Who path="product/dragonfly-clients" clients={clientData.map(name => ({ imageUrl: name }))} />
          )}
          <Workflow
            title={
              <>
                Trusted by <InlineHighlight>global leaders</InlineHighlight>
              </>
            }
            subtitle={workflowSubtitleFinal}
            statsData={workflowStatsFinal}
          />
          <Contact leadingText="Ready to make your projects " highlightedText="fly" trailingText="?" />
        </div>
      </div>
    </div>
  );
}
