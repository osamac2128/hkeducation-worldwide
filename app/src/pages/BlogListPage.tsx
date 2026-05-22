import { useState } from 'react';
import { blogConfig } from '../config';
import type { BlogPost } from '../config';
import { useIsMobile } from '../hooks/useMediaQuery';

interface Props {
  onBack: () => void;
  onSelectPost: (postId: string) => void;
}

const ALL_CATEGORIES = ['All', 'GUIDES', 'SCHOLARSHIPS', 'DESTINATIONS', 'RESOURCES'];

export default function BlogListPage({ onBack, onSelectPost }: Props) {
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts: BlogPost[] = activeCategory === 'All'
    ? blogConfig.posts
    : blogConfig.posts.filter((p) => p.category === activeCategory);

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
          ← Back
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
          BLOG
        </div>
      </div>

      {/* Header */}
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: isMobile ? '8vh 5vw 4vh' : '12vh 4vw 4vh',
          textAlign: 'center',
        }}
      >
        <p
          className="font-sans-body"
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            marginBottom: 20,
            textShadow,
          }}
        >
          {blogConfig.sectionLabel}
        </p>
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
          {blogConfig.pageTitle}
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
            textShadow,
          }}
        >
          {blogConfig.pageSubtitle}
        </p>
      </div>

      {/* Category filter pills */}
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: isMobile ? '0 5vw 4vh' : '0 4vw 4vh',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        {ALL_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-sans-body"
              style={{
                background: isActive ? '#30B0D0' : 'transparent',
                color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)',
                border: isActive ? '1px solid #30B0D0' : '1px solid rgba(255,255,255,0.2)',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '8px 20px',
                borderRadius: 30,
                cursor: 'pointer',
                textShadow,
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Post cards grid */}
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: isMobile ? '0 5vw 8vh' : '0 4vw 12vh',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '20px' : '24px',
          }}
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post.id)}
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
                padding: isMobile ? '24px 20px' : '28px 24px',
                background: 'rgba(255,255,255,0.02)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              {/* Category pill */}
              <div
                className="font-sans-body"
                style={{
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#30B0D0',
                  fontWeight: 500,
                  textShadow,
                }}
              >
                {post.category}
              </div>

              {/* Title */}
              <h3
                className="font-serif-display"
                style={{
                  fontSize: isMobile ? '18px' : '20px',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  lineHeight: 1.3,
                  margin: 0,
                  color: '#ffffff',
                  textShadow,
                }}
              >
                {post.title}
              </h3>

              {/* Subtitle */}
              <p
                className="font-sans-body"
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.65)',
                  margin: 0,
                  textShadow,
                }}
              >
                {post.subtitle}
              </p>

              {/* Bottom row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                  paddingTop: 8,
                }}
              >
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.05em',
                    textShadow,
                  }}
                >
                  {post.date} · {post.readTime}
                </span>
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: 12,
                    color: '#30B0D0',
                    fontWeight: 400,
                    letterSpacing: '0.04em',
                    textShadow,
                  }}
                >
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
