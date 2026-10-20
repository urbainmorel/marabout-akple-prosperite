import imageUrlBuilder from '@sanity/image-url';
import {
  fallbackSettings,
  fallbackCeremonies,
  fallbackTestimonials,
  fallbackFaqs,
  type SiteSettings,
  type CeremonyItem,
  type TestimonialItem,
  type FaqItem,
} from '../data/fallback';

const SANITY_PROJECT_ID = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '';
const SANITY_DATASET = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
export const SANITY_API_VERSION = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-03-01';

const isSanityConfigured = Boolean(
  SANITY_PROJECT_ID &&
  SANITY_PROJECT_ID !== 'g4lv0ipl' &&
  SANITY_PROJECT_ID !== 'marabout-akple' &&
  SANITY_PROJECT_ID.trim().length > 3
);

const builder = imageUrlBuilder({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
});

export function urlForImage(source: any): string | undefined {
  if (!source) return undefined;
  if (typeof source === 'string') return source;
  try {
    return builder.image(source).auto('format').fit('max').url();
  } catch (err) {
    return undefined;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) {
    return fallbackSettings;
  }
  try {
    const { sanityClient } = await import('sanity:client');
    const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
    if (data) {
      return {
        ...fallbackSettings,
        practitionerName: data.practitionerName || fallbackSettings.practitionerName,
        practitionerTitle: data.practitionerTitle || fallbackSettings.practitionerTitle,
        experienceYears: data.experienceYears ?? fallbackSettings.experienceYears,
        whatsappNumber: import.meta.env.PUBLIC_CONTACT_WHATSAPP || data.whatsappNumber || fallbackSettings.whatsappNumber,
        phoneNumberBJ: import.meta.env.PUBLIC_CONTACT_PHONE_BJ || data.phoneNumberBJ || fallbackSettings.phoneNumberBJ,
        templeAddress: data.templeAddress || fallbackSettings.templeAddress,
        hours: data.hours || fallbackSettings.hours,
      };
    }
  } catch (err) {
    console.warn('Sanity inaccessible, bascule sur les paramètres fallback.');
  }
  return fallbackSettings;
}

export async function getCeremonies(): Promise<CeremonyItem[]> {
  if (!isSanityConfigured) {
    return fallbackCeremonies;
  }
  try {
    const { sanityClient } = await import('sanity:client');
    const data = await sanityClient.fetch(`*[_type == "ceremonie"] | order(order asc, stepNumber asc)`);
    if (data && data.length > 0) {
      return data.map((item: any, idx: number) => ({
        id: item._id,
        stepNumber: item.stepNumber || idx + 1,
        title: item.title,
        shortDescription: item.shortDescription || '',
        idealFor: item.idealFor || '',
        imageWebp: urlForImage(item.image) || fallbackCeremonies[idx % fallbackCeremonies.length].imageWebp,
        imageJpg: urlForImage(item.image) || fallbackCeremonies[idx % fallbackCeremonies.length].imageJpg,
        altText: item.title,
        width: fallbackCeremonies[idx % fallbackCeremonies.length]?.width || 800,
        height: fallbackCeremonies[idx % fallbackCeremonies.length]?.height || 600,
        isMain: idx === 0,
      }));
    }
  } catch (err) {
    console.warn('Sanity inaccessible, bascule sur les cérémonies de fallback.');
  }
  return fallbackCeremonies;
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  if (!isSanityConfigured) {
    return fallbackTestimonials;
  }
  try {
    const { sanityClient } = await import('sanity:client');
    const data = await sanityClient.fetch(`*[_type == "temoignage"] | order(order asc)`);
    if (data && data.length > 0) {
      return data.map((item: any) => ({
        id: item._id,
        name: item.authorName || item.clientName || item.name || 'Consultant Anonyme',
        city: item.city || item.location || '',
        role: item.profession || item.role || '',
        content: item.content || item.text || item.temoignage || '',
        rating: typeof item.rating === 'number' ? item.rating : 5,
      }));
    }
  } catch (err) {
    console.warn('Sanity inaccessible, bascule sur les avis de fallback.');
  }
  return fallbackTestimonials;
}

export async function getFaqs(): Promise<FaqItem[]> {
  if (!isSanityConfigured) {
    return fallbackFaqs;
  }
  try {
    const { sanityClient } = await import('sanity:client');
    const data = await sanityClient.fetch(`*[_type == "faq"] | order(order asc)`);
    if (data && data.length > 0) {
      return data.map((item: any) => ({
        question: item.question,
        answer: item.answer,
      }));
    }
  } catch (err) {
    console.warn('Sanity inaccessible, bascule sur les questions de fallback.');
  }
  return fallbackFaqs;
}
