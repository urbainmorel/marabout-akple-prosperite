import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres Généraux du Sanctuaire',
  type: 'document',
  fields: [
    defineField({
      name: 'practitionerName',
      title: 'Nom du dignitaire',
      type: 'string',
      initialValue: 'Marabout AKPLE',
    }),
    defineField({
      name: 'practitionerTitle',
      title: 'Titre & Rang Spirituel',
      type: 'string',
      initialValue: 'Haut Dignitaire du Culte Vodun',
    }),
    defineField({
      name: 'experienceYears',
      title: 'Années d’expérience',
      type: 'number',
      initialValue: 30,
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Numéro WhatsApp (Format international sans espace)',
      type: 'string',
      initialValue: '+33774407220',
    }),
    defineField({
      name: 'phoneNumberBJ',
      title: 'Numéro Appel Mobile / WhatsApp',
      type: 'string',
      initialValue: '+33 7 74 40 72 20',
    }),
    defineField({
      name: 'templeAddress',
      title: 'Localisation du Temple',
      type: 'string',
      initialValue: 'Bénin (berceau historique du culte Vodun)',
    }),
    defineField({
      name: 'hours',
      title: 'Horaires d’accueil',
      type: 'string',
      initialValue: 'Lundi au Samedi, 8h00 à 18h00 (Bénin UTC+1)',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image Principale (Hero)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
