import { processConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

export default function ProcessSteps() {
  const isMobile = useIsMobile();

  return (
    <section
      id="process"
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
            marginBottom: '16px',
          }}
        >
          {processConfig.sectionLabel}
        </p>
        <h2
          className="font-serif-display"
          style={{
            fontSize: isMobile ? 'clamp(24px, 7vw, 32px)' : 'clamp(32px, 3.5vw, 48px)',
            fontWeight: 200,
            color: '#EDE8E4',
            letterSpacing: '0.04em',
            margin: `0 0 ${isMobile ? '56px' : '80px'}`,
          }}
        >
          {processConfig.title}
        </h2>

        {isMobile ? (
          // Mobile: vertical timeline
          <div style={{ position: 'relative' }}>
            {processConfig.steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '20px',
                  paddingBottom: idx < processConfig.steps.length - 1 ? '36px' : '0',
                  position: 'relative',
                }}
              >
                {/* Left: number + vertical line */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                    width: '32px',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1px solid rgba(48,176,208,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      background: '#050A0F',
                    }}
                  >
                    <span
                      className="font-sans-body"
                      style={{ fontSize: '10px', fontWeight: 600, color: '#30B0D0', letterSpacing: '0.05em' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {idx < processConfig.steps.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: '1px',
                        background: 'rgba(255,255,255,0.1)',
                        marginTop: '8px',
                      }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div style={{ paddingTop: '6px', paddingBottom: idx < processConfig.steps.length - 1 ? '0' : '0' }}>
                  <h3
                    className="font-serif-display"
                    style={{
                      fontSize: '18px',
                      fontWeight: 300,
                      color: '#EDE8E4',
                      letterSpacing: '0.04em',
                      margin: '0 0 10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans-body"
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.75,
                      color: 'rgba(237,232,228,0.55)',
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop: horizontal 5-column with connecting line
          <div style={{ position: 'relative' }}>
            {/* Connecting line across all step numbers */}
            <div
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                right: '15px',
                height: '1px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '24px',
              }}
            >
              {processConfig.steps.map((step, idx) => (
                <div key={idx}>
                  {/* Step marker */}
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      border: '1px solid rgba(48,176,208,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#050A0F',
                      marginBottom: '28px',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <span
                      className="font-sans-body"
                      style={{ fontSize: '10px', fontWeight: 600, color: '#30B0D0', letterSpacing: '0.05em' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="font-serif-display"
                    style={{
                      fontSize: '17px',
                      fontWeight: 300,
                      color: '#EDE8E4',
                      letterSpacing: '0.04em',
                      margin: '0 0 12px',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans-body"
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.75,
                      color: 'rgba(237,232,228,0.55)',
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
