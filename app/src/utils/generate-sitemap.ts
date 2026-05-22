import { blogConfig } from '../config';
import { galleryConfig } from '../config';

const BASE_URL = 'https://hkeducationworldwide.com';

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateSitemap(): string {
  const entries: SitemapEntry[] = [
    { loc: BASE_URL, changefreq: 'weekly', priority: 1.0 },
    { loc: `${BASE_URL}/blog`, changefreq: 'weekly', priority: 0.8 },
    { loc: `${BASE_URL}/study-tools`, changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/scholarships`, changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/faq`, changefreq: 'monthly', priority: 0.6 },
    { loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${BASE_URL}/contact`, changefreq: 'yearly', priority: 0.5 },
    { loc: `${BASE_URL}/privacy`, changefreq: 'yearly', priority: 0.2 },
    { loc: `${BASE_URL}/terms`, changefreq: 'yearly', priority: 0.2 },
  ];

  // Add university pages
  for (const project of galleryConfig.projects) {
    entries.push({
      loc: `${BASE_URL}/universities/${escapeXml(project.id)}`,
      changefreq: 'monthly',
      priority: 0.8,
    });
  }

  // Add blog post pages
  for (const post of blogConfig.posts) {
    entries.push({
      loc: `${BASE_URL}/blog/${escapeXml(post.id)}`,
      lastmod: post.date,
      changefreq: 'monthly',
      priority: 0.7,
    });
  }

  const urlElements = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}
