import PublicationsList from '../components/PublicationsList';
import { PublicationsSection, HeadlineWithDescription } from '../ui-lib';

export const metadata = {
  title: 'Latest Publications | Agora Energiewende',
  description:
    'How can we achieve climate neutrality? Our scientific analyses and policy recommendations present effective pathways and solutions.',
};

export default function LatestPublicationsPage() {
  return (
    <main className="bg-brand-dark-purple px-4 py-16">
      <section className="container mx-auto">
        <PublicationsSection>
          <HeadlineWithDescription
            headline="Latest Publications"
            description="Discover our newest articles and research papers"
          />
          <PublicationsList items={''} />
        </PublicationsSection>

        <PublicationsSection>
          <HeadlineWithDescription
            headline="Upcoming Events"
            description="Join us for webinars, workshops, and more."
          />
          <PublicationsList items={''} />
        </PublicationsSection>

        <PublicationsSection>
          <HeadlineWithDescription
            headline="Past Event Recordings"
            description="Watch recordings of our previous events"
          />
          <PublicationsList items={''} />
        </PublicationsSection>
      </section>
    </main>
  );
}
