import { useState, useEffect, useRef, useCallback } from 'react';
import { statsConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (match) {
    return { num: parseFloat(match[1]), suffix: match[2] };
  }
  return { num: 0, suffix: value };
}

function AnimatedNumber({ value, shouldAnimate }: { value: string; shouldAnimate: boolean }) {
  const [displayNum, setDisplayNum] = useState(0);
  const { num, suffix } = parseStatValue(value);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayNum(0);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();

    const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      setDisplayNum(Math.round(num * easedProgress));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [shouldAnimate, num]);

  const isDecimal = value.includes('.');
  const displayValue = isDecimal ? displayNum.toFixed(1) : displayNum.toString();

  return (
    <>{shouldAnimate ? `${displayValue}${suffix}` : `0${suffix}`}</>
  );
}

export default function StatsBar() {
  const isMobile = useIsMobile();
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      });
    },
    [hasAnimated]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      ref={sectionRef}
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
              <AnimatedNumber value={item.value} shouldAnimate={hasAnimated} />
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
