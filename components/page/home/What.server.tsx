import { features } from '@/lib/features';
import { getContentBlock } from '@/lib/cms/content-block';
import What from './What';

export default async function ServerWhat() {
  if (!features.enabled) return <What />;
  try {
    const block = await getContentBlock('home-what');
    if (!block) return <What />;
    const items = block.items.map(i => ({
      title: i.title,
      desc: i.bodyHtml || '',
      sub: i.subtitle,
      iconKey: i.iconKey,
    }));
    return <What title={block.title} items={items} />;
  } catch {
    return <What />;
  }
}
