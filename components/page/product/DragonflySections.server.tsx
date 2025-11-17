import { features } from '@/lib/features';
import { getContentBlock } from '@/lib/cms/content-block';
import What from './What';
import How from './How';
import Why from './Why';
import Need from './Need';
import InlineHighlight from '@/components/core/inline-highlight';
import {
  MessageSquareWarning,
  RailSymbol,
  UserPen,
  LineSquiggle,
  Rocket,
  Lightbulb,
  CircleDollarSign,
  ShieldCheck,
} from 'lucide-react';

const fallbackWhat = [
  [
    {
      title: 'Miscommunication',
      subtitle: 'Too many stakeholders, too many silos',
      description: 'Teams lose time and accuracy when information is scattered across emails and tools.',
      buttonLink: '/solutions/artwork-management',
      icon: MessageSquareWarning,
    },
    {
      title: 'Rigid workflows',
      subtitle: 'Processes break when projects change',
      description: 'Static workflows cannot handle the pace or complexity of today’s packaging and marketing demands.',
      buttonLink: '/solutions/artwork-management',
      icon: RailSymbol,
    },
  ],
  [
    {
      title: 'Manual reporting',
      subtitle: 'Hours wasted building spreadsheets',
      description: 'Teams spend more time making reports than moving projects forward.',
      buttonLink: '/solutions/data-analytics',
      icon: UserPen,
    },
    {
      title: 'System chaos',
      subtitle: 'Too many tools that don’t connect',
      description: 'Copy-pasting between PIMs, DAMs, and ERPs slows everything down and increases errors.',
      buttonLink: '/solutions/integration',
      icon: LineSquiggle,
    },
  ],
];

const fallbackHow = [
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

const fallbackWhy = [
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

const fallbackNeed = {
  title1: 'Flexible ',
  highlightTitle: 'pricing',
  title2: '  for every organization',
  subtitle: 'From small teams to global enterprises',
  description:
    "WAVE scales with your business. Whether you're managing a few artworks or thousands across multiple markets, our pricing has something for everyone.",
  buttonText: 'Talk to Us',
};

function mapWhat(items: any[]): any[][] {
  if (!items || !items.length) return fallbackWhat;
  const rows: any[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(
      items.slice(i, i + 2).map(it => ({
        title: it.title,
        subtitle: it.subtitle || '',
        description: it.bodyHtml || '',
        buttonLink: it.linkUrl,
      }))
    );
  }
  return rows;
}

function mapHow(items: any[]): any[] {
  if (!items || !items.length) return fallbackHow;
  return items.map(it => ({
    title: it.title,
    subtitle: it.subtitle || '',
    description: it.bodyHtml || '',
    buttonText: 'Learn More',
    buttonLink: it.linkUrl,
    imageSrc: it.image?.url || '/product/placeholder.svg',
    iconName: it.iconKey,
  }));
}

function mapWhy(items: any[]): any[] {
  if (!items || !items.length) return fallbackWhy;
  return items.map(it => ({
    title: it.title,
    desc: it.subtitle || it.title,
    sub: it.bodyHtml || '',
    icon: ShieldCheck,
  }));
}

export default async function DragonflySectionsServer() {
  if (!features.enabled) {
    return (
      <>
        <What whatData={fallbackWhat} />
        <How howData={fallbackHow} />
        <Why
          sectionTitle={
            <>
              <span className="text-foreground">Why You Need</span>
              <InlineHighlight className="text-background">Dragonfly</InlineHighlight>
            </>
          }
          whyData={fallbackWhy}
        />
        <Need {...fallbackNeed} />
      </>
    );
  }

  try {
    const [whatBlock, howBlock, whyBlock] = await Promise.all([
      getContentBlock('product-dragonfly-what'),
      getContentBlock('product-dragonfly-how'),
      getContentBlock('product-dragonfly-why'),
    ]);
    const whatData = mapWhat(whatBlock?.items || []);
    const howData = mapHow(howBlock?.items || []);
    const whyData = mapWhy(whyBlock?.items || []);

    return (
      <>
        <What whatData={whatData} />
        <How howData={howData} />
        <Why
          sectionTitle={
            <>
              <span className="text-foreground">Why You Need</span>
              <InlineHighlight className="text-background">Dragonfly</InlineHighlight>
            </>
          }
          whyData={whyData}
        />
        <Need {...fallbackNeed} />
      </>
    );
  } catch (e) {
    return (
      <>
        <What whatData={fallbackWhat} />
        <How howData={fallbackHow} />
        <Why
          sectionTitle={
            <>
              <span className="text-foreground">Why You Need</span>
              <InlineHighlight className="text-background">Dragonfly</InlineHighlight>
            </>
          }
          whyData={fallbackWhy}
        />
        <Need {...fallbackNeed} />
      </>
    );
  }
}
