import { NextRequest, NextResponse } from 'next/server';
import { draftMode } from 'next/headers';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const token = url.searchParams.get('token');
  if (!token || token !== process.env.WP_PREVIEW_SECRET) {
    return new Response(`Unauthorized`, { status: 401 });
  }
  // Next.js requires awaiting draftMode() per dynamic API rules.
  const dm = await draftMode();
  dm.enable();
  const slug = url.searchParams.get('slug') || '/';
  return NextResponse.redirect(new URL(slug, url.origin));
}
