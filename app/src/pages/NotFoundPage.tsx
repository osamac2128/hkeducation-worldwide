import { Link } from 'react-router-dom';
import SubpageLayout from '../components/SubpageLayout';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <SubpageLayout>
      <SEO
        title="404 — Page Not Found | HK Education Worldwide"
        description="The page you're looking for doesn't exist."
        noindex
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
        }}
      >
        <h1
          className="font-serif-display"
          style={{
            fontSize: 'clamp(80px, 15vw, 160px)',
            fontWeight: 200,
            color: 'rgba(48, 176, 208, 0.3)',
            margin: 0,
            lineHeight: 1,
          }}
        >
          404
        </h1>
        <p
          className="font-sans-body"
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.08em',
            marginTop: '16px',
            marginBottom: '40px',
          }}
        >
          Page not found
        </p>
        <Link
          to="/"
          className="font-sans-body"
          style={{
            display: 'inline-block',
            background: '#30B0D0',
            color: '#ffffff',
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.08em',
            padding: '12px 32px',
            borderRadius: 30,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
        >
          Back to Homepage
        </Link>
      </div>
    </SubpageLayout>
  );
}
