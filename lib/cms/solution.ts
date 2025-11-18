import { wpFetch } from './client';

export interface SolutionItemRaw {
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
  heading?: string;
  value?: string;
  label?: string;
}

export interface SolutionData {
  hero?: {
    title?: string;
    subtitle?: string;
    bodyHtml?: string;
  } | null;
  how?: {
    items: SolutionItemRaw[];
  } | null;
  why?: {
    items: SolutionItemRaw[];
  } | null;
  workflow?: {
    subtitle?: string;
    stats: { value: string; label: string }[];
  } | null;
}

function parseJsonArray(value: unknown): SolutionItemRaw[] {
  if (typeof value !== 'string') return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed as SolutionItemRaw[];
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

export async function getSolution(slug: string): Promise<SolutionData | null> {
  // Expect CPT 'solution' or page by slug 'solutions/<slug>' — using CPT for parity
  const raw = await wpFetch(`/wp-json/wp/v2/solution?slug=${encodeURIComponent(slug)}`);
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const page: any = raw[0];
  const meta: Record<string, any> = page.meta || page.acf || {};

  const hero = {
    title: meta.hero_title || page.title?.rendered,
    subtitle: meta.hero_subtitle,
    bodyHtml: meta.hero_body_html || meta.hero_bodyhtml,
  };

  const howItems = parseJsonArray(meta.how_items_json || page.acf?.how_items_json);
  const whyItems = parseJsonArray(meta.why_items_json || page.acf?.why_items_json);
  const workflowStats = parseStatsArray(meta.workflow_stats_json || page.acf?.workflow_stats_json);

  const workflow = {
    subtitle: meta.workflow_subtitle,
    stats: workflowStats,
  };

  return {
    hero,
    how: { items: howItems },
    why: { items: whyItems },
    workflow,
  };
}
