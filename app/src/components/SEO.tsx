import { Helmet } from 'react-helmet-async';

interface ArticleMeta {
  publishedTime: string;
  author: string;
  section: string;
  tags: string[];
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
  canonicalUrl?: string;
  article?: ArticleMeta;
  jsonLd?: object | object[];
  twitterSite?: string;
  hreflang?: string;
}

const DEFAULT_TITLE = 'HK Education Worldwide | Student Recruitment & Study in Malaysia for Pakistani Students';
const DEFAULT_DESCRIPTION = "Pakistan's trusted student recruitment agency for top Malaysian universities — Xiamen, Monash, Nottingham, INTI & more. End-to-end admission, visa & scholarship support.";
const DEFAULT_OG_IMAGE = 'https://hkeducationworldwide.com/og-image.png';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  canonicalUrl,
  article,
  jsonLd,
  twitterSite,
  hreflang,
}: SEOProps) {
  const jsonLdItems = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {hreflang && canonicalUrl && <link rel="alternate" hrefLang={hreflang} href={canonicalUrl} />}
      {canonicalUrl && <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={article?.url || canonicalUrl || ''} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {article && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article && (
        <meta property="article:author" content={article.author} />
      )}
      {article && (
        <meta property="article:section" content={article.section} />
      )}
      {article?.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      <meta property="twitter:card" content="summary_large_image" />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {jsonLdItems.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
