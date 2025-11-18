import { features } from '@/lib/features';
import { getNavigationLabels } from '@/lib/cms/navigation';
import { Navigation } from './navigation';

// Server component to fetch navigation labels and render from CMS
export async function ServerNavigation() {
  let labelsMap: Record<string, string> | undefined = undefined;

  if (features.enabled) {
    try {
      const labels = await getNavigationLabels();
      if (Array.isArray(labels) && labels.length > 0) {
        labelsMap = Object.fromEntries(labels.filter(l => l.isActive).map(l => [l.key, l.displayText]));
      }
    } catch (err) {
      // Silent fallback to static labels
    }
  }

  return <Navigation labels={labelsMap} />;
}
