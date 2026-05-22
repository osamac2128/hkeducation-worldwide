export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavLink {
  label: string
  targetId: string
  subpage?: string  // If set, clicking navigates to this subpage instead of scroll
}

export interface NavigationConfig {
  brandMark: string
  links: NavLink[]
}

export interface HeroConfig {
  wordmarkText: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  descriptionLine1: string
  descriptionLine2: string
  ctaText: string
  ctaTargetId: string
  ctaSecondaryText: string
  ctaSecondaryTargetId: string
}

export interface PhilosophyConfig {
  eyebrow: string
  title: string
  body: string
  rollingWords: string[]
}

export interface ProjectMeta {
  label: string
  value: string
}

export interface ProjectData {
  id: string
  title: string
  location: string
  year: string
  image: string
  subtitle: string
  meta: ProjectMeta[]
  paragraphs: string[]
}

export interface GalleryConfig {
  sectionLabel: string
  title: string
  projects: ProjectData[]
}

export interface MediumItem {
  cn: string
  en: string
  description: string
}

export interface MediumsConfig {
  sectionLabel: string
  titleHighlight: string
  titleRest: string
  items: MediumItem[]
}

export interface FooterEntry {
  text: string
  href?: string
}

export interface FooterColumn {
  heading: string
  entries: FooterEntry[]
}

export interface FooterConfig {
  visionText: string
  brandName: string
  columns: FooterColumn[]
  copyright: string
  videoPath: string
}

export interface ProjectDetailConfig {
  backLabel: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "HK Education Worldwide | Study in Malaysia",
  siteDescription: "HK Education Worldwide is Pakistan's trusted education consultancy for student recruitment and placement in top Malaysian universities. We guide Pakistani students from application to admission.",
}

export const navigationConfig: NavigationConfig = {
  brandMark: "HK",
  links: [
    { label: "Universities", targetId: "gallery" },
    { label: "Process", targetId: "process" },
    { label: "Services", targetId: "mediums" },
    { label: "Study Tools", targetId: "", subpage: "unigeni" },
    { label: "Blog", targetId: "", subpage: "blog" },
    { label: "Contact", targetId: "footer" },
  ],
}

export const heroConfig: HeroConfig = {
  wordmarkText: "HK Education",
  eyebrow: "Student Recruitment Agency",
  titleLine1: "Study in",
  titleLine2: "Malaysia",
  descriptionLine1: "Pakistan's dedicated student recruitment agency",
  descriptionLine2: "for university placement across Malaysia.",
  ctaText: "Explore Universities",
  ctaTargetId: "gallery",
  ctaSecondaryText: "Free Consultation",
  ctaSecondaryTargetId: "footer",
}

export const philosophyConfig: PhilosophyConfig = {
  eyebrow: "Why Malaysia",
  title: "The Smart Choice",
  body: "With tuition fees 60% lower than Western countries, English-medium instruction, and a welcoming Muslim-friendly environment, Malaysia hosts over 3,800 Pakistani students. HK Education Worldwide is Pakistan's trusted student recruitment agency, simplifying your journey from application to a world-class degree.",
  rollingWords: ["RECRUITMENT", "AFFORDABLE", "RECOGNIZED", "ENGLISH", "ISLAMIC", "QUALITY", "FUTURE", "PLACEMENT"],
}

export const galleryConfig: GalleryConfig = {
  sectionLabel: "PARTNER UNIVERSITIES / 005",
  title: "Top Institutions",
  projects: [
    {
      id: "xiamen-malaysia",
      title: "Xiamen",
      location: "Sepang",
      year: "Est. 2015",
      image: "images/project-xiamen.jpg",
      subtitle: "China's premier university in Malaysia — Direct Partner of HK Education Worldwide",
      meta: [
        { label: "TYPE", value: "Chinese Branch Campus" },
        { label: "RANK", value: "QS World #362" },
        { label: "INTAKE", value: "Feb, Sep" },
        { label: "FEES", value: "$3,500–9,000/yr" },
      ],
      paragraphs: [
        "Xiamen University Malaysia (XMUM) is the first overseas campus established by a prestigious Chinese university, bringing centuries of academic excellence to Southeast Asia. Located in the stunning Sepang district near Kuala Lumpur, its campus showcases breathtaking Chinese-Malaysian fusion architecture — a visual symbol of the cultural bridge it creates between East and West.",
        "As a Direct Partner of HK Education Worldwide, XMUM offers Pakistani students unique advantages including priority application processing, dedicated counseling support, and specialized scholarship opportunities. Programs in business, engineering, computer science, and traditional Chinese medicine are particularly popular. The university ranks among the world's top 400 and is fully recognized by Pakistan's Higher Education Commission.",
        "HK Education Worldwide's direct partnership with Xiamen University Malaysia means our students receive personalized attention from application through graduation. We coordinate directly with XMUM's admissions office, ensuring smooth processing and the best possible outcomes for every Pakistani student we place.",
      ],
    },
    {
      id: "university-malaya",
      title: "Uni. of Malaya",
      location: "Kuala Lumpur",
      year: "Est. 1949",
      image: "images/project-1.jpg",
      subtitle: "Malaysia's oldest and highest-ranked university, QS World Rank #70",
      meta: [
        { label: "TYPE", value: "Public Research University" },
        { label: "RANK", value: "QS World #70" },
        { label: "INTAKE", value: "Feb, Jul, Oct" },
        { label: "FEES", value: "$4,000–8,000/yr" },
      ],
      paragraphs: [
        "University of Malaya (UM) stands as Malaysia's premier institution of higher learning and one of Asia's most respected research universities. Established in 1949, it offers a comprehensive range of programs from medicine and engineering to law and social sciences, all within a stunning campus that blends colonial heritage with cutting-edge facilities.",
        "For Pakistani students, UM represents exceptional value — a top-100 globally ranked university at a fraction of Western tuition costs. Degrees are fully recognized by Pakistan's Higher Education Commission (HEC) and accredited by international bodies. The campus atmosphere is vibrant and inclusive, with a growing Pakistani student community and halal food readily available throughout the city.",
        "HK Education Worldwide provides end-to-end support for UM applications, from document preparation and admission submission to visa processing through EMGS. Our counselors understand Pakistani academic credentials and ensure your application meets UM's competitive entry requirements.",
      ],
    },
    {
      id: "monash-malaysia",
      title: "Monash",
      location: "Selangor",
      year: "Est. 1998",
      image: "images/project-2.jpg",
      subtitle: "Australia's prestigious Group of Eight university in Malaysia",
      meta: [
        { label: "TYPE", value: "Australian Branch Campus" },
        { label: "RANK", value: "QS World #38" },
        { label: "INTAKE", value: "Feb, Jul" },
        { label: "FEES", value: "$5,000–12,000/yr" },
      ],
      paragraphs: [
        "Monash University Malaysia brings the prestige of Australia's Group of Eight to Southeast Asia. As Monash's third-largest campus, it offers identical degrees to those awarded in Australia — at 40% lower tuition and living costs. Students can even transfer between Malaysia and Australian campuses during their studies.",
        "The university excels in medicine, pharmacy, engineering, business, and information technology. With over 9,400 students from 78 countries, Monash Malaysia offers a truly global classroom experience. For Pakistani students, this means an Australian degree without the Australian price tag — fully recognized by HEC and employers worldwide.",
        "HK Education Worldwide is an authorized representative for Monash Malaysia in Pakistan. We guide students through the entire admissions journey, including program selection that aligns with Pakistani A-Level, FSc, and IB qualifications, plus scholarship applications for high-achieving students.",
      ],
    },
    {
      id: "nottingham-malaysia",
      title: "Nottingham",
      location: "Semenyih",
      year: "Est. 2000",
      image: "images/project-3.jpg",
      subtitle: "British education excellence in the heart of Asia",
      meta: [
        { label: "TYPE", value: "UK Branch Campus" },
        { label: "RANK", value: "QS World #114" },
        { label: "INTAKE", value: "Feb, Sep" },
        { label: "FEES", value: "$5,500–13,000/yr" },
      ],
      paragraphs: [
        "The University of Nottingham Malaysia offers British-style education with degrees identical to those awarded at the UK home campus. Located on a beautiful 48-hectare site in Semenyih, Selangor, it provides a serene academic environment just 45 minutes from Kuala Lumpur's vibrant city center.",
        "Nottingham Malaysia is particularly strong in engineering, computer science, business, and pharmacy — fields that align perfectly with career demands in Pakistan and the broader Middle East. The university maintains rigorous UK academic standards while offering the cultural comfort of Malaysia's Muslim-friendly environment, complete with halal dining and prayer facilities.",
        "Through HK Education Worldwide, Pakistani students gain priority application support for Nottingham Malaysia. We assist with qualification equivalency assessments, personal statement guidance, and the complete EMGS visa process. Our partnership ensures your application receives the attention it deserves from Nottingham's admissions team.",
      ],
    },
    {
      id: "inti-university",
      title: "Inti",
      location: "Nilai / Subang",
      year: "Est. 1986",
      image: "images/project-4.jpg",
      subtitle: "A leading private university for career-focused education and industry partnerships",
      meta: [
        { label: "TYPE", value: "Private University & College" },
        { label: "RANK", value: "QS 5-Star Rated" },
        { label: "INTAKE", value: "Jan, Mar, Aug" },
        { label: "FEES", value: "$4,000–12,000/yr" },
      ],
      paragraphs: [
        "INTI International University and College is one of Malaysia's most established private higher education institutions, with a strong reputation for industry-relevant programs and graduate employability. With campuses in Nilai and Subang Jaya, INTI offers a comprehensive range of Foundation, Diploma, Bachelor's, and Master's programs in fields such as business, engineering, computing, health sciences, and hospitality.",
        "Through partnerships with renowned universities in the UK, USA, and Australia, INTI provides students with globally recognized degrees and transfer pathways. The university's emphasis on practical learning, internships, and industry collaboration ensures graduates are job-ready from day one — a significant advantage for Pakistani students seeking strong return on their educational investment.",
        "HK Education Worldwide partners with INTI to offer Pakistani students streamlined admission, scholarship guidance, and comprehensive pre-departure support. Whether you're looking for affordable tuition, fast-track degrees, or strong career services, INTI International University and College is an excellent choice for your Malaysian study journey.",
      ],
    },
  ],
}

export const mediumsConfig: MediumsConfig = {
  sectionLabel: "WHAT WE DO",
  titleHighlight: "Student Recruitment",
  titleRest: " & Guidance Services",
  items: [
    {
      cn: "Counsel",
      en: "CAREER COUNSELING",
      description: "Personalized guidance to match your academic background, career goals, and budget with the right Malaysian university and program. We understand Pakistani education systems from Matric to A-Levels and beyond.",
    },
    {
      cn: "Apply",
      en: "ADMISSION SUPPORT",
      description: "Complete application processing including document verification, SOP preparation, reference letters, and direct liaison with university admissions offices. We ensure your application is complete, accurate, and compelling.",
    },
    {
      cn: "Visa",
      en: "VISA PROCESSING",
      description: "End-to-end EMGS student pass assistance from offer letter to visa approval. We handle document submission, follow-ups, interview preparation, and travel guidance so you arrive in Malaysia fully prepared.",
    },
    {
      cn: "Support",
      en: "POST-ARRIVAL",
      description: "Our commitment continues after you land. Airport pickup, accommodation assistance, local orientation, and ongoing support throughout your studies. HK Education Worldwide stays connected to ensure your success abroad.",
    },
    {
      cn: "Guide",
      en: "CAREER GUIDANCE",
      description: "Expert guidance on aligning your degree choice with long-term career goals. We map Malaysian qualifications to Pakistani job markets, Gulf region opportunities, and international career pathways so your investment pays off.",
    },
    {
      cn: "Scholar",
      en: "SCHOLARSHIP SEARCH",
      description: "We identify and help you apply for merit-based, need-based, and country-specific scholarships across our partner universities — often reducing total tuition by 20–50% for eligible Pakistani students.",
    },
  ],
}

export const footerConfig: FooterConfig = {
  visionText: "We believe every Pakistani student deserves access to world-class education. Malaysia offers that opportunity — affordable, recognized, and culturally welcoming. Through dedicated student recruitment and personalized guidance, HK Education Worldwide is your bridge from aspiration to achievement.",
  brandName: "HK Education",
  columns: [
    {
      heading: "CONTACT",
      entries: [
        { text: "info@hkeducationworldwide.com", href: "mailto:info@hkeducationworldwide.com" },
        { text: "+60 10-434 9259", href: "tel:+60104349259" },
        { text: "Islamabad, Pakistan" },
      ],
    },
    {
      heading: "LINKS",
      entries: [
        { text: "Home", href: "#hero-section" },
        { text: "Universities", href: "#gallery" },
        { text: "Services", href: "#mediums" },
        { text: "UniGeni — Study Tools", href: "https://www.unigeni.ai" },
      ],
    },
    {
      heading: "PARTNERS",
      entries: [
        { text: "UniGeni — AI Study Tools", href: "https://www.unigeni.ai" },
        { text: "Scholarship Finder", href: "https://www.unigeni.ai/content/scholarships" },
        { text: "Free Study Guide", href: "https://www.unigeni.ai/guide" },
      ],
    },
    {
      heading: "FOLLOW",
      entries: [
        { text: "Facebook", href: "https://facebook.com" },
        { text: "Instagram", href: "https://instagram.com" },
        { text: "LinkedIn", href: "https://linkedin.com" },
      ],
    },
  ],
  copyright: "© 2025 HK Education Worldwide. All rights reserved.",
  videoPath: "",
}

export const projectDetailConfig: ProjectDetailConfig = {
  backLabel: "← Back",
}

export function getProjectById(id: string): ProjectData | undefined {
  return galleryConfig.projects.find((p) => p.id === id)
}

// ─── New Sections ─────────────────────────────────────────────────────────────

export interface StatItem {
  value: string
  label: string
}

export interface StatsConfig {
  items: StatItem[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ProcessConfig {
  sectionLabel: string
  title: string
  steps: ProcessStep[]
}

export interface Testimonial {
  quote: string
  name: string
  detail: string
}

export interface TestimonialsConfig {
  sectionLabel: string
  title: string
  items: Testimonial[]
}

export interface WhatsAppConfig {
  number: string
  message: string
}

export const statsConfig: StatsConfig = {
  items: [
    { value: "500+", label: "Students Placed" },
    { value: "5+", label: "Partner Universities" },
    { value: "95%", label: "Visa Approval Rate" },
    { value: "8+", label: "Years of Experience" },
  ],
}

export const processConfig: ProcessConfig = {
  sectionLabel: "HOW IT WORKS",
  title: "Your Journey to Malaysia",
  steps: [
    {
      number: "01",
      title: "Free Consultation",
      description: "A no-commitment session to understand your profile, goals, and budget. We listen first, then advise.",
    },
    {
      number: "02",
      title: "University Match",
      description: "We shortlist best-fit universities and programs — comparing rankings, tuition, intakes, and career outcomes.",
    },
    {
      number: "03",
      title: "Application Support",
      description: "Document preparation, SOP writing, and direct submission to your chosen university on your behalf.",
    },
    {
      number: "04",
      title: "Visa Processing",
      description: "End-to-end EMGS student pass — from offer letter to full approval and pre-departure briefing.",
    },
    {
      number: "05",
      title: "Arrival & Beyond",
      description: "Airport pickup, accommodation help, orientation, and continued support throughout your degree.",
    },
  ],
}

export const testimonialsConfig: TestimonialsConfig = {
  sectionLabel: "STUDENT STORIES",
  title: "Voices from Malaysia",
  items: [
    {
      quote: "Getting into Monash Malaysia seemed impossible from Lahore — the paperwork, the visa, everything felt overwhelming. HK Education handled it all, including picking me up from KLIA on arrival day.",
      name: "Ahmad Raza",
      detail: "BSc Computer Science — Monash University Malaysia",
    },
    {
      quote: "I was nervous about studying so far from home. The team stayed on WhatsApp every step of the way. Application to visa approval took under three months.",
      name: "Aisha Siddiqui",
      detail: "BBA — INTI International University and College",
    },
    {
      quote: "My parents needed convincing — the HEC recognition, the halal environment, the cost comparison. Two years into engineering at XMUM and I have zero regrets.",
      name: "Omar Farooq",
      detail: "BEng Mechanical Engineering — Xiamen University Malaysia",
    },
  ],
}

export const whatsappConfig: WhatsAppConfig = {
  number: "60104349259",
  message: "Hi, I'm interested in studying in Malaysia. Can you guide me?",
}

// ─── Unigeni Configuration ────────────────────────────────────────────────────────

export interface UnigeniFeature {
  icon: string
  title: string
  description: string
  link: string
  linkText: string
}

export interface UnigeniConfig {
  pageTitle: string
  pageSubtitle: string
  heroEyebrow: string
  heroTitle: string
  heroDescription: string
  whatIsUnigeni: string[]
  features: UnigeniFeature[]
  howItHelpsTitle: string
  howItHelpsItems: { title: string; description: string }[]
  ctaText: string
  ctaLink: string
  scholarshipPageTitle: string
  scholarshipPageSubtitle: string
  scholarshipIntro: string
  scholarshipFeatures: { title: string; description: string; link: string; linkText: string }[]
  scholarshipCtaText: string
  scholarshipCtaLink: string
}

export const unigeniConfig: UnigeniConfig = {
  pageTitle: "UniGeni — Your AI-Powered Study Abroad Companion",
  pageSubtitle: "The shortest path from your transcript to an offer letter abroad.",
  heroEyebrow: "RECOMMENDED TOOL",
  heroTitle: "Discover UniGeni",
  heroDescription: "A free, AI-powered platform that helps Pakistani students find, compare, and apply to universities in Malaysia and the UAE — with scholarship matching, eligibility checking, and independent counseling.",

  whatIsUnigeni: [
    "UniGeni is a university admissions and study-abroad platform that helps international students discover, compare, and apply to universities in the UAE and Malaysia. It is operated by UNIGENI HOLDINGS, headquartered in Dubai and Kuala Lumpur.",
    "The platform gives students access to 14,000+ programs across 240+ verified universities, with tools like an AI-powered eligibility checker, program comparison, scholarship discovery, and independent counselor matching — all completely free for students.",
    "For Pakistani students already considering Malaysia through HK Education Worldwide, UniGeni is a powerful complementary tool. While we handle your recruitment, application processing, and visa support, UniGeni helps you research and discover the perfect program before you even speak to us."
  ],

  features: [
    {
      icon: "🎯",
      title: "Eligibility Checker",
      description: "Upload your transcripts, language scores, and budget — UniGeni's AI scores your match against every program in their 14,000+ catalogue. See your eligibility, scholarship overlap, and intake timing instantly.",
      link: "https://www.unigeni.ai/eligibility",
      linkText: "Check Your Eligibility →"
    },
    {
      icon: "🎓",
      title: "Scholarship Discovery",
      description: "120+ active scholarships tracked across Malaysia and UAE. UniGeni surfaces only the scholarships you actually qualify for — many with low competition that students never hear about.",
      link: "https://www.unigeni.ai/content/scholarships",
      linkText: "Find Scholarships →"
    },
    {
      icon: "📊",
      title: "Program Comparison",
      description: "Compare universities and programs side-by-side: tuition, rankings, intakes, career outcomes, and campus facilities. Make data-driven decisions about your future.",
      link: "https://www.unigeni.ai/compare",
      linkText: "Compare Programs →"
    },
    {
      icon: "📋",
      title: "One Profile, Many Applications",
      description: "Build your profile once — transcripts, language scores, personal statement — and reuse it across every application. No more filling out the same forms repeatedly.",
      link: "https://www.unigeni.ai",
      linkText: "Create Your Profile →"
    },
    {
      icon: "🧑‍🏫",
      title: "Independent Counselors",
      description: "Certified education advisors matched to your needs — not institution representatives. They recommend the best fit for YOU, not the highest commission.",
      link: "https://www.unigeni.ai",
      linkText: "Get Matched →"
    },
    {
      icon: "📖",
      title: "Free 80-Page Scholarship Guide",
      description: "\"The 2025 Scholarship Bible\" — 127 scholarships worth $47M. Includes cost calculators, essay templates, university profiles, and visa guides. Over 10,000 downloads.",
      link: "https://www.unigeni.ai/guide",
      linkText: "Download Free Guide →"
    }
  ],

  howItHelpsTitle: "How UniGeni Helps Pakistani Students",
  howItHelpsItems: [
    {
      title: "Research Before You Apply",
      description: "Use UniGeni's eligibility checker and comparison tools to shortlist universities and programs before your free consultation with HK Education Worldwide. Come prepared with data."
    },
    {
      title: "Find Hidden Scholarships",
      description: "Many Pakistani students miss out on scholarships they qualify for simply because they don't know about them. UniGeni's AI matches your profile to 120+ scholarships across Malaysia and UAE."
    },
    {
      title: "Explore UAE Opportunities",
      description: "While HK Education specializes in Malaysia, UniGeni also covers 45+ UAE universities — including Khalifa University, NYU Abu Dhabi, and the world's first AI university (MBZUAI). Tax-free careers await."
    },
    {
      title: "100% Free for Students",
      description: "UniGeni's entire platform is free for students — funded by partner universities. Eligibility checking, scholarship matching, counselor access, the study guide — all at zero cost."
    }
  ],

  ctaText: "Explore UniGeni — It's Free",
  ctaLink: "https://www.unigeni.ai",

  scholarshipPageTitle: "Scholarship Finder",
  scholarshipPageSubtitle: "Discover 120+ scholarships across Malaysia and the UAE with AI-powered matching.",
  scholarshipIntro: "UniGeni tracks over 120 active scholarships worth millions of dollars across Malaysian and UAE universities. Their AI-powered eligibility engine matches your academic profile, test scores, nationality, and financial situation to scholarships you actually qualify for — eliminating hours of manual research. For Pakistani students, this means access to funding opportunities at institutions like University of Malaya, Monash Malaysia, Xiamen University Malaysia, Khalifa University, and dozens more.",

  scholarshipFeatures: [
    {
      title: "AI Scholarship Matching",
      description: "Upload your profile once — UniGeni's algorithm cross-references your grades, scores, nationality, and budget against 120+ active scholarships to find your best matches.",
      link: "https://www.unigeni.ai/content/scholarships",
      linkText: "Start Matching →"
    },
    {
      title: "The $47M Scholarship Bible",
      description: "A free 80-page guide covering 127 scholarships with application deadlines, eligibility criteria, essay templates, and cost calculators. Over 10,000 downloads by students worldwide.",
      link: "https://www.unigeni.ai/guide",
      linkText: "Download Free →"
    },
    {
      title: "Malaysian University Scholarships",
      description: "Scholarships at University of Malaya, Monash Malaysia, Nottingham Malaysia, Xiamen Malaysia, and more — many with tuition reductions of 20-50% for eligible Pakistani students.", 
      link: "https://www.unigeni.ai/study-in-malaysia",
      linkText: "Browse Malaysia →"
    },
    {
      title: "UAE University Scholarships",
      description: "Khalifa University funds 90% of its students. 106+ scholarships across 45+ UAE universities. Tax-free career pathways with starting salaries of $80K-$141K for engineers.",
      link: "https://www.unigeni.ai/study-in-uae",
      linkText: "Browse UAE →"
    }
  ],

  scholarshipCtaText: "Find Your Scholarship on UniGeni",
  scholarshipCtaLink: "https://www.unigeni.ai/content/scholarships",
}

// ─── Blog Configuration ──────────────────────────────────────────────────────────

export interface BlogPostSection {
  type: 'paragraph' | 'heading' | 'list' | 'cta'
  content: string
  link?: string
  linkText?: string
}

export interface BlogPost {
  id: string
  title: string
  subtitle: string
  date: string
  readTime: string
  category: string
  tags: string[]
  sections: BlogPostSection[]
}

export interface BlogConfig {
  sectionLabel: string
  pageTitle: string
  pageSubtitle: string
  posts: BlogPost[]
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogConfig.posts.find((p) => p.id === id)
}

export const blogConfig: BlogConfig = {
  sectionLabel: 'INSIGHTS & GUIDES',
  pageTitle: 'Blog',
  pageSubtitle: 'Practical guides, scholarship tips, and study-abroad insights for Pakistani students heading to Malaysia and the UAE.',
  posts: [
    {
      id: 'choose-right-malaysian-university',
      title: 'How to Choose the Right Malaysian University for Your Career Goals',
      subtitle: 'A practical decision framework that goes beyond rankings to help you pick the university that actually fits your future.',
      date: '2025-01-15',
      readTime: '6 min read',
      category: 'GUIDES',
      tags: ['malaysia', 'universities', 'career-planning'],
      sections: [
        {
          type: 'paragraph',
          content: 'Choosing a university is one of the biggest decisions you will make before turning 25. For Pakistani students considering Malaysia, the options can feel overwhelming \u2014 five QS top-500 universities, dozens of branch campuses, and hundreds of programs. But here is the truth most counselors will not tell you: the university name matters far less than the program fit and the career outcomes it enables.'
        },
        {
          type: 'heading',
          content: 'Step 1: Start with Your Career Destination, Not the University Brochure'
        },
        {
          type: 'paragraph',
          content: 'Before you look at a single ranking, ask yourself: what job do I want in 5 years? If the answer is software engineering at a multinational, you need a program with strong industry partnerships and internship pipelines \u2014 Monash Malaysia and Nottingham Malaysia excel here because their Australian and UK parent campuses maintain those corporate relationships. If you want to work in Pakistan after graduation, HEC recognition is non-negotiable, and you should verify that your specific program (not just the university) is listed. If the Gulf region is your target, a Malaysian degree is well-regarded in the UAE and Saudi Arabia, especially in engineering, business, and IT.'
        },
        {
          type: 'heading',
          content: 'Step 2: Understand the Branch Campus Advantage'
        },
        {
          type: 'paragraph',
          content: 'This is where Malaysia truly shines. Monash University Malaysia awards the exact same degree as Monash Australia \u2014 identical parchment, identical recognition. University of Nottingham Malaysia? Same degree as Nottingham UK. Yet tuition is 40-60% lower, and the cost of living in Kuala Lumpur is a fraction of Melbourne or Nottingham. For Pakistani students, this means you get a globally recognized Australian or British degree while studying in a Muslim-majority country with halal food everywhere, affordable living, and a welcoming environment. Xiamen University Malaysia offers a similar advantage \u2014 a top Chinese university degree at a fraction of the cost, with programs taught in English.'
        },
        {
          type: 'heading',
          content: 'Step 3: Compare Programs, Not Universities'
        },
        {
          type: 'paragraph',
          content: 'University of Malaya (QS #70) is Malaysia\'s highest-ranked institution, but its engineering labs might not match Monash Malaysia\'s facilities. INTI International University may not have the same global ranking, but its industry partnerships with IBM, Google, and Huawei mean its computer science graduates often land jobs faster. The point is: dig into the specific program. Look at the curriculum, faculty credentials, industry partnerships, internship requirements, and graduate employment rates for that exact course \u2014 not the university\'s overall brand. This is where a tool like UniGeni becomes invaluable, letting you compare programs side-by-side on the metrics that actually matter to your career.'
        },
        {
          type: 'list',
          content: 'Check HEC recognition for your specific program, not just the university | Compare tuition against your budget (ranges from $3,500 to $13,000/year) | Verify internship and industry placement opportunities | Research graduate employment rates for your chosen field | Consider campus location \u2014 KL vs. suburban campuses offer very different experiences | Look at scholarship availability for Pakistani students specifically'
        },
        {
          type: 'paragraph',
          content: 'The smartest approach is to shortlist 3-5 programs that match your career goals, then compare them on the factors above. HK Education Worldwide can help you with this \u2014 we know which universities prioritize Pakistani applicants, which programs have the best scholarship pools, and which ones have the strongest career outcomes. But the initial research is yours to own, and tools like UniGeni\'s program comparison make it straightforward.'
        },
        {
          type: 'cta',
          content: 'Compare Malaysian university programs side-by-side on UniGeni \u2014 tuition, rankings, career outcomes, and more.',
          link: 'https://www.unigeni.ai/compare',
          linkText: 'Compare Programs on UniGeni \u2192'
        },
      ],
    },
    {
      id: 'scholarships-pakistani-students-dont-know',
      title: '120+ Scholarships Pakistani Students Don\'t Know About',
      subtitle: 'Hidden funding opportunities across Malaysia and the UAE that could cover 20-90% of your tuition.',
      date: '2025-01-22',
      readTime: '7 min read',
      category: 'SCHOLARSHIPS',
      tags: ['scholarships', 'financial-aid', 'malaysia', 'uae'],
      sections: [
        {
          type: 'paragraph',
          content: 'Every year, thousands of Pakistani students abandon study-abroad dreams because they assume they cannot afford it. The reality is that over 120 active scholarships exist across Malaysian and UAE universities \u2014 and most Pakistani students have never heard of them. Some cover full tuition, others offer 20-50% reductions, and a few even include living stipends. The problem is not a lack of money; it is a lack of information.'
        },
        {
          type: 'heading',
          content: 'Types of Scholarships Available'
        },
        {
          type: 'paragraph',
          content: 'Malaysian universities offer several scholarship categories. Merit-based awards recognize academic excellence \u2014 if you scored above 80% in your FSc or A-Levels, you likely qualify for something. Need-based scholarships consider your family\'s financial situation and can cover significant portions of tuition. Country-specific scholarships target students from particular regions, and Pakistani students often benefit from these because Pakistan is an underrepresented source country at many Malaysian institutions, meaning less competition for country-specific awards.'
        },
        {
          type: 'heading',
          content: 'Malaysian University Scholarships You Should Know'
        },
        {
          type: 'list',
          content: 'Monash Malaysia Merit Scholarship \u2014 up to 50% tuition reduction for high-achieving international students | Nottingham Malaysia Excellence Scholarship \u2014 20-40% fee reduction based on academic performance | Xiamen University Malaysia Scholarships \u2014 multiple tiers from partial to full fee coverage for qualified applicants | University of Malaya International Student Scholarship \u2014 available for postgraduate programs with tuition waivers | INTI University Scholarships \u2014 industry-partnered scholarships with guaranteed internship placements'
        },
        {
          type: 'heading',
          content: 'UAE: The Scholarship Frontier Most Pakistanis Ignore'
        },
        {
          type: 'paragraph',
          content: 'Here is something that surprises most Pakistani families: Khalifa University in Abu Dhabi (QS #177) funds approximately 90% of its students through scholarships and financial aid. For engineering and science students, this means a world-class education in the UAE with minimal out-of-pocket cost. Add to that the post-study work opportunities in Dubai and Abu Dhabi \u2014 where starting salaries for engineers range from $80,000 to $141,000, tax-free \u2014 and the ROI becomes extraordinary. Other UAE institutions like NYU Abu Dhabi and the University of Birmingham Dubai also offer generous financial aid, though competition is steeper.'
        },
        {
          type: 'heading',
          content: 'Your Application Strategy'
        },
        {
          type: 'paragraph',
          content: 'The biggest mistake Pakistani students make is applying for scholarships after they have already been accepted to a university. The correct approach is to research scholarships before you apply, so you can target universities where you have the best funding chances. Start 8-12 months before your intended intake. Prepare a strong personal statement that highlights not just grades but your community involvement, leadership, and unique perspective as a Pakistani student. Apply early \u2014 many scholarships have rolling deadlines and funds deplete fast.'
        },
        {
          type: 'paragraph',
          content: 'This is exactly why tools like UniGeni exist. Their AI-powered scholarship matching cross-references your grades, test scores, nationality, and financial situation against 120+ active scholarships to surface the ones you actually qualify for. They also offer a free 80-page Scholarship Bible \u2014 a $47M guide covering 127 scholarships with application deadlines, eligibility criteria, and essay templates. It is the single most comprehensive scholarship resource available for students heading to Malaysia and the UAE.'
        },
        {
          type: 'cta',
          content: 'Stop guessing which scholarships you qualify for. Let UniGeni\'s AI match your profile to funding you might be missing.',
          link: 'https://www.unigeni.ai/content/scholarships',
          linkText: 'Find Your Scholarships \u2192'
        },
        {
          type: 'cta',
          content: 'Download the free 80-page Scholarship Bible \u2014 127 scholarships, essay templates, and cost calculators.',
          link: 'https://www.unigeni.ai/guide',
          linkText: 'Download Scholarship Bible \u2192'
        },
      ],
    },
    {
      id: 'study-in-uae-why-dubai',
      title: 'Study in the UAE: Why Dubai Should Be on Your Radar',
      subtitle: 'Tax-free careers, world-class branch campuses, and scholarships covering up to 90% of tuition \u2014 the UAE is the opportunity most Pakistani students are overlooking.',
      date: '2025-02-01',
      readTime: '5 min read',
      category: 'DESTINATIONS',
      tags: ['uae', 'dubai', 'career', 'study-abroad'],
      sections: [
        {
          type: 'paragraph',
          content: 'When Pakistani students think about studying abroad, the usual suspects come up: the UK, Australia, Canada. But there is a destination that offers a stronger combination of career outcomes, affordability, and cultural comfort than all three \u2014 and most families have never seriously considered it. The United Arab Emirates, particularly Dubai and Abu Dhabi, is rapidly becoming one of the world\'s most exciting study destinations, and the numbers tell a compelling story.'
        },
        {
          type: 'heading',
          content: 'The Career Argument: Tax-Free Salaries That Change Everything'
        },
        {
          type: 'paragraph',
          content: 'Let us talk about what matters most after graduation: your salary. In the UAE, engineers start at $80,000\u2013$141,000 per year \u2014 tax-free. That means take-home pay is dramatically higher than in the UK or Australia, where 30\u201345% of your salary goes to taxes. For Pakistani students whose families are investing in an international education, the UAE offers the fastest path to financial return on that investment. Add to this a 2-year post-study work permit, a booming tech sector, and massive government investment in AI, renewable energy, and infrastructure, and the career landscape is extraordinarily promising.'
        },
        {
          type: 'heading',
          content: 'World-Class Universities in the Desert'
        },
        {
          type: 'list',
          content: 'NYU Abu Dhabi \u2014 a full liberal arts campus of New York University, with need-blind admissions for international students | University of Birmingham Dubai \u2014 the UK\'s Russell Group in the UAE, offering identical degrees to the Birmingham campus | Khalifa University (QS #177) \u2014 Abu Dhabi\'s flagship research university, funding 90% of students | MBZUAI \u2014 the world\'s first university dedicated entirely to artificial intelligence, offering full scholarships | University of Sharjah \u2014 affordable and well-regarded, popular with Pakistani students'
        },
        {
          type: 'heading',
          content: 'Why the UAE Beats Traditional Destinations for Pakistani Students'
        },
        {
          type: 'paragraph',
          content: 'Beyond careers, the UAE offers practical advantages that matter to Pakistani families. The culture is familiar \u2014 halal food is everywhere, Islamic traditions are respected, and there is a large Pakistani diaspora community (over 1.6 million Pakistanis live in the UAE). The flight from Karachi or Lahore to Dubai is under 3 hours and costs a fraction of a London or Melbourne ticket. Visa processes for Pakistani students are straightforward, and the UAE government has been actively simplifying student visa pathways. The 2-year post-study work visa gives you time to build experience and establish yourself professionally.'
        },
        {
          type: 'heading',
          content: 'The Research Advantage'
        },
        {
          type: 'paragraph',
          content: 'Most Pakistani education consultancies focus exclusively on Malaysia, the UK, or Australia \u2014 leaving the UAE completely unexplored. UniGeni is the only platform that combines UAE and Malaysian university research in one workflow, letting you compare programs across both destinations using the same profile and tools. Their eligibility checker works for 45+ UAE universities, and their scholarship database includes UAE-specific funding that most Pakistani students never discover. If you are serious about maximizing your options, you should be researching both Malaysia and the UAE simultaneously.'
        },
        {
          type: 'cta',
          content: 'Check your eligibility for UAE universities \u2014 it takes 2 minutes on UniGeni.',
          link: 'https://www.unigeni.ai/eligibility',
          linkText: 'Check UAE Eligibility \u2192'
        },
      ],
    },
    {
      id: 'free-tools-before-applying-abroad',
      title: 'Free Tools Every Pakistani Student Should Use Before Applying Abroad',
      subtitle: 'A practical toolkit for the research phase \u2014 eligibility checkers, scholarship databases, cost calculators, and more.',
      date: '2025-02-10',
      readTime: '4 min read',
      category: 'RESOURCES',
      tags: ['tools', 'resources', 'applications', 'free'],
      sections: [
        {
          type: 'paragraph',
          content: 'The biggest mistake Pakistani students make in the study-abroad process is skipping the research phase entirely. They hear about a university from a friend, talk to one consultant, and submit an application \u2014 without ever comparing alternatives, checking scholarship eligibility, or calculating total costs. The result? Thousands of dollars in missed scholarships, mismatched programs, and avoidable stress. The good news is that powerful free tools exist to help you research smarter before you commit.'
        },
        {
          type: 'heading',
          content: '1. Eligibility Checkers'
        },
        {
          type: 'paragraph',
          content: 'Before you fall in love with a university, find out if you actually qualify. Eligibility checkers analyze your academic transcripts, language scores (IELTS/TOEFL), and budget against university admission requirements to give you a match score. UniGeni\'s AI Eligibility Checker is the most comprehensive for Malaysia and the UAE \u2014 upload your documents once, and it scores your compatibility with 14,000+ programs across 240+ universities. This alone can save you weeks of manual research and dozens of application fees for programs you were never eligible for.'
        },
        {
          type: 'heading',
          content: '2. Scholarship Databases'
        },
        {
          type: 'paragraph',
          content: 'Scholarship databases aggregate funding opportunities from hundreds of sources, letting you filter by nationality, field of study, and academic level. The key advantage over Google searching: databases are curated and updated regularly, so you are not chasing expired listings. UniGeni tracks 120+ active scholarships across Malaysia and the UAE, automatically matching your profile to ones you qualify for. Their free 80-page Scholarship Bible goes even further \u2014 127 scholarships worth $47M, with application deadlines, essay templates, and eligibility criteria all in one downloadable guide.'
        },
        {
          type: 'heading',
          content: '3. University Comparison Tools'
        },
        {
          type: 'paragraph',
          content: 'Comparing universities manually means juggling a dozen browser tabs and spreadsheets. A proper comparison tool lets you place programs side-by-side on the metrics that matter: tuition fees, QS rankings, intake dates, graduate employment rates, and scholarship availability. When you are deciding between Monash Malaysia, Nottingham Malaysia, and University of Malaya, seeing all the data in one view makes the decision dramatically clearer. UniGeni\'s comparison feature does exactly this for Malaysian and UAE universities.'
        },
        {
          type: 'heading',
          content: '4. Cost-of-Living and Visa Checklists'
        },
        {
          type: 'list',
          content: 'Numbeo.com \u2014 compare cost of living between your city and Kuala Lumpur or Dubai | Malaysian EMGS website \u2014 official student visa requirements and processing timeline | UniGeni Cost Calculator \u2014 estimate total annual costs including tuition, accommodation, food, and transport | UAE ICA website \u2014 student visa requirements for Pakistani passport holders | HSBC Expat Explorer \u2014 compare living costs and salary levels across countries'
        },
        {
          type: 'paragraph',
          content: 'The students who get the best outcomes are not necessarily the smartest or the wealthiest \u2014 they are the most prepared. Spend 2-3 hours with these tools before your first consultation, and you will be ahead of 90% of applicants. HK Education Worldwide can then help you act on that research with confidence, guiding you through the application and visa process for your chosen Malaysian university.'
        },
        {
          type: 'cta',
          content: 'Get all these tools in one place. Create your free UniGeni profile and start researching smarter.',
          link: 'https://www.unigeni.ai',
          linkText: 'Explore UniGeni \u2014 It\'s Free \u2192'
        },
      ],
    },
  ],
};