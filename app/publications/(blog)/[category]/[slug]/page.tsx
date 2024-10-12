import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { SanityPost, SanityPostMeta } from '@/app/types';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';

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

  return (
    <section className="bg-brand-dark-purple px-4 py-16 text-stone-200">
      <section className="container mx-auto">
        <div className="mb-16">
          <Breadcrumbs />
        </div>

        <h1 className="mb-5 text-5xl leading-normal">{post.title}</h1>
        <p className="mb-16">
          <em>Published {creationDate}</em>
        </p>

        <figcaption className="mb-16">
          <Image
            width={400}
            height={200}
            src={urlFor(post.image.url).width(400).url()}
            alt={post.image.alt || post.title}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHOiHgAD7QHlxT90/wAAAABJRU5ErkJggg=="
          />
        </figcaption>

        <div className="prose prose-lg mb-12 max-w-full text-stone-200 prose-headings:text-stone-200 prose-strong:text-stone-200">
          <PortableText value={post.content} />
        </div>
      </section>
    </section>
  );
}
