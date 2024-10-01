import PublicationCard from '@/app/ui-lib/PublicationCard';

function PublicationsList({ items }: { items?: any }) {
  console.log(items);

  return (
    <div className="grid gap-10 md:grid-cols-3">
      <PublicationCard />
      <PublicationCard />
      <PublicationCard />
      <PublicationCard />
      <PublicationCard />
    </div>
  );
}

export default PublicationsList;
