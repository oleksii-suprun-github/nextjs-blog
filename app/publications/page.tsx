import { sanityFetch } from '@/sanity/lib/fetch';
import { getLatestPostsQuery } from '@/sanity/lib/queries';
import Breadcrumbs from '../components/Breadcrumbs';
import PublicationsList from '../components/PublicationsList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { PublicationsSection, HeadlineWithDescription } from '../ui-lib';
import { SanityPostPreview } from '../types';
import {
  BLOG_URL,
  EVENTS_RECORDINGS_URL,
  SITE_BRAND_TITLE_ENDING,
  UPCOMING_EVENTS_URL,
} from '../constants';

export const metadata = {
  title: `Latest Publications ${SITE_BRAND_TITLE_ENDING}`,
  description:
    'How can we achieve climate neutrality? Our scientific analyses and policy recommendations present effective pathways and solutions.',
};

export const revalidate = 3600;

export default async function LatestPublicationsPage() {
  const publications = await sanityFetch<SanityPostPreview[]>({
    query: getLatestPostsQuery('blog'),
  });
  const upcomingEvents = await sanityFetch<SanityPostPreview[]>({
    query: getLatestPostsQuery('upcoming-events'),
  });
  const pastEventRecordings = await sanityFetch<SanityPostPreview[]>({
    query: getLatestPostsQuery('past-event-recordings'),
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
                headline="Latest Publications"
                description="Discover our newest articles and research papers"
                link={BLOG_URL}
              />
              <PublicationsList items={publications} />
            </PublicationsSection>

            <PublicationsSection>
              <HeadlineWithDescription
                headline="Upcoming Events"
                description="Join us for webinars, workshops, and more."
                link={UPCOMING_EVENTS_URL}
              />
              <PublicationsList items={upcomingEvents} />
            </PublicationsSection>

            <PublicationsSection>
              <HeadlineWithDescription
                headline="Past Event Recordings"
                description="Watch recordings of our previous events"
                link={EVENTS_RECORDINGS_URL}
              />
              <PublicationsList items={pastEventRecordings} />
            </PublicationsSection>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
