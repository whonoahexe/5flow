import { Cta } from '@/components/layout';
import Contact from '@/components/page/solutions/Contact';
import { Hero } from '@/components/page/solutions/Hero';
import How from '@/components/page/solutions/How';
import Why from '@/components/page/solutions/Why';
import Workflow from '@/components/page/solutions/Workflow';

export default function ArtworkManagement() {
  const heroData = {
    brandName: 'artwork management',
    logoSrc: '/logo.svg',
    logoAlt: '5Flow logo',
    title: 'Artwork management without the chaos',
    subtitle: 'Centralize, streamline, and simplify every artwork project',
    description:
      'Our Artwork Management ensures that brands, designers, and regulatory teams finally get one source of truth. No more version hunts, long email threads, or missed deadlines. Just a clear, connected workflow that keeps projects accurate and on time.',
    buttonText: 'See it in Action',
    buttonLink: '/contact', // dynamic target for CTA
    imageSrc: '/product/rectangle.png',
    imageAlt: 'Artwork management preview',
  };

  const howData = [
    {
      heading: 'Artwork Management', // kept for top heading
      title: 'Centralized platform',
      subtitle: 'One hub for every file',
      description:
        'Artwork files, cutter guides, and declarations all live in one place. No more scattered assets across teams.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Discover Centralization',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Automated workflows',
      subtitle: 'Work moves without bottlenecks',
      description:
        'Approvals, reviews, and updates route automatically to the right person, keeping projects on track.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Discover Automation',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Version control',
      subtitle: 'Every change documented',
      description:
        'Every update is tracked and logged. Teams work with confidence, knowing they always have the latest version.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Discover Version Control',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Integrated communication',
      subtitle: 'Approvals without the noise',
      description:
        'Comments, markups, and approvals happen in-platform, not across email chains, reducing confusion and delays.',
      icon: '/solutions/rectangle.png',
      buttonText: 'Discover Communication',
      imageSrc: '/solutions/rectangle.png',
    },
  ];

  const whyData = [
    {
      heading: 'Artwork Management',
      title: 'Faster launches',
      subtitle: 'Products reach shelves on time',
      description:
        'Automated workflows and clear approvals cut cycle time, helping brands stay ahead in fast-moving markets.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Faster Launches',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Lower costs',
      subtitle: 'Less waste, fewer errors',
      description: 'Accurate artwork reduces reprints, saves money, and improves supplier efficiency.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Cost Savings',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Stronger compliance',
      subtitle: 'Built-in audit readiness',
      description: 'Track every update and approval for audit-ready records that protect against compliance risks.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Compliance in Action',
      imageSrc: '/solutions/rectangle.png',
    },
    {
      title: 'Scale with clarity',
      subtitle: 'Manage thousands of artworks easily',
      description: 'From ten SKUs to ten thousand, the system scales with your business without adding complexity.',
      icon: '/solutions/rectangle.png',
      buttonText: 'See Scalability',
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
          title1="Trusted by "
          title2=""
          highlightTitle="global leaders"
          subtitle="Numbers that matter"
          buttonText="See Case Studies"
          statsData={[
            { label: 'faster product launches', value: '75%' },
            { label: 'fewer late files', value: '50%' },
            { label: 'across Retail, Pharma, FMCG, and Beauty', value: 'Trusted' },
          ]}
        />
        <Contact
          highlightTitle="Simplify"
          title1="Ready to "
          title2=" Artwork Management ?"
          description="See how 5Flow’s Artwork Management solution can streamline your process, reduce errors, and accelerate launches."
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
