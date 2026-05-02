import { heroConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

export default function HeroField() {
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const isMobile = useIsMobile();

  if (!heroConfig.wordmarkText && !heroConfig.titleLine1) {
    return null;
  }

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? 'auto' : '100vh',
        minHeight: isMobile ? '100vh' : undefined,
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: '1 1 auto',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr',
          alignItems: 'center',
          padding: isMobile ? '100px 6vw 60px' : '0 6vw',
          gap: isMobile ? '40px' : '6vw',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'flex-start' : 'center',
        }}>
          <h2
            className="font-serif-display"
            style={{
              fontSize: isMobile ? 'clamp(36px, 12vw, 64px)' : 'clamp(48px, 6vw, 100px)',
              fontWeight: 300,
              color: '#ffffff',
              letterSpacing: '0.12em',
              textShadow,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {heroConfig.wordmarkText}
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: '460px',
          }}
        >
          {heroConfig.eyebrow && (
            <p
              className="font-sans-body"
              style={{
                fontSize: isMobile ? '11px' : '12px',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase',
                marginBottom: '28px',
                textShadow,
              }}
            >
              {heroConfig.eyebrow}
            </p>
          )}

          <h1
            className="font-serif-display"
            style={{
              fontSize: isMobile ? 'clamp(28px, 8vw, 42px)' : 'clamp(32px, 2.8vw, 48px)',
              fontWeight: 300,
              lineHeight: 1.25,
              color: '#ffffff',
              wordBreak: 'keep-all',
              marginBottom: '24px',
              textShadow,
            }}
          >
            {heroConfig.titleLine1}
            {heroConfig.titleLine2 && (
              <>
                <br />
                {heroConfig.titleLine2}
              </>
            )}
          </h1>

          {(heroConfig.descriptionLine1 || heroConfig.descriptionLine2) && (
            <p
              className="font-sans-body"
              style={{
                fontSize: isMobile ? '14px' : '15px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 300,
                marginBottom: '40px',
                textShadow,
              }}
            >
              {heroConfig.descriptionLine1}
              {heroConfig.descriptionLine2 && (
                <>
                  <br />
                  {heroConfig.descriptionLine2}
                </>
              )}
            </p>
          )}

          {heroConfig.ctaText && (
            <button
              className="font-sans-body"
              onClick={() => {
                if (heroConfig.ctaTargetId) {
                  document
                    .getElementById(heroConfig.ctaTargetId)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: '40px',
                padding: '14px 32px',
                color: '#ffffff',
                fontSize: '13px',
                letterSpacing: '0.15em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {heroConfig.ctaText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
