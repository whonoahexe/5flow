import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { features } from '@/lib/features';
import { getCmsBlogs, getCmsBlogBySlug, getAllCmsBlogSlugs } from '@/lib/cms/blog';

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

function getBlogSlugsLocal(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(file => file.replace(/\.(md|mdx)$/i, ''));
}

export async function getBlogSlugs(): Promise<string[]> {
  if (features.blog) {
    const cmsSlugs = await getAllCmsBlogSlugs();
    if (cmsSlugs.length > 0) return cmsSlugs;
  }
  return getBlogSlugsLocal();
}

function getBlogBySlugLocal(slug: string): Blog | null {
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

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (features.blog) {
    const cmsBlog = await getCmsBlogBySlug(slug);
    if (cmsBlog) return cmsBlog;
  }
  return getBlogBySlugLocal(slug);
}

function getAllBlogsLocal(): Blog[] {
  return getBlogSlugsLocal()
    .map(slug => getBlogBySlugLocal(slug))
    .filter((b): b is Blog => !!b)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getAllBlogs(): Promise<Blog[]> {
  // Note: This fetches full content for all blogs.
  // For CMS, we might want to avoid this if possible, or implement a bulk fetch.
  // Currently, we only use this for local fallback in getBlogCards.
  // If needed for CMS, we would need to fetch all posts with content.
  if (features.blog) {
    // Not implemented efficiently for CMS yet, as it's not primarily used.
    // We could fetch all posts and map them.
    const slugs = await getAllCmsBlogSlugs();
    const blogs = await Promise.all(slugs.map(slug => getCmsBlogBySlug(slug)));
    return blogs.filter((b): b is Blog => !!b);
  }
  return getAllBlogsLocal();
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

export async function getBlogCards(): Promise<BlogCardItem[]> {
  if (features.blog) {
    const cmsCards = await getCmsBlogs();
    if (cmsCards.length > 0) return cmsCards;
  }

  return getAllBlogsLocal().map(b => ({
    title: b.title,
    desc: toExcerpt(b.content),
    date: b.date,
    image: b.image || '/product/rectangle.webp',
    link: `/resources/blogs/${b.slug}`,
  }));
}
