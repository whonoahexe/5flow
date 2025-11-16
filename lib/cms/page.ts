import { wpFetch } from './client';
import { toGenericPage } from './transform';
import { CmsGenericPage } from './types';

export async function getGenericPageBySlug(slug: string): Promise<CmsGenericPage | null> {
  // Fetch WP REST page including drafts if authenticated (status=any)
  const res = await wpFetch(
    `/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&status=any&_fields=slug,title,content,modified`
  );
  if (!Array.isArray(res) || res.length === 0) return null;
  // Prefer draft if any (WP marks status); simplest: first item is fine; future: filter status
  const raw = res[0];
  return toGenericPage(raw);
}
