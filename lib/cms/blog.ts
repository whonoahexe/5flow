import { wpFetch } from './client';
import { Blog, BlogCardItem } from '@/lib/resources/blogs';

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

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#038;/g, '&')
    .replace(/&#039;/g, "'");
}

function parsePostData(post: WpPost) {
  const content = post.content.rendered;

  // Image priority: Featured Image > Fallback
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/product/rectangle.png';

  // Date priority: Post Date
  const date = formatDate(post.date);

  return {
    content,
    frontmatter: {},
    image,
    date,
    title: decodeHtmlEntities(post.title.rendered),
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
