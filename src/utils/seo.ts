import { fallbackSettings, fallbackFaqs, fallbackTestimonials } from '../data/fallback';

/**
 * Schéma Person pour le Marabout AKPLE (Socle EEAT & Knowledge Graph Google)
 */
export function generatePersonSchema(siteUrl: string = fallbackSettings.siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#marabout-akple`,
    'name': 'Marabout AKPLE',
    'alternateName': [
      'Grand Marabout AKPLE',
      'Haut Dignitaire Vodun AKPLE',
      'Maître Spirituel AKPLE Bénin',
    ],
    'jobTitle': 'Haut Dignitaire du Culte Traditionnel Vodun',
    'description':
      'Initié depuis plus de 30 ans au Bénin, maître de la divination du Fâ et des rituels sacrés de prospérité financière, d’ouverture des chemins et de purification.',
    'url': `${siteUrl}/`,
    'image': `${siteUrl}/images/marabout-akple-haut-dignitaire-vodun.webp`,
    'telephone': fallbackSettings.phoneNumberBJ,
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'BJ',
      'addressLocality': 'Bénin',
      'streetAddress': 'Sanctuaire Ancestral Vodun',
    },
    'knowsAbout': [
      'Culte traditionnel Vodun béninois',
      'Géomancie sacrée et Consultation du Fâ',
      'Cérémonies de prospérité et déblocage financier',
      'Bains de purification Amassi aux feuilles sacrées',
      'Rituels de protection et hommage aux ancêtres',
      'Accompagnement spirituel de la diaspora africaine et internationale',
    ],
    'worksFor': {
      '@id': `${siteUrl}/#sanctuaire`,
    },
  };
}

/**
 * Schéma ProfessionalService pour le Sanctuaire Vodun
 */
export function generateProfessionalServiceSchema(currentUrl: string) {
  const siteUrl = fallbackSettings.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#sanctuaire`,
    'name': 'Sanctuaire Marabout AKPLE — Cérémonies de Prospérité Vodun',
    'alternateName': [
      'Marabout AKPLE Bénin',
      'Haut Dignitaire Vodun AKPLE',
      'Cabinet Spirituel Vodun Prospérité',
    ],
    'url': currentUrl,
    'logo': `${siteUrl}/images/logo-marabout-akple.webp`,
    'image': [
      `${siteUrl}/images/og-image.jpg`,
      `${siteUrl}/images/hero-temple-vodun-akple.webp`,
      `${siteUrl}/images/marabout-akple-haut-dignitaire-vodun.webp`,
    ],
    'telephone': fallbackSettings.phoneNumberBJ,
    'description': fallbackSettings.metaDescription,
    'founder': {
      '@id': `${siteUrl}/#marabout-akple`,
    },
    'provider': {
      '@id': `${siteUrl}/#marabout-akple`,
    },
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'BJ',
      'addressLocality': 'Bénin',
      'addressRegion': 'Bénin',
      'streetAddress': 'Sanctuaire Ancestral Vodun',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '6.3631',
      'longitude': '2.0851',
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'Bénin' },
      { '@type': 'Country', 'name': 'France' },
      { '@type': 'Country', 'name': 'Belgique' },
      { '@type': 'Country', 'name': 'Suisse' },
      { '@type': 'Country', 'name': 'Canada' },
      { '@type': 'Country', 'name': 'Côte d’Ivoire' },
      { '@type': 'Country', 'name': 'Sénégal' },
      { '@type': 'Country', 'name': 'Gabon' },
      { '@type': 'Country', 'name': 'Cameroun' },
    ],
    'openingHours': 'Mo-Sa 08:00-18:00',
    'priceRange': '$$',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.97',
      'reviewCount': '184',
      'bestRating': '5',
      'worstRating': '1',
    },
    'review': fallbackTestimonials.slice(0, 5).map((testi) => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': testi.name,
      },
      'datePublished': '2026-01-15',
      'reviewBody': testi.content,
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': testi.rating.toString(),
        'bestRating': '5',
        'worstRating': '1',
      },
    })),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Cérémonies et Rituels de Prospérité Vodun',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Consultation du Fâ (Diagnostic Spirituel)',
            'description': 'Identification précise de l’origine de vos blocages financiers.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Bain de Purification Amassi',
            'description': 'Nettoyage des mauvaises ondes et de la poisse aux feuilles sacrées.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Cérémonie de Legba (Ouverture des Portes)',
            'description': 'Ouverture des portes du travail, des affaires et de l’argent.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Cérémonie de Dan (Fixation de l’Abondance)',
            'description': 'Attirer la richesse et stabiliser vos rentrées d’argent.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Hommage aux Ancêtres (Protection des Acquis)',
            'description': 'Bénédiction de votre lignée pour sécuriser vos réussites.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Action de Grâces (Dons aux Enfants Démunis)',
            'description': 'Dons et gratitude pour pérenniser l’abondance et la prospérité.',
          },
        },
      ],
    },
  };
}

/**
 * Schéma WebSite enrichi
 */
export function generateWebSiteSchema(siteUrl: string = fallbackSettings.siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    'url': `${siteUrl}/`,
    'name': 'Cérémonies de Prospérité Vodun — Marabout AKPLE',
    'alternateName': 'Grand Marabout AKPLE Bénin',
    'inLanguage': 'fr-FR',
    'description': fallbackSettings.metaDescription,
    'publisher': {
      '@id': `${siteUrl}/#marabout-akple`,
    },
  };
}

/**
 * Schéma FAQPage
 */
export function generateFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': fallbackFaqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}

/**
 * Schéma BreadcrumbList pour le fil d'ariane (SERPs Rich Snippets)
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
}
