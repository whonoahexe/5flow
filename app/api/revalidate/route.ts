import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { log } from '@/lib/log';
import { verifyHmac } from '@/lib/security/hmac';

export async function POST(req: NextRequest) {
  const raw = await req.text();
  const signature = req.headers.get('x-signature') || '';
  const shared = req.headers.get('x-webhook-secret');
  const secret = process.env.WP_WEBHOOK_SECRET || '';

  const valid = (signature && verifyHmac(secret, raw, signature)) || (shared && shared === secret);
  if (!valid) {
    log('webhook_unauthorized', {});
    return new Response('Unauthorized', { status: 401 });
  }

  type WebhookPayload = { paths?: unknown; type?: unknown; id?: unknown };
  let parsed: unknown = {};
  try {
    parsed = JSON.parse(raw) as unknown;
  } catch {}
  const body = (parsed as WebhookPayload) ?? {};

  const paths = Array.isArray(body.paths) ? (body.paths as string[]) : [];
  const type = typeof body.type === 'string' ? (body.type as string) : undefined;
  const correlationId =
    (typeof body.id === 'string' ? (body.id as string) : undefined) ||
    (globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now()));

  if (paths.length > 0) {
    for (const p of paths) revalidatePath(p);
  }

  log('webhook_revalidate', { type, count: paths.length, correlationId });
  return NextResponse.json({ ok: true, revalidated: paths.length, correlationId });
}
