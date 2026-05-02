import type { ProjectData } from '../config';
import { projectDetailConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

interface Props {
  project: ProjectData;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: Props) {
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const isMobile = useIsMobile();

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
      {/* Top bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          padding: isMobile ? '20px 5vw' : '28px 4vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(5,10,15,0.5)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <button
          onClick={onBack}
          className="font-sans-body"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.4)',
            color: '#ffffff',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            padding: '10px 22px',
            borderRadius: 30,
            cursor: 'pointer',
            textShadow,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
          }}
        >
          {projectDetailConfig.backLabel || '←'}
        </button>
        <div
          className="font-sans-body"
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.65)',
            textTransform: 'uppercase',
            textShadow,
          }}
        >
          {project.location} · {project.year}
        </div>
      </div>

      {/* Content — left article / right image */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
          gap: isMobile ? '40px' : '6vw',
          padding: isMobile ? '4vh 5vw 8vh' : '8vh 5vw 12vh',
          alignItems: 'start',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Left — article */}
        <article style={{ maxWidth: 580 }}>
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
            {project.title}
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
              marginBottom: 48,
              textShadow,
            }}
          >
            {project.subtitle}
          </p>

          {/* Meta rows */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              marginBottom: 48,
              paddingTop: 20,
              paddingBottom: 24,
              borderTop: '1px solid rgba(255,255,255,0.18)',
              borderBottom: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            {project.meta.map((m) => (
              <div
                key={m.label}
                style={{ display: 'flex', justifyContent: 'space-between', gap: 20 }}
              >
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.55)',
                    textTransform: 'uppercase',
                    textShadow,
                  }}
                >
                  {m.label}
                </span>
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: 12,
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.88)',
                    textAlign: 'right',
                    textShadow,
                  }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Body paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {project.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="font-sans-body"
                style={{
                  fontSize: isMobile ? '14px' : '15px',
                  lineHeight: 1.9,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.82)',
                  margin: 0,
                  textShadow,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </article>

        {/* Right — image, sticky on desktop */}
        <div
          style={{
            position: isMobile ? 'relative' : 'sticky',
            top: isMobile ? 0 : 120,
            width: '100%',
            maxWidth: 440,
            justifySelf: isMobile ? 'stretch' : 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: isMobile ? '4 / 5' : '3 / 4',
              overflow: 'hidden',
              borderRadius: '8px',
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
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
