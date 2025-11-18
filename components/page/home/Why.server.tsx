import { features } from '@/lib/features';
import { getHomepage } from '@/lib/cms/homepage';
import { getContentBlock } from '@/lib/cms/content-block';
import Why from './Why';

export default async function ServerWhy() {
  if (!features.enabled) return <Why />;
  try {
    const homepage = await getHomepage();
    if (homepage?.why?.items?.length) {
      const cards = homepage.why.items.map(i => ({
        title: i.title || '',
        iconKey: i.icon_key || i.iconKey,
        link: i.link_url || i.linkUrl || '/contact',
      }));
      return <Why title={homepage.why.title} bodyHtml={homepage.why.bodyHtml} cards={cards} />;
    }
    const block = await getContentBlock('home-why');
    if (block) {
      const cards = block.items.map(i => ({
        title: i.title,
        iconKey: i.iconKey,
        link: i.linkUrl,
      }));
      return <Why title={block.title} bodyHtml={block.bodyHtml} cards={cards} />;
    }
    return <Why />;
  } catch {
    return <Why />;
  }
}
