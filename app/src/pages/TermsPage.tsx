import SubpageLayout from '../components/SubpageLayout';
import SEO from '../components/SEO';

export default function TermsPage() {
  return (
    <SubpageLayout>
      <SEO
        title="Terms of Service | HK Education Worldwide"
        description="Terms and conditions for HK Education Worldwide education consultancy services."
        canonicalUrl="https://hkeducationworldwide.com/terms"
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
          Terms of Service
        </h1>
        <p className="font-sans-body" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 40 }}>
          Last updated: January 2025
        </p>

        <Section title="1. Services">
          <p>HK Education Worldwide provides educational consultancy services including:</p>
          <ul>
            <li>University selection guidance for Malaysian institutions</li>
            <li>Application processing and document preparation</li>
            <li>Scholarship identification and application assistance</li>
            <li>Student visa application support</li>
            <li>Pre-departure orientation and post-arrival guidance</li>
          </ul>
          <p>Our consultancy services are provided free of charge to students. We are compensated by partner universities for successful enrollments.</p>
        </Section>

        <Section title="2. User Obligations">
          <p>By using our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information for applications</li>
            <li>Respond to communications in a timely manner</li>
            <li>Comply with all university and immigration requirements</li>
            <li>Not misrepresent your qualifications or personal information</li>
          </ul>
        </Section>

        <Section title="3. Disclaimer">
          <p>While HK Education Worldwide strives to provide accurate and up-to-date information, we do not guarantee:</p>
          <ul>
            <li>Admission to any specific university or program</li>
            <li>Approval of visa applications by Malaysian Immigration</li>
            <li>Awarding of scholarships, which are subject to university discretion</li>
            <li>Specific employment outcomes after graduation</li>
          </ul>
          <p>University admission decisions, visa approvals, and scholarship awards are made by the respective institutions and authorities, not by HK Education Worldwide.</p>
        </Section>

        <Section title="4. Limitation of Liability">
          <p>HK Education Worldwide acts as a consultancy and facilitator. We are not liable for decisions made by universities, immigration authorities, or other third parties. Our liability is limited to the quality and accuracy of the guidance we provide, not the outcomes of applications or visa processes.</p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>All content on this website, including text, graphics, logos, and design elements, is the property of HK Education Worldwide and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.</p>
        </Section>

        <Section title="6. Privacy">
          <p>Your use of our services is also governed by our <a href="/privacy" style={{ color: '#30B0D0', textDecoration: 'none' }}>Privacy Policy</a>, which describes how we collect, use, and protect your personal information.</p>
        </Section>

        <Section title="7. Governing Law">
          <p>These terms are governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms shall be resolved through amicable negotiation or, failing that, through the courts of Islamabad, Pakistan.</p>
        </Section>

        <Section title="8. Changes to Terms">
          <p>We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the revised terms.</p>
        </Section>

        <Section title="9. Contact">
          <p>For questions about these terms, contact us:</p>
          <ul>
            <li>Email: info@hkeducationworldwide.com</li>
            <li>Phone: +60 10-434 9259</li>
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
