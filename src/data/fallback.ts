export interface SiteSettings {
  practitionerName: string;
  practitionerTitle: string;
  experienceYears: number;
  whatsappNumber: string;
  phoneNumberBJ: string;
  templeAddress: string;
  hours: string;
  siteUrl: string;
  metaTitle: string;
  metaDescription: string;
}

export interface CeremonyItem {
  id: string;
  stepNumber: number;
  title: string;
  shortDescription: string;
  idealFor?: string;
  imageWebp: string;
  imageJpg: string;
  altText: string;
  width: number;
  height: number;
  isMain?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  role: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageWebp: string;
  imageJpg: string;
  width: number;
  height: number;
  spanClass: string;
}

export const fallbackSettings: SiteSettings = {
  practitionerName: 'Marabout AKPLE',
  practitionerTitle: 'Haut Dignitaire du Culte Vodun',
  experienceYears: 30,
  whatsappNumber: '+33774407220',
  phoneNumberBJ: '+33 7 74 40 72 20',
  templeAddress: 'Bénin (berceau historique du Vodun)',
  hours: 'Lundi à Samedi : 08h00 - 18h00 (UTC+1)',
  siteUrl: 'https://www.grand-marabout-akple.com',
  metaTitle: 'Cérémonies de Prospérité Vodun — Marabout AKPLE, Haut Dignitaire au Bénin',
  metaDescription: 'Puissants rituels ancestraux pour débloquer vos finances, attirer la chance et pérenniser l’abondance avec le Marabout AKPLE au Bénin et à distance pour la diaspora.',
};

export const fallbackTrustMetrics = [
  {
    number: '+30 ans',
    label: 'de pratique ancestrale',
    description: 'Une maîtrise transmise au sein d’une vraie lignée familiale au Bénin.',
  },
  {
    number: 'Des milliers',
    label: 'de vies transformées',
    description: 'Commerçants, entrepreneurs et diaspora débloqués vers le succès.',
  },
  {
    number: '10 janvier',
    label: 'Tradition vivante',
    description: 'Le Vodun est reconnu et célébré officiellement au Bénin chaque année.',
  },
];

export const fallbackTrustPoints = [
  'Savoir sacré hérité de génération en génération au Bénin',
  'Secret absolu et discrétion totale pour chaque personne',
  'Rituels à distance tout aussi puissants pour la diaspora',
  'Éthique stricte : aucun rituel pour nuire, que du positif',
];

export const fallbackProblems = [
  'Vous travaillez sans relâche, pourtant l’argent entre très peu et ressort aussitôt.',
  'Votre commerce démarre fort, puis subit un blocage brutal et inexpliqué.',
  'Les portes de la réussite et des opportunités s’ouvrent pour les autres, jamais pour vous.',
  'Vous avez le sentiment persistant que la chance vous fuit malgré tous vos efforts.',
];

export const fallbackCeremonies: CeremonyItem[] = [
  {
    id: 'consultation-fa',
    stepNumber: 1,
    title: 'La Consultation du Fâ : Comprendre vos blocages',
    shortDescription:
      'Le Fâ identifie l’origine exacte de vos blocages financiers. Le dignitaire Akple lit votre destinée et vous indique le rituel précis pour ouvrir votre chance.',
    imageWebp: '/images/consultation-fa-plateau-divination.webp',
    imageJpg: '/images/consultation-fa-plateau-divination.jpg',
    altText: 'Chapelet divinatoire traditionnel du Fâ, cauris et noix sacrées pour la voyance',
    width: 800,
    height: 600,
  },
  {
    id: 'bain-purification',
    stepNumber: 2,
    title: 'Le Bain de Purification (Amassi) : Repartir à zéro',
    shortDescription:
      'Préparé avec des feuilles sacrées, ce bain dissout la poisse, la jalousie et les énergies négatives. Il libère votre esprit pour attirer le succès.',
    imageWebp: '/images/bain-purification-amassi-feuilles-sacrees.webp',
    imageJpg: '/images/bain-purification-amassi-feuilles-sacrees.jpg',
    altText: 'Récipient traditionnel avec eau bénite et feuilles sacrées d’amassi purificateur',
    width: 800,
    height: 600,
  },
  {
    id: 'ceremonie-legba',
    stepNumber: 3,
    title: 'La Cérémonie de Legba : Ouvrir les chemins',
    shortDescription:
      'Gardien des carrefours, Legba lève les obstacles invisibles sur votre route. Il ouvre grand les portes du travail, du commerce et des rentrées d’argent.',
    imageWebp: '/images/ceremonie-legba-gardien-chemins-portes.webp',
    imageJpg: '/images/ceremonie-legba-gardien-chemins-portes.jpg',
    altText: 'Autel sacré traditionnel de Legba orné de cauris pour l’ouverture des opportunités',
    width: 800,
    height: 600,
  },
  {
    id: 'ceremonie-dan',
    stepNumber: 4,
    title: 'La Cérémonie de Dan : Garder et multiplier l’argent',
    shortDescription:
      'Divinité de la richesse, Dan attire l’abondance matérielle et stoppe les dépenses imprévues. Il permet de conserver et faire fructifier votre argent.',
    imageWebp: '/images/ceremonie-dan-serpent-arc-en-ciel-richesse.webp',
    imageJpg: '/images/ceremonie-dan-serpent-arc-en-ciel-richesse.jpg',
    altText: 'Symbole sacré de Dan le serpent arc-en-ciel pour la prospérité pérenne et la fortune',
    width: 800,
    height: 600,
  },
  {
    id: 'hommage-ancetres',
    stepNumber: 5,
    title: 'L’Hommage aux Ancêtres : Protéger vos acquis',
    shortDescription:
      'Ce rituel traditionnel honore vos racines pour attirer la bénédiction de votre lignée. Il protège votre foyer et sécurise vos réussites dans la durée.',
    imageWebp: '/images/hommage-ancetres-libations-offrandes.webp',
    imageJpg: '/images/hommage-ancetres-libations-offrandes.jpg',
    altText: 'Offrandes de libations, noix de cola sacrées et bougie pour l’hommage aux ancêtres',
    width: 800,
    height: 600,
  },
  {
    id: 'action-de-graces',
    stepNumber: 6,
    title: 'L’Action de Grâces : Dons aux enfants démunis',
    shortDescription:
      'Ce rituel de gratitude consiste à faire des dons aux enfants démunis. Il attire les bénédictions du ciel et pérennise votre fortune dans l’abondance.',
    imageWebp: '/images/action-de-graces-dons-enfants-demunis.webp',
    imageJpg: '/images/action-de-graces-dons-enfants-demunis.jpg',
    altText: 'Carton de denrées alimentaires et provisions pour les dons aux enfants démunis en action de grâces',
    width: 800,
    height: 600,
  },
];

export const fallbackProcessSteps = [
  {
    step: '1',
    title: 'Vous nous contactez',
    description: 'Écrivez-nous sur WhatsApp ou demandez un rendez-vous au temple. Échange direct, rapide et 100 % secret.',
  },
  {
    step: '2',
    title: 'Consultation du Fâ',
    description: 'La voyance du Fâ identifie l’origine exacte de vos blocages et indique le rituel précis à faire. Zéro devinette.',
  },
  {
    step: '3',
    title: 'Le Rituel Sacré',
    description: 'Le rituel est accompli au temple selon les règles traditionnelles. Prix clair dès le départ, aucune surprise.',
  },
  {
    step: '4',
    title: 'Le Suivi Direct',
    description: 'Vous recevez des consignes claires et restez en lien avec Akple sur WhatsApp pour constater l’évolution.',
  },
];

export const fallbackTargetAudience = [
  'Commerçants et vendeurs cherchant plus de clients et de rentrées régulières',
  'Chefs d’entreprise, artisans et indépendants en quête de contrats',
  'Salariés et cadres visant une promotion ou un déblocage de salaire',
  'Candidats aux concours, examens d’État et entretiens décisifs',
  'Membres de la diaspora en Europe et Amérique voulant un travail sérieux à distance',
  'Familles désirant la paix, la protection et la stabilité financière',
];

export const fallbackGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Le Sanctuaire Ancestral',
    caption: 'Lieu traditionnel où sont réalisés vos rituels de déblocage.',
    imageWebp: '/images/hero-temple-vodun-akple.webp',
    imageJpg: '/images/hero-temple-vodun-akple.jpg',
    width: 1000,
    height: 558,
    spanClass: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-2',
    title: 'Plateau du Fâ & Cauris',
    caption: 'La voyance traditionnelle pour identifier vos blocages avec précision.',
    imageWebp: '/images/consultation-fa-plateau-divination.webp',
    imageJpg: '/images/consultation-fa-plateau-divination.jpg',
    width: 700,
    height: 467,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'gal-3',
    title: 'Purification par l’Amassi',
    caption: 'Feuilles sacrées pour nettoyer la poisse et les mauvaises ondes.',
    imageWebp: '/images/bain-purification-amassi-feuilles-sacrees.webp',
    imageJpg: '/images/bain-purification-amassi-feuilles-sacrees.jpg',
    width: 800,
    height: 600,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Autel de Legba Gardien',
    caption: 'Offrandes consacrées pour ouvrir grand vos chemins financiers.',
    imageWebp: '/images/ceremonie-legba-gardien-chemins-portes.webp',
    imageJpg: '/images/ceremonie-legba-gardien-chemins-portes.jpg',
    width: 800,
    height: 600,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Dan le Serpent Sacré',
    caption: 'Force sacrée pour attirer l’argent et stopper les pertes inutiles.',
    imageWebp: '/images/ceremonie-dan-serpent-arc-en-ciel-richesse.webp',
    imageJpg: '/images/ceremonie-dan-serpent-arc-en-ciel-richesse.jpg',
    width: 800,
    height: 600,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'gal-6',
    title: 'Portail des Bénédictions',
    caption: 'L’entrée du sanctuaire traditionnel du Marabout Akple au Bénin.',
    imageWebp: '/images/entree-temple-akple-distance.webp',
    imageJpg: '/images/entree-temple-akple-distance.jpg',
    width: 800,
    height: 600,
    spanClass: 'col-span-2 row-span-1',
  },
];

export const fallbackTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Aïcha',
    city: 'Cotonou',
    role: 'Commerçante à Dantokpa',
    content:
      'Je vendais bien mais mon argent partait en fumée. Après le bain amassi et le rituel de Dan avec Akple, mes ventes ont doublé en 2 semaines. J’ai enfin ouvert ma propre boutique !',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Didier',
    city: 'Porto-Novo',
    role: 'Cadre d’entreprise',
    content:
      'Bloqué sans promotion depuis 3 ans, j’ai fait appel à Akple pour ouvrir mes chemins avec Legba. La semaine suivante, j’ai réussi mon entretien et signé mon nouveau contrat.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Koffi',
    city: 'Parakou',
    role: 'Entrepreneur BTP',
    content:
      'Mon entreprise coulait à cause de jalousies et de dettes. Le Fâ a vu clair tout de suite. En 3 mois, mes dettes sont payées et mon chiffre d’affaires a doublé.',
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Marie',
    city: 'Paris (France)',
    role: 'Commerçante (Diaspora)',
    content:
      'À Paris, je ne pouvais pas venir au Bénin. Akple a tout fait au sanctuaire et m’a envoyé les produits par DHL. En 3 semaines, mes affaires ont redémarré en force.',
    rating: 5,
  },
];

export const fallbackFaqs: FaqItem[] = [
  {
    question: 'Combien coûte une cérémonie de prospérité ?',
    answer:
      'Le tarif dépend de votre problème et des offrandes nécessaires. Tout est fixé clairement dès la première consultation du Fâ : aucun frais caché ni mauvaise surprise.',
  },
  {
    question: 'Comment se passe le rituel à distance si je vis à l’étranger ?',
    answer:
      'Vous échangez avec Akple par message ou appel vidéo WhatsApp. Vous pouvez assister à vos cérémonies en direct par vidéo ou recevoir les preuves filmées, puis vos produits consacrés par DHL avec suivi direct.',
  },
  {
    question: 'Mes échanges et mes informations restent-ils confidentiels ?',
    answer:
      'Oui, à 100 %. Vos coordonnées, messages, photos et confidences restent strictement privés. Rien ne sort jamais du sanctuaire.',
  },
  {
    question: 'Je suis chrétien(ne) ou musulman(e). Puis-je consulter ?',
    answer:
      'Oui, parfaitement. Les bénédictions ancestrales ne s’opposent à aucune religion. Vous êtes reçu avec respect, bienveillance et sans aucun jugement.',
  },
];
