import Image from 'next/image';
import Link from 'next/link';
import { SanityPostPreview } from '@/app/types';

function PublicationCard({
  title,
  category,
  previewText,
  slug,
  image,
  createdAt,
}: SanityPostPreview) {
  const link = `/publications/${category.url}/${slug}`;
  const creationDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
  }).format(new Date(createdAt));

  return (
    <Link href={link}>
      <div className="card image-full bg-base-100 shadow-xl">
        <figure>
          <Image width={400} height={200} src={image.url} alt={image.alt || title} />
        </figure>
        <div className="card-body">
          <small>{creationDate}</small>
          <h2 className="card-title text-white">{title}</h2>
          <p className="text-white">{previewText}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm mt-6 bg-brand-dark-purple hover:bg-brand-purple md:mt-0">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PublicationCard;
