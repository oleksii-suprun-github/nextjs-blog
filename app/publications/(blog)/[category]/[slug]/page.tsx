import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { SanityPost, SanityPostMeta } from '@/app/types';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';

import { PortableText } from '@portabletext/react';

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
  }).format(new Date(post.createdAt));

  return (
    <main className="bg-brand-dark-purple px-4 py-16">
      <section className="container mx-auto">
        <h1 className="mb-5 text-5xl text-stone-200">{post.title}</h1>
        <p className="mb-12">
          <em>Published {creationDate}</em>
        </p>
        <PortableText value={post.content as any} />
      </section>
    </main>
  );
}
