import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/resources/Hero';
import FilterSection from '@/components/page/resources/FilterSection';
import { BookOpen, Briefcase, Users } from 'lucide-react';

export default function Guides() {
  const tabsData = [
    {
      value: 'by-topic',
      label: 'By Topic',
      icon: BookOpen,
      items: [
        {
          title: 'Guide Title 1',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/topic/1',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 2',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/topic/2',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 3',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/topic/3',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 4',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/topic/4',
          buttonLabel: 'Download PDF',
        },
      ],
    },
    {
      value: 'by-industry',
      label: 'By Industry',
      icon: Briefcase,
      items: [
        {
          title: 'Guide Title 1',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/industry/1',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 2',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/industry/2',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 3',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/industry/3',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 4',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/industry/4',
          buttonLabel: 'Download PDF',
        },
      ],
    },
    {
      value: 'by-roles',
      label: 'By Roles',
      icon: Users,
      items: [
        {
          title: 'Guide Title 1',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/roles/1',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 2',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/roles/2',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 3',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/roles/3',
          buttonLabel: 'Download PDF',
        },
        {
          title: 'Guide Title 4',
          desc: 'Short description (what the guide covers)',
          image: '/product/rectangle.png',
          link: '/guides/roles/4',
          buttonLabel: 'Download PDF',
        },
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="guides" />

        <div className="flex flex-col gap-32">
          <Hero
            title="In-depth resources for leaders in artwork, packaging and more"
            subtitle="Step-by-step guides on artwork management, compliance, automation, and more."
            buttonLabel="Download Guides"
          />
          <FilterSection tabsData={tabsData} />

          <Contact leadingText="Ready to write your own " highlightedText="success" trailingText=" story?" />
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
