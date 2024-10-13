import clsx from 'clsx';
import Link from 'next/link';

function HeadlineWithDescription({
  headline,
  description,
  category,
  link,
}: {
  headline: string;
  description: string;
  category?: boolean;
  link?: string;
}) {
  if (link) {
    return (
      <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-center">
        <div>
          <h1 className={clsx('mb-4 text-3xl font-bold text-gray-200', category && 'text-5xl')}>
            {headline}
          </h1>
          <p className={clsx('text-gray-300', category && 'text-xl')}>{description}</p>
        </div>
        <Link
          className="btn mt-6 bg-brand-purple text-gray-300 hover:bg-brand-purple md:mt-0"
          href={link}
        >
          Go to category
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <h1 className={clsx('mb-8 text-3xl font-bold text-gray-200', category && 'text-5xl')}>
        {headline}
      </h1>
      <p className={clsx(category && 'text-xl text-gray-300')}>{description}</p>
    </div>
  );
}

export default HeadlineWithDescription;
