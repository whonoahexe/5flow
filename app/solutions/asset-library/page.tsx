import { CircleGauge, RefreshCcw, ShieldCheck, Zap } from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/solutions/Hero';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

export default function AssetLibrary() {
  const heroData = {
    brandName: 'asset library',
    logoSrc: '/logo.svg',
    logoAlt: '5Flow logo',
    title: 'One library for every asset',
    subtitle: 'Centralize, search, and share with confidence',
    description:
      '5Flow’s Asset Library brings every artwork, cutter guide, logo, and marketing file into one secure, searchable hub. No more Dropbox chaos, email attachments, or outdated files — just the right asset, always ready.',
    buttonText: 'See it in Action',
    buttonLink: '/contact',
    imageSrc: '/product/asset-library.svg',
    imageAlt: 'Artwork management preview',
  };

  const howData = [
    {
      heading: 'Asset Library',
      title: 'Centralized repository',
      subtitle: 'Every file in one hub',
      description: 'Logos, artworks, cutter guides, and more stored securely with access controls.',
      buttonText: 'Discover Repository',
      imageSrc: '/solutions/4-1.svg',
      iconName: 'LayoutDashboard',
    },
    {
      title: 'Advanced search',
      subtitle: 'Find assets instantly',
      description: 'Metadata tagging and filters make searching fast and accurate.',
      buttonText: 'Discover Search',
      imageSrc: '/solutions/4-2.svg',
      iconName: 'ScanSearch',
    },
    {
      title: 'Access control',
      subtitle: 'The right file for the right user',
      description: 'Role-based permissions ensure stakeholders only see what they need.',
      buttonText: 'Discover Access Control',
      imageSrc: '/solutions/4-3.svg',
      iconName: 'LockKeyhole',
    },
    {
      title: 'Connected to workflows',
      subtitle: 'Assets always in sync',
      description: 'Linked directly to artwork and content management for accuracy and speed.',
      buttonText: 'Discover Integration',
      imageSrc: '/solutions/4-4.svg',
      iconName: 'Route',
    },
  ];

  const whyData = [
    {
      heading: 'Asset Library',
      title: 'Brand consistency',
      subtitle: 'The right asset every time',
      description: 'One central library ensures teams and suppliers always use approved assets.',
      icon: RefreshCcw,
    },
    {
      title: 'Productivity boost',
      subtitle: 'Less searching, more doing',
      description: 'Teams save hours by finding assets instantly, freeing time for high-value work.',
      icon: Zap,
    },
    {
      title: 'Supply chain efficiency',
      subtitle: 'Faster collaboration with partners',
      description: 'Suppliers and printers access validated files directly, cutting delays and rework.',
      icon: CircleGauge,
    },
    {
      title: 'Risk reduction',
      subtitle: 'Eliminate errors from outdated files',
      description: 'Always-on version control ensures outdated or unapproved assets never reach production.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="asset library" />

        <div className="flex flex-col gap-32">
          <Hero {...heroData} />
          <How howData={howData} />
          <Why whyData={whyData} />
          <Workflow
            title={
              <>
                Trusted by <InlineHighlight>global leaders</InlineHighlight>
              </>
            }
            subtitle="Numbers that matter"
            statsData={[
              { label: 'faster product launches', value: '75%' },
              { label: 'fewer late files', value: '50%' },
              { label: 'across Retail, Pharma, FMCG, and Beauty', value: 'Trusted' },
            ]}
          />
          <Contact leadingText="Time to turn your packaging liabilities into " highlightedText="assets" />
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
