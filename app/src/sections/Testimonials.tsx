import { testimonialsConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        width: '100%',
        background: '#050A0F',
        zIndex: 4,
        padding: isMobile ? '10vh 6vw' : '14vh 8vw',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="font-sans-body"
          style={{
            fontSize: '12px',
            letterSpacing: '0.3em',
            color: 'rgba(237,232,228,0.35)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {testimonialsConfig.sectionLabel}
        </p>
        <h2
          className="font-serif-display"
          style={{
            fontSize: isMobile ? 'clamp(24px, 7vw, 32px)' : 'clamp(32px, 3.5vw, 48px)',
            fontWeight: 200,
            color: '#EDE8E4',
            letterSpacing: '0.04em',
            margin: `0 0 ${isMobile ? '48px' : '64px'}`,
          }}
        >
          {testimonialsConfig.title}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '24px',
          }}
        >
          {testimonialsConfig.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: isMobile ? '28px 24px' : '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '28px',
              }}
            >
              {/* Quote mark */}
              <div>
                <span
                  className="font-serif-display"
                  style={{
                    fontSize: '48px',
                    lineHeight: 1,
                    color: '#30B0D0',
                    opacity: 0.5,
                    display: 'block',
                    marginBottom: '16px',
                    fontWeight: 300,
                  }}
                >
                  "
                </span>
                <p
                  className="font-sans-body"
                  style={{
                    fontSize: isMobile ? '14px' : '14px',
                    lineHeight: 1.8,
                    color: 'rgba(237,232,228,0.75)',
                    fontWeight: 300,
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  {item.quote}
                </p>
              </div>

              {/* Attribution */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
                <p
                  className="font-serif-display"
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#EDE8E4',
                    margin: '0 0 4px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {item.name}
                </p>
                <p
                  className="font-sans-body"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    color: '#30B0D0',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
