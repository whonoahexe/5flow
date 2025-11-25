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
  workflow?: {
    title?: string;
    subtitle?: string;
    highlightedText?: string;
    stats?: { label: string; value: string }[];
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
  const raw = await wpFetch(`/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}`);
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const page: any = raw[0];
  const meta: Record<string, any> = page?.meta || page?.acf || {};

  const hero = {
    title: page.acf?.hero_title,
    subtitle: meta.hero_subtitle || page.acf?.hero_subtitle,
    bodyHtml: meta.hero_body_html || meta.hero_bodyhtml || page.acf?.hero_body_html,
    ctaText: meta.hero_cta_text || page.acf?.hero_cta_text,
    imageUrl: meta.hero_image_url || page.acf?.hero_image_url,
    mobileImageUrl: meta.hero_mobile_image_url || meta.hero_image_mobile_url || page.acf?.hero_mobile_image_url,
    imageAlt: meta.hero_image_alt || page.acf?.hero_image_alt,
  };

  const challengesItems = parseJsonArray(meta.challenges_items_json || page.acf?.challenges_items_json);
  const howItems = parseJsonArray(meta.how_items_json || page.acf?.how_items_json);
  const benefitsItems = parseJsonArray(meta.benefits_items_json || page.acf?.benefits_items_json);
  const benefitsHighlightedText = meta.benefits_highlighted_text || page.acf?.benefits_highlighted_text;

  const workflowStats = parseJsonArray(meta.workflow_stats_json || page.acf?.workflow_stats_json);
  const workflowTitle = meta.workflow_title || page.acf?.workflow_title;
  const workflowSubtitle = meta.workflow_subtitle || page.acf?.workflow_subtitle;
  const workflowHighlightedText = meta.workflow_highlighted_text || page.acf?.workflow_highlighted_text;

  return {
    hero,
    challenges: { items: challengesItems },
    how: { items: howItems },
    benefits: { items: benefitsItems, highlightedText: benefitsHighlightedText },
    workflow: {
      title: workflowTitle,
      subtitle: workflowSubtitle,
      highlightedText: workflowHighlightedText,
      stats: workflowStats.map((it: any) => ({
        label: it.label || it.title || '',
        value: it.value || it.subtitle || '',
      })),
    },
  };
}
