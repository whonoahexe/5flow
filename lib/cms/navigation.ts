import { wpFetch } from './client';
import { CmsNavigationLabel } from './types';

export async function getNavigationLabels(): Promise<CmsNavigationLabel[]> {
  const raw = await wpFetch(`/cms/navigation`);
  const arr = Array.isArray(raw) ? (raw as Array<Record<string, unknown>>) : [];
  return arr.map(r => {
    const key = r['key'];
    const display_text = r['display_text'];
    const displayText = r['displayText'];
    const tooltip_text = r['tooltip_text'];
    const tooltipText = r['tooltipText'];
    const is_active = r['is_active'];
    const isActive = r['isActive'];
    const sort_order = r['sort_order'];
    const sortOrder = r['sortOrder'];
    return {
      key: typeof key === 'string' ? key : String(key ?? ''),
      displayText:
        typeof display_text === 'string'
          ? display_text
          : typeof displayText === 'string'
            ? displayText
            : String(display_text ?? displayText ?? ''),
      tooltipText:
        typeof tooltip_text === 'string' ? tooltip_text : typeof tooltipText === 'string' ? tooltipText : undefined,
      isActive: typeof is_active === 'boolean' ? is_active : typeof isActive === 'boolean' ? isActive : true,
      sortOrder: typeof sort_order === 'number' ? sort_order : typeof sortOrder === 'number' ? sortOrder : undefined,
    } as CmsNavigationLabel;
  });
}
