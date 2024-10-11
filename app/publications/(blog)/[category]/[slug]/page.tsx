import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { SanityPost, SanityPostMeta } from '@/app/types';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';

import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponentProps,
} from '@portabletext/react';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postMetadata = await sanityFetch<SanityPostMeta>({
    query: postQuery,
    params,
  });

  return {
    title: `${postMetadata?.title || 'Post Not Found'} ${SITE_BRAND_TITLE_ENDING}`,
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await sanityFetch<SanityPost>({ query: postQuery, params });

  if (!post) {
    return notFound();
  }

  const creationDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
  }).format(new Date(post.publishedAt));

  const parsedContentComponents = {
    block: {
      h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h1 className="text-stone-200">{children}</h1>
      ),
      h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h2 className="text-stone-200">{children}</h2>
      ),
      h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h3 className="text-stone-200">{children}</h3>
      ),
      h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h4 className="text-stone-200">{children}</h4>
      ),
    },
  };

  return (
    <main className="bg-brand-dark-purple px-4 py-16 text-stone-200">
      <section className="container mx-auto">
        <h1 className="mb-5 text-5xl leading-normal">{post.title}</h1>
        <p className="mb-16">
          <em>Published {creationDate}</em>
        </p>
        <div className="prose-lg prose mb-12 text-stone-200">
          <PortableText value={post.content} components={parsedContentComponents} />
        </div>
      </section>
    </main>
  );
}
