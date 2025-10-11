import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/solutions/Hero';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

export default function Integration() {
  const heroData = {
    brandName: 'integration',
    logoSrc: '/logo.svg',
    logoAlt: '5Flow logo',
    title: 'Connected workflows, seamless systems',
    subtitle: 'Integration that eliminates silos and manual work.',
    description:
      '5Flow’s Integration solution connects your PIM, DAM, ERP, and design tools into one unified workflow. No more copy-pasting, duplicate files, or disconnected systems. Just data flowing smoothly across your ecosystem.',
    buttonText: 'See it in Action',
    buttonLink: '/contact', // dynamic target for CTA
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  const howData = [
    {
      heading: 'Integration',
      title: 'Open APIs',
      subtitle: 'Easy connection to any system',
      description: 'Flexible APIs connect 5Flow to PIM, DAM, ERP, and creative tools with minimal effort.',
      buttonText: 'Discover APIs',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Real-time sync',
      subtitle: 'Data flows instantly',
      description: 'Updates push across systems automatically, ensuring everyone works with the latest information.',
      buttonText: 'Discover Sync',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Scalable architecture',
      subtitle: 'Built to handle complexity',
      description: 'Integration scales from a few systems to enterprise-wide ecosystems across global teams.',
      buttonText: 'Discover Scalability',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Secure connections',
      subtitle: 'Data protected end to end',
      description: 'Enterprise-grade security ensures integrations are safe, compliant, and reliable.',
      buttonText: 'Discover Security',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  const whyData = [
    {
      heading: 'Integration',
      title: 'Ecosystem efficiency',
      subtitle: 'Every tool working together',
      description: 'Seamless integrations keep workflows moving without manual intervention.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Efficiency Gains',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Reduced manual work',
      subtitle: 'Less copy-pasting, fewer errors',
      description: 'Automated data flow eliminates human error and saves hours of repetitive effort.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Productivity Benefits',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Greater visibility',
      subtitle: 'One view across systems',
      description: 'Connected systems give managers a clear picture of project status and risks.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Visibility Benefits',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Flexibility at scale',
      subtitle: 'Adapt to any tech landscape',
      description: 'Open architecture means integration works with your current tools, not against them.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Scalability Benefits',
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
