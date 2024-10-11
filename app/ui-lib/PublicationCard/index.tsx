import Image from 'next/image';
import Link from 'next/link';
import { SanityPostPreview } from '@/app/types';

function PublicationCard({
  title,
  category,
  previewText,
  slug,
  image,
  publishedAt,
}: SanityPostPreview) {
  const link = `/publications/${category.url}/${slug}`;
  const creationDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
  }).format(new Date(publishedAt));

  return (
    <Link href={link}>
      <div className="card image-full bg-base-100 shadow-xl">
        <figure>
          <Image width={400} height={200} src={image.url} alt={image.alt || title} />
        </figure>
        <div className="card-body">
          <span className="text-md">{creationDate}</span>
          <h2 className="card-title mb-4 text-stone-200">{title}</h2>
          <p className="text-stone-200">{previewText}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm bg-brand-dark-purple hover:bg-brand-purple">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PublicationCard;
