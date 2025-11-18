import { wpFetch } from './client';

export interface HomepageItemRaw {
  title?: string;
  subtitle?: string;
  body_html?: string;
  bodyHtml?: string;
  icon_key?: string;
  iconKey?: string;
  link_url?: string;
  linkUrl?: string;
  image_url?: string;
  imageUrl?: string;
}

export interface HomepageData {
  hero?: {
    title?: string;
    subtitle?: string;
    bodyHtml?: string;
    ctaText?: string;
    ctaUrl?: string;
  };
  what?: {
    title?: string;
    items: HomepageItemRaw[];
  };
  how?: {
    title?: string;
    subtitle?: string;
    bodyHtml?: string;
    items: HomepageItemRaw[];
  };
  who?: {
    title?: string;
    clients: { imageUrl: string; altText: string }[];
  };
  why?: {
    title?: string;
    bodyHtml?: string;
    items: HomepageItemRaw[];
  };
}

function parseJsonArray(value: unknown): HomepageItemRaw[] {
  if (typeof value !== 'string') return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed as HomepageItemRaw[];
    return [];
  } catch {
    return [];
  }
}

export async function getHomepage(): Promise<HomepageData | null> {
  // Fetch CPT homepage with slug 'home'
  const raw = await wpFetch(`/wp-json/wp/v2/pages?slug=home`);
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const page: any = raw[0];
  const meta: Record<string, any> = page.meta || page.acf || {};

  const hero = {
    title: meta.hero_title || meta.title || page.acf?.hero_title,
    subtitle: meta.hero_subtitle || meta.subtitle || page.acf?.hero_subtitle,
    bodyHtml: meta.hero_body_html || meta.bodyhtml || page.acf?.hero_bodyhtml,
    ctaText: meta.hero_cta_text || meta.cta || page.acf?.cta,
    ctaUrl: meta.hero_cta_url || meta.cta_url || page.acf?.cta_url,
  };

  const whatItems = parseJsonArray(page.acf.what_items_json);
  const howItems = parseJsonArray(page.acf.how_body_html);
  const whoItems = parseJsonArray(page.acf.who_items_json);
  const whyItems = parseJsonArray(page.acf.why_items_json);

  return {
    hero: hero,
    what: {
      title: page.acf.what_title,
      items: whatItems,
    },
    how: {
      title: page.acf.how_title,
      subtitle: page.acf.how_subtitle,
      bodyHtml: page.acf.how_description || page.acf.how_description,
      items: howItems,
    },
    who: {
      title: page.acf.who_title,
      clients: whoItems.map(ci => {
        const url = ci.image_url || ci.imageUrl || '';
        return { imageUrl: url, altText: ci.title || ci.subtitle || 'Client Logo' };
      }),
    },
    why: {
      title: page.acf.why_title,
      bodyHtml: page.acf.why_body_html || page.acf.why_bodyhtml,
      items: whyItems,
    },
  };
}
