import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import { pageQuery } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';
import { SanityPage } from '@/app/types';

import { getContentBlockByType } from '@/app/utils';

export async function generateMetadata() {
  const pageMetadata = await sanityFetch<SanityPage>({
    query: pageQuery,
    params: { slug: '/about' },
  });

  return {
    title: `${pageMetadata?.title} ${SITE_BRAND_TITLE_ENDING}`,
    description: pageMetadata?.description,
  };
}

async function About() {
  const pageData = await sanityFetch<SanityPage>({
    query: pageQuery,
    params: { slug: '/about' },
  });

  if (!pageData) {
    return notFound();
  }

  const imageBlock = getContentBlockByType(pageData.pageBuilder, 'Image Block');
  const textBlock = getContentBlockByType(pageData.pageBuilder, 'Text Block');

  return (
    <div className="px-4">
      <div className="container py-20">
        <h1 className="mb-16 text-5xl font-semibold">{pageData.title}</h1>
        <div className="mb-20 flex flex-col gap-16 md:flex-row lg:items-center">
          <div className="w-full md:w-1/3">
            <Image
              priority
              width={460}
              height={460}
              src={imageBlock.image.url}
              alt={imageBlock.image.alt}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHOiHgAD7QHlxT90/wAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="prose prose-lg w-full text-lg leading-loose text-stone-300 prose-strong:text-stone-200 md:w-2/3">
            <PortableText value={textBlock.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
