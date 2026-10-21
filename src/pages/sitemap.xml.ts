import type { APIRoute } from 'astro';
import { fallbackSettings, fallbackCeremonies } from '../data/fallback';

export const GET: APIRoute = async () => {
  const siteUrl = fallbackSettings.siteUrl;
  const today = new Date().toISOString().split('T')[0];

  const homepageImages = [
    {
      loc: `${siteUrl}/images/hero-temple-vodun-akple.webp`,
      title: 'Sanctuaire ancestral du Marabout AKPLE au Bénin — Cérémonies Vodun de prospérité',
      caption: 'Vue du sanctuaire traditionnel Vodun au Bénin pour rituels de prospérité',
    },
    {
      loc: `${siteUrl}/images/marabout-akple-haut-dignitaire-vodun.webp`,
      title: 'Marabout AKPLE, Haut Dignitaire du culte traditionnel Vodun au Bénin',
      caption: 'Portrait solennel du Marabout AKPLE, maître voyant initié du Fâ',
    },
    ...fallbackCeremonies.map((c) => ({
      loc: `${siteUrl}${c.imageWebp}`,
      title: c.title,
      caption: c.altText,
    })),
  ];

  const pages = [
    {
      url: `${siteUrl}/`,
      priority: '1.0',
      changefreq: 'weekly',
      images: homepageImages,
    },
    {
      url: `${siteUrl}/mentions-legales/`,
      priority: '0.3',
      changefreq: 'monthly',
      images: [],
    },
    {
      url: `${siteUrl}/politique-confidentialite/`,
      priority: '0.3',
      changefreq: 'monthly',
      images: [],
    },
    {
      url: `${siteUrl}/conditions-generales/`,
      priority: '0.3',
      changefreq: 'monthly',
      images: [],
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${
      page.images.length > 0
        ? '\n' +
          page.images
            .map(
              (img) => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title><![CDATA[${img.title}]]></image:title>
      <image:caption><![CDATA[${img.caption}]]></image:caption>
    </image:image>`
            )
            .join('\n')
        : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
