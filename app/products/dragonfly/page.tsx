import { Contact, Cta } from '@/components/layout';
import InlineHighlight from '@/components/core/inline-highlight';
import PageHeader from '@/components/core/page-header';
import ProductHeroServer from '@/components/page/product/ProductHero.server';
import DragonflySectionsServer from '@/components/page/product/DragonflySections.server';
import Workflow from '@/components/page/product/Workflow';
import Who from '@/components/page/home/Who';

// Section data handled by DragonflySectionsServer

const workflowData = {
  subtitle:
    'Mondelez, Kellanova, and global FMCG leaders use Dragonfly as their packaging and marketing execution backbone.',
  statsData: [
    { value: '4.5K+', label: 'global users at Mondelez' },
    { value: 'Integration', label: 'with SAP, PLM, DAM, and Salsify systems' },
    { value: 'Faster', label: 'approvals, higher data quality, and improved user satisfaction' },
  ],
};

// pricing handled inside DragonflySectionsServer fallback

const clientData = [
  'Best_Buy.png',
  'Grupo_BIMBO.png',
  'Kellanova.png',
  'MARS_Petcare.png',
  'Molson_Coors.png',
  'Mondelez.png',
  'Morrison.png',
  'Orkla.png',
  'Reynolds International Logo.png',
  'Shiseido.png',
  'Wellness_Pet.png',
];

export default function Dragonfly() {
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="dragonfly" />

        <div className="mt-12 flex flex-col gap-10 md:gap-32">
          <ProductHeroServer
            slug="dragonfly"
            fallback={{
              logoSrc: '/product/dragonfly.svg',
              logoAlt: 'Wave Brand',
              title: 'Make your projects fly',
              subtitle: 'Streamlined workflows for complex brand execution',
              description:
                'Dragonfly is a web-based graphics and packaging management platform that cuts through miscommunication, complexity, and delays. Built for agility and scale, it keeps your brand projects moving on time, on budget, every time.',
              imageSrc: '/product/Solution_Banner_Dragonfly.jpg',
              mobileImageSrc: '/product/Solution_Banner_Dragonfly_mobile.jpg',
              imageWidth: 376,
              imageAlt: 'rectangle',
            }}
          />
          <DragonflySectionsServer />
          <Who path="product/dragonfly-clients" clients={clientData} />
          <Workflow
            title={
              <>
                Trusted by <InlineHighlight>global leaders</InlineHighlight>
              </>
            }
            subtitle={workflowData.subtitle}
            statsData={workflowData.statsData}
          />
          <Contact leadingText="Ready to make your projects " highlightedText="fly" trailingText="?" />
        </div>
      </div>
    </div>
  );
}
