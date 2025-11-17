import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import ProductHeroServer from '@/components/page/product/ProductHero.server';
import MediaboxSectionsServer from '@/components/page/product/MediaboxSections.server';
import Who from '@/components/page/home/Who';

const clientData = [
  'Albertsons_logo.png',
  'Altria_Group.svg',
  'Dia_2019.png',
  'Diageo_Logo.png',
  'Energizer_holdings_inc_logo.svg',
  'Froneri_logopng.png',
  'Logo_Del_Monte.png',
  'LVMH-black.png',
  'Mazda_2024.png',
  'Purina-logo.png',
  'sobeys-logo-svg-vector.svg',
  'Taylor-farms_new_Logo.webp',
  'Topco-Logo-Vector.png',
];

export default function Mediabox() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="mediabox" />

        <div className="mt-12 flex flex-col gap-10 md:gap-32">
          <ProductHeroServer
            slug="mediabox"
            fallback={{
              logoSrc: '/product/mediabox.svg',
              logoAlt: 'Wave Brand',
              title: 'Bring your brand to life',
              subtitle: 'Creative workflows made easy and accurate',
              description:
                'Mediabox is a web-based workflow management platform that simplifies creative and marketing operations. From briefing to approvals, it keeps projects moving, reduces errors, and helps teams deliver on-brand campaigns faster.',
              imageSrc: '/product/Solution_Banner_Mediabox.jpg',
              mobileImageSrc: '/product/Solution_Banner_Mediabox_mobile.jpg',
              imageWidth: 245,
              imageAlt: 'rectangle',
            }}
          />
          <MediaboxSectionsServer />
          <Who path="product/mediabox-clients" clients={clientData} />
          <Contact leadingText="Ready for " highlightedText="out-of-the-box" trailingText=" creative workflows?" />
        </div>
      </div>
    </div>
  );
}
