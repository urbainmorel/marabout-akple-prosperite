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
  whatsappNumber: '+2290190871312',
  phoneNumberBJ: '+229 01 90 87 13 12',
  templeAddress: 'Ouidah, Bénin (cité historique du Vodun)',
  hours: 'Lundi à Samedi : 08h00 - 18h00 (UTC+1)',
  siteUrl: 'https://www.grand-marabout-akple.com',
  metaTitle: 'Cérémonies de Prospérité Vodun — Marabout AKPLE, Haut Dignitaire à Ouidah',
  metaDescription: 'Puissants rituels ancestraux pour débloquer vos finances, attirer la chance et pérenniser l’abondance avec le Marabout AKPLE à Ouidah (Bénin) et à distance pour la diaspora.',
};

export const fallbackTrustMetrics = [
  {
    number: '+30 ans',
    label: 'de pratique ancestrale',
    description: 'Une maîtrise transmise au sein d’une vraie lignée familiale à Ouidah.',
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
  'Savoir sacré hérité de génération en génération à Ouidah',
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
    altText: 'Plateau sacré de divination du Fâ avec noix de palme et chapelet traditionnel',
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
    altText: 'Calebasse traditionnelle d’eau bénite et de feuilles sacrées d’amassi purificateur',
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
    altText: 'Autel consacré de la divinité Legba, gardien des carrefours et des voies de prospérité',
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
    imageWebp: '/images/entree-temple-akple-ouidah-distance.webp',
    imageJpg: '/images/entree-temple-akple-ouidah-distance.jpg',
    altText: 'Portail sacré du sanctuaire familial à Ouidah pour l’hommage aux ancêtres',
    width: 800,
    height: 600,
  },
];

export const fallbackProcessSteps = [
  {
    step: '1',
    title: 'Vous nous contactez',
    description: 'Écrivez-nous sur WhatsApp ou demandez un rendez-vous à Ouidah. Échange direct, rapide et 100 % secret.',
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
    title: 'Le Sanctuaire d’Ouidah',
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
    caption: 'L’entrée du sanctuaire traditionnel du Marabout Akple à Ouidah.',
    imageWebp: '/images/entree-temple-akple-ouidah-distance.webp',
    imageJpg: '/images/entree-temple-akple-ouidah-distance.jpg',
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
    question: 'Le résultat est-il garanti à 100 % ?',
    answer:
      'Non, car promettre 100 % sans effort serait un mensonge. Le rituel lève les blocages et attire la chance, mais vous devez agir sur le terrain. Les esprits multiplient vos efforts, ils ne travaillent pas à votre place.',
  },
  {
    question: 'Faut-il être initié(e) ou de confession Vodun ?',
    answer:
      'Non, pas du tout. Le sanctuaire accueille tout le monde, quelle que soit votre origine. Il suffit de venir avec respect et sincérité.',
  },
  {
    question: 'Je suis chrétien(ne) ou musulman(e). Puis-je consulter ?',
    answer:
      'Oui, parfaitement. Les bénédictions ancestrales ne s’opposent à aucune religion. Vous êtes reçu avec respect, bienveillance et sans aucun jugement.',
  },
  {
    question: 'Combien coûte une cérémonie de prospérité ?',
    answer:
      'Le tarif dépend de votre problème et des offrandes nécessaires. Tout est fixé clairement lors de la consultation du Fâ : aucun frais caché ni mauvaise surprise.',
  },
  {
    question: 'Mes échanges et mes informations restent-ils confidentiels ?',
    answer:
      'Oui, à 100 %. Vos coordonnées, messages, photos et confidences restent strictement privés. Rien ne sort jamais du sanctuaire.',
  },
  {
    question: 'Acceptez-vous des rituels pour nuire ou détruire un rival ?',
    answer:
      'Non, jamais. Akple travaille uniquement pour votre protection, votre paix et votre réussite financière. Aucun travail malveillant n’est accepté.',
  },
  {
    question: 'Comment se passe le rituel à distance si je vis à l’étranger ?',
    answer:
      'Vous envoyez votre nom, date de naissance et photo. Akple fait les cérémonies au temple et vous envoie photos et vidéos. Les produits consacrés arrivent par DHL avec suivi direct.',
  },
  {
    question: 'Les rituels à distance ont-ils la même efficacité ?',
    answer:
      'Oui, les forces spirituelles n’ont pas de frontière. À Paris, Montréal ou Abidjan, le travail agit avec la même puissance qu’au sanctuaire.',
  },
];
