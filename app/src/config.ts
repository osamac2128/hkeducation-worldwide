export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavLink {
  label: string
  targetId: string
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
    { label: "Services", targetId: "mediums" },
    { label: "Contact", targetId: "footer" },
  ],
}

export const heroConfig: HeroConfig = {
  wordmarkText: "HK Education",
  eyebrow: "Your Gateway to Malaysian Universities",
  titleLine1: "Study in",
  titleLine2: "Malaysia",
  descriptionLine1: "Pakistan's trusted partner for university recruitment",
  descriptionLine2: "and student placement across Malaysia.",
  ctaText: "Explore Now",
  ctaTargetId: "philosophy",
}

export const philosophyConfig: PhilosophyConfig = {
  eyebrow: "Why Malaysia",
  title: "The Smart Choice",
  body: "With tuition fees 60% lower than Western countries, English-medium instruction, and a welcoming Muslim-friendly environment, Malaysia hosts over 3,800 Pakistani students. HK Education Worldwide simplifies your journey from Pakistan to a world-class degree.",
  rollingWords: ["AFFORDABLE", "RECOGNIZED", "ENGLISH", "ISLAMIC", "QUALITY", "FUTURE"],
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
      id: "taylors-university",
      title: "Taylor's",
      location: "Subang Jaya",
      year: "Est. 1969",
      image: "images/project-4.jpg",
      subtitle: "Malaysia's top private university for graduate employability",
      meta: [
        { label: "TYPE", value: "Private University" },
        { label: "RANK", value: "QS World #253" },
        { label: "INTAKE", value: "Jan, Mar, Aug" },
        { label: "FEES", value: "$6,000–15,000/yr" },
      ],
      paragraphs: [
        "Taylor's University has established itself as Malaysia's most popular private university, consistently ranking highest for graduate employability and employer reputation. Its partnership with Lancaster University (UK) enables dual-degree programs that amplify your credentials on the global stage.",
        "The university's hospitality and leisure management program ranks among the world's best, while its business, design, and engineering programs are equally distinguished. Taylor's Lakeside Campus is a modern architectural marvel set around a stunning central lake — an inspiring environment for focused study.",
        "HKEducation recommends Taylor's to Pakistani students seeking industry-focused education with strong internship and career placement outcomes. We provide specialized counseling on Taylor's dual-degree pathways, scholarship opportunities, and the university's rolling intake system that offers flexible start dates throughout the year.",
      ],
    },
  ],
}

export const mediumsConfig: MediumsConfig = {
  sectionLabel: "WHAT WE DO",
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
  ],
}

export const footerConfig: FooterConfig = {
  visionText: "We believe every Pakistani student deserves access to world-class education. Malaysia offers that opportunity — affordable, recognized, and culturally welcoming. HK Education Worldwide is your bridge from aspiration to achievement.",
  brandName: "HK Education",
  columns: [
    {
      heading: "CONTACT",
      entries: [
        { text: "info@hkeducationworldwide.com", href: "mailto:info@hkeducationworldwide.com" },
        { text: "+92 300 1234567", href: "tel:+923001234567" },
        { text: "Islamabad, Pakistan" },
      ],
    },
    {
      heading: "LINKS",
      entries: [
        { text: "Home", href: "#hero-section" },
        { text: "Universities", href: "#gallery" },
        { text: "Services", href: "#mediums" },
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