import {
  CalendarSync,
  CircleDollarSign,
  EyeOff,
  FileStack,
  HeartHandshake,
  Rocket,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { Contact, Cta } from '@/components/layout';
import PageHeader from '@/components/core/page-header';
import InlineHighlight from '@/components/core/inline-highlight';
import ProductHeroServer from '@/components/page/product/ProductHero.server';
import WaveSectionsServer from '@/components/page/product/WaveSections.server';
import Who from '@/components/page/home/Who';

const clientData = [
  'bp.png',
  'Chick-fil-A.png',
  'Dr._Scholls.png',
  'gropper.webp',
  'herrs_snacks.png',
  'lanxess-2.webp',
  'ludwig-schokolade.webp',
  'maurer-and-wirtz.webp',
  'png-transparent-keurig-logo-household-brands-logos.png',
  'vitakraft.webp',
];

export default function Wave() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="wave" />

        <div className="mt-12 flex flex-col gap-16 md:gap-32">
          <ProductHeroServer
            slug="wave"
            fallback={{
              logoSrc: '/product/wave.svg',
              logoAlt: 'Wave Brand',
              title: 'Artwork management, without the chaos',
              subtitle: 'Faster progress from first draft to final approval.',
              description:
                'WAVE gives brand, packaging, and regulatory teams a single platform to brief, review, and approve artwork. No more confusion, no more delays. Just clear workflows that move projects forward.',
              imageSrc: '/product/Solution_Banner_WAVE.jpg',
              mobileImageSrc: '/product/Solution_Banner_WAVE_mobile.jpg',
              imageWidth: 291,
              imageAlt: 'rectangle',
            }}
          />
          <WaveSectionsServer />
          <Who path="product/wave-clients" clients={clientData} />
          <Contact leadingText="Ready to " highlightedText="simplify" trailingText=" artwork management?" />
        </div>
      </div>
    </div>
  );
}
