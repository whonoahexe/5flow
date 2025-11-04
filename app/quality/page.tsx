import type { Metadata } from 'next';
import fs from 'node:fs/promises';
import path from 'node:path';
import PageHeader from '@/components/core/page-header';
import Markdown from '@/components/core/markdown';

export const metadata: Metadata = {
  title: 'Quality Policy | 5Flow',
  description: "Read about 5Flow's commitment to quality, safety, and continuous improvement.",
};

async function getMarkdown(): Promise<string> {
  const filePath = path.join(process.cwd(), 'public', 'legal', 'Quality.md');
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return 'Content not available.';
  }
}

export default async function QualityPage() {
  const md = await getMarkdown();
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="quality" />
        <div className="mt-10 max-w-5xl md:mt-16">
          <Markdown content={md} />
        </div>
      </div>
    </div>
  );
}
