import { Eye, Lightbulb, Scaling, WorkflowIcon } from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import SolutionHeroServer from '@/components/page/solutions/SolutionHero.server';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

export default function Integration() {
  const heroFallback = {
    brandName: 'integration',
    logoSrc: '/logo.svg',
    logoAlt: '5Flow logo',
    title: 'Connected workflows, seamless systems',
    subtitle: 'Integration that eliminates silos and manual work.',
    description:
      '5Flow’s Integration solution connects your PIM, DAM, ERP, and design tools into one unified workflow. No more copy-pasting, duplicate files, or disconnected systems. Just data flowing smoothly across your ecosystem.',
    buttonText: 'See it in Action',
    buttonLink: '/contact',
    imageSrc: '/solutions/integration.png',
    imageAlt: 'Integration preview',
    mobileImageSrc: '/solutions/integration-mobile.png',
  };

  const howData = [
    {
      heading: 'Integration',
      title: 'Open APIs',
      subtitle: 'Easy connection to any system',
      description: 'Flexible APIs connect 5Flow to PIM, DAM, ERP, and creative tools with minimal effort.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/6-1.svg',
      iconName: 'ScreenShare',
    },
    {
      title: 'Real-time sync',
      subtitle: 'Data flows instantly',
      description: 'Updates push across systems automatically, ensuring everyone works with the latest information.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/6-2.svg',
      iconName: 'RefreshCcw',
    },
    {
      title: 'Scalable architecture',
      subtitle: 'Built to handle complexity',
      description: 'Integration scales from a few systems to enterprise-wide ecosystems across global teams.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/6-3.svg',
      iconName: 'Scaling',
    },
    {
      title: 'Secure connections',
      subtitle: 'Data protected end to end',
      description: 'Enterprise-grade security ensures integrations are safe, compliant, and reliable.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/6-4.svg',
      iconName: 'ShieldCheck',
    },
  ];

  const whyData = [
    {
      heading: 'Integration',
      title: 'Ecosystem efficiency',
      subtitle: 'Every tool working together',
      description: 'Seamless integrations keep workflows moving without manual intervention.',
      icon: WorkflowIcon,
    },
    {
      title: 'Reduced manual work',
      subtitle: 'Less copy-pasting, fewer errors',
      description: 'Automated data flow eliminates human error and saves hours of repetitive effort.',
      icon: Lightbulb,
    },
    {
      title: 'Greater visibility',
      subtitle: 'One view across systems',
      description: 'Connected systems give managers a clear picture of project status and risks.',
      icon: Eye,
    },
    {
      title: 'Flexibility at scale',
      subtitle: 'Adapt to any tech landscape',
      description: 'Open architecture means integration works with your current tools, not against them.',
      icon: Scaling,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="integration" />

        <div className="flex flex-col gap-32">
          <SolutionHeroServer slug="integration" fallback={heroFallback} />
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
          <Contact leadingText="Ready to connect your " highlightedText="artwork systems?" />
        </div>
      </div>
    </div>
  );
}
