import { wpFetch } from './client';
import { toLegalPage } from './transform';
import { CmsLegalPage } from './types';

// WordPress REST page shape subset
interface WpPageRaw {
  id?: number | string;
  slug?: string;
  title?: { rendered?: string } | string;
  content?: { rendered?: string } | string;
  modified?: string;
  status?: string;
}

function buildPagesEndpoint(params: Record<string, string | number | undefined>): string {
  const usp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined) usp.set(k, String(v));
  }
  // request only needed fields to reduce payload
  usp.set('_fields', 'id,slug,title,content,modified,status');
  return `/wp-json/wp/v2/pages?${usp.toString()}`;
}

async function fetchPages(slug?: string, includeDraft = false): Promise<WpPageRaw[]> {
  const endpoint = buildPagesEndpoint({ slug, status: includeDraft ? 'any' : undefined });
  const raw = await wpFetch(endpoint);
  return Array.isArray(raw) ? (raw as WpPageRaw[]) : [];
}

export async function getLegalPage(slug: string): Promise<CmsLegalPage> {
  const pages = await fetchPages(slug, false); // published only
  const page = pages[0];
  if (!page) throw new Error(`Legal page not found for slug '${slug}'`);
  return toLegalPage(page);
}

export async function getDraftLegalPage(slug: string): Promise<CmsLegalPage> {
  const pages = await fetchPages(slug, true); // include draft
  const draft = pages.find(p => p.status === 'draft') || pages[0];
  if (!draft) throw new Error(`No draft or published page found for slug '${slug}'`);
  return toLegalPage(draft);
}

export async function listLegalPageSlugs(): Promise<string[]> {
  const pages = await fetchPages(undefined, false);
  return pages.map(p => (typeof p.slug === 'string' ? p.slug : '')).filter(Boolean);
}
