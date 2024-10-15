import { sanityFetch } from '@/sanity/lib/fetch';
import { getLatestPostsQuery } from '@/sanity/lib/queries';
import Breadcrumbs from '../components/Breadcrumbs';
import PublicationsList from '../components/PublicationsList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { PublicationsSection, HeadlineWithDescription } from '../ui-lib';
import { SanityPostPreview } from '../types';
import { NEXTJS_URL, PYTHON_URL, NODEJS_URL, SITE_BRAND_TITLE_ENDING } from '../constants';

export const metadata = {
  title: `Latest Publications ${SITE_BRAND_TITLE_ENDING}`,
  description:
    'Enhance your coding skills with our latest tutorials and insights on Next.js, Node.js, and Python.',
};

export const revalidate = 3600;

export default async function LatestPublicationsPage() {
  const nextjsPublications = await sanityFetch<SanityPostPreview[]>({
    query: getLatestPostsQuery('nextjs'),
  });
  const nodejsPublications = await sanityFetch<SanityPostPreview[]>({
    query: getLatestPostsQuery('nodejs'),
  });
  const pythonPublications = await sanityFetch<SanityPostPreview[]>({
    query: getLatestPostsQuery('python'),
  });

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-dark-purple px-4 py-16">
          <section className="container mx-auto">
            <div className="mb-16">
              <Breadcrumbs />
            </div>

            <PublicationsSection>
              <HeadlineWithDescription
                headline="Next.js"
                description="Discover our Next.js tutorials"
                link={NEXTJS_URL}
              />
              <PublicationsList items={nextjsPublications} />
            </PublicationsSection>

            <PublicationsSection>
              <HeadlineWithDescription
                headline="Node.js"
                description="Explore our Node.js guides"
                link={NODEJS_URL}
              />
              <PublicationsList items={nodejsPublications} />
            </PublicationsSection>

            <PublicationsSection>
              <HeadlineWithDescription
                headline="Python"
                description="Learn Python with us"
                link={PYTHON_URL}
              />
              <PublicationsList items={pythonPublications} />
            </PublicationsSection>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
