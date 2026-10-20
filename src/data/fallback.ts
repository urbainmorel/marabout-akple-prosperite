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
  idealFor: string;
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
  siteUrl: 'https://prosperite.maraboutakple.com',
  metaTitle: 'Cérémonies de Prospérité Vodun — Marabout AKPLE, Haut Dignitaire à Ouidah',
  metaDescription: 'Puissants rituels ancestraux pour débloquer vos finances, attirer la chance et pérenniser l’abondance avec le Marabout AKPLE à Ouidah (Bénin) et à distance pour la diaspora.',
};

export const fallbackTrustMetrics = [
  {
    number: '+30 ans',
    label: 'de pratique ancestrale',
    description: 'Une maîtrise rigoureuse transmise de génération en génération au sein d’un lignage authentique.',
  },
  {
    number: 'Des milliers',
    label: 'de vies transformées',
    description: 'Commerçants, entrepreneurs, cadres et membres de la diaspora accompagnés vers le succès.',
  },
  {
    number: '10 janvier',
    label: 'Tradition vivante',
    description: 'Le Vodun est célébré chaque année au Bénin lors de la fête nationale officielle.',
  },
];

export const fallbackTrustPoints = [
  'Lignage ancestral pur et savoir sacré transmis de génération en génération',
  'Discrétion et confidentialité absolues garanties pour chaque consultant',
  'Cérémonies à distance avec la même efficacité pour la diaspora mondiale',
  'Éthique spirituelle stricte : aucun travail destiné à nuire à autrui',
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
    title: 'La Consultation du Fâ : Le Point de Départ Obligatoire',
    shortDescription:
      'Le Fâ est le système divinatoire sacré et la science fondamentale du Vodun. Le dignitaire Akple lit précisément votre trame énergétique : vos blocages occultes, vos forces tutélaires et votre destinée. Cette lecture éclaire avec exactitude la cérémonie requise et son degré d’intensité.',
    idealFor: 'Toute personne désirant comprendre la racine profonde de sa situation avant d’entreprendre une action spirituelle.',
    imageWebp: '/images/consultation-fa-plateau-divination.webp',
    imageJpg: '/images/consultation-fa-plateau-divination.jpg',
    altText: 'Plateau sacré de divination du Fâ avec noix de palme et chapelet traditionnel',
    width: 700,
    height: 467,
    isMain: true,
  },
  {
    id: 'bain-purification',
    stepNumber: 2,
    title: 'Le Bain de Purification (Amassi) : Repartir à Neuf',
    shortDescription:
      'Préparé à base de feuilles sacrées sélectionnées et consacrées dans le secret du couvent, le bain amassi dissout les lourdeurs astrales, la poisse tenace, les mauvais sorts et la fatigue spirituelle accumulée. Il restaure un aura éclatant et prêt à recevoir la lumière.',
    idealFor: 'Ceux qui se sentent lourds, freinés dans leur élan ou victimes d’ondes négatives récurrentes.',
    imageWebp: '/images/bain-purification-amassi-feuilles-sacrees.webp',
    imageJpg: '/images/bain-purification-amassi-feuilles-sacrees.jpg',
    altText: 'Calebasse traditionnelle d’eau bénite et de feuilles sacrées d’amassi purificateur',
    width: 750,
    height: 419,
  },
  {
    id: 'ceremonie-legba',
    stepNumber: 3,
    title: 'La Cérémonie de Legba : Ouvrir les Chemins et les Portes',
    shortDescription:
      'Legba est la divinité primordiale des carrefours, des passages et des communications. Sans son accord bienveillant, aucune porte ne s’entrouvre. Cette cérémonie lève les verrous invisibles et ouvre grand la voie à vos projets professionnels et financiers.',
    idealFor: 'Ceux qui ont la sensation d’être face à un mur où rien ne débouche malgré des compétences avérées.',
    imageWebp: '/images/ceremonie-legba-gardien-chemins-portes.webp',
    imageJpg: '/images/ceremonie-legba-gardien-chemins-portes.jpg',
    altText: 'Autel consacré de la divinité Legba, gardien des carrefours et des voies de prospérité',
    width: 750,
    height: 422,
  },
  {
    id: 'ceremonie-dan',
    stepNumber: 4,
    title: 'La Cérémonie de Dan : Fixer et Multiplier l’Abondance',
    shortDescription:
      'Dan est l’esprit serpent arc-en-ciel, gardien suprême de la fertilité matérielle et de la richesse fluide. Son culte permet non seulement d’attirer l’abondance financière, mais surtout de la retenir afin d’éviter les fuites d’argent soudaines.',
    idealFor: 'Ceux qui voient leurs gains disparaître aussitôt perçus et qui veulent bâtir un patrimoine solide.',
    imageWebp: '/images/ceremonie-dan-serpent-arc-en-ciel-richesse.webp',
    imageJpg: '/images/ceremonie-dan-serpent-arc-en-ciel-richesse.jpg',
    altText: 'Symbole sacré de Dan le serpent arc-en-ciel pour la prospérité pérenne et la fortune',
    width: 800,
    height: 600,
  },
  {
    id: 'ceremonie-mami-wata',
    stepNumber: 5,
    title: 'La Cérémonie de Mami Wata : Magnétisme Commercial et Affluence',
    shortDescription:
      'Reine des eaux sacrées, de la beauté et de la séduction financière, Mami Wata accorde une grâce magnétique irrésistible. Cette cérémonie amplifie l’attractivité de vos commerces, captive la clientèle et favorise les signatures de contrats profitables.',
    idealFor: 'Commerçants, entrepreneurs de la vente, restaurateurs, prestataires et créateurs de projets.',
    imageWebp: '/images/ceremonie-vodun-prosperite-richesse.webp',
    imageJpg: '/images/ceremonie-vodun-prosperite-richesse.jpg',
    altText: 'Offrandes sacrées et éléments rituels d’eau et de parfums dédiés à Mami Wata',
    width: 800,
    height: 597,
  },
  {
    id: 'hommage-ancetres',
    stepNumber: 6,
    title: 'L’Hommage aux Ancêtres : Bénédiction et Racines Familiales',
    shortDescription:
      'Dans la cosmogonie Vodun, aucun être ne prospère durablement en rupture avec sa lignée. Cette libation rituelle honore les aïeux bienveillants et attire leur protection infaillible sur vos entreprises et votre foyer.',
    idealFor: 'Ceux qui souhaitent asseoir une lignée florissante, pacifier les mémoires et consolider leurs acquis.',
    imageWebp: '/images/entree-temple-akple-ouidah-distance.webp',
    imageJpg: '/images/entree-temple-akple-ouidah-distance.jpg',
    altText: 'Portail sacré du sanctuaire familial à Ouidah pour l’hommage aux ancêtres',
    width: 800,
    height: 450,
  },
];

export const fallbackProcessSteps = [
  {
    step: '1',
    title: 'Vous nous contactez',
    description: 'Par message direct sur WhatsApp ou en demandant un rendez-vous au sanctuaire d’Ouidah. L’écoute initiale est immédiate et confidentielle.',
  },
  {
    step: '2',
    title: 'Consultation du Fâ',
    description: 'Le diagnostic spirituel révèle avec exactitude les sources de blocage et détermine les rituels précis nécessaires à votre élévation.',
  },
  {
    step: '3',
    title: 'La Cérémonie Sacrée',
    description: 'Les rituels sont accomplis au temple avec dévotion. Vous êtes guidé à chaque instant, sans aucun coût caché ni imprévu.',
  },
  {
    step: '4',
    title: 'Le Suivi Personnalisé',
    description: 'Vous recevez des préconisations rituelles continues et maintenez un lien direct avec le Marabout Akple pour consolider les résultats.',
  },
];

export const fallbackTargetAudience = [
  'Commerçants, négociants et vendeuses de marché cherchant une affluence constante',
  'Chefs d’entreprise, fondateurs de start-up et professionnels indépendants',
  'Cadres, employés et fonctionnaires en quête d’avancement de carrière ou de déblocage',
  'Candidats à un concours professionnel, examen d’État ou entretien décisif',
  'Membres de la diaspora en Europe, Amérique ou Afrique souhaitant un travail sérieux à distance',
  'Familles désireuses d’instaurer la paix durable, la sécurité et la stabilité financière au foyer',
];

export const fallbackGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Le Sanctuaire d’Ouidah',
    caption: 'Haut lieu de spiritualité et de communion avec les forces bienfaisantes de la nature.',
    imageWebp: '/images/hero-temple-vodun-akple.webp',
    imageJpg: '/images/hero-temple-vodun-akple.jpg',
    width: 1000,
    height: 558,
    spanClass: 'col-span-2 row-span-1',
  },
  {
    id: 'gal-2',
    title: 'Plateau du Fâ & Cauris',
    caption: 'La géomancie ancestrale : lecture sacrée des vibrations de votre destinée.',
    imageWebp: '/images/consultation-fa-plateau-divination.webp',
    imageJpg: '/images/consultation-fa-plateau-divination.jpg',
    width: 700,
    height: 467,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'gal-3',
    title: 'Purification par l’Amassi',
    caption: 'Feuilles fraîches cueillies au lever du jour pour délester l’aura des lourdeurs.',
    imageWebp: '/images/bain-purification-amassi-feuilles-sacrees.webp',
    imageJpg: '/images/bain-purification-amassi-feuilles-sacrees.jpg',
    width: 750,
    height: 419,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Autel de Legba Gardien',
    caption: 'Consécration des offrandes pour l’ouverture souveraine de toutes les voies.',
    imageWebp: '/images/ceremonie-legba-gardien-chemins-portes.webp',
    imageJpg: '/images/ceremonie-legba-gardien-chemins-portes.jpg',
    width: 750,
    height: 422,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Dan le Serpent Sacré',
    caption: 'Vénération de la circulation infinie des richesses et de l’harmonie cosmique.',
    imageWebp: '/images/ceremonie-dan-serpent-arc-en-ciel-richesse.webp',
    imageJpg: '/images/ceremonie-dan-serpent-arc-en-ciel-richesse.jpg',
    width: 800,
    height: 600,
    spanClass: 'col-span-1 row-span-2',
  },
  {
    id: 'gal-6',
    title: 'Portail des Bénédictions',
    caption: 'Lieu de convergence des énergies ancestrales d’Ouidah.',
    imageWebp: '/images/entree-temple-akple-ouidah-distance.webp',
    imageJpg: '/images/entree-temple-akple-ouidah-distance.jpg',
    width: 800,
    height: 450,
    spanClass: 'col-span-2 row-span-1',
  },
];

export const fallbackTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Aïcha',
    city: 'Cotonou',
    role: 'Commerçante au marché Dantokpa',
    content:
      'Je vendais au marché Dantokpa mais je finissais toujours à zéro à la fin du mois. Après le bain de purification amassi et la cérémonie de Dan avec Akple, en l’espace de deux semaines, les affaires ont décollé et j’ai pu ouvrir ma propre boutique indépendante. L’argent reste enfin et fructifie !',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Didier',
    city: 'Porto-Novo',
    role: 'Cadre d’entreprise',
    content:
      'Je cherchais une promotion et un poste stable depuis trois longues années sans succès. Le Marabout Akple a réalisé le rituel d’ouverture des chemins avec Legba. J’ai passé un entretien décisif la semaine suivante et j’ai été embauché avec une excellente grille salariale. Une reconnaissance immense.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Koffi',
    city: 'Parakou',
    role: 'Entrepreneur BTP',
    content:
      'Mon entreprise traversait une crise aiguë provoquée par la jalousie et des blocages obscurs. Le Fâ a mis en lumière l’origine exacte du malaise. Grâce au travail de purification et aux cérémonies dédiées, mes dettes ont été soldées et nous avons doublé notre chiffre d’affaires en quelques mois.',
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Marie',
    city: 'Paris (France)',
    role: 'Commerçante de la diaspora',
    content:
      'Installée en région parisienne depuis dix ans, je ne pouvais pas faire le voyage jusqu’au Bénin. Akple a conduit toutes les cérémonies au sanctuaire en mon nom et m’a expédié les éléments rituels par DHL avec des explications limpides. En trois semaines, mon commerce a retrouvé un élan spectaculaire.',
    rating: 5,
  },
];

export const fallbackFaqs: FaqItem[] = [
  {
    question: 'Le résultat est-il garanti à 100 % ?',
    answer:
      'Non, et aucun praticien honnête et digne de ce nom ne fera de promesse illusoire. La tradition Vodun ouvre les chemins, dénoue les nœuds invisibles et harmonise vos énergies avec les divinités de l’abondance. Mais c’est vous qui marchez sur la voie ouverte : le travail rituel accompagne et démultiplie vos actions concrètes, il ne s’y substitue pas.',
  },
  {
    question: 'Faut-il être initié(e) ou de confession Vodun pour bénéficier de ces rituels ?',
    answer:
      'Pas le moins du monde. Le sanctuaire accueille toute personne animée par un cœur sincère, le respect des traditions et le désir légitime de prospérer.',
  },
  {
    question: 'Je suis de foi chrétienne ou musulmane. Puis-je consulter le Marabout Akple ?',
    answer:
      'Parfaitement. Au Bénin, berceau d’une tolérance spirituelle exemplaire, les rituels de bénédiction ancestrale transcendent les appartenances confessionnelles. Chacun est reçu avec une considération totale, sans aucun jugement moral.',
  },
  {
    question: 'Combien coûte une cérémonie de prospérité ?',
    answer:
      'Le coût exact est déterminé en toute transparence lors de la consultation préliminaire du Fâ. Il dépend de la complexité de votre situation, des divinités invoquées et des offrandes requises (noix de cola, liqueurs, tissus, volailles consacrées). Aucun frais surprise ne vous sera jamais imposé en cours de rituel.',
  },
  {
    question: 'Mes informations personnelles et mes échanges restent-ils confidentiels ?',
    answer:
      'Absolument. Le secret initiatique est un devoir sacré chez le Haut Dignitaire Akple. Vos coordonnées, vos confidences, vos photos et l’ensemble de votre dossier demeurent sous le sceau de la confidentialité la plus rigoureuse.',
  },
  {
    question: 'Acceptez-vous de réaliser des rituels pour nuire ou détruire un rival ?',
    answer:
      'Non, formellement jamais. La mission sacrée d’Akple est dédiée à l’élévation, à la protection, à la paix et à l’enrichissement légitime des consultants. Toute demande à visée malveillante ou destructive est catégoriquement rejetée.',
  },
  {
    question: 'Comment se déroule l’accompagnement à distance si je réside à l’étranger ?',
    answer:
      'Vous transmettez vos coordonnées complètes (nom, prénoms, date de naissance, photo récente). Akple interroge le Fâ et consacre les cérémonies en votre nom au temple d’Ouidah. Si votre protocole nécessite l’usage de lotions purificatrices ou de talismans consacrés, ils vous sont expédiés par voie express sécurisée (DHL, FedEx). Vous recevez des comptes rendus vidéo et un suivi WhatsApp continu.',
  },
  {
    question: 'Les rituels à distance possèdent-ils la même intensité qu’en présence physique ?',
    answer:
      'Oui, absolument. Dans la métaphysique Vodun, l’esprit et la vibration rituelle ignorent les frontières physiques. Dès lors que la consultation est juste et que la connexion est établie par vos éléments d’identité sacrée, l’effet spirituel se déploie avec la même plénitude, que vous soyez à Paris, Montréal, Abidjan ou Ouidah.',
  },
];
