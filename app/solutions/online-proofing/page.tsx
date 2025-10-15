import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/solutions/Hero';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

export default function OnlineProofing() {
  const heroData = {
    brandName: 'online proofing',
    logoSrc: '/logo.svg',
    logoAlt: '5Flow logo',
    title: 'Proofing made simple',
    subtitle: 'Centralize reviews and cut endless loops',
    description:
      '5Flow’s Online Proofing solution brings all stakeholders into one platform for clear, traceable approvals. From annotations to version comparisons, every review is faster, sharper, and audit ready.',
    buttonText: 'See it in Action',
    buttonLink: '/contact', // dynamic target for CTA
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  const howData = [
    {
      heading: 'Online Proofing',
      title: 'Online annotations',
      subtitle: 'Markups where they belong',
      description: 'Reviewers add comments directly on artwork files, eliminating confusion and lost feedback.',
      buttonText: 'Discover Annotations',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Version comparison',
      subtitle: 'Spot changes instantly',
      description: 'Compare old and new files side by side to ensure every requested update is complete and correct.',
      buttonText: 'Discover Version Control',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Automated approvals',
      subtitle: 'Traceable, transparent sign offs',
      description: 'Sequential or parallel approval paths keep projects moving while documenting every decision.',
      buttonText: 'Discover Approvals',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Audit trails',
      subtitle: 'Compliance built into proofing',
      description: 'Every annotation, change, and approval is logged for full regulatory compliance.',
      buttonText: 'Discover Compliance',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  const whyData = [
    {
      heading: 'Online Proofing',
      title: 'Faster launches',
      subtitle: 'Cut approval cycles in half',
      description: 'Clear reviews and automated sign offs reduce cycle times, keeping launches on schedule.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Faster Launches',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Stronger compliance',
      subtitle: 'Always audit ready',
      description: 'Every approval loop is documented, giving regulatory teams full traceability.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Compliance in Action',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Lower costs',
      subtitle: 'Reduce error driven waste',
      description: 'Fewer mistakes mean fewer reprints and less wasted time and resources.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Cost Savings',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Better collaboration',
      subtitle: 'Everyone aligned in one system',
      description: 'With centralized proofing, feedback is structured, traceable, and easy to act on.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Collaboration Benefits',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="online proofing" />

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
          <Contact leadingText="Ready to " highlightedText="error-proof" trailingText=" your launches?" />
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
