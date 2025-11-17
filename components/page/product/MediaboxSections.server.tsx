import { features } from '@/lib/features';
import { getContentBlock } from '@/lib/cms/content-block';
import What from './What';
import How from './How';
import Why from './Why';
import Need from './Need';
import Workflow from './Workflow';
import InlineHighlight from '@/components/core/inline-highlight';
import { Unplug, CalendarClock, CircleDollarSign, EyeOff, Rocket, ShieldAlert, Target } from 'lucide-react';

const fallbackWhat = [
  [
    {
      title: 'Disconnected tools',
      subtitle: 'Creative work scattered across platforms',
      description: 'Teams waste time moving between systems, losing files, and duplicating tasks.',
      buttonLink: '/solutions/integration',
      icon: Unplug,
    },
    {
      title: 'Approval bottlenecks',
      subtitle: 'Campaigns stuck in endless reviews',
      description: 'Delays build when feedback is unstructured and approvals are hard to track.',
      buttonLink: '/solutions/online-proofing',
      icon: CalendarClock,
    },
  ],
  [
    {
      title: 'Costly errors',
      subtitle: 'Late or inaccurate assets impact campaigns',
      description: 'Wrong files, missed versions, or compliance slip-ups drive costly rework and missed deadlines.',
      buttonLink: '/solutions/asset-library',
      icon: CircleDollarSign,
    },
    {
      title: 'Lack of visibility',
      subtitle: 'No clarity on project status',
      description: 'Without transparent workflows, managers struggle to track progress, spot risks, or plan resources.',
      buttonLink: '/solutions/artwork-management',
      icon: EyeOff,
    },
  ],
];

const fallbackHow = [
  {
    title: 'Centralized platform',
    subtitle: 'One place for every asset',
    description:
      'Mediabox organizes creative projects and assets in a single system, reducing duplication and confusion.',
    buttonText: 'Discover Artwork Management',
    buttonLink: '/solutions/artwork-management',
    imageSrc: '/product/3-1.svg',
    iconName: 'MonitorCloud',
  },
  {
    title: 'Streamlined approvals',
    subtitle: 'Faster, traceable reviews',
    description: 'Online approvals with version history and annotations keep projects clear, compliant, and on track.',
    buttonText: 'Discover Online Proofing',
    buttonLink: '/solutions/online-proofing',
    imageSrc: '/product/3-2.svg',
    iconName: 'CircleCheckBig',
  },
  {
    title: 'Error reduction',
    subtitle: 'Accuracy built into every step',
    description: 'Automated validation and structured workflows reduce mistakes, reprints, and compliance risks.',
    buttonText: 'Discover Artwork Management',
    buttonLink: '/solutions/artwork-management',
    imageSrc: '/product/3-3.svg',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Clear reporting',
    subtitle: 'Real-time insights for better control',
    description: 'Dashboards and analytics give teams full visibility of project health, deadlines, and bottlenecks.',
    buttonText: 'Discover Data Analysis',
    buttonLink: '/solutions/data-analytics',
    imageSrc: '/product/3-4.svg',
    iconName: 'ChartNoAxesCombined',
  },
];

const fallbackWhy = [
  {
    title: 'Faster time-to-market',
    desc: 'Launch campaigns without delays',
    sub: 'Cut validation lead time by up to 67 percent with streamlined approvals and workflow automation.',
    icon: Rocket,
  },
  {
    title: 'Fewer errors',
    desc: 'Reduce costly mistakes and late files',
    sub: 'Up to 45 percent fewer errors and 50 percent fewer late assets keep campaigns accurate and reliable.',
    icon: ShieldAlert,
  },
  {
    title: 'Cost savings',
    desc: 'Do more with the same resources',
    sub: 'Lower error rates and faster cycles reduce rework, save on budgets, and maximize efficiency.',
    icon: CircleDollarSign,
  },
  {
    title: 'Team productivity',
    desc: 'Clear workflows, confident delivery',
    sub: 'With 60,000 users worldwide, Mediabox empowers teams to collaborate effectively and focus on creative impact.',
    icon: Target,
  },
];

const fallbackNeed = {
  title1: '',
  highlightTitle: 'Pricing',
  title2: ' that grows with you',
  subtitle: 'Flexible options for every team size',
  description:
    'Whether you’re managing a small creative team or coordinating global campaigns, Mediabox offers flexible pricing tailored to your workflow needs.',
  buttonText: 'Talk to Us',
};

const fallbackWorkflow = {
  subtitle: 'Leading companies rely on Mediabox to keep creative workflows efficient and on brand.',
  statsData: [
    { value: '45%', label: 'reduction in errors' },
    { value: '67%', label: 'faster validation lead time' },
    { value: '50%', label: 'fewer late files' },
    { value: '60K+', label: 'active users worldwide' },
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
    icon: ShieldAlert,
  }));
}

export default async function MediaboxSectionsServer() {
  if (!features.enabled) {
    return (
      <>
        <What whatData={fallbackWhat} />
        <How howData={fallbackHow} />
        <Why
          sectionTitle={
            <>
              <span className="text-foreground">Why You Need</span>
              <InlineHighlight className="text-background">Mediabox</InlineHighlight>
            </>
          }
          whyData={fallbackWhy}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              Trusted by <InlineHighlight>global brands</InlineHighlight>
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
      getContentBlock('product-mediabox-what'),
      getContentBlock('product-mediabox-how'),
      getContentBlock('product-mediabox-why'),
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
              <InlineHighlight className="text-background">Mediabox</InlineHighlight>
            </>
          }
          whyData={whyData}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              Trusted by <InlineHighlight>global brands</InlineHighlight>
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
              <InlineHighlight className="text-background">Mediabox</InlineHighlight>
            </>
          }
          whyData={fallbackWhy}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              Trusted by <InlineHighlight>global brands</InlineHighlight>
            </>
          }
          subtitle={fallbackWorkflow.subtitle}
          statsData={fallbackWorkflow.statsData}
        />
      </>
    );
  }
}
