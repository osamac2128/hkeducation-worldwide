import { Link } from 'react-router-dom';
import { unigeniConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

export default function ScholarshipGuidePage() {
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const isMobile = useIsMobile();

  const cardStyle: React.CSSProperties = {
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: isMobile ? '24px 20px' : '32px 28px',
    background: 'rgba(255,255,255,0.03)',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  };

  const ctaButtonStyle = (bgColor: string = '#30B0D0'): React.CSSProperties => ({
    display: 'inline-block',
    background: bgColor,
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.08em',
    padding: '10px 24px',
    borderRadius: 30,
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    textShadow,
  });

  const stats = [
    { value: '120+', label: 'Active Scholarships' },
    { value: '$47M', label: 'Scholarship Value' },
    { value: '127', label: 'In Free Guide' },
    { value: '10,000+', label: 'Downloads' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        width: '100%',
        color: '#ffffff',
      }}
    >

      {/* Hero */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '8vh 5vw 4vh' : '12vh 4vw 6vh',
          textAlign: 'center',
        }}
      >
        <h1
          className="font-serif-display"
          style={{
            fontSize: isMobile ? 'clamp(28px, 8vw, 42px)' : 'clamp(36px, 4vw, 64px)',
            fontWeight: 200,
            letterSpacing: '0.06em',
            lineHeight: 1.15,
            margin: 0,
            marginBottom: 20,
            color: '#ffffff',
            textShadow,
          }}
        >
          {unigeniConfig.scholarshipPageTitle}
        </h1>
        <p
          className="font-serif-display"
          style={{
            fontSize: isMobile ? '15px' : 'clamp(16px, 1.3vw, 20px)',
            fontWeight: 300,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.82)',
            fontStyle: 'italic',
            margin: 0,
            marginBottom: 24,
            textShadow,
          }}
        >
          {unigeniConfig.scholarshipPageSubtitle}
        </p>
        <p
          className="font-sans-body"
          style={{
            fontSize: isMobile ? '14px' : '15px',
            lineHeight: 1.9,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.82)',
            margin: 0,
            textAlign: 'left',
            textShadow,
          }}
        >
          {unigeniConfig.scholarshipIntro}
        </p>
      </div>

      {/* Scholarship Feature Cards */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 5vw 8vh' : '0 4vw 12vh',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '20px' : '24px',
          }}
        >
          {unigeniConfig.scholarshipFeatures.map((feature, idx) => (
            <div key={idx} style={cardStyle}>
              <h3
                className="font-serif-display"
                style={{
                  fontSize: isMobile ? '18px' : '20px',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  margin: 0,
                  color: '#ffffff',
                  textShadow,
                }}
              >
                {feature.title}
              </h3>
              <p
                className="font-sans-body"
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.75)',
                  margin: 0,
                  textShadow,
                }}
              >
                {feature.description}
              </p>
              <a
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-body"
                style={ctaButtonStyle()}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2899B5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#30B0D0';
                }}
              >
                {feature.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 5vw 8vh' : '0 4vw 12vh',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '24px' : '32px',
            padding: isMobile ? '32px 20px' : '40px 32px',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.03)',
            textAlign: 'center',
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div
                className="font-serif-display"
                style={{
                  fontSize: isMobile ? '28px' : '36px',
                  fontWeight: 200,
                  color: '#30B0D0',
                  letterSpacing: '0.04em',
                  lineHeight: 1.2,
                  textShadow,
                }}
              >
                {stat.value}
              </div>
              <div
                className="font-sans-body"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  marginTop: 8,
                  textShadow,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '4vh 5vw 6vh' : '6vh 4vw 10vh',
          textAlign: 'center',
        }}
      >
        <a
          href={unigeniConfig.scholarshipCtaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans-body"
          style={{
            ...ctaButtonStyle(),
            fontSize: 15,
            padding: '16px 40px',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2899B5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#30B0D0';
          }}
        >
          {unigeniConfig.scholarshipCtaText}
        </a>
      </div>

      {/* Study tools link */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 5vw 4vh' : '0 4vw 4vh',
          textAlign: 'center',
        }}
      >
        <p
          className="font-sans-body"
          style={{
            fontSize: isMobile ? '13px' : '14px',
            lineHeight: 1.7,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            margin: 0,
            marginBottom: 20,
            textShadow: '0 2px 24px rgba(0,0,0,0.45)',
          }}
        >
          Want to explore more tools?{' '}
          <Link
            to="/study-tools"
            className="font-sans-body"
            style={{
              background: 'none',
              border: 'none',
              color: '#30B0D0',
              fontSize: 'inherit',
              fontWeight: 400,
              textDecoration: 'underline',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            View All Study Tools →
          </Link>
        </p>
      </div>

      {/* Footer note */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 5vw 8vh' : '0 4vw 12vh',
          textAlign: 'center',
        }}
      >
        <p
          className="font-sans-body"
          style={{
            fontSize: 12,
            lineHeight: 1.7,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.35)',
            margin: 0,
          }}
        >
          UniGeni is a separate platform from HK Education Worldwide. We recommend it as a research tool for prospective students.
        </p>
      </div>
    </div>
  );
}