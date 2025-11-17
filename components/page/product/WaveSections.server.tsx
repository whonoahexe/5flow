import { features } from '@/lib/features';
import { getContentBlock } from '@/lib/cms/content-block';
import What from './What';
import How from './How';
import Why from './Why';
import Need from './Need';
import Workflow from './Workflow';
import InlineHighlight from '@/components/core/inline-highlight';
import {
  Rocket,
  HeartHandshake,
  ShieldCheck,
  CircleDollarSign,
  CalendarSync,
  FileStack,
  ShieldAlert,
  EyeOff,
} from 'lucide-react';

// Fallback data (from original wave page)
const fallbackWhat = [
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

const fallbackHow = [
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

const fallbackWhy = [
  {
    title: 'Speed to market',
    desc: 'Cut approval times by up to 52% ',
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

const fallbackNeed = {
  title1: 'Flexible ',
  highlightTitle: 'pricing',
  title2: ' for a smooth WAVE ride',
  subtitle: 'From small teams to global enterprises',
  description:
    "WAVE scales with your business. Whether you're managing a few artworks or thousands across multiple markets, our pricing has something for everyone.",
  buttonText: 'Talk to Us',
};

const fallbackWorkflow = {
  subtitle: 'From retailers to pharma to FMCG, everyone loves to surf the WAVE',
  statsData: [
    { value: '50k+', label: 'active users' },
    { value: '300K+', label: 'artworks managed' },
    { value: '2.5M+', label: 'collaboration mails reduced' },
    { value: '52%', label: 'faster with global rollouts' },
  ],
};

function mapWhat(blockItems: any[]): any[][] {
  if (!blockItems || blockItems.length === 0) return fallbackWhat;
  const rows: any[][] = [];
  for (let i = 0; i < blockItems.length; i += 2) {
    const slice = blockItems.slice(i, i + 2).map(item => ({
      title: item.title,
      subtitle: item.subtitle || '',
      description: item.bodyHtml || '',
      buttonLink: item.linkUrl,
    }));
    rows.push(slice);
  }
  return rows;
}

function mapHow(blockItems: any[]): any[] {
  if (!blockItems || blockItems.length === 0) return fallbackHow;
  return blockItems.map(item => ({
    title: item.title,
    subtitle: item.subtitle || '',
    description: item.bodyHtml || '',
    buttonText: 'Learn More',
    buttonLink: item.linkUrl,
    imageSrc: item.image?.url || '/product/placeholder.svg',
    iconName: item.iconKey,
  }));
}

function mapWhy(blockItems: any[]): any[] {
  if (!blockItems || blockItems.length === 0) return fallbackWhy;
  return blockItems.map(item => ({
    title: item.title,
    desc: item.subtitle || item.title,
    sub: item.bodyHtml || '',
    icon: ShieldCheck,
  }));
}

export default async function WaveSectionsServer() {
  if (!features.enabled) {
    return (
      <>
        <What whatData={fallbackWhat} />
        <How howData={fallbackHow} />
        <Why
          sectionTitle={
            <>
              <span className="text-foreground">Why You Need</span>
              <InlineHighlight className="text-background">WAVE</InlineHighlight>
            </>
          }
          whyData={fallbackWhy}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              Trusted <InlineHighlight>worldwide</InlineHighlight>
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
      getContentBlock('product-wave-what'),
      getContentBlock('product-wave-how'),
      getContentBlock('product-wave-why'),
    ]);
    const whatData = mapWhat(whatBlock?.items || []);
    const howData = mapHow(howBlock?.items || []);
    const whyData = mapWhy(whyBlock?.items || []);

    // Need + Workflow could later come from dedicated blocks; for now fallback

    return (
      <>
        <What whatData={whatData} />
        <How howData={howData} />
        <Why
          sectionTitle={
            <>
              <span className="text-foreground">Why You Need</span>
              <InlineHighlight className="text-background">WAVE</InlineHighlight>
            </>
          }
          whyData={whyData}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              Trusted <InlineHighlight>worldwide</InlineHighlight>
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
              <InlineHighlight className="text-background">WAVE</InlineHighlight>
            </>
          }
          whyData={fallbackWhy}
        />
        <Need {...fallbackNeed} />
        <Workflow
          title={
            <>
              Trusted <InlineHighlight>worldwide</InlineHighlight>
            </>
          }
          subtitle={fallbackWorkflow.subtitle}
          statsData={fallbackWorkflow.statsData}
        />
      </>
    );
  }
}
