import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogFrontmatter = {
  slug: string;
  title: string;
  date: string; // ISO or human-readable
  image?: string;
};

export type Blog = BlogFrontmatter & {
  content: string;
};

export type BlogCardItem = {
  title: string;
  desc: string;
  date: string;
  image: string;
  link: string; // /resources/blogs/[slug]
};

const BLOGS_DIR = path.join(process.cwd(), 'content', 'blogs');

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(file => file.replace(/\.(md|mdx)$/i, ''));
}

export function getBlogBySlug(slug: string): Blog | null {
  const mdPathMd = path.join(BLOGS_DIR, `${slug}.md`);
  const mdPathMdx = path.join(BLOGS_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPathMd) ? mdPathMd : fs.existsSync(mdPathMdx) ? mdPathMdx : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const fm = data as Partial<BlogFrontmatter>;

  const frontmatter: BlogFrontmatter = {
    slug: fm.slug || slug,
    title: fm.title || slug,
    date: fm.date || new Date().toISOString(),
    image: fm.image || '/product/rectangle.png',
  };

  return { ...frontmatter, content };
}

export function getAllBlogs(): Blog[] {
  return getBlogSlugs()
    .map(slug => getBlogBySlug(slug))
    .filter((b): b is Blog => !!b)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function toExcerpt(markdown: string, maxChars = 180): string {
  const firstPara = markdown.split(/\n\s*\n/)[0] || markdown;

  // crude markdown strip: remove headings, links markup, code fences
  const stripped = firstPara
    .replace(/^#\s+.*/gm, '')
    .replace(/^##\s+.*/gm, '')
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/\*\*([^*]+)\*\*|\*([^*]+)\*/g, '$1$2')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .trim();

  if (stripped.length <= maxChars) return stripped;
  return stripped.slice(0, maxChars).replace(/\s+\S*$/, '') + '…';
}

export function getBlogCards(): BlogCardItem[] {
  return getAllBlogs().map(b => ({
    title: b.title,
    desc: toExcerpt(b.content),
    date: b.date,
    image: b.image || '/product/rectangle.webp',
    link: `/resources/blogs/${b.slug}`,
  }));
}
