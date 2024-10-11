import clsx from 'clsx';

function HeadlineWithDescription({
  headline,
  description,
  category,
}: {
  headline: string;
  description: string;
  category?: boolean;
}) {
  return (
    <div className="mb-12">
      <h1 className={clsx('mb-4 text-3xl font-bold text-gray-200', category && 'text-5xl')}>
        {headline}
      </h1>
      <p className={clsx(category && 'text-xl')}>{description}</p>
    </div>
  );
}

export default HeadlineWithDescription;
