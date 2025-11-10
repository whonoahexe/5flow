import { CircleDollarSign, Rocket, Scaling, ShieldCheck } from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/solutions/Hero';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

export default function ArtworkManagement() {
  const heroData = {
    title: 'Artwork management without the chaos',
    subtitle: 'Centralize, streamline, and simplify every artwork project',
    description:
      'Our Artwork Management ensures that brands, designers, and regulatory teams finally get one source of truth. No more version hunts, long email threads, or missed deadlines. Just a clear, connected workflow that keeps projects accurate and on time.',
    imageSrc: '/solutions/artwork-management.png',
    imageAlt: 'Artwork management preview',
    mobileImageSrc: '/solutions/artwork-management-mobile.png',
  };

  const howData = [
    {
      heading: 'Artwork Management',
      title: 'Centralized platform',
      subtitle: 'One hub for every file',
      description:
        'Artwork files, cutter guides, and declarations all live in one place. No more scattered assets across teams.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/1.svg',
      iconName: 'MonitorCog',
    },
    {
      title: 'Automated workflows',
      subtitle: 'Work moves without bottlenecks',
      description:
        'Approvals, reviews, and updates route automatically to the right person, keeping projects on track.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/2.svg',
      iconName: 'Workflow',
    },
    {
      title: 'Version control',
      subtitle: 'Every change documented',
      description:
        'Every update is tracked and logged. Teams work with confidence, knowing they always have the latest version.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/3.svg',
      iconName: 'SearchCheck',
    },
    {
      title: 'Integrated communication',
      subtitle: 'Approvals without the noise',
      description:
        'Comments, markups, and approvals happen in-platform, not across email chains, reducing confusion and delays.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/4.svg',
      iconName: 'MessageSquarePlus',
    },
  ];

  const whyData = [
    {
      heading: 'Artwork Management',
      title: 'Faster launches',
      subtitle: 'Products reach shelves on time',
      description:
        'Automated workflows and clear approvals cut cycle time, helping brands stay ahead in fast-moving markets.',
      icon: Rocket,
    },
    {
      title: 'Lower costs',
      subtitle: 'Less waste, fewer errors',
      description: 'Accurate artwork reduces reprints, saves money, and improves supplier efficiency.',
      icon: CircleDollarSign,
    },
    {
      title: 'Stronger compliance',
      subtitle: 'Built-in audit readiness',
      description: 'Track every update and approval for audit-ready records that protect against compliance risks.',
      icon: ShieldCheck,
    },
    {
      title: 'Scale with clarity',
      subtitle: 'Manage thousands of artworks easily',
      description: 'From ten SKUs to ten thousand, the system scales with your business without adding complexity.',
      icon: Scaling,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="artwork management" />

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
              { label: ' rework reduction', value: '25%' },
            ]}
          />
          <Contact leadingText="Ready to " highlightedText="simplify" trailingText=" artwork management?" />
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
