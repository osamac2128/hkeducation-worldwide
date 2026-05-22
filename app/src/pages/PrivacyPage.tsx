import SubpageLayout from '../components/SubpageLayout';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  return (
    <SubpageLayout>
      <SEO
        title="Privacy Policy | HK Education Worldwide"
        description="HK Education Worldwide privacy policy. Learn how we collect, use, and protect your personal information."
        canonicalUrl="https://hkeducationworldwide.com/privacy"
      />

      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1
          className="font-serif-display"
          style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 200,
            letterSpacing: '0.05em',
            lineHeight: 1.2,
            margin: 0,
            marginBottom: 8,
            color: '#ffffff',
          }}
        >
          Privacy Policy
        </h1>
        <p className="font-sans-body" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 40 }}>
          Last updated: January 2025
        </p>

        <Section title="1. Information We Collect">
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>Personal details (name, email address, phone number)</li>
            <li>Academic information (qualifications, university preferences)</li>
            <li>Communication records (WhatsApp messages, emails, form submissions)</li>
            <li>Device and usage information when you visit our website</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide university consultation and application support services</li>
            <li>Process scholarship applications on your behalf</li>
            <li>Communicate with you about your application status</li>
            <li>Send relevant information about universities, scholarships, and deadlines</li>
            <li>Improve our website and services</li>
          </ul>
        </Section>

        <Section title="3. Data Security">
          <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. We use secure communication channels (WhatsApp encryption, HTTPS) and limit access to personal data to authorized team members who need it to provide our services.</p>
        </Section>

        <Section title="4. Cookies">
          <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. These may include analytics cookies to understand how visitors use our site. You can control cookie settings through your browser preferences.</p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>We may share your information with:</p>
          <ul>
            <li>Partner universities for application processing</li>
            <li>Malaysian Immigration for visa applications</li>
            <li>Analytics providers (e.g., Google Analytics) for website usage data</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </Section>

        <Section title="6. Your Rights">
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </Section>

        <Section title="7. Contact Us">
          <p>If you have questions about this privacy policy or how we handle your data, please contact us:</p>
          <ul>
            <li>Email: info@hkeducationworldwide.com</li>
            <li>Phone: +60 10-434 9259</li>
            <li>Office: Islamabad, Pakistan</li>
          </ul>
        </Section>
      </div>
    </SubpageLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2
        className="font-serif-display"
        style={{
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: '0.04em',
          margin: 0,
          marginBottom: 16,
          color: '#ffffff',
        }}
      >
        {title}
      </h2>
      <div
        className="font-sans-body"
        style={{
          fontSize: 14,
          lineHeight: 1.9,
          fontWeight: 300,
          color: 'rgba(255,255,255,0.7)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
