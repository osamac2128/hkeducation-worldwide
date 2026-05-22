import type { BlogPost } from '../config';

export const canonicalBase = 'https://hkeducationworldwide.com';

export function buildBlogPostJsonLd(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.subtitle,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'HK Education Worldwide',
      url: canonicalBase,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HK Education Worldwide',
      logo: {
        '@type': 'ImageObject',
        url: `${canonicalBase}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.sections.reduce(
      (acc, s) => acc + s.content.split(/\s+/).length,
      0,
    ),
  };
}

export function buildBreadcrumbJsonLd(postTitle: string, postUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: canonicalBase,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${canonicalBase}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: postTitle,
        item: postUrl,
      },
    ],
  };
}
