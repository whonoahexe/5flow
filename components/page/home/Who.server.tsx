import { features } from '@/lib/features';
import { getHomepage } from '@/lib/cms/homepage';
import { getContentBlock } from '@/lib/cms/content-block';
import Who from './Who';

export default async function ServerWho() {
  if (!features.enabled) return <Who />;
  try {
    const homepage = await getHomepage();
    if (homepage?.who?.clients?.length) {
      return <Who title={homepage.who.title} clients={homepage.who.clients} />;
    }
    const block = await getContentBlock('home-who');
    if (block) {
      const clients = block.items.map(i => ({
        imageUrl: i.image?.url ? i.image.url.replace(/^https?:\/\/[^/]+\//, '') : i.title,
        altText: i.title || i.subtitle || 'Client Logo',
      }));
      return <Who title={block.title} clients={clients} />;
    }
    return <Who />;
  } catch {
    return <Who />;
  }
}
