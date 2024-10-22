import { SanityPost } from '@/app/types';
import codeHighlighter from '@/sanity/components/codeHighlighter';
import headingAnchorHandler from '@/sanity/components/headingAnchorHandler';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: headingAnchorHandler,
  },
  types: {
    code: codeHighlighter,
  },
};

function PostContent({ content }: { content: SanityPost['content'] }) {
  return (
    <main className="prose prose-lg w-4/5 text-stone-200 prose-headings:text-stone-200 prose-strong:text-stone-200">
      <PortableText value={content} components={components} />
    </main>
  );
}

export default PostContent;
