import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'temoignage',
  title: 'Témoignages & Avis Clients',
  type: 'document',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Nom / Prénom du client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Ville ou Pays',
      type: 'string',
    }),
    defineField({
      name: 'profession',
      title: 'Métier ou Situation',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Témoignage',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Note (sur 5)',
      type: 'number',
      initialValue: 5,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      initialValue: 0,
    }),
  ],
});
