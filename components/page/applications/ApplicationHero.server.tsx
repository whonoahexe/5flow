import { features } from '@/lib/features';
import { getGenericPageBySlug } from '@/lib/cms/page';
import Hero, { HeroProps } from './Hero';

function splitParagraphs(html: string): string[] {
  if (!html) return [];
  return html
    .split(/<p[^>]*>/i)
    .map(p => p.replace(/<\/p>/gi, '').trim())
    .filter(Boolean);
}

interface ApplicationHeroServerProps {
  slug: string;
  fallback: HeroProps;
}

export default async function ApplicationHeroServer({ slug, fallback }: ApplicationHeroServerProps) {
  if (!features.enabled) return <Hero {...fallback} />;
  try {
    const page = await getGenericPageBySlug(slug);
    if (!page) return <Hero {...fallback} />;
    const paras = splitParagraphs(page.bodyHtml);
    const title = page.title || fallback.title;
    const description = paras[0] || fallback.description;
    const subtitle = paras[1] || fallback.subtitle;
    return <Hero {...fallback} title={title} subtitle={subtitle} description={description} />;
  } catch {
    return <Hero {...fallback} />;
  }
}
