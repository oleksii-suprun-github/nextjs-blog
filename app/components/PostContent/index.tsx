import { SanityPost } from '@/app/types';
import { codeComponent } from '@/sanity/schemaTypes/sanityComponents';
import { PortableText } from 'next-sanity';

function PostContent({ content }: { content: SanityPost['content'] }) {
  const components = {
    types: {
      code: codeComponent,
    },
  };

  return (
    <main className="prose prose-lg w-4/5 text-stone-200 prose-headings:text-stone-200 prose-strong:text-stone-200">
      <PortableText value={content} components={components} />
    </main>
  );
}

export default PostContent;
