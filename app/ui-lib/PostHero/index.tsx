import Image from 'next/image';
import Breadcrumbs from '@/app/components/Breadcrumbs';

type PostHeroType = {
  creationDate: string;
  title: string;
  introduction: string;
  image: {
    alt?: string;
    url: string;
  };
};

function PostHero({ creationDate, title, introduction, image }: PostHeroType) {
  return (
    <>
      <header className="px-4">
        <div className="container mx-auto">
          <div className="mb-16">
            <Breadcrumbs />
          </div>
          <p className="mb-5">
            <em>Published {creationDate}</em>
          </p>
          <h1 className="mb-10 max-w-2xl text-4xl font-bold leading-normal lg:text-5xl lg:leading-normal">
            {title}
          </h1>
          <p className="mb-24 max-w-lg text-xl leading-normal lg:mb-32 lg:leading-relaxed">
            {introduction}
          </p>
        </div>
      </header>
      <figure className="absolute left-0 top-0 -z-10 h-[150vh] w-full overflow-hidden after:absolute after:inset-0 after:h-full after:bg-brand-dark-purple after:bg-opacity-70 after:content-['']">
        <Image
          src={image.url}
          alt={image.alt || title}
          width={1920}
          height={1080}
          quality={60}
          priority
          className="h-full w-full object-cover lg:h-auto lg:w-screen"
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHOiHgAD7QHlxT90/wAAAABJRU5ErkJggg=="
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </figure>
    </>
  );
}

export default PostHero;
