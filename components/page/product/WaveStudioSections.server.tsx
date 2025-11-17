import { features } from '@/lib/features';
import { getContentBlock } from '@/lib/cms/content-block';
import What from './What';
import How from './How';
import Why from './Why';
import Need from './Need';
import Workflow from './Workflow';
import InlineHighlight from '@/components/core/inline-highlight';
import { History, FileXIcon, CalendarClock, CalendarX2, Lightbulb, ShieldCheck, Rocket, Scaling } from 'lucide-react';

const fallbackWhat = [
  [
    {
      title: 'Endless resizing requests',
      subtitle: 'The same design, 100 times over',
      description: 'Creative teams lose days resizing and adapting assets instead of focusing on new ideas.',
      buttonLink: '/solutions/automated-artwork',
      icon: History,
    },
    {
      title: 'Inconsistent outputs',
      subtitle: 'Assets that look off brand',
      description: 'Without guardrails, production work drifts, creating quality issues and brand headaches.',
      buttonLink: '/solutions/automated-artwork',
      icon: FileXIcon,
    },
  ],
  [
    {
      title: 'Bottlenecked studios',
      subtitle: 'Too much work, not enough people',
      description: 'In house teams get stuck in production loops instead of doing creative work.',
      buttonLink: '/solutions/artwork-management',
      icon: CalendarClock,
    },
    {
      title: 'Slow campaign rollouts',
      subtitle: 'Missed deadlines, missed moments',
      description: 'Manual production slows launches, leaving marketing out of sync with market demand.',
      buttonLink: '/solutions/artwork-management',
      icon: CalendarX2,
    },
  ],
];

const fallbackHow = [
  {
    title: 'Smart automation',
    subtitle: 'Automation handles the repetitive stuff',
    description: "Our tech automates resizing, formatting, and versioning so your designers don't have to.",
    buttonText: 'Discover Automated Artwork',
    buttonLink: '/solutions/automated-artwork',
    imageSrc: '/product/4-1.svg',
    iconName: 'Settings',
  },
  {
    title: 'Creative consistency',
    subtitle: 'Guardrails built into every file',
    description: 'Templates, brand rules, and quality checks keep everything looking sharp and on brand.',
    buttonText: 'Discover Automated Artwork',
    buttonLink: '/solutions/automated-artwork',
    imageSrc: '/product/4-2.svg',
    iconName: 'RefreshCcw',
  },
  {
    title: 'Scalable capacity',
    subtitle: 'More output without more headcount',
    description:
      'We extend your team with production firepower so you can handle ten times the work without the stress.',
    buttonText: 'Discover Artwork Management',
    buttonLink: '/solutions/artwork-management',
    imageSrc: '/product/4-3.svg',
    iconName: 'Scaling',
  },
  {
    title: 'Faster delivery',
    subtitle: 'Campaigns go live on time',
    description: 'Agile workflows and parallel production cycles mean deadlines are always met.',
    buttonText: 'Discover Artwork Management',
    buttonLink: '/solutions/artwork-management',
    imageSrc: '/product/4-4.svg',
    iconName: 'Zap',
  },
];

const fallbackWhy = [
  {
    title: 'Time back for creativity',
    desc: 'Free your team from production grind',
    sub: 'Designers focus on ideas, not endless adaptations. More energy for the work that matters.',
    icon: Lightbulb,
  },
  {
    title: 'Confidence in quality',
    desc: 'Every asset, on brand',
    sub: 'Automated checks and smart templates mean fewer mistakes and more consistent results.',
    icon: ShieldCheck,
  },
  {
    title: 'Faster campaigns',
    desc: 'Market ready in record time',
    sub: 'Roll out campaigns across markets in days, not weeks, without cutting corners.',
    icon: Rocket,
  },
  {
    title: 'Scalable production',
    desc: 'Grow without the growing pains',
    sub: 'Handle big bursts of work, seasonal peaks, and global rollouts without adding headcount.',
    icon: Scaling,
  },
];

const fallbackNeed = {
  title1: '',
  highlightTitle: 'Pay',
  title2: ' for what you need',
  subtitle: 'Pricing that cares about you',
  description:
    'From one-off projects to ongoing production, WaveStudio adapts to your workload. Pricing scales with output so you only pay for what you need.',
  buttonText: 'Talk to Us',
};

const fallbackWorkflow = {
  subtitle: 'Retailers and consumer brands rely on WaveStudio to scale artwork production without scaling',
  statsData: [
    { value: '60%', label: 'faster artwork turnaround' },
    { value: '90%', label: 'first-time accuracy' },
    { value: '1M+', label: 'designs created' },
    { value: '50K+', label: 'active users' },
  ],
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

export default async function WaveStudioSectionsServer() {
  if (!features.enabled) {
    return (
      <>
        <What whatData={fallbackWhat} />
        <How howData={fallbackHow} />
        <Why
          sectionTitle={
            <>
              <span className="text-foreground">Why You Need</span>
              <InlineHighlight className="text-background">WaveStudio</InlineHighlight>
            </>
          }
          whyData={fallbackWhy}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              <InlineHighlight>Faster</InlineHighlight> rollouts, <InlineHighlight>fewer </InlineHighlight> headaches
            </>
          }
          subtitle={fallbackWorkflow.subtitle}
          statsData={fallbackWorkflow.statsData}
        />
      </>
    );
  }

  try {
    const [whatBlock, howBlock, whyBlock] = await Promise.all([
      getContentBlock('product-wavestudio-what'),
      getContentBlock('product-wavestudio-how'),
      getContentBlock('product-wavestudio-why'),
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
              <InlineHighlight className="text-background">WaveStudio</InlineHighlight>
            </>
          }
          whyData={whyData}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              <InlineHighlight>Faster</InlineHighlight> rollouts, <InlineHighlight>fewer </InlineHighlight> headaches
            </>
          }
          subtitle={fallbackWorkflow.subtitle}
          statsData={fallbackWorkflow.statsData}
        />
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
              <InlineHighlight className="text-background">WaveStudio</InlineHighlight>
            </>
          }
          whyData={fallbackWhy}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              <InlineHighlight>Faster</InlineHighlight> rollouts, <InlineHighlight>fewer </InlineHighlight> headaches
            </>
          }
          subtitle={fallbackWorkflow.subtitle}
          statsData={fallbackWorkflow.statsData}
        />
      </>
    );
  }
}
