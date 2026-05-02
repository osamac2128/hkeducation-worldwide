import { galleryConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

interface Props {
  onSelect: (id: string) => void;
}

export default function ImmersiveGallery({ onSelect }: Props) {
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const PROJECTS = galleryConfig.projects;
  const isMobile = useIsMobile();

  if (PROJECTS.length === 0 && !galleryConfig.title) {
    return null;
  }

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'transparent',
        paddingTop: isMobile ? '60px' : '100px',
        paddingBottom: isMobile ? '60px' : '100px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 6vw' }}>
        {/* Section header */}
        <div style={{ marginBottom: isMobile ? '40px' : '64px' }}>
          <p
            className="font-sans-body"
            style={{
              fontSize: 10,
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              marginBottom: 16,
              textShadow,
            }}
          >
            {galleryConfig.sectionLabel}
          </p>
          <h2
            className="font-serif-display"
            style={{
              fontSize: isMobile ? 'clamp(24px, 7vw, 32px)' : 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 200,
              color: '#ffffff',
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              margin: 0,
              textShadow,
            }}
          >
            {galleryConfig.title}
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '32px' : '32px',
          }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelect(project.id)}
              style={{
                cursor: 'pointer',
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: isMobile ? '4 / 5' : '16 / 10',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  background: '#0a1218',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  loading="lazy"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                {/* Subtle overlay gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5,10,15,0.5) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Meta */}
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div>
                  <h3
                    className="font-serif-display"
                    style={{
                      fontSize: isMobile ? '18px' : '20px',
                      fontWeight: 300,
                      color: '#ffffff',
                      letterSpacing: '0.06em',
                      margin: 0,
                      textShadow,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-sans-body"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      color: 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                      marginTop: 6,
                      textShadow,
                    }}
                  >
                    {project.id.replace(/-/g, ' ')}
                  </p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
                  <p
                    className="font-sans-body"
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.6)',
                      textShadow,
                      margin: 0,
                    }}
                  >
                    {project.location}
                  </p>
                  <p
                    className="font-sans-body"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.4)',
                      marginTop: 4,
                      textShadow,
                    }}
                  >
                    {project.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
