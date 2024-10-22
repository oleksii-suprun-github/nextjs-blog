import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { pageType } from './pageType';
import { textBlockType, imageBlockType } from './builderTypes';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    pageType,
    imageBlockType,
    textBlockType,
    authorType,
  ],
};
