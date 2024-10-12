import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

import { SanityPost, SanityPostMeta } from '@/app/types';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';

export const revalidate = 3600;

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

  const postBackgroundURL = post.image.url;

  const creationDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
  }).format(new Date(post.publishedAt));

  return (
    <>
      <Navbar transparent />
      <main>
        <article className="text-stone-200 lg:pt-16">
          <header className="px-4">
            <div className="container mx-auto">
              <div className="mb-16">
                <Breadcrumbs />
              </div>
              <p className="mb-5">
                <em>Published {creationDate}</em>
              </p>
              <h1 className="mb-10 max-w-2xl text-4xl leading-normal lg:text-5xl lg:leading-normal">
                {post.title}
              </h1>
              <p className="mb-24 max-w-lg text-xl leading-normal lg:mb-32 lg:leading-relaxed">
                {post.previewText}
              </p>
            </div>
          </header>
          <figure className="absolute left-0 top-0 -z-10 h-[150vh] w-full overflow-hidden after:absolute after:inset-0 after:h-full after:bg-brand-dark-purple after:bg-opacity-70 after:content-['']">
            <Image
              src={postBackgroundURL}
              alt={post.image.alt || post.title}
              width={1920}
              height={1080}
              quality={60}
              priority
              className="h-full w-full object-cover lg:h-auto lg:w-screen"
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHOiHgAD7QHlxT90/wAAAABJRU5ErkJggg=="
            />
          </figure>

          <main className="prose prose-lg max-w-full bg-brand-dark-purple py-24 text-stone-200 prose-headings:text-stone-200 prose-strong:text-stone-200">
            <div className="container mx-auto px-4">
              <PortableText value={post.content} />
            </div>
          </main>
        </article>
      </main>
      <Footer />
    </>
  );
}
