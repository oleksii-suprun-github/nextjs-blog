import { defineField, defineType } from 'sanity';

const imageBlockType = defineType({
  name: 'imageBlock',
  type: 'object',
  title: 'Image Block',
  fields: [
    defineField({
      name: 'blockLabel',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
  ],
});

export default imageBlockType;
