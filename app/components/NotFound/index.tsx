import Link from 'next/link';

const NotFound = ({
  link,
  title,
  description,
}: {
  link: string;
  title?: string;
  description?: string;
}) => (
  <section className="flex min-h-screen items-center justify-center bg-brand-dark-purple">
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-brand-pink lg:text-9xl">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-stone-300">
          {title || 'Page Not Found'}
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          {description || 'Sorry, we can`t find that publication.'}
        </p>
        <Link href={link} className="btn bg-brand-pink text-gray-900 hover:bg-brand-light-pink">
          Back to Latest Publications page
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;
