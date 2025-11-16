import { CircleDollarSign, FileStack, Lightbulb, Rocket } from 'lucide-react';
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
    buttonLink: '/contact',
    imageSrc: '/solutions/automated-artwork.png',
    imageAlt: 'Automated artwork preview',
    mobileImageSrc: '/solutions/automated-artwork-mobile.png',
  };

  const howData = [
    {
      heading: 'Automated Artwork',
      title: 'Template-driven design',
      subtitle: 'Automation built into templates',
      description: 'Predefined templates generate artwork variations quickly while keeping brand guidelines intact.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/5-1.svg',
      iconName: 'LayoutList',
    },
    {
      title: 'Multilingual automation',
      subtitle: 'Translations applied instantly',
      description: 'Automated text handling applies approved translations across SKUs, cutting manual entry errors.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/5-2.svg',
      iconName: 'Languages',
    },
    {
      title: 'Batch processing',
      subtitle: 'Scale without bottlenecks',
      description: 'Generate dozens or thousands of artworks at once, reducing turnaround from weeks to hours.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/5-3.svg',
      iconName: 'Layers',
    },
    {
      title: 'Validation rules',
      subtitle: 'Accuracy by default',
      description:
        'Built-in rules check barcodes, text placement, and compliance automatically before files go to print.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/5-4.svg',
      iconName: 'ShieldCheck',
    },
  ];

  const whyData = [
    {
      heading: 'Automated Artwork',
      title: 'Faster market entry',
      subtitle: 'Launch weeks earlier',
      description: 'Cut artwork turnaround from days to minutes, helping products and promos hit shelves faster.',
      icon: Rocket,
    },
    {
      title: 'Greater creative freedom',
      subtitle: 'Designers focus on ideas, not mechanics',
      description: 'Automation frees creative teams from repetitive edits so they can focus on innovation.',
      icon: Lightbulb,
    },
    {
      title: 'Precision at scale',
      subtitle: 'Consistency across thousands of SKUs',
      description: 'Automation eliminates human error, ensuring every adaptation is accurate and on brand.',
      icon: FileStack,
    },
    {
      title: 'Sustainable and low cost',
      subtitle: 'Less waste, fewer reprints',
      description: 'Automated accuracy reduces costly mistakes, reprints, and supplier delays.',
      icon: CircleDollarSign,
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
            subtitle=""
            statsData={[
              { label: 'faster product launches', value: '75%' },
              { label: 'fewer late files', value: '50%' },
              { label: 'rework reduction', value: '25%' },
            ]}
          />
          <Contact leadingText="Create artworks the " highlightedText="smart way" />
        </div>
      </div>
    </div>
  );
}
