import { wpFetch } from './client';

export interface ApplicationItemRaw {
  id?: string | number;
  title?: string;
  subtitle?: string;
  body_html?: string;
  bodyHtml?: string;
  description?: string;
  icon_key?: string;
  iconKey?: string;
  link_url?: string;
  linkUrl?: string;
  image_url?: string;
  imageUrl?: string;
}

export interface ApplicationData {
  hero?: {
    title?: string;
    subtitle?: string;
    bodyHtml?: string;
    ctaText?: string;
    imageUrl?: string;
    mobileImageUrl?: string;
    imageAlt?: string;
  } | null;
  challenges?: {
    items: ApplicationItemRaw[];
  } | null;
  how?: {
    items: ApplicationItemRaw[];
  } | null;
  benefits?: {
    items: ApplicationItemRaw[];
    highlightedText?: string;
  } | null;
}

function parseJsonArray(value: unknown): ApplicationItemRaw[] {
  if (typeof value !== 'string') return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed as ApplicationItemRaw[];
    return [];
  } catch {
    return [];
  }
}

export async function getApplication(slug: string): Promise<ApplicationData | null> {
  const raw = await wpFetch(`/wp-json/wp/v2/application?slug=${encodeURIComponent(slug)}`);
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const page: any = raw[0];
  const meta: Record<string, any> = page?.meta || page?.acf || {};

  const hero = {
    title: meta.hero_title || page.title?.rendered,
    subtitle: meta.hero_subtitle,
    bodyHtml: meta.hero_body_html || meta.hero_bodyhtml,
    ctaText: meta.hero_cta_text,
    imageUrl: meta.hero_image_url,
    mobileImageUrl: meta.hero_mobile_image_url || meta.hero_image_mobile_url,
    imageAlt: meta.hero_image_alt,
  };

  const challengesItems = parseJsonArray(meta.challenges_items_json || page.acf?.challenges_items_json);
  const howItems = parseJsonArray(meta.how_items_json || page.acf?.how_items_json);
  const benefitsItems = parseJsonArray(meta.benefits_items_json || page.acf?.benefits_items_json);
  const benefitsHighlightedText = meta.benefits_highlighted_text || page.acf?.benefits_highlighted_text;

  return {
    hero,
    challenges: { items: challengesItems },
    how: { items: howItems },
    benefits: { items: benefitsItems, highlightedText: benefitsHighlightedText },
  };
}
