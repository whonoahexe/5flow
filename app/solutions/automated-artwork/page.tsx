import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/solutions/Hero';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

export default function AutomatedArtwork() {
  const heroData = {
    brandName: 'automated artwork',
    logoSrc: '/logo.svg',
    logoAlt: '5Flow logo',
    title: 'Artwork at the speed of automation',
    subtitle: 'Create, adapt, and deliver in minutes, not days',
    description:
      '5Flow’s Automated Artwork solution transforms repetitive production work into a streamlined process. From resizing to multilingual rollouts, automation reduces manual effort, cuts errors, and accelerates delivery.',
    buttonText: 'See it in Action',
    buttonLink: '/contact', // dynamic target for CTA
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  const howData = [
    {
      heading: 'Automated Artwork',
      title: 'Template-driven design',
      subtitle: 'Automation built into templates',
      description: 'Predefined templates generate artwork variations quickly while keeping brand guidelines intact.',
      buttonText: 'Discover Templates',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Multilingual automation',
      subtitle: 'Translations applied instantly',
      description: 'Automated text handling applies approved translations across SKUs, cutting manual entry errors.',
      buttonText: 'Discover Language Tools',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Batch processing',
      subtitle: 'Scale without bottlenecks',
      description: 'Generate dozens or thousands of artworks at once, reducing turnaround from weeks to hours.',
      buttonText: 'Discover Batch Processing',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Validation rules',
      subtitle: 'Accuracy by default',
      description:
        'Built-in rules check barcodes, text placement, and compliance automatically before files go to print.',
      buttonText: 'Discover Validation',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  const whyData = [
    {
      heading: 'Automated Artwork',
      title: 'Faster market entry',
      subtitle: 'Launch weeks earlier',
      description: 'Cut artwork turnaround from days to minutes, helping products and promos hit shelves faster.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Faster Launches',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Greater creative freedom',
      subtitle: 'Designers focus on ideas, not mechanics',
      description: 'Automation frees creative teams from repetitive edits so they can focus on innovation.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Creative Benefits',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Precision at scale',
      subtitle: 'Consistency across thousands of SKUs',
      description: 'Automation eliminates human error, ensuring every adaptation is accurate and on brand.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Precision at Scale',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Sustainable and low cost',
      subtitle: 'Less waste, fewer reprints',
      description: 'Automated accuracy reduces costly mistakes, reprints, and supplier delays.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Cost Benefits',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="automated artwork" />

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
