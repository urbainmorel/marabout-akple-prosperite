import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'ceremonie',
  title: 'Cérémonies de Prospérité',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la cérémonie',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stepNumber',
      title: 'Numéro d’étape dans le parcours',
      type: 'number',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Description courte',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'idealFor',
      title: 'Idéal pour (Cible)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Illustration sacrée',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      initialValue: 0,
    }),
  ],
});
