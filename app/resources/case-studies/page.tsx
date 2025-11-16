import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/resources/Hero';
import FilterSection from '@/components/page/resources/FilterSection';

export default function CaseStudies() {
  const tabsData = [
    {
      value: 'industry',
      label: 'By Industry',
      icon: 'briefcase',
      buttonLabel: 'Read Case Study',
      items: [
        {
          title: 'Retail Case Study',
          desc: 'How retailer X reduced time-to-shelf',
          image: '/product/rectangle.png',
          link: '/case-studies/retail',
        },
        {
          title: 'Pharma Case Study',
          desc: 'Regulatory-ready artwork at scale',
          image: '/product/rectangle.png',
          link: '/case-studies/pharma',
        },
        {
          title: 'F&B Case Study',
          desc: 'Faster SKU launches and compliance',
          image: '/product/rectangle.png',
          link: '/case-studies/fnb',
        },
        {
          title: 'Beauty Case Study',
          desc: 'Consistent global branding',
          image: '/product/rectangle.png',
          link: '/case-studies/beauty',
        },
      ],
    },
    {
      value: 'roles',
      label: 'By Roles',
      icon: 'users',
      buttonLabel: 'Read Case Study',
      items: [
        {
          title: 'Designer Spotlight',
          desc: 'Creating compliant assets faster',
          image: '/product/rectangle.png',
          link: '/case-studies/designer',
        },
        {
          title: 'Brand Manager',
          desc: 'Maintaining global consistency',
          image: '/product/rectangle.png',
          link: '/case-studies/brand',
        },
        {
          title: 'Legal & Compliance',
          desc: 'Audit trails for approvals',
          image: '/product/rectangle.png',
          link: '/case-studies/legal',
        },
        {
          title: 'Packaging Team',
          desc: 'Faster artwork iterations',
          image: '/product/rectangle.png',
          link: '/case-studies/packaging',
        },
      ],
    },
    {
      value: 'usecase',
      label: 'By Use Case',
      icon: 'target',
      buttonLabel: 'Read Case Study',
      items: [
        {
          title: 'Artwork Management',
          desc: 'End-to-end artwork lifecycle',
          image: '/product/rectangle.png',
          link: '/case-studies/artwork',
        },
        {
          title: 'Approval Workflow',
          desc: 'Faster sign-offs across teams',
          image: '/product/rectangle.png',
          link: '/case-studies/approval',
        },
        {
          title: 'Globalization',
          desc: 'Localized assets at scale',
          image: '/product/rectangle.png',
          link: '/case-studies/globalization',
        },
        {
          title: 'Print-Ready Assets',
          desc: 'Consistent files for suppliers',
          image: '/product/rectangle.png',
          link: '/case-studies/print',
        },
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="case studies" />

        <div className="flex flex-col gap-32">
          <Hero
            title="See how leading brands use 5Flow"
            subtitle="Explore real-world success stories from Retail, Pharma, F&B, Beauty, and Consumer Goods."
            buttonLabel="Explore Case Studies"
          />
          <FilterSection tabsData={tabsData} />

          <Contact leadingText="Ready to write your own " highlightedText="success" trailingText=" story?" />
        </div>
      </div>
    </div>
  );
}
