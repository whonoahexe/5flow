import type { Metadata } from 'next';
import fs from 'node:fs/promises';
import path from 'node:path';
import PageHeader from '@/components/core/page-header';

export const metadata: Metadata = {
  title: 'Imprint | 5Flow',
  description: 'Company imprint and legal disclosure for 5Flow GmbH.',
};

async function getImprint(): Promise<string> {
  const filePath = path.join(process.cwd(), 'public', 'legal', 'Imprint.txt');
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return 'Content not available.';
  }
}

export default async function ImprintPage() {
  const content = await getImprint();
  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="imprint" />
        <div className="text-foreground/80 mt-10 max-w-5xl leading-7 whitespace-pre-wrap md:mt-16">{content}</div>
      </div>
    </div>
  );
}
