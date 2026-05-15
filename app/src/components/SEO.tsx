import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'HK Education Worldwide | Student Recruitment & Study in Malaysia for Pakistani Students';
const DEFAULT_DESCRIPTION = "Pakistan's trusted student recruitment agency for top Malaysian universities — Xiamen, Monash, Nottingham, INTI & more. End-to-end admission, visa & scholarship support.";
const DEFAULT_OG_IMAGE = 'https://hkeducationworldwide.com/og-image.png';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
