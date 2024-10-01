import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#250e47',
        'brand-dark-purple': '#190a2f',
        'brand-pink': '#d05094',
        'brand-light-pink': '#d973a9',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
};
export default config;
