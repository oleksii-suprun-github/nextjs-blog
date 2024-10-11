import { sanityFetch } from '@/sanity/lib/fetch';
import { getPostsQuery } from '@/sanity/lib/queries';
import PublicationsList from '../components/PublicationsList';
import { PublicationsSection, HeadlineWithDescription } from '../ui-lib';
import { SanityPostPreview } from '../types';
import { SITE_BRAND_TITLE_ENDING } from '../constants';

export const metadata = {
  title: `Latest Publications ${SITE_BRAND_TITLE_ENDING}`,
  description:
    'How can we achieve climate neutrality? Our scientific analyses and policy recommendations present effective pathways and solutions.',
};

export const revalidate = 60;

export default async function LatestPublicationsPage() {
  const publications = await sanityFetch<SanityPostPreview[]>({
    query: getPostsQuery('blog'),
  });
  const upcomingEvents = await sanityFetch<SanityPostPreview[]>({
    query: getPostsQuery('upcoming-events'),
  });
  const pastEventRecordings = await sanityFetch<SanityPostPreview[]>({
    query: getPostsQuery('past-event-recordings'),
  });

  return (
    <main className="bg-brand-dark-purple px-4 py-16">
      <section className="container mx-auto">
        <PublicationsSection>
          <HeadlineWithDescription
            headline="Latest Publications"
            description="Discover our newest articles and research papers"
          />
          <PublicationsList items={publications} />
        </PublicationsSection>

        <PublicationsSection>
          <HeadlineWithDescription
            headline="Upcoming Events"
            description="Join us for webinars, workshops, and more."
          />
          <PublicationsList items={upcomingEvents} />
        </PublicationsSection>

        <PublicationsSection>
          <HeadlineWithDescription
            headline="Past Event Recordings"
            description="Watch recordings of our previous events"
          />
          <PublicationsList items={pastEventRecordings} />
        </PublicationsSection>
      </section>
    </main>
  );
}
