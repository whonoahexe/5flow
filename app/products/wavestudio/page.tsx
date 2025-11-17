import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import ProductHeroServer from '@/components/page/product/ProductHero.server';
import WaveStudioSectionsServer from '@/components/page/product/WaveStudioSections.server';
// Section data now handled by WaveStudioSectionsServer

export default function Wavestudio() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="wavestudio" />

        <div className="mt-12 flex flex-col gap-10 md:gap-32">
          <ProductHeroServer
            slug="wavestudio"
            fallback={{
              logoSrc: '/product/wave-studio.svg',
              logoAlt: 'Wave Brand',
              title: 'Big ideas. Bigger execution',
              subtitle: 'Scale your artwork production without scaling your team',
              description:
                'WaveStudio combines automation with creative expertise. We turn endless artwork requests into fast, accurate, on-brand outputs so you can keep creating without burning out.',
              imageSrc: '/product/Solution_Banner_WAVESTUDIO.jpg',
              mobileImageSrc: '/product/Solution_Banner_WAVESTUDIO_mobile.jpg',
              imageWidth: 677,
              imageAlt: 'rectangle',
            }}
          />
          <WaveStudioSectionsServer />
          <Contact leadingText="Ready to make " highlightedText="more" trailingText=" with less?" />
        </div>
      </div>
    </div>
  );
}
