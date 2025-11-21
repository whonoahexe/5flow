import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
}

export const richTextClassMap = {
  h1: 'mt-8 mb-4 text-3xl font-bold md:text-4xl',
  h2: 'mt-10 mb-4 text-2xl font-semibold md:text-3xl',
  h3: 'mt-8 mb-3 text-xl font-semibold md:text-2xl',
  h4: 'mt-6 mb-2 text-lg font-semibold md:text-xl',
  p: 'text-foreground/80 mb-4 leading-7',
  ul: 'my-4 list-disc space-y-2 pl-6',
  ol: 'my-4 list-decimal space-y-2 pl-6',
  li: 'marker:text-foreground/60',
  a: 'text-primary underline underline-offset-4 hover:opacity-80',
  blockquote: 'border-primary/40 text-foreground/80 my-4 border-l-4 pl-4 italic',
  tableWrapper: 'w-full overflow-x-auto',
  table: 'w-full border-collapse text-sm md:text-base',
  th: 'border-foreground/20 bg-muted/50 border-b px-3 py-2 text-left font-semibold',
  td: 'border-foreground/10 border-b px-3 py-2 align-top',
  strong: 'font-semibold',
  em: 'italic',
  hr: 'border-foreground/10 my-8',
  code: 'bg-muted/50 rounded px-1.5 py-0.5 text-[0.9em]',
  img: 'mx-auto my-6 block h-auto max-w-full',
} as const;

export const richTextComponents: Components = {
  h1: props => <h1 className={richTextClassMap.h1} {...props} />,
  h2: props => <h2 className={richTextClassMap.h2} {...props} />,
  h3: props => <h3 className={richTextClassMap.h3} {...props} />,
  h4: props => <h4 className={richTextClassMap.h4} {...props} />,
  p: props => <p className={richTextClassMap.p} {...props} />,
  ul: props => <ul className={richTextClassMap.ul} {...props} />,
  ol: props => <ol className={richTextClassMap.ol} {...props} />,
  li: props => <li className={richTextClassMap.li} {...props} />,
  a: props => <a className={richTextClassMap.a} {...props} />,
  blockquote: props => <blockquote className={richTextClassMap.blockquote} {...props} />,
  table: props => (
    <div className={richTextClassMap.tableWrapper}>
      <table className={richTextClassMap.table} {...props} />
    </div>
  ),
  th: props => <th className={richTextClassMap.th} {...props} />,
  td: props => <td className={richTextClassMap.td} {...props} />,
  strong: props => <strong className={richTextClassMap.strong} {...props} />,
  em: props => <em className={richTextClassMap.em} {...props} />,
  hr: props => <hr className={richTextClassMap.hr} {...props} />,
  code: props => <code className={`${richTextClassMap.code} ${props.className ?? ''}`} {...props} />,
  img: props => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={`${richTextClassMap.img} ${props.className ?? ''}`} alt={props.alt ?? ''} {...props} />
  ),
};

// Server component that renders GitHub-flavored Markdown with sensible default styling
export default function Markdown({ content }: MarkdownProps) {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} components={richTextComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
