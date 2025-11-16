import { features } from '@/lib/features';
import { getGenericPageBySlug } from '@/lib/cms/page';
import Hero from './Hero';
import Vision from './Vision';
import Mission from './Mission';
import Workflow from './Workflow';
import Apart from './Apart';

// Very simple paragraph splitter from WP bodyHtml
function splitParagraphs(html: string): string[] {
  if (!html) return [];
  // Strip newlines, split on <p> tags
  const parts = html
    .replace(/\n+/g, ' ')
    .split(/<p[^>]*>/i)
    .map(p => p.replace(/<\/p>/gi, '').trim())
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
    const visionText = paras[1];
    const missionText = paras[2];
    const workflowIntro = paras[3];
    const workflowIso = paras[4];
    const apartFeatureParas = paras.slice(5, 9); // up to 4 features
    const features = apartFeatureParas.map(p => {
      // Split first sentence as title (approx)
      const firstPeriod = p.indexOf('.') !== -1 ? p.indexOf('.') + 1 : p.length;
      const title = p.slice(0, firstPeriod).trim();
      const description = p.slice(firstPeriod).trim() || title;
      return { title, description };
    });
    return (
      <>
        <Hero description={heroDesc} />
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
