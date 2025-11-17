import { wpFetch } from './client';
import { toHeroSection } from './transform';
import { CmsHeroSection } from './types';

export async function getHeroSections(identifier: string): Promise<CmsHeroSection[]> {
  const raw = await wpFetch(`/wp-json/wp/v2/home_page?slug=${encodeURIComponent(identifier)}`);
  if (!Array.isArray(raw) || raw.length === 0) return [];

  const page = raw[0];
  const acf = page.acf ?? {};

  const heroRaw = {
    id: page.id,
    identifier,
    title: acf.title ?? page.title ?? '',
    subtitle: acf.subtitle ?? '',
    body_html: acf.bodyhtml ?? '',
    cta: acf.cta
      ? {
          button_text: acf.cta,
          button_url: acf.hero_cta_url ?? '',
        }
      : undefined,
  };

  return [toHeroSection(heroRaw)];
}
