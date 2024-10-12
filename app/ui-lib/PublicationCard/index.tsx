import Image from 'next/image';
import Link from 'next/link';
import { SanityPostPreview } from '@/app/types';
import { urlFor } from '@/sanity/lib/image';

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
      <div className="card image-full h-full bg-cover shadow-xl">
        <figure>
          <Image
            width={400}
            height={200}
            src={urlFor(image.url).width(400).url()}
            alt={image.alt || title}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHOiHgAD7QHlxT90/wAAAABJRU5ErkJggg=="
          />
        </figure>
        <div className="card-body">
          <span className="text-md text-slate-300">{creationDate}</span>
          <h2 className="card-title mb-4 text-stone-200">{title}</h2>
          <p className="text-stone-200">{previewText}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm bg-brand-dark-purple text-gray-300 hover:bg-brand-purple">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PublicationCard;
