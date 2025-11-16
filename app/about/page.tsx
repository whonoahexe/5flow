import { Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import AboutServerSections from '@/components/page/about/About.server';

export default function About() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="we. are." />
        <div className="mt-16 flex flex-col gap-16 md:mt-32 md:gap-32">
          <AboutServerSections />
        </div>
      </div>
    </div>
  );
}
