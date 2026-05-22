import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/useMediaQuery';

interface SubpageLayoutProps {
  children: React.ReactNode;
}

export default function SubpageLayout({ children }: SubpageLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  // Determine back label based on current path
  const getBackLabel = () => {
    const path = location.pathname;
    if (path.startsWith('/blog/') && path !== '/blog') return '← Blog';
    if (path.startsWith('/universities/')) return '← Universities';
    return '← Back';
  };

  return (
    <div style={{ position: 'relative' }}>
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
            onClick={handleBack}
            aria-label="Go back"
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
            {getBackLabel()}
          </button>
          <Link
            to="/"
            className="font-serif-display"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: '#FFFFFF',
              textDecoration: 'none',
              textShadow,
            }}
          >
            HK Education
          </Link>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '40px 5vw 80px' : '60px 4vw 100px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
