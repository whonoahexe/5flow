import { features } from '@/lib/features';
import { getHeroSections } from '@/lib/cms/hero';
import Hero from './Hero';

export default async function ServerHero() {
  if (!features.enabled) {
    return <Hero />;
  }

  try {
    const sections = await getHeroSections('home');
    const first = sections?.[0];

    if (!first) {
      return <Hero />;
    }

    const title = first.title;
    const subtitle = first.subtitle;
    const bodyHtml = first.bodyHtml;
    const buttonText = first.cta?.buttonText ?? undefined;

    return <Hero title={title} subTitle={subtitle} bodyHtml={bodyHtml} buttonText={buttonText} />;
  } catch (e) {
    // Fallback to static hero on error
    return <Hero />;
  }
}
