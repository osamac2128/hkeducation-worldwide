import { useState } from 'react';
import SubpageLayout from '../components/SubpageLayout';
import SEO from '../components/SEO';

const faqs = [
  {
    question: 'How much does it cost to study in Malaysia?',
    answer: 'Tuition fees in Malaysia range from $3,500 to $13,000 per year depending on the university and program. Living costs average $400–600 per month including accommodation, food, and transport. Compared to the UK, Australia, or the US, studying in Malaysia costs 60–70% less while earning the same globally recognized degree from branch campuses like Monash, Nottingham, or Xiamen.',
  },
  {
    question: 'Is Malaysia safe for Pakistani students?',
    answer: 'Malaysia is one of the safest countries in Southeast Asia and is widely considered student-friendly. The country has a Muslim-majority population, making it culturally comfortable for Pakistani students. Halal food is available everywhere, mosques are accessible in every neighborhood, and the local population is welcoming toward international students. Universities also have dedicated international student support offices.',
  },
  {
    question: 'Are Malaysian degrees recognized by HEC Pakistan?',
    answer: 'Yes, degrees from recognized Malaysian universities are accepted by the Higher Education Commission (HEC) of Pakistan. Top institutions like University of Malaya, Monash University Malaysia, University of Nottingham Malaysia, and Xiamen University Malaysia are fully recognized. HK Education Worldwide ensures that every university we recommend has proper HEC recognition for your specific program.',
  },
  {
    question: 'What is the student visa process for Malaysia?',
    answer: 'The Malaysian student visa (Student Pass) process is straightforward. After receiving your offer letter from a university, the institution applies for your Visa Approval Letter (VAL) from the Malaysian Immigration Department. Once approved, you travel to Malaysia and the university processes your Student Pass. The entire process typically takes 4–8 weeks. HK Education Worldwide handles the complete visa process for our students at no extra charge.',
  },
  {
    question: 'Is halal food easily available in Malaysia?',
    answer: 'Absolutely. Malaysia is a Muslim-majority country, and virtually all food outlets serve halal-certified food. From campus cafeterias to street food stalls and high-end restaurants, halal options are the norm, not the exception. Pakistani students find the food culture very comfortable, with many restaurants serving South Asian cuisine including biryani, nihari, and roti.',
  },
  {
    question: 'What scholarships are available for Pakistani students?',
    answer: 'Malaysian universities offer numerous scholarships specifically for international students. These include full tuition waivers, partial scholarships (25–75% of tuition), and merit-based awards. Monash Malaysia offers the Monash Merit Scholarship, Nottingham Malaysia has multiple scholarship tiers, and many universities provide automatic scholarships based on academic results. HK Education Worldwide helps identify and apply for all eligible scholarships.',
  },
  {
    question: 'What are the living costs in Malaysia for students?',
    answer: 'Monthly living expenses for a student in Malaysia average $400–600 USD. This includes accommodation ($100–250/month for shared housing or university dorms), food ($150–200/month), transport ($30–50/month), and personal expenses ($50–100/month). Kuala Lumpur is slightly more expensive than smaller cities like Sepang or Semenyih where some campuses are located.',
  },
  {
    question: 'How good are Malaysian universities?',
    answer: 'Malaysia hosts five universities in the QS Top 500, including University of Malaya (QS #70). Branch campuses like Monash and Nottingham award the exact same degree as their Australian and UK parent institutions. Xiamen University Malaysia is part of China\'s prestigious Double First-Class initiative. Programs are taught in English, and many universities have strong industry partnerships with companies like Google, IBM, and Huawei.',
  },
  {
    question: 'What career outcomes can I expect after graduating?',
    answer: 'Malaysian university graduates are competitive globally. Many Pakistani students find employment in the Gulf region (UAE, Saudi Arabia), Southeast Asia, and Pakistan. Engineering, business, and IT graduates have particularly strong outcomes. Branch campus graduates benefit from the global alumni networks of Monash, Nottingham, and other parent universities, which opens doors internationally.',
  },
  {
    question: 'How long does the application process take?',
    answer: 'From initial consultation to receiving your visa, the entire process typically takes 2–4 months. This includes university application (2–4 weeks for offer letter), scholarship applications (concurrent with university application), visa processing (4–8 weeks), and pre-departure preparation. HK Education Worldwide recommends starting the process 4–6 months before your intended intake date to maximize scholarship opportunities.',
  },
  {
    question: 'Can I work while studying in Malaysia?',
    answer: 'International students in Malaysia are allowed to work part-time for up to 20 hours per week during semester breaks, and in specific sectors during term time with university permission. Many students find part-time opportunities on campus or in nearby businesses. However, your primary focus should be on studies, and we recommend relying on scholarships and family support for financial planning.',
  },
  {
    question: 'Why should I choose HK Education Worldwide?',
    answer: 'HK Education Worldwide is Pakistan\'s dedicated student recruitment agency for Malaysian universities. We provide end-to-end support: university selection, application processing, scholarship applications, visa assistance, pre-departure orientation, and post-arrival support in Malaysia. Our services are free for students — we are compensated by partner universities. We have helped 500+ Pakistani students successfully enroll in top Malaysian institutions.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 20,
        }}
      >
        <h3
          className="font-serif-display"
          style={{
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: '0.03em',
            lineHeight: 1.4,
            margin: 0,
            color: isOpen ? '#30B0D0' : '#ffffff',
            transition: 'color 0.3s ease',
          }}
        >
          {faq.question}
        </h3>
        <span
          style={{
            fontSize: 20,
            color: isOpen ? '#30B0D0' : 'rgba(255,255,255,0.4)',
            transition: 'all 0.3s ease',
            flexShrink: 0,
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 500 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          className="font-sans-body"
          style={{
            fontSize: 14,
            lineHeight: 1.9,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.75)',
            margin: 0,
            paddingBottom: 24,
          }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <SubpageLayout>
      <SEO
        title="FAQ — Frequently Asked Questions | HK Education Worldwide"
        description="Common questions about studying in Malaysia: costs, safety, HEC recognition, visa process, scholarships, living expenses, and more."
        canonicalUrl="https://hkeducationworldwide.com/faq"
        jsonLd={faqJsonLd}
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
          COMMON QUESTIONS
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
          Frequently Asked Questions
        </h1>
        <p
          className="font-sans-body"
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          Everything Pakistani students need to know about studying in Malaysia.
        </p>
      </div>

      {/* FAQ Items */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            faq={faq}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: 60 }}>
        <p
          className="font-sans-body"
          style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: 24,
          }}
        >
          Still have questions? Get a free consultation.
        </p>
        <a
          href="https://wa.me/60104349259?text=Hi%20HK%20Education%2C%20I%20have%20a%20question%20about%20studying%20in%20Malaysia"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans-body"
          style={{
            display: 'inline-block',
            background: '#25D366',
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: '0.06em',
            padding: '14px 36px',
            borderRadius: 30,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
        >
          Chat on WhatsApp
        </a>
      </div>
    </SubpageLayout>
  );
}
