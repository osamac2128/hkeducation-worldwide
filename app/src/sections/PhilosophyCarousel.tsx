import { philosophyConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

export default function PhilosophyCarousel() {
  const WORDS = philosophyConfig.rollingWords;
  const isMobile = useIsMobile();
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';

  return (
    <section
      id="philosophy"
      style={{
        position: 'relative',
        width: '100%',
        background: 'transparent',
        padding: isMobile ? '80px 0 60px' : '120px 0 100px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 6vw',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '48px' : '8vw',
          alignItems: isMobile ? 'flex-start' : 'center',
        }}
      >
        {/* Left — text content */}
        <div style={{ flex: isMobile ? 'none' : '0 0 45%' }}>
          {philosophyConfig.eyebrow && (
            <p
              className="font-sans-body"
              style={{
                fontSize: isMobile ? '11px' : '12px',
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
                marginBottom: '20px',
                textShadow,
              }}
            >
              {philosophyConfig.eyebrow}
            </p>
          )}
          {philosophyConfig.title && (
            <h2
              className="font-serif-display"
              style={{
                fontSize: isMobile ? 'clamp(26px, 7vw, 36px)' : 'clamp(32px, 3vw, 44px)',
                fontWeight: 300,
                lineHeight: 1.3,
                color: '#ffffff',
                marginBottom: '24px',
                textShadow,
              }}
            >
              {philosophyConfig.title}
            </h2>
          )}
          {philosophyConfig.body && (
            <p
              className="font-sans-body"
              style={{
                fontSize: isMobile ? '14px' : '15px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 300,
                textShadow,
                maxWidth: '480px',
              }}
            >
              {philosophyConfig.body}
            </p>
          )}
        </div>

        {/* Right — tag pills */}
        <div
          style={{
            flex: isMobile ? 'none' : '1 1 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '10px' : '14px',
            justifyContent: isMobile ? 'flex-start' : 'flex-end',
            alignContent: 'center',
          }}
        >
          {WORDS.map((word, i) => (
            <span
              key={i}
              className="font-serif-display"
              style={{
                fontSize: isMobile ? 'clamp(12px, 3.5vw, 16px)' : 'clamp(14px, 1.2vw, 18px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.12em',
                padding: isMobile ? '10px 20px' : '14px 28px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '40px',
                whiteSpace: 'nowrap',
                textShadow,
                background: 'rgba(255,255,255,0.04)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
