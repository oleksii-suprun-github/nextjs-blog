import { groq } from 'next-sanity';

export const categoryQuery = groq`*[_type == "category" && slug.current == $category] {
  title,
  description,
  "totalPosts": count(*[_type == "post" && $category in categories[]->slug.current])
}[0]`;

export const getLatestPostsQuery = (category: string, limit: number = 3) =>
  groq`*[_type == "post" && "${category}" in categories[]->slug.current] | order(publishedAt desc) [0...${limit}] {
    title,
    "category": categories[0]->{
      title,
      "url": slug.current
    },
    "slug": slug.current,
    previewText,
    "image": {
        "url": previewImage.asset->url,
        "alt": previewImage.alt
    },
    publishedAt
}`;

export const getCategoryPostsPaginatedQuery = (category: string, start: number, limit: number) =>
  groq`*[_type == "post" && "${category}" in categories[]->slug.current] | order(publishedAt desc) [${start}...${start + limit}] {
    title,
    "category": categories[0]->{
      title,
      "url": slug.current
    },
    "slug": slug.current,
    previewText,
    "image": {
      "url": previewImage.asset->url,
      "alt": previewImage.alt
    },
    publishedAt
  }`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title,
    "category": categories[0]->{
      title,
      "url": slug.current
    },
    "slug": slug.current,
    previewText,
    "headings": content[length(style) == 2 && string::startsWith(style, "h2")],
    content,
    "image": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
    },
    publishedAt
  }`;

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{ 
    title,
    "slug": slug.current,
    publishedAt,
    pageBuilder[]{
    _type == "Text Block" => {
      _type,
      _key,
      content
    },
    _type == "Image Block" => {
      _type,
      _key,
    "image": {
        "url": Image.asset->url,
        "alt": Image.alt
    },
    },
    }
  }`;
