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
  createdAt: string;
};

export type SanityPostPreview = SanityPostBase & {
  previewText: string;
};

export type SanityPost = SanityPostBase & {
  content: string;
};
