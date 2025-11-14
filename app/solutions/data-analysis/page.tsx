import { AlarmClockCheck, Lightbulb, RefreshCcwDot, Settings } from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/solutions/Hero';
import How from '@/components/page/product/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/product/Workflow';
import InlineHighlight from '@/components/core/inline-highlight';

export default function DataAnalysis() {
  const heroData = {
    title: 'From Data to Direction',
    subtitle: 'Turn data into insight you can act on',
    description:
      '5Flow’s Integration solution connects your PIM, DAM, ERP, and design tools into one unified workflow. No more copy-pasting, duplicate files, or disconnected systems. Just data flowing smoothly across your ecosystem.',
    imageSrc: '/solutions/data-analysis.png',
    imageAlt: 'Data analysis preview',
    mobileImageSrc: '/solutions/data-analysis-mobile.png',
  };

  const howData = [
    {
      heading: 'Data Analysis',
      title: 'Real-time monitoring',
      subtitle: 'See progress as it happens',
      description:
        'Track every workflow and task in real time with dashboards that visualize project health and timelines.',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/7-1.svg',
      iconName: 'View',
    },
    {
      title: 'Predictive analytics',
      subtitle: 'Anticipate risks before they occur',
      description:
        'AI-driven algorithms identify patterns that indicate delays or approval loops, helping teams prevent them.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/7-2.svg',
      iconName: 'ChartNoAxesCombined',
    },
    {
      title: 'Custom dashboards',
      subtitle: 'Metrics that matter to your role',
      description:
        'Design dashboards for brand, regulatory, or design teams, so everyone sees what’s most relevant to them.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/7-3.svg',
      iconName: 'LayoutDashboard',
    },
    {
      title: 'Continuous improvement',
      subtitle: 'Learn from every project',
      description: 'Analyze performance over time to identify improvement opportunities and benchmark progress.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Book A Demo',
      imageSrc: '/solutions/7-4.svg',
      iconName: 'TrendingUp',
    },
  ];

  const whyData = [
    {
      heading: 'Data Analysis',
      title: 'Visibility that drives control',
      subtitle: 'Always know where projects stand',
      description: 'Data clarity lets teams act fast, manage timelines, and prevent bottlenecks before they snowball.',
      icon: Settings,
    },
    {
      title: 'Smarter decision-making',
      subtitle: 'Strategy built on real performance data',
      description:
        'Turn raw workflow data into insight that helps teams plan resources and allocate time more effectively.',
      icon: Lightbulb,
    },
    {
      title: 'No late-stage panic',
      subtitle: 'Act before risks become problems',
      description: 'Improve launch-readiness by flagging issues before they cause chaos',
      icon: AlarmClockCheck,
    },
    {
      title: 'Continuous optimization',
      subtitle: 'Every project gets better',
      description: 'Refine workflows and build sustainable efficiency.',
      icon: RefreshCcwDot,
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="Data Analysis" />

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
              { label: 'faster artwork adaptations', value: '80%' },
            ]}
          />
          <Contact leadingText="Ready to " highlightedText="turn data" trailingText=" into action?" />
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
