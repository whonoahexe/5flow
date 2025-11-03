import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/resources/Hero';
import FilterSection from '@/components/page/resources/FilterSection';

export default function Blogs() {
  const tabsData = [
    {
      value: 'packaging',
      label: 'Packaging',
      icon: 'package',
      items: [
        {
          title: 'Sustainable Packaging Trends',
          desc: 'How brands reduce waste with smarter materials',
          image: '/product/rectangle.png',
          link: '/blogs/packaging/1',
          buttonLabel: 'Read More',
        },
        {
          title: 'Packaging for E‑commerce',
          desc: 'Designing for protection and unboxing experience',
          image: '/product/rectangle.png',
          link: '/blogs/packaging/2',
          buttonLabel: 'Read More',
        },
        {
          title: 'Regulatory Labels',
          desc: 'What to include to stay compliant across markets',
          image: '/product/rectangle.png',
          link: '/blogs/packaging/3',
          buttonLabel: 'Read More',
        },
        {
          title: 'Cost‑effective Materials',
          desc: 'Balancing quality and budget for high-volume SKUs',
          image: '/product/rectangle.png',
          link: '/blogs/packaging/4',
          buttonLabel: 'Read More',
        },
      ],
    },
    {
      value: 'compliance',
      label: 'Compliance',
      icon: 'shieldCheck',
      items: [
        {
          title: 'Global Compliance Checklist',
          desc: 'Key regulatory considerations by region',
          image: '/product/rectangle.png',
          link: '/blogs/compliance/1',
          buttonLabel: 'Read More',
        },
        {
          title: 'Ingredient Declarations',
          desc: 'Best practices for clear consumer labeling',
          image: '/product/rectangle.png',
          link: '/blogs/compliance/2',
          buttonLabel: 'Read More',
        },
        {
          title: 'Audit Trails',
          desc: 'Keeping approvals and changes auditable',
          image: '/product/rectangle.png',
          link: '/blogs/compliance/3',
          buttonLabel: 'Read More',
        },
        {
          title: 'Claims Substantiation',
          desc: 'Documenting evidence for marketing claims',
          image: '/product/rectangle.png',
          link: '/blogs/compliance/4',
          buttonLabel: 'Read More',
        },
      ],
    },
    {
      value: 'design',
      label: 'Design',
      icon: 'penTool',
      items: [
        {
          title: 'Brand‑led Packaging Design',
          desc: 'Translating brand into packaging systems',
          image: '/product/rectangle.png',
          link: '/blogs/design/1',
          buttonLabel: 'Read More',
        },
        {
          title: 'Artwork Optimization',
          desc: 'Preparing print‑ready files that scale',
          image: '/product/rectangle.png',
          link: '/blogs/design/2',
          buttonLabel: 'Read More',
        },
        {
          title: 'Color Management',
          desc: 'Keeping colors consistent across suppliers',
          image: '/product/rectangle.png',
          link: '/blogs/design/3',
          buttonLabel: 'Read More',
        },
        {
          title: 'Design Systems',
          desc: 'Reusable components for faster iterations',
          image: '/product/rectangle.png',
          link: '/blogs/design/4',
          buttonLabel: 'Read More',
        },
      ],
    },
    {
      value: 'automation',
      label: 'Automation',
      icon: 'zap',
      items: [
        {
          title: 'Automating Workflows',
          desc: 'Reduce manual steps with smart automation',
          image: '/product/rectangle.png',
          link: '/blogs/automation/1',
          buttonLabel: 'Read More',
        },
        {
          title: 'Approval Routing',
          desc: 'Speed up sign‑offs with automated rules',
          image: '/product/rectangle.png',
          link: '/blogs/automation/2',
          buttonLabel: 'Read More',
        },
        {
          title: 'Template Generation',
          desc: 'Automate asset creation at scale',
          image: '/product/rectangle.png',
          link: '/blogs/automation/3',
          buttonLabel: 'Read More',
        },
        {
          title: 'Integration Triggers',
          desc: 'Event‑driven updates across systems',
          image: '/product/rectangle.png',
          link: '/blogs/automation/4',
          buttonLabel: 'Read More',
        },
      ],
    },
    {
      value: 'integration',
      label: 'Integration',
      icon: 'link',
      items: [
        {
          title: 'ERP & PIM Integration',
          desc: 'Sync product data and reduce errors',
          image: '/product/rectangle.png',
          link: '/blogs/integration/1',
          buttonLabel: 'Read More',
        },
        {
          title: 'Supplier Portals',
          desc: 'Collaborating with external vendors',
          image: '/product/rectangle.png',
          link: '/blogs/integration/2',
          buttonLabel: 'Read More',
        },
        {
          title: 'API Best Practices',
          desc: 'Designing reliable integrations',
          image: '/product/rectangle.png',
          link: '/blogs/integration/3',
          buttonLabel: 'Read More',
        },
        {
          title: 'Data Normalization',
          desc: 'Ensuring consistency across systems',
          image: '/product/rectangle.png',
          link: '/blogs/integration/4',
          buttonLabel: 'Read More',
        },
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="blogs" />

        <div className="flex flex-col gap-32">
          <Hero
            title="Insights & Ideas For You"
            subtitle="Stay ahead with expert insights, industry news, and best practices from the 5Flow team."
            buttonLabel="Read our Blogs"
          />
          <FilterSection tabsData={tabsData} />

          <Contact leadingText="Want to put these insights into  " highlightedText="practice" trailingText="?" />
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
