import { features } from '@/lib/features';
import { getGenericPageBySlug } from '@/lib/cms/page';
import Hero from './Hero';
import Vision from './Vision';
import Mission from './Mission';
import Workflow from './Workflow';
import Apart from './Apart';

// Very simple paragraph splitter from WP bodyHtml
function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function splitParagraphs(html: string): string[] {
  if (!html) return [];
  // Remove headings and blockquotes entirely
  const cleaned = html
    .replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, '')
    .replace(/<blockquote[^>]*>[\s\S]*?<\/blockquote>/gi, '');
  // Strip newlines, split on <p> tags, decode entities
  const parts = cleaned
    .replace(/\n+/g, ' ')
    .split(/<p[^>]*>/i)
    .map(p => decodeEntities(p.replace(/<\/p>/gi, '').trim()))
    .filter(Boolean);
  return parts;
}

export default async function AboutServerSections() {
  if (!features.enabled) {
    return (
      <>
        <Hero />
        <Vision />
        <Mission />
        <Workflow />
        <Apart />
      </>
    );
  }

  try {
    const page = await getGenericPageBySlug('about');
    if (!page) {
      return (
        <>
          <Hero />
          <Vision />
          <Mission />
          <Workflow />
          <Apart />
        </>
      );
    }
    const paras = splitParagraphs(page.bodyHtml);
    // Naive mapping of paragraphs to sections
    const heroDesc = paras[0];
    const propelisDescription = paras[1];
    const visionText = paras[2];
    const missionText = paras[3];
    const workflowIntro = paras[4];
    const workflowIso = paras[5];
    const apartFeatureParas = paras.slice(6, 10); // up to 4 features
    const features = apartFeatureParas.map(p => {
      // Split first sentence as title (approx)
      const firstPeriod = p.indexOf('.') !== -1 ? p.indexOf('.') + 1 : p.length;
      const title = p.slice(0, firstPeriod).trim();
      const description = p.slice(firstPeriod).trim() || title;
      return { title, description };
    });
    return (
      <>
        <Hero description={heroDesc} propelisDescription={propelisDescription} />
        <Vision visionText={visionText} />
        <Mission missionText={missionText} />
        <Workflow introText={workflowIntro} isoText={workflowIso} />
        <Apart features={features} />
      </>
    );
  } catch (e) {
    return (
      <>
        <Hero />
        <Vision />
        <Mission />
        <Workflow />
        <Apart />
      </>
    );
  }
}
