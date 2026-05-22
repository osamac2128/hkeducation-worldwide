import { useEffect, useRef, useState } from 'react';
import { navigationConfig } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

interface Props {
  onSubpageClick?: (pageId: string) => void;
}

export default function Navigation({ onSubpageClick }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when switching between mobile/desktop
  useEffect(() => {
    setMenuOpen(false);
  }, [isMobile]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (id: string, subpage?: string) => {
    setMenuOpen(false);
    if (subpage && onSubpageClick) {
      onSubpageClick(subpage);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!navigationConfig.brandMark && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          padding: isMobile ? '20px 5vw' : '24px 4vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
          backgroundColor: scrolled || menuOpen ? 'rgba(5, 10, 15, 0.85)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div
          className="font-serif-display"
          style={{
            fontSize: '18px',
            fontWeight: 400,
            letterSpacing: '0.15em',
            color: '#FFFFFF',
          }}
        >
          {navigationConfig.brandMark}
        </div>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              zIndex: 101,
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                backgroundColor: '#FFFFFF',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                backgroundColor: '#FFFFFF',
                transition: 'opacity 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                backgroundColor: '#FFFFFF',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
              }}
            />
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            {navigationConfig.links.map((item) => (
              <button
                key={item.targetId}
                onClick={() => handleNavClick(item.targetId, item.subpage)}
                className="font-sans-body"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  opacity: 0.6,
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'opacity 0.4s ease',
                  padding: 0,
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.6';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile fullscreen menu */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(5, 10, 15, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            transition: 'opacity 0.4s ease, visibility 0.4s ease',
            opacity: menuOpen ? 1 : 0,
            visibility: menuOpen ? 'visible' : 'hidden',
            pointerEvents: menuOpen ? 'auto' : 'none',
          }}
        >
          {navigationConfig.links.map((item, idx) => (
            <button
              key={item.targetId}
              onClick={() => handleNavClick(item.targetId, item.subpage)}
              className="font-serif-display"
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '28px',
                fontWeight: 300,
                letterSpacing: '0.1em',
                cursor: 'pointer',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.4s ease ${idx * 0.08}s, transform 0.4s ease ${idx * 0.08}s`,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
