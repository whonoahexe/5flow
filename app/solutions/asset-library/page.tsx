import { Cta } from '@/components/layout';
import Contact from '@/components/page/solutions/Contact';
import { Hero } from '@/components/page/solutions/Hero';
import How from '@/components/page/solutions/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/solutions/Workflow';

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
    buttonLink: '/contact', // dynamic target for CTA
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  const howData = [
    {
      heading: 'Asset Library', // used by How for top heading
      title: 'Centralized repository',
      subtitle: 'Every file in one hub',
      description: 'Logos, artworks, cutter guides, and more stored securely with access controls.',
      buttonText: 'Discover Repository',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Advanced search',
      subtitle: 'Find assets instantly',
      description: 'Metadata tagging and filters make searching fast and accurate.',
      buttonText: 'Discover Search',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Access control',
      subtitle: 'The right file for the right user',
      description: 'Role-based permissions ensure stakeholders only see what they need.',
      buttonText: 'Discover Access Control',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Connected to workflows',
      subtitle: 'Assets always in sync',
      description: 'Linked directly to artwork and content management for accuracy and speed.',
      buttonText: 'Discover Integration',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  const whyData = [
    {
      heading: 'Asset Library',
      title: 'Brand consistency',
      subtitle: 'The right asset every time',
      description: 'One central library ensures teams and suppliers always use approved assets.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Brand Consistency',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Productivity boost',
      subtitle: 'Less searching, more doing',
      description: 'Teams save hours by finding assets instantly, freeing time for high-value work.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Productivity Gains',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Supply chain efficiency',
      subtitle: 'Faster collaboration with partners',
      description: 'Suppliers and printers access validated files directly, cutting delays and rework.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Supply Chain Benefits',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Risk reduction',
      subtitle: 'Eliminate errors from outdated files',
      description: 'Always-on version control ensures outdated or unapproved assets never reach production.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Risk Reduction',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <Hero {...heroData} />
        <How howData={howData} />
        <Why whyData={whyData} />
        <Workflow
          title1="Proven by "
          title2=""
          highlightTitle="global Brands"
          subtitle="Proven by global brands"
          buttonText="See Case Studies"
          statsData={[
            { label: 'faster product launches', value: '75%' },
            { label: 'fewer late files', value: '50%' },
            { label: 'visibility on asset usage', value: '100%' },
          ]}
        />
        <Contact
          highlightTitle="assets"
          title1="Time to turn your packaging liabilities into "
          title2=""
          description="See how 5Flow’s Asset Library keeps your brand consistent, your teams efficient, and your supply chain moving."
          buttonText="Book A Demo"
          imageSrc="/product/contact.png"
          imageAlt="Contact illustration"
        />
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
