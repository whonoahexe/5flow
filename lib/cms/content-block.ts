import { wpFetch } from './client';
import { CmsContentBlock } from './types';
import { toContentBlock } from './transform';

export async function getContentBlock(identifier: string): Promise<CmsContentBlock | null> {
  const raw = await wpFetch(`/cms/content-block?identifier=${encodeURIComponent(identifier)}`);
  if (!raw) return null;
  // API may return single object or array
  const block = Array.isArray(raw) ? raw[0] : raw;
  if (!block) return null;
  return toContentBlock(block);
}
