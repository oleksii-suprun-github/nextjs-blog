import PostContent from '@/app/components/PostContent';
import PostSidebar from '@/app/components/PostSidebar';
import PostHero from '@/app/components/PostHero';
import CommentForm from '@/app/components/CommentForm';
import CommentsSection from '@/app/components/CommentsSection';
import { SanityPost } from '@/app/types';

function Post({ post }: { post: SanityPost }) {
  const creationDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
  }).format(new Date(post.publishedAt));

  const imageData = {
    url: post.image.url,
    alt: post.image.alt,
  };

  return (
    <>
      <PostHero
        title={post.title}
        introduction={post.previewText}
        creationDate={creationDate}
        image={imageData}
      />
      <article className="bg-brand-dark-purple pt-12">
        <div className="px-4">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 pb-16 lg:flex-row">
              <PostContent content={post.content} />
              <PostSidebar toc={post.headings} />
            </div>
          </div>
        </div>
        <aside className="bg-brand-purple py-12" id="comments-section">
          <div className="container">
            <div className="mx-auto mb-12 w-2/3">
              <CommentForm />
              <CommentsSection />
            </div>
          </div>
        </aside>
      </article>
    </>
  );
}

export default Post;
