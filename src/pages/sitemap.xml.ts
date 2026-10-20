import type { APIRoute } from 'astro';
import { fallbackSettings } from '../data/fallback';

export const GET: APIRoute = async () => {
  const siteUrl = fallbackSettings.siteUrl;
  const now = new Date().toISOString();

  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: 'mentions-legales', priority: '0.3', changefreq: 'monthly' },
    { url: 'politique-confidentialite', priority: '0.3', changefreq: 'monthly' },
    { url: 'conditions-generales', priority: '0.3', changefreq: 'monthly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}/${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
