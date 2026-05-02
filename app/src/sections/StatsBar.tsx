import { statsConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

export default function StatsBar() {
  const isMobile = useIsMobile();
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        background: 'transparent',
        padding: isMobile ? '48px 6vw' : '64px 6vw',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '40px 20px' : '0',
        }}
      >
        {statsConfig.items.map((item, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              padding: isMobile ? '0' : '0 40px',
              borderRight:
                !isMobile && i < statsConfig.items.length - 1
                  ? '1px solid rgba(255,255,255,0.1)'
                  : 'none',
            }}
          >
            <p
              className="font-serif-display"
              style={{
                fontSize: isMobile ? 'clamp(36px, 10vw, 48px)' : 'clamp(40px, 3.5vw, 58px)',
                fontWeight: 200,
                color: '#30B0D0',
                margin: 0,
                lineHeight: 1,
                letterSpacing: '0.02em',
                textShadow,
              }}
            >
              {item.value}
            </p>
            <p
              className="font-sans-body"
              style={{
                fontSize: '11px',
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.55)',
                textTransform: 'uppercase',
                marginTop: '14px',
                marginBottom: 0,
                textShadow,
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
