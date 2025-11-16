import { features } from '@/lib/features';
import { getContentBlock } from '@/lib/cms/content-block';
import Why from './Why';

export default async function ServerWhy() {
  if (!features.enabled) return <Why />;
  try {
    const block = await getContentBlock('home-why');
    if (!block) return <Why />;
    const cards = block.items.map(i => ({
      title: i.title,
      iconKey: i.iconKey,
      link: i.linkUrl,
    }));
    return <Why title={block.title} bodyHtml={block.bodyHtml} cards={cards} />;
  } catch {
    return <Why />;
  }
}
