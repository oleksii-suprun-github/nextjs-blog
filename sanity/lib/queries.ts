import { groq } from 'next-sanity';

export const categoryQuery = groq`*[_type == "category" && slug.current == $category] {
  title,
  description
}[0]`;

export const getPostsQuery = (category: string, limit: number = 3) =>
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

export const categoryPostsQuery = groq`*[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
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
