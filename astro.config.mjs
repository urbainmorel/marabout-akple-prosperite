import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'akple-prosperite';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  site: 'https://www.grand-marabout-akple.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: projectId,
      dataset: dataset,
      useCdn: false,
    }),
  ],
});
