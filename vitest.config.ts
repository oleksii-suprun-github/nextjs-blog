import { defineConfig, defaultExclude, coverageConfigDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/setupTests.tsx',
    exclude: [...defaultExclude],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'next.config.mjs',
        'postcss.config.mjs',
        'tailwind.config.ts',
        'app/loading.tsx',
      ],
    },
  },
});
