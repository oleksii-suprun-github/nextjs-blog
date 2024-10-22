import { defineField, defineType } from 'sanity';

const textBlockType = defineType({
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  fields: [
    defineField({
      name: 'blockLabel',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      validation: (Rule) => Rule.required(),
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
});

export default textBlockType;
