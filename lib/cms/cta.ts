import { wpFetch } from './client';
import { toCtaBlock } from './transform';
import { CmsCtaBlock } from './types';

export async function getCtaBlockByKey(key: string): Promise<CmsCtaBlock | null> {
  const raw = await wpFetch(`/cms/cta?key=${encodeURIComponent(key)}`);
  const item = Array.isArray(raw) ? raw[0] : raw;
  return item ? toCtaBlock(item) : null;
}
