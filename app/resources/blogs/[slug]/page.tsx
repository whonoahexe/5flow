import { getBlogBySlug, getBlogSlugs } from '@/lib/resources/blogs';
import PageHeader from '@/components/core/page-header';
import Markdown from '@/components/core/markdown';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return <div className="container mx-auto py-20">Post not found.</div>;

  return (
    <div className="relative">
      <div className="container mx-auto mb-32">
        <PageHeader title="blog" />
        <div className="mx-auto max-w-3xl py-10">
          <h1 className="font-heading mb-6 text-3xl leading-tight tracking-tight sm:text-4xl">{post.title}</h1>
          <div className="text-foreground/60 mb-8 text-sm">{new Date(post.date).toLocaleDateString()}</div>
          <Markdown content={post.content} />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getBlogSlugs().map(slug => ({ slug }));
}
