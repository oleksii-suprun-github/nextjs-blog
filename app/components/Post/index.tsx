import { PostHero } from '@/app/ui-lib';
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
    <div>
      <PostHero
        title={post.title}
        introduction={post.previewText}
        creationDate={creationDate}
        image={imageData}
      />
    </div>
  );
}

export default Post;
