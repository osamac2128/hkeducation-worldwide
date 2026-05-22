import type { ProjectData } from '../config';

/**
 * Build EducationalOrganization JSON-LD for a university detail page.
 */
export function buildUniversityJsonLd(project: ProjectData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: project.title,
    description: project.subtitle,
    address: {
      '@type': 'PostalAddress',
      addressLocality: project.location,
      addressCountry: 'MY',
    },
    url: `https://hkeducationworldwide.com/universities/${project.id}`,
    image: `https://hkeducationworldwide.com/${project.image}`,
    telephone: '+60-10-434-9259',
    foundingDate: project.year,
  };
}

/**
 * Build FAQPage JSON-LD structured data.
 */
export function buildFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
