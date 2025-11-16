import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
}

// Server component that renders GitHub-flavored Markdown with sensible default styling
export default function Markdown({ content }: MarkdownProps) {
  const components: Components = {
    h1: props => <h1 className="mt-8 mb-4 text-3xl font-bold md:text-4xl" {...props} />,
    h2: props => <h2 className="mt-10 mb-4 text-2xl font-semibold md:text-3xl" {...props} />,
    h3: props => <h3 className="mt-8 mb-3 text-xl font-semibold md:text-2xl" {...props} />,
    h4: props => <h4 className="mt-6 mb-2 text-lg font-semibold md:text-xl" {...props} />,
    p: props => <p className="text-foreground/80 mb-4 leading-7" {...props} />,
    ul: props => <ul className="my-4 list-disc space-y-2 pl-6" {...props} />,
    ol: props => <ol className="my-4 list-decimal space-y-2 pl-6" {...props} />,
    li: props => <li className="marker:text-foreground/60" {...props} />,
    a: props => <a className="text-primary underline underline-offset-4 hover:opacity-80" {...props} />,
    blockquote: props => (
      <blockquote className="border-primary/40 text-foreground/80 my-4 border-l-4 pl-4 italic" {...props} />
    ),
    table: props => (
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base" {...props} />
      </div>
    ),
    th: props => (
      <th className="border-foreground/20 bg-muted/50 border-b px-3 py-2 text-left font-semibold" {...props} />
    ),
    td: props => <td className="border-foreground/10 border-b px-3 py-2 align-top" {...props} />,
    strong: props => <strong className="font-semibold" {...props} />,
    em: props => <em className="italic" {...props} />,
    hr: props => <hr className="border-foreground/10 my-8" {...props} />,
    code: props => (
      <code className={`bg-muted/50 rounded px-1.5 py-0.5 text-[0.9em] ${props.className ?? ''}`} {...props} />
    ),
    img: props => (
      <img
        className={`mx-auto my-6 block h-auto max-w-full ${props.className ?? ''}`}
        alt={props.alt ?? ''}
        {...props}
      />
    ),
  };

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
