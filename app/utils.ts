export const navigationLinks = [
  { uid: 'home', label: 'Home', href: '/' },
  { uid: 'about', label: 'About Me', href: '/about' },
  {
    uid: 'publications',
    href: '/publications',
    label: 'Publications',
    submenu: [
      {
        uid: 'all_publications',
        label: 'All Publications',
        href: '/publications',
      },
      {
        uid: 'nextjs',
        label: 'NextJS',
        href: '/publications/nextjs',
      },
      {
        uid: 'nodejs',
        label: 'NodeJS',
        href: '/publications/nodejs',
      },
      {
        uid: 'python',
        label: 'Python',
        href: '/publications/python',
      },
    ],
  },
];

export const footerNavLinks = [
  { uid: 'about', href: '/about', label: 'About Me' },
  { uid: 'nextjs', href: '/publications/nextjs', label: 'NextJS topics' },
  { uid: 'nodejs', href: '/publications/nodejs', label: 'NodeJS topics' },
  { uid: 'python', href: '/publications/python', label: 'Python topics' },
];

export const getContentBlockByType = (blocks: any[], type: string) =>
  blocks.find((block: { _type: string }) => block._type === type);
