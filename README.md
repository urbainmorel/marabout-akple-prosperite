# Sanctuaire Vodun Marabout AKPLE — Cérémonies de Prospérité

Site web officiel dédié aux **Cérémonies et Rituels de Prospérité, de Chance et de Richesse** du **Marabout AKPLE**, Haut Dignitaire du Culte Vodun au Bénin.

- 🌐 **Domaine Officiel** : [https://www.grand-marabout-akple.com](https://www.grand-marabout-akple.com)
- ⚡ **URL Cloudflare Pages** : [https://marabout-akple-prosperite.pages.dev](https://marabout-akple-prosperite.pages.dev)
- 📦 **Dépôt GitHub Public** : [https://github.com/urbainmorel/marabout-akple-prosperite](https://github.com/urbainmorel/marabout-akple-prosperite)

---

## 🌟 Identité & Concept du Projet

- **Thématique exclusive** : Prospérité financière, abondance matérielle, déblocage de commerce et réussite professionnelle.
- **Approche** : Rituels au temple au Bénin ou à distance pour la diaspora mondiale (Europe, Amérique, Afrique).
- **Template & Design** : *Landing Mystique Nocturne* — Nuances profondes nuit violette (`#0a0912`, `#120f1d`), halo lunaire (`#efeaf7`), accents améthyste céleste (`#a99bff`) et émeraude sacrée (`#74d3c4`), astre mystique animé en respiration cosmique.
- **Typographie** : *Cormorant Garamond* (titres nobles & ésotériques) et *Manrope* (corps de texte moderne et lisible).
- **Conformité stricte** :
  - **Images WebP** compressées sous 100 Ko avec balises réactives `<picture>`.
  - **Icônes professionnelles et sobres** (aucune icône cliché IA type éclair ou baguette magique).
  - **SEO & AEO** : Données structurées Schema.org (`ProfessionalService`, `WebSite`, `FAQPage`), OpenGraph 1200x630, sitemap XML dynamique, robots.txt.

---

## 🛠️ Stack Technique

- **Framework SSG** : [Astro 5](https://astro.build/) (Static Site Generation)
- **Styles** : [Tailwind CSS v3](https://tailwindcss.com/)
- **Composants Dynamiques** : React 18 & Astro Islands
- **CMS Headless (Optionnel / Découplé)** : [Sanity Studio v3](https://www.sanity.io/) avec Fallback complet 100% autonome
- **Hébergement & CDN** : [Cloudflare Pages](https://pages.cloudflare.com/) (Edge mondial)
- **Outil de Déploiement** : [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

## 📁 Structure du Projet

```text
Marabout Akple Prosperite/
├── public/
│   ├── images/                 # Images WebP optimisées (<100 Ko)
│   ├── favicon.svg             # Favicon vectoriel sacré
│   ├── favicon-32x32.png       # Icône navigateur 32px
│   ├── apple-touch-icon.png    # Icône iOS 180px
│   └── robots.txt              # Directives d'indexation
├── sanity/
│   └── schemas/                # Schémas Sanity CMS (cérémonies, avis, FAQ, site)
├── src/
│   ├── components/
│   │   ├── Header.astro        # En-tête avec navigation & menu mobile
│   │   ├── Hero.astro          # Hero section avec astre respirant & CTA WhatsApp
│   │   ├── TrustSection.astro  # Chiffres clés & tradition vivante
│   │   ├── RecognizeSection.astro # Constat émotionnel & solutions
│   │   ├── DignitarySection.astro # Présentation du Marabout AKPLE & déontologie
│   │   ├── CeremoniesSection.astro# Parcours d'élévation spirituelle en 6 étapes
│   │   ├── TempleOrDistanceSection.astro # Au temple ou à distance (Diaspora)
│   │   ├── ProcessStepsSection.astro # Protocole en 4 étapes
│   │   ├── TargetAudienceSection.astro # À qui s'adressent les rituels
│   │   ├── GallerySection.astro# Galerie photo avec Lightbox zoom
│   │   ├── TestimonialsSection.astro # Avis et retours de consultants
│   │   ├── FAQSection.astro    # Accordéon interactif de questions fréquentes
│   │   ├── FinalCTASection.astro # Appel à l'action final & contacts
│   │   ├── Footer.astro        # Pied de page & mentions déontologiques
│   │   ├── WhatsAppSticky.astro# Bouton flottant WhatsApp avec pulsation
│   │   ├── Icons.astro         # Icônes SVG conformes & professionnelles
│   │   ├── CookieBanner.astro  # Bandeau de consentement RGPD
│   │   └── Analytics.astro     # Script de suivi GA4 optionnel
│   ├── data/
│   │   └── fallback.ts         # Données complètes canoniques et hors-ligne
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal avec SEO & Schema.org JSON-LD
│   ├── pages/
│   │   ├── index.astro         # Page d'accueil principale
│   │   ├── mentions-legales.astro # Mentions légales
│   │   ├── politique-confidentialite.astro # Politique de confidentialité
│   │   ├── conditions-generales.astro # Conditions d'accompagnement
│   │   └── sitemap.xml.ts      # Générateur dynamique de sitemap
│   └── utils/
│       ├── sanity.ts           # Client Sanity avec bascule fallback
│       └── seo.ts              # Générateurs Schema.org
├── astro.config.mjs            # Configuration Astro
├── tailwind.config.mjs         # Palette Mystique & animations
├── wrangler.toml               # Configuration Cloudflare Pages
└── package.json                # Dépendances & scripts
```

---

## 🚀 Commandes Disponibles

```bash
# 1. Lancer le serveur de développement local
npm run dev

# 2. Vérifier les types et diagnostics Astro
npm run check

# 3. Compiler le site pour la production (dans ./dist)
npm run build

# 4. Prévisualiser le build de production localement
npm run preview

# 5. Déployer sur Cloudflare Pages via Wrangler
npm run deploy:pages
```

---

## ☁️ Déploiement sur Cloudflare Pages & Domaine Personnalisé

### Option A : Déploiement Automatique via Git (Recommandé)
1. Créez un nouveau dépôt public sur GitHub (ex: `marabout-akple-prosperite`).
2. Poussez ce dossier sur le dépôt :
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit nouveau site prosperite akple"
   git branch -M main
   git remote add origin https://github.com/<votre-user>/<votre-repo>.git
   git push -u origin main
   ```
3. Connectez-vous sur votre tableau de bord **Cloudflare Dashboard** > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
4. Paramètres de build :
   - **Framework preset** : `Astro`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
5. Dans l'onglet **Custom domains**, ajoutez votre nouveau nom de domaine personnalisé (ex. `prosperite.maraboutakple.com` ou un domaine dédié).

### Option B : Déploiement Direct en Ligne de Commande
```bash
npx wrangler pages deploy dist --project-name=marabout-akple-prosperite
```

---

## 📱 Contacts & Canaux Officiels

- **WhatsApp Direct** : `+33 7 74 40 72 20` ([Lien WhatsApp](https://wa.me/33774407220))
- **Téléphone Mobile** : `+33 7 74 40 72 20`
- **Sanctuaire** : Bénin
