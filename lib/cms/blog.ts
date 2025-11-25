import { wpFetch } from './client';
import { Blog, BlogCardItem } from '@/lib/resources/blogs';
import matter from 'gray-matter';

export interface WpPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string; raw?: string };
  excerpt: { rendered: string; raw?: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toISOString().split('T')[0];
  } catch (e) {
    return dateString;
  }
}

function cleanWpContent(content: string): string {
  return content
    .replace(/&#8212;/g, '---')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/<\/p>/g, '\n\n')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<[^>]+>/g, '') // Strip all other tags
    .trim();
}

function parsePostData(post: WpPost) {
  // Try to get raw content, or clean the rendered content
  let content = post.content.raw || cleanWpContent(post.content.rendered);

  let frontmatter: any = {};
  try {
    const parsed = matter(content);
    frontmatter = parsed.data;
    content = parsed.content;
  } catch (e) {
    // Ignore if parsing fails
  }

  // Image priority: Frontmatter > Featured Image > Fallback
  const image = frontmatter.image || post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/product/rectangle.png';

  // Date priority: Frontmatter > Post Date
  const date = formatDate(frontmatter.date || post.date);

  return {
    content,
    frontmatter,
    image,
    date,
    title: frontmatter.title || post.title.rendered,
  };
}

export async function getCmsBlogs(): Promise<BlogCardItem[]> {
  try {
    // Removed context=edit to avoid 401 errors
    const posts = (await wpFetch('/wp-json/wp/v2/posts?_embed&per_page=100')) as WpPost[];
    return posts.map(post => {
      const { image, date, title } = parsePostData(post);

      return {
        title,
        desc: '', // User requested no description
        date,
        image,
        link: `/resources/blogs/${post.slug}`,
      };
    });
  } catch (error) {
    console.error('Error fetching CMS blogs:', error);
    return [];
  }
}

export async function getCmsBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    // Removed context=edit to avoid 401 errors
    const posts = (await wpFetch(`/wp-json/wp/v2/posts?slug=${slug}&_embed`)) as WpPost[];
    if (posts.length === 0) return null;
    const post = posts[0];

    const { content, image, date, title } = parsePostData(post);

    return {
      slug: post.slug,
      title,
      date,
      image,
      content,
    };
  } catch (error) {
    console.error(`Error fetching CMS blog ${slug}:`, error);
    return null;
  }
}

export async function getAllCmsBlogSlugs(): Promise<string[]> {
  try {
    const posts = (await wpFetch('/wp-json/wp/v2/posts?per_page=100&_fields=slug')) as { slug: string }[];
    return posts.map(p => p.slug);
  } catch (error) {
    console.error('Error fetching CMS blog slugs:', error);
    return [];
  }
}
