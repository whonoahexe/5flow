import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import Hero from '@/components/page/resources/Hero';
import FilterSection from '@/components/page/resources/FilterSection';
import { CalendarDays, Play } from 'lucide-react';

export default function Webinars() {
  const tabsData = [
    {
      value: 'upcoming',
      label: 'Upcoming',
      icon: CalendarDays,
      items: [
        {
          date: 'Date & Time',
          title: 'Title',
          desc: 'Short description',
          image: '/product/rectangle.png',
          link: '/webinars/register/1',
          buttonLabel: 'Register Now',
        },
        {
          date: 'Date & Time',
          title: 'Title',
          desc: 'Short description',
          image: '/product/rectangle.png',
          link: '/webinars/register/2',
          buttonLabel: 'Register Now',
        },
        {
          date: 'Date & Time',
          title: 'Title',
          desc: 'Short description',
          image: '/product/rectangle.png',
          link: '/webinars/register/3',
          buttonLabel: 'Register Now',
        },
        {
          date: 'Date & Time',
          title: 'Title',
          desc: 'Short description',
          image: '/product/rectangle.png',
          link: '/webinars/register/4',
          buttonLabel: 'Register Now',
        },
      ],
    },
    {
      value: 'ondemand',
      label: 'On Demand',
      icon: Play,
      items: [
        {
          date: 'Date & Time',
          title: 'Title',
          desc: 'Short description',
          image: '/product/rectangle.png',
          link: '/webinars/ondemand/1',
          buttonLabel: 'Watch Recording',
        },
        {
          date: 'Date & Time',
          title: 'Title',
          desc: 'Short description',
          image: '/product/rectangle.png',
          link: '/webinars/ondemand/2',
          buttonLabel: 'Watch Recording',
        },
        {
          date: 'Date & Time',
          title: 'Title',
          desc: 'Short description',
          image: '/product/rectangle.png',
          link: '/webinars/ondemand/3',
          buttonLabel: 'Watch Recording',
        },
        {
          date: 'Date & Time',
          title: 'Title',
          desc: 'Short description',
          image: '/product/rectangle.png',
          link: '/webinars/ondemand/4',
          buttonLabel: 'Watch Recording',
        },
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="webinars" />

        <div className="flex flex-col gap-32">
          <Hero
            title="Deep dives with our experts and industry leaders"
            subtitle="Join live sessions or watch on-demand recordings to explore trends, solutions, and case studies."
            imageSrc="/product/rectangle.png"
            imageAlt="rectangle"
            buttonLabel="Register / Watch On Demand"
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
