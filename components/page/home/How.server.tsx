import { features } from '@/lib/features';
import { getContentBlock } from '@/lib/cms/content-block';
import How from './How';

export default async function ServerHow() {
  if (!features.enabled) return <How />;
  try {
    const block = await getContentBlock('home-how');
    if (!block) return <How />;
    const items = block.items.map(i => ({
      title: i.title,
      desc: i.bodyHtml || '',
      link: i.linkUrl,
      iconKey: i.iconKey,
    }));
    return <How title={block.title} subtitle={block.bodyHtml} items={items} />;
  } catch {
    return <How />;
  }
}
