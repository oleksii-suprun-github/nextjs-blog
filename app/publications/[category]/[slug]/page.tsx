import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Navbar from '@/app/components/Navbar';
import Post from '@/app/components/Post';
import CommentForm from '@/app/components/CommentForm';
import Footer from '@/app/components/Footer';
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
    description: `${postMetadata?.previewText || `Blog Publication on ${SITE_BRAND_TITLE_ENDING}`}`,
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

  return (
    <>
      <Navbar transparent />
      <main>
        <Post post={post} />
        <article className="text-stone-200 lg:pt-16">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="container">
              <main className="prose prose-lg w-3/4 bg-brand-dark-purple px-4 py-12 text-stone-200 prose-headings:text-stone-200 prose-strong:text-stone-200">
                <div className="container mx-auto">
                  <PortableText value={post.content} />
                </div>
                <aside className="bg-brand-purple px-4 py-12" id="comments-section">
                  <div className="container mx-auto">
                    <CommentForm />
                  </div>
                </aside>
              </main>
              <aside className="w-1/4">Sidebar</aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
