const WP_BASE = process.env.WP_BASE_URL as string | undefined;
const WP_TOKEN = process.env.WP_API_TOKEN as string | undefined;

export async function wpFetch(path: string, init: RequestInit = {}) {
  if (!WP_BASE) throw new Error('Missing WP_BASE_URL');
  const url = `${WP_BASE}${path}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: 'application/json',
      Authorization: WP_TOKEN ? `Bearer ${WP_TOKEN}` : undefined,
      ...(init.headers || {}),
    },
    cache: 'no-store',
  } as RequestInit);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`WP fetch failed ${res.status} ${url} ${text}`);
  }
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return res.json();
  return res.text();
}
