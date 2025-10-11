import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/solutions/Hero';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

export default function ContentManagement() {
  const heroData = {
    brandName: 'content management',
    logoSrc: '/logo.svg',
    logoAlt: '5Flow logo',
    title: 'Content under control',
    subtitle: 'One source of truth for every market and channel',
    description:
      '5Flow’s Content Management solution centralizes product data, claims, translations, and packaging content. No more copy-pasting across spreadsheets or chasing the latest version — just accurate content ready for every artwork, label, and market.',
    buttonText: 'See it in Action',
    buttonLink: '/contact', // dynamic target for CTA
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  const howData = [
    {
      heading: 'Content Management', // used by How for top heading
      title: 'Centralized content hub',
      subtitle: 'One place for every claim and translation',
      description: 'Product data, claims, and text live in a single repository connected to artwork workflows.',
      buttonText: 'Discover the Hub',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Structured workflows',
      subtitle: 'Content validated at the source',
      description: 'Approval processes ensure every line of copy is validated before reaching design or production.',
      buttonText: 'Discover Workflows',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Version history',
      subtitle: 'Track every change across markets',
      description: 'Every edit is logged and accessible, giving teams confidence they’re using the latest content.',
      buttonText: 'Discover Version Control',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Integration ready',
      subtitle: 'Connect with PIM, DAM, and ERP',
      description: 'Open APIs link content directly into your ecosystem, eliminating manual re-entry.',
      buttonText: 'Discover Integrations',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  const whyData = [
    {
      heading: 'Content Management',
      title: 'Consistent brand voice',
      subtitle: 'Aligned across products and markets',
      description:
        'With one source of truth, brand voice stays clear and consistent globally, no matter the SKU or channel.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Brand Consistency',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Reduced compliance risk',
      subtitle: 'Always accurate, always validated',
      description: 'Content approvals ensure regulatory accuracy in every market, reducing exposure to costly fines.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Compliance Benefits',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Creative efficiency',
      subtitle: 'Designers focus on design, not copy hunts',
      description:
        'Approved content flows directly into artwork, letting creative teams produce faster with fewer errors.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Creative Gains',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Operational agility',
      subtitle: 'Handle changes without chaos',
      description:
        'Ingredient updates, new claims, or product launches are rolled out instantly across all packaging and markets.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Agility Benefits',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="wave" />

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
          <Contact />
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
