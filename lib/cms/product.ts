import { wpFetch } from './client';

export interface ProductItemRaw {
  title?: string;
  subtitle?: string;
  body_html?: string;
  bodyHtml?: string;
  description?: string;
  icon_key?: string;
  iconKey?: string;
  button_text?: string;
  buttonText?: string;
  link_url?: string;
  linkUrl?: string;
  image_url?: string;
  imageUrl?: string;
  value?: string; // for stats
  label?: string; // for stats
}

export interface ProductData {
  hero?: {
    title?: string;
    subtitle?: string;
    bodyHtml?: string;
    ctaText?: string;
    ctaUrl?: string;
  } | null;
  what?: {
    items: ProductItemRaw[];
  } | null;
  how?: {
    items: ProductItemRaw[];
  } | null;
  why?: {
    items: ProductItemRaw[];
  } | null;
  need?: {
    title1?: string;
    highlightTitle?: string;
    title2?: string;
    subtitle?: string;
    bodyHtml?: string;
    buttonText?: string;
  } | null;
  workflow?: {
    subtitle?: string;
    stats: { value: string; label: string }[];
  } | null;
  who?: {
    title?: string;
    clients: { imageUrl: string; altText: string }[];
  } | null;
}

function parseJsonArray(value: unknown): ProductItemRaw[] {
  if (typeof value !== 'string') return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed as ProductItemRaw[];
    return [];
  } catch {
    return [];
  }
}

function parseStatsArray(value: unknown): { value: string; label: string }[] {
  if (typeof value !== 'string') return [];
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(it => typeof it === 'object' && it)
      .map(it => ({
        value: String((it as any).value || ''),
        label: String((it as any).label || ''),
      }))
      .filter(s => s.value || s.label);
  } catch {
    return [];
  }
}

export async function getProduct(slug: string): Promise<ProductData | null> {
  const raw = await wpFetch(`/wp-json/wp/v2/product?slug=${encodeURIComponent(slug)}`);
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const page: any = raw[0];
  const meta: Record<string, any> = page.meta || page.acf || {};

  const hero = {
    title: meta.hero_title || page.title?.rendered,
    subtitle: meta.hero_subtitle,
    bodyHtml: meta.hero_body_html || meta.hero_bodyhtml,
    ctaText: meta.hero_cta_text,
    ctaUrl: meta.hero_cta_url,
  };

  const whatItems = parseJsonArray(meta.what_items_json || page.acf?.what_items_json);
  const howItems = parseJsonArray(meta.how_items_json || page.acf?.how_items_json);
  const whyItems = parseJsonArray(meta.why_items_json || page.acf?.why_items_json);
  const workflowStats = parseStatsArray(meta.workflow_stats_json || page.acf?.workflow_stats_json);

  const need = {
    title1: meta.need_title1,
    highlightTitle: meta.need_highlight_title,
    title2: meta.need_title2,
    subtitle: meta.need_subtitle,
    bodyHtml: meta.need_body_html || meta.need_bodyhtml,
    buttonText: meta.need_button_text,
  };

  const workflow = {
    subtitle: meta.workflow_subtitle,
    stats: workflowStats,
  };

  const whoItems = parseJsonArray(meta.who_items_json || page.acf?.who_items_json);
  const who = {
    title: meta.who_title || page.acf?.who_title,
    clients: whoItems.map(ci => {
      const url = (ci.image_url || ci.imageUrl || '').toString();
      const alt = (ci.title || ci.subtitle || 'Client Logo').toString();
      return { imageUrl: url, altText: alt };
    }),
  };

  return {
    hero,
    what: { items: whatItems },
    how: { items: howItems },
    why: { items: whyItems },
    need,
    workflow,
    who,
  };
}
