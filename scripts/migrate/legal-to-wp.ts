import { promises as fs } from 'fs';
import path from 'path';

type MigrationReport = {
  filesFound: number;
  files: string[];
};

async function main() {
  const root = process.cwd();
  const legalDir = path.join(root, 'public', 'legal');
  const entries = await fs.readdir(legalDir).catch(() => [] as string[]);
  const files = entries.filter(e => /\.(md|txt)$/i.test(e)).map(e => path.join(legalDir, e));
  const report: MigrationReport = { filesFound: files.length, files };
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
