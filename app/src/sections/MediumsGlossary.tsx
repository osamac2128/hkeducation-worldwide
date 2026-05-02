import { useState } from 'react';
import { mediumsConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

export default function MediumsGlossary() {
  const mediums = mediumsConfig.items;
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (mediums.length === 0) {
    return null;
  }

  return (
    <section
      id="mediums"
      style={{
        position: 'relative',
        width: '100%',
        background: '#050A0F',
        zIndex: 4,
        padding: isMobile ? '10vh 6vw' : '14vh 8vw',
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
            marginBottom: isMobile ? '40px' : '56px',
          }}
        >
          {mediumsConfig.sectionLabel}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '16px' : '20px',
          }}
        >
          {mediums.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => isMobile && setActiveIndex(isActive ? null : idx)}
                onMouseEnter={() => !isMobile && setActiveIndex(idx)}
                onMouseLeave={() => !isMobile && setActiveIndex(null)}
                style={{
                  background: isActive
                    ? 'rgba(255,255,255,0.06)'
                    : 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: isMobile ? '24px' : '32px',
                  cursor: isMobile ? 'pointer' : 'default',
                  transition: 'all 0.4s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: isMobile ? '12px' : '16px',
                  }}
                >
                  <h3
                    className="font-serif-display"
                    style={{
                      fontSize: isMobile ? '22px' : '26px',
                      fontWeight: 300,
                      color: '#EDE8E4',
                      letterSpacing: '0.04em',
                      margin: 0,
                    }}
                  >
                    {item.cn}
                  </h3>
                  <span
                    className="font-sans-body"
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      color: '#30B0D0',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      marginLeft: '16px',
                    }}
                  >
                    {item.en}
                  </span>
                </div>

                <p
                  className="font-sans-body"
                  style={{
                    fontSize: isMobile ? '14px' : '15px',
                    lineHeight: 1.7,
                    color: 'rgba(237,232,228,0.6)',
                    fontWeight: 300,
                    margin: 0,
                    transition: 'color 0.4s ease',
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
