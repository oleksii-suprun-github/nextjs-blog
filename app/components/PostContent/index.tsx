import { SanityPost } from '@/app/types';
import { PortableText } from 'next-sanity';

function PostContent({ content }: { content: SanityPost['content'] }) {
  return (
    <main className="prose prose-lg w-4/5 text-stone-200 prose-headings:text-stone-200 prose-strong:text-stone-200">
      <PortableText value={content} />
    </main>
  );
}

export default PostContent;
