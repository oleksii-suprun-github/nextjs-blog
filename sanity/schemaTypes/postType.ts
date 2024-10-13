import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils';

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon as any,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'previewImage',
      type: 'image',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          const assetRef = value?.asset?._ref as SanityImageSource;
          const { width, height } = getImageDimensions(assetRef);

          if (width > 600 && height > 400) {
            return 'Image must be maximum at 600x400px';
          }

          return true;
        }),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          options: {
            source: 'title',
          },
        },
      ],
    }),
    defineField({
      name: 'previewText',
      type: 'string',
      validation: (Rule) => Rule.required().min(50).max(180),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          options: {
            source: 'title',
          },
        },
      ],
    }),
    defineField({
      name: 'categories',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      validation: (Rule) => Rule.required(),
      name: 'content',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
