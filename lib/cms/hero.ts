import { wpFetch } from './client';
import { toHeroSection } from './transform';
import { CmsHeroSection } from './types';

export async function getHeroSections(identifier: string): Promise<CmsHeroSection[]> {
  const raw = await wpFetch(`/cms/hero?identifier=${encodeURIComponent(identifier)}`);
  const arr = Array.isArray(raw) ? raw : [];
  return arr.map(toHeroSection);
}
