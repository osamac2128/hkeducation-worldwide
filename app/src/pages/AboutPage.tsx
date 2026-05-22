import SubpageLayout from '../components/SubpageLayout';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <SubpageLayout>
      <SEO
        title="About Us — HK Education Worldwide"
        description="HK Education Worldwide is Pakistan's trusted education consultancy for student placement in top Malaysian universities. Learn about our mission, values, and team."
        canonicalUrl="https://hkeducationworldwide.com/about"
      />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <p
          className="font-sans-body"
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          OUR STORY
        </p>
        <h1
          className="font-serif-display"
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 200,
            letterSpacing: '0.05em',
            lineHeight: 1.2,
            margin: 0,
            marginBottom: 20,
            color: '#ffffff',
          }}
        >
          About HK Education Worldwide
        </h1>
        <p
          className="font-serif-display"
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.75)',
            maxWidth: 640,
            margin: '0 auto',
          }}
        >
          Bridging Pakistani talent with world-class education in Malaysia.
        </p>
      </div>

      {/* Story Section */}
      <div style={{ maxWidth: 720, margin: '0 auto 60px' }}>
        <h2
          className="font-serif-display"
          style={{
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: '0.04em',
            marginBottom: 20,
            color: '#ffffff',
          }}
        >
          Our Story
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p className="font-sans-body" style={{ fontSize: 14, lineHeight: 1.9, fontWeight: 300, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
            HK Education Worldwide was founded with a clear purpose: to make world-class education accessible to Pakistani students. We recognized that many talented students in Pakistan were missing out on exceptional universities simply because they didn't have the right guidance.
          </p>
          <p className="font-sans-body" style={{ fontSize: 14, lineHeight: 1.9, fontWeight: 300, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
            Malaysia emerged as the ideal destination — English-medium instruction, globally recognized degrees, Muslim-friendly environment, and costs 60-70% lower than Western alternatives. We built HK Education Worldwide to be the trusted bridge between Pakistani ambition and Malaysian opportunity.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div style={{ maxWidth: 720, margin: '0 auto 60px' }}>
        <h2
          className="font-serif-display"
          style={{
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: '0.04em',
            marginBottom: 24,
            color: '#ffffff',
          }}
        >
          Our Mission
        </h2>
        <p className="font-sans-body" style={{ fontSize: 14, lineHeight: 1.9, fontWeight: 300, color: 'rgba(255,255,255,0.8)', margin: 0, marginBottom: 32 }}>
          To empower Pakistani students with transparent, honest, and comprehensive guidance throughout their journey to studying abroad — from university selection to post-arrival support.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {[
            { title: 'Transparency', desc: 'No hidden fees, no surprises. We provide complete information about costs, requirements, and timelines.' },
            { title: 'Student-First', desc: 'Every recommendation is based on what is best for the student, not what benefits us most.' },
            { title: 'Excellence', desc: 'We only partner with universities that meet our rigorous standards for quality and student outcomes.' },
          ].map((value) => (
            <div
              key={value.title}
              style={{
                padding: '24px 20px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <h3
                className="font-serif-display"
                style={{ fontSize: 16, fontWeight: 400, letterSpacing: '0.04em', margin: 0, marginBottom: 8, color: '#30B0D0' }}
              >
                {value.title}
              </h3>
              <p className="font-sans-body" style={{ fontSize: 13, lineHeight: 1.8, fontWeight: 300, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Malaysia */}
      <div style={{ maxWidth: 720, margin: '0 auto 60px' }}>
        <h2
          className="font-serif-display"
          style={{
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: '0.04em',
            marginBottom: 20,
            color: '#ffffff',
          }}
        >
          Why Malaysia
        </h2>
        <p className="font-sans-body" style={{ fontSize: 14, lineHeight: 1.9, fontWeight: 300, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
          Malaysia is home to some of the world's top universities, including branch campuses of Monash, Nottingham, and Xiamen. Students earn identical degrees to those awarded in Australia, the UK, and China — at a fraction of the cost. With English-medium instruction, a Muslim-majority population, halal food everywhere, and a welcoming culture, Malaysia is the ideal study destination for Pakistani students seeking quality education without the Western price tag.
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 24,
          padding: '40px 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: 60,
          textAlign: 'center',
        }}
      >
        {[
          { value: '500+', label: 'Students Placed' },
          { value: '95%', label: 'Visa Success Rate' },
          { value: '5', label: 'Partner Universities' },
          { value: '100%', label: 'Free Service' },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="font-serif-display" style={{ fontSize: 32, fontWeight: 200, color: '#30B0D0', letterSpacing: '0.04em' }}>
              {stat.value}
            </div>
            <div className="font-sans-body" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: 8 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Team */}
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h2
          className="font-serif-display"
          style={{
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: '0.04em',
            marginBottom: 32,
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          Our Team
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
          {[
            { role: 'Founder & Lead Consultant', initials: 'HK' },
            { role: 'Admissions Manager', initials: 'AM' },
            { role: 'Student Support Lead', initials: 'SL' },
          ].map((member) => (
            <div
              key={member.role}
              style={{
                textAlign: 'center',
                padding: '28px 16px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(48,176,208,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#30B0D0',
                  fontSize: 20,
                  fontWeight: 300,
                  fontFamily: "'Noto Serif SC', Georgia, serif",
                  letterSpacing: '0.05em',
                }}
              >
                {member.initials}
              </div>
              <p className="font-sans-body" style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.1em' }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
