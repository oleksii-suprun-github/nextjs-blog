import { TypedObject } from '@sanity/types';

export type SanityCategory = {
  title?: string;
  description?: string;
};

export type SanityPostMeta = {
  title: string;
};

type SanityPostBase = {
  title: string;
  category: {
    title: string;
    url: string;
  };
  slug: string;
  image: {
    url: string;
    alt?: string;
  };
  publishedAt: string;
};

export type SanityPostPreview = SanityPostBase & {
  previewText: string;
};

export type SanityPost = SanityPostBase & {
  previewText: string;
  content: TypedObject;
};

export type FeedbackFormData = {
  name: string;
  email: string;
  message: string;
};
