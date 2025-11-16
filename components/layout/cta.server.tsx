import { features } from '@/lib/features';
import { getCtaBlockByKey } from '@/lib/cms/cta';
import { Cta } from './cta';

// Server wrapper to fetch CMS CTA block for homepage bottom section.
// Mapping strategy (minimal):
// - headline -> rightTitle
// - subhead -> rightDesc (if present)
// - buttonText -> buttonText
// Static leftTitle/leftSubtitle maintained for layout identity.
// Future enhancement: extend CmsCtaBlock schema to include left side fields.
export default async function ServerCta() {
  if (!features.enabled) {
    return (
      <Cta
        leftTitle="Experience"
        leftSubtitle="What’s Next in"
        rightTitle="Artwork Management"
        rightDesc="Get a live demo of our advanced artwork management software by our product experts."
        buttonText="Book A Demo"
      />
    );
  }

  try {
    const block = await getCtaBlockByKey('home-bottom');
    if (!block) {
      return (
        <Cta
          leftTitle="Experience"
          leftSubtitle="What’s Next in"
          rightTitle="Artwork Management"
          rightDesc="Get a live demo of our advanced artwork management software by our product experts."
          buttonText="Book A Demo"
        />
      );
    }
    return (
      <Cta
        leftTitle="Experience"
        leftSubtitle="What’s Next in"
        rightTitle={block.headline || 'Artwork Management'}
        rightDesc={
          block.subhead || 'Get a live demo of our advanced artwork management software by our product experts.'
        }
        buttonText={block.buttonText || 'Book A Demo'}
      />
    );
  } catch {
    return (
      <Cta
        leftTitle="Experience"
        leftSubtitle="What’s Next in"
        rightTitle="Artwork Management"
        rightDesc="Get a live demo of our advanced artwork management software by our product experts."
        buttonText="Book A Demo"
      />
    );
  }
}
