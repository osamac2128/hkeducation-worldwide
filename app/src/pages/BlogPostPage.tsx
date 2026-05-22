import { Link } from 'react-router-dom';
import type { BlogPost } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

interface Props {
  post: BlogPost;
}

export default function BlogPostPage({ post }: Props) {
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

      {/* Post header */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '8vh 5vw 2vh' : '10vh 4vw 2vh',
        }}
      >
        <p
          className="font-sans-body"
          style={{
            fontSize: 9,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#30B0D0',
            fontWeight: 500,
            marginBottom: 20,
            textShadow,
          }}
        >
          {post.category}
        </p>
        <h1
          className="font-serif-display"
          style={{
            fontSize: isMobile ? 'clamp(24px, 7vw, 36px)' : 'clamp(32px, 3.5vw, 52px)',
            fontWeight: 200,
            letterSpacing: '0.05em',
            lineHeight: 1.2,
            margin: 0,
            marginBottom: 16,
            color: '#ffffff',
            textShadow,
          }}
        >
          {post.title}
        </h1>
        <p
          className="font-serif-display"
          style={{
            fontSize: isMobile ? '15px' : 'clamp(16px, 1.2vw, 19px)',
            fontWeight: 300,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.82)',
            fontStyle: 'italic',
            margin: 0,
            marginBottom: 20,
            textShadow,
          }}
        >
          {post.subtitle}
        </p>
        <p
          className="font-sans-body"
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.06em',
            margin: 0,
            textShadow,
          }}
        >
          {post.date} · {post.readTime}
        </p>
      </div>

      {/* Tags row */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 5vw 4vh' : '0 4vw 4vh',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans-body"
            style={{
              fontSize: 10,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '5px 14px',
              borderRadius: 30,
              textShadow,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content body */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 5vw 6vh' : '0 4vw 8vh',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {post.sections.map((section, idx) => {
            if (section.type === 'paragraph') {
              return (
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
                  {section.content}
                </p>
              );
            }

            if (section.type === 'heading') {
              const headingSlug = section.content
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              return (
                <h2
                  key={idx}
                  id={headingSlug}
                  className="font-serif-display"
                  style={{
                    fontSize: isMobile ? '18px' : '22px',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    lineHeight: 1.3,
                    margin: 0,
                    marginTop: idx === 0 ? 0 : 8,
                    color: '#ffffff',
                    textShadow,
                  }}
                >
                  {section.content}
                </h2>
              );
            }

            if (section.type === 'list') {
              const items = section.content.split(' | ');
              return (
                <ul
                  key={idx}
                  style={{
                    margin: 0,
                    paddingLeft: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  {items.map((item, i) => (
                    <li
                      key={i}
                      className="font-sans-body"
                      style={{
                        fontSize: isMobile ? '13px' : '14px',
                        lineHeight: 1.7,
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.78)',
                        paddingLeft: 20,
                        position: 'relative',
                        textShadow,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: isMobile ? 6 : 7,
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#30B0D0',
                          display: 'inline-block',
                        }}
                      />
                      {item.trim()}
                    </li>
                  ))}
                </ul>
              );
            }

            if (section.type === 'cta') {
              return (
                <div
                  key={idx}
                  style={{
                    padding: '20px 0',
                  }}
                >
                  <p
                    className="font-sans-body"
                    style={{
                      fontSize: isMobile ? '13px' : '14px',
                      lineHeight: 1.7,
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.7)',
                      margin: 0,
                      marginBottom: 14,
                      textShadow,
                    }}
                  >
                    {section.content}
                  </p>
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans-body"
                    style={{
                      display: 'inline-block',
                      background: '#30B0D0',
                      color: '#ffffff',
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      padding: '10px 24px',
                      borderRadius: 30,
                      textDecoration: 'none',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: 'pointer',
                      textShadow,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#2899B5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#30B0D0';
                    }}
                  >
                    {section.linkText}
                  </a>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* Bottom navigation */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 5vw 4vh' : '0 4vw 4vh',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 24,
        }}
      >
        <Link
          to="/blog"
          className="font-sans-body"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#30B0D0',
            fontSize: 14,
            cursor: 'pointer',
            padding: 0,
            textShadow: '0 2px 24px rgba(0,0,0,0.45)',
            letterSpacing: '0.02em',
            textDecoration: 'none',
          }}
        >
          ← Back to All Posts
        </Link>
      </div>

      {/* Footer disclaimer */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 5vw 10vh' : '0 4vw 14vh',
          textAlign: 'center',
        }}
      >
        <p
          className="font-sans-body"
          style={{
            fontSize: 12,
            lineHeight: 1.7,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.3)',
            margin: 0,
          }}
        >
          UniGeni is a recommended partner tool of HK Education Worldwide. Blog content is for informational purposes and does not constitute formal admission advice.
        </p>
      </div>
    </div>
  );
}
