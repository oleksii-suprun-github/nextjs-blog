import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postPathsQuery, categoryQuery, categoryPostsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import PublicationsList from '@/app/components/PublicationsList';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Pagination from '@/app/components/Pagination';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { HeadlineWithDescription, PublicationsSection } from '@/app/ui-lib';
import { SanityCategory, SanityPostPreview } from '@/app/types';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryMetadata = await sanityFetch<SanityCategory>({
    query: categoryQuery,
    params,
  });

  return {
    title: `${categoryMetadata?.title || 'Category Not Found'} ${SITE_BRAND_TITLE_ENDING}`,
    description: categoryMetadata?.description,
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function Page({ params }: { params: { category: string } }) {
  const categoryMetadata = await sanityFetch<SanityCategory>({
    query: categoryQuery,
    params,
  });

  const posts = await sanityFetch<SanityPostPreview[]>({
    query: categoryPostsQuery,
    params,
  });

  if (!posts?.length) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {' '}
        <section className="bg-brand-dark-purple px-4 py-16">
          <section className="container mx-auto mb-12">
            <Breadcrumbs />
          </section>
          <section className="container mx-auto">
            <PublicationsSection>
              <HeadlineWithDescription
                headline={categoryMetadata.title as string}
                description={categoryMetadata.description as string}
                category
              />
              <PublicationsList items={posts} />
              <Pagination />
            </PublicationsSection>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
