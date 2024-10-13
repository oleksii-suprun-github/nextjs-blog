import clsx from 'clsx';
import Link from 'next/link';

function Pagination({
  currentPage,
  totalPosts,
  postsPerPage,
  category,
}: {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
  category: string;
}) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="join mt-12 flex w-full justify-center">
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <Link
            key={pageNumber}
            className={clsx(
              'btn join-item no-animation border-0 text-gray-200 hover:bg-brand-light-pink',
              pageNumber === currentPage ? 'pointer-events-none bg-brand-pink' : 'bg-brand-purple',
            )}
            href={`/publications/${category}?page=${pageNumber}`}
          >
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}

export default Pagination;
