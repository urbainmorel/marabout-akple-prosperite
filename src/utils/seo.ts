import { fallbackSettings, fallbackFaqs } from '../data/fallback';

export function generateProfessionalServiceSchema(currentUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${currentUrl}#sanctuaire`,
    'name': 'Sanctuaire Marabout AKPLE — Cérémonies de Prospérité Vodun',
    'alternateName': [
      'Marabout AKPLE Ouidah',
      'Haut Dignitaire Vodun AKPLE',
      'Cabinet Spirituel Vodun Prospérité',
    ],
    'url': currentUrl,
    'logo': `${fallbackSettings.siteUrl}/images/marabout-akple-haut-dignitaire-vodun.webp`,
    'image': [
      `${fallbackSettings.siteUrl}/images/og-image.jpg`,
      `${fallbackSettings.siteUrl}/images/hero-temple-vodun-akple.webp`,
      `${fallbackSettings.siteUrl}/images/marabout-akple-haut-dignitaire-vodun.webp`,
    ],
    'telephone': fallbackSettings.phoneNumberBJ,
    'description': fallbackSettings.metaDescription,
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'BJ',
      'addressLocality': 'Ouidah',
      'addressRegion': 'Atlantique',
      'streetAddress': 'Cité Historique du Vodun',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '6.3631',
      'longitude': '2.0851',
    },
    'openingHours': 'Mo-Sa 08:00-18:00',
    'priceRange': '$$',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.97',
      'reviewCount': '184',
      'bestRating': '5',
      'worstRating': '1',
    },
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
      ],
    },
  };
}

export function generateWebSiteSchema(siteUrl: string = fallbackSettings.siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    'url': siteUrl,
    'name': 'Cérémonies de Prospérité Vodun — Marabout AKPLE',
    'inLanguage': 'fr-FR',
    'description': fallbackSettings.metaDescription,
  };
}

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
