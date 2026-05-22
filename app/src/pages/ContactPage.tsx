import { useState, useRef, useEffect } from 'react';
import SubpageLayout from '../components/SubpageLayout';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formSubmitted && successRef.current) {
      successRef.current.focus();
    }
  }, [formSubmitted]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 8,
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: 14,
    fontFamily: "'Noto Sans SC', 'Helvetica Neue', Arial, sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  };

  return (
    <SubpageLayout>
      <SEO
        title="Contact Us | HK Education Worldwide"
        description="Get in touch with HK Education Worldwide for free consultation on studying in Malaysia. Contact us via WhatsApp, email, or phone."
        canonicalUrl="https://hkeducationworldwide.com/contact"
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
          GET IN TOUCH
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
          Contact Us
        </h1>
        <p
          className="font-sans-body"
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 500,
            margin: '0 auto',
          }}
        >
          Start your journey to studying in Malaysia. Get a free consultation today.
        </p>
      </div>

      {/* WhatsApp CTA */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 60,
          padding: '32px 24px',
          border: '1px solid rgba(37,211,102,0.2)',
          borderRadius: 12,
          background: 'rgba(37,211,102,0.05)',
        }}
      >
        <p className="font-sans-body" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0, marginBottom: 12 }}>
          FASTEST RESPONSE
        </p>
        <a
          href="https://wa.me/60104349259?text=Hi%20HK%20Education%2C%20I%27m%20interested%20in%20studying%20in%20Malaysia"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans-body"
          style={{
            display: 'inline-block',
            background: '#25D366',
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: '0.06em',
            padding: '16px 48px',
            borderRadius: 30,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
        >
          Chat on WhatsApp
        </a>
        <p className="font-sans-body" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, marginTop: 12 }}>
          Available 7 days a week · Typical response in under 30 minutes
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
        {/* Contact Info */}
        <div>
          <h2
            className="font-serif-display"
            style={{ fontSize: 20, fontWeight: 300, letterSpacing: '0.04em', margin: 0, marginBottom: 24, color: '#ffffff' }}
          >
            Contact Information
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <p className="font-sans-body" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', margin: 0, marginBottom: 4 }}>
                Phone / WhatsApp
              </p>
              <a href="tel:+60104349259" className="font-sans-body" style={{ fontSize: 15, color: '#30B0D0', textDecoration: 'none' }}>
                +60 10-434 9259
              </a>
            </div>

            <div>
              <p className="font-sans-body" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', margin: 0, marginBottom: 4 }}>
                Email
              </p>
              <a href="mailto:info@hkeducationworldwide.com" className="font-sans-body" style={{ fontSize: 15, color: '#30B0D0', textDecoration: 'none' }}>
                info@hkeducationworldwide.com
              </a>
            </div>

            <div>
              <p className="font-sans-body" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', margin: 0, marginBottom: 4 }}>
                Office
              </p>
              <p className="font-sans-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                Islamabad, Pakistan
              </p>
            </div>

            <div>
              <p className="font-sans-body" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', margin: 0, marginBottom: 4 }}>
                Website
              </p>
              <p className="font-sans-body" style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                hkeducationworldwide.com
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2
            className="font-serif-display"
            style={{ fontSize: 20, fontWeight: 300, letterSpacing: '0.04em', margin: 0, marginBottom: 24, color: '#ffffff' }}
          >
            Send a Message
          </h2>

          {formSubmitted ? (
            <div
              ref={successRef}
              tabIndex={-1}
              style={{
                padding: '40px 24px',
                textAlign: 'center',
                border: '1px solid rgba(48,176,208,0.2)',
                borderRadius: 12,
                background: 'rgba(48,176,208,0.05)',
                outline: 'none',
              }}
            >
              <p className="font-serif-display" style={{ fontSize: 18, color: '#30B0D0', margin: 0, marginBottom: 8 }}>
                Message Sent!
              </p>
              <p className="font-sans-body" style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                We'll get back to you within 24 hours. For a faster response, reach out on WhatsApp.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="font-sans-body"
                style={{
                  marginTop: 20,
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#ffffff',
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  padding: '8px 20px',
                  borderRadius: 30,
                  cursor: 'pointer',
                }}
              >
                SEND ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={inputStyle}
              />
              <textarea
                placeholder="Your Message"
                aria-label="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
              <button
                type="submit"
                className="font-sans-body"
                style={{
                  background: '#30B0D0',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  padding: '14px 32px',
                  borderRadius: 30,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </SubpageLayout>
  );
}
