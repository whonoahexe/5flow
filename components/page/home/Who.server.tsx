import { features } from '@/lib/features';
import { getContentBlock } from '@/lib/cms/content-block';
import Who from './Who';

export default async function ServerWho() {
  if (!features.enabled) return <Who />;
  try {
    const block = await getContentBlock('home-who');
    if (!block) return <Who />;
    // Expect items to contain image media or bodyHtml used as alt
    const clients = block.items.map(i => ({
      imageUrl: i.image?.url ? i.image.url.replace(/^https?:\/\/[^/]+\//, '') : i.title, // naive path trim
      altText: i.title || i.subtitle || 'Client Logo',
    }));
    return <Who title={block.title} clients={clients} />;
  } catch {
    return <Who />;
  }
}
