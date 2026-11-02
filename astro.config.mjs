import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import path from 'node:path';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'akple-prosperite';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

const isNoIndexBuild =
  process.env.PUBLIC_NO_INDEX === 'true' ||
  process.env.CF_PAGES_BRANCH === 'ads' ||
  Boolean(process.env.CF_PAGES_URL && process.env.CF_PAGES_URL.includes('maitre-spirituel-akple'));

const noIndexIntegration = () => ({
  name: 'noindex-protection',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (isNoIndexBuild) {
        const outDir = fileURLToPath(dir);

        // 1. Robots.txt : Bloquer tous les moteurs de recherche tout en autorisant les crawlers Google Ads
        const robotsTxt = `User-agent: *
Disallow: /

User-agent: AdsBot-Google
Allow: /

User-agent: AdsBot-Google-Mobile
Allow: /

User-agent: Mediapartners-Google
Allow: /
`;
        await fs.writeFile(path.join(outDir, 'robots.txt'), robotsTxt, 'utf-8');

        // 2. _headers : Passer X-Robots-Tag à noindex, nofollow, noarchive
        const headersPath = path.join(outDir, '_headers');
        try {
          let headersContent = await fs.readFile(headersPath, 'utf-8');
          headersContent = headersContent.replace(/X-Robots-Tag:\s*all/g, 'X-Robots-Tag: noindex, nofollow, noarchive');
          await fs.writeFile(headersPath, headersContent, 'utf-8');
        } catch {
          const defaultHeaders = '/*\n  X-Robots-Tag: noindex, nofollow, noarchive\n  X-Content-Type-Options: nosniff\n';
          await fs.writeFile(headersPath, defaultHeaders, 'utf-8');
        }

        // 3. Supprimer sitemap.xml pour le site publicitaire
        const sitemapPath = path.join(outDir, 'sitemap.xml');
        try {
          await fs.unlink(sitemapPath);
        } catch {}
      }
    },
  },
});

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://www.maitre-spirituel-akple.site',
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
    noIndexIntegration(),
  ],
});
