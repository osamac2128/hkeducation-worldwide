import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const FluidBackground = lazy(() => import('./components/FluidBackground'));
import Navigation from './components/Navigation';
import WhatsAppFab from './components/WhatsAppFab';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import HeroField from './sections/HeroField';
import StatsBar from './sections/StatsBar';
import PhilosophyCarousel from './sections/PhilosophyCarousel';
import ImmersiveGallery from './sections/ImmersiveGallery';
import ProcessSteps from './sections/ProcessSteps';
import Testimonials from './sections/Testimonials';
import MediumsGlossary from './sections/MediumsGlossary';
import Footer from './sections/Footer';
import NotFoundPage from './pages/NotFoundPage';
import { getProjectById, getBlogPostById } from './config';
import { buildBlogPostJsonLd, buildBreadcrumbJsonLd } from './utils/blog-seo';
import { buildUniversityJsonLd } from './utils/university-seo';

// Lazy-loaded subpages for code splitting
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const UnigeniPage = lazy(() => import('./pages/UnigeniPage'));
const ScholarshipGuidePage = lazy(() => import('./pages/ScholarshipGuidePage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

gsap.registerPlugin(ScrollTrigger);

function LoadingFallback() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: 14, letterSpacing: '0.1em' }}>
      Loading...
    </div>
  );
}

function SubpageShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div className="fluid-fallback" />}>
        <FluidBackground isActive={true} />
      </Suspense>
      {children}
    </div>
  );
}

function UniversityRoute() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  if (!project) return <NotFoundPage />;
  return (
    <SubpageShell>
      <SEO title={`${project.title} — HK Education Worldwide | Study in Malaysia`} description={project.subtitle} canonicalUrl={`https://hkeducationworldwide.com/universities/${project.id}`} jsonLd={[buildUniversityJsonLd(project), buildBreadcrumbJsonLd(project.title, `https://hkeducationworldwide.com/universities/${project.id}`)]} />
      <ProjectDetail project={project} />
    </SubpageShell>
  );
}

function BlogPostRoute() {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : undefined;
  if (!post) return <NotFoundPage />;
  return (
    <SubpageShell>
      <SEO title={`${post.title} | HK Education Worldwide Blog`} description={post.subtitle} canonicalUrl={`https://hkeducationworldwide.com/blog/${post.id}`} article={{ publishedTime: post.date, author: post.author || 'HK Education Worldwide', section: post.category, tags: post.tags, url: `https://hkeducationworldwide.com/blog/${post.id}` }} jsonLd={[buildBlogPostJsonLd(post, `https://hkeducationworldwide.com/blog/${post.id}`), buildBreadcrumbJsonLd(post.title, `https://hkeducationworldwide.com/blog/${post.id}`)]} />
      <BlogPostPage post={post} />
    </SubpageShell>
  );
}

function Homepage() {
  const [fluidActive, setFluidActive] = useState(true);

  useEffect(() => {
    const heroEl = document.getElementById('hero-section');
    const philEl = document.getElementById('philosophy');
    const galleryEl = document.getElementById('gallery');
    if (!heroEl || !philEl || !galleryEl) return;
    const visibility = { hero: true, phil: false, gallery: false };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroEl) visibility.hero = entry.isIntersecting;
          if (entry.target === philEl) visibility.phil = entry.isIntersecting;
          if (entry.target === galleryEl) visibility.gallery = entry.isIntersecting;
        });
        setFluidActive(visibility.hero || visibility.phil || visibility.gallery);
      },
      { threshold: 0.05 }
    );
    observer.observe(heroEl);
    observer.observe(philEl);
    observer.observe(galleryEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO canonicalUrl="https://hkeducationworldwide.com" />
      <div style={{ position: 'relative' }}>
        <Suspense fallback={<div className="fluid-fallback" />}>
          <FluidBackground isActive={fluidActive} />
        </Suspense>
        <Navigation />
        <WhatsAppFab />
        <div id="hero-section" style={{ position: 'relative', zIndex: 1 }}><HeroField /></div>
        <div style={{ position: 'relative', zIndex: 1 }}><StatsBar /></div>
        <div id="philosophy" style={{ position: 'relative', zIndex: 2 }}><PhilosophyCarousel /></div>
        <div id="gallery" style={{ position: 'relative', zIndex: 3 }}><ImmersiveGallery /></div>
        <div style={{ position: 'relative', zIndex: 50 }}>
          <div id="process"><ProcessSteps /></div>
          <div id="testimonials"><Testimonials /></div>
          <div id="mediums"><MediumsGlossary /></div>
          <div id="footer"><Footer /></div>
        </div>
      </div>
    </>
  );
}

function AppRoutes() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <ScrollToTop />
      <div id="main-content">
        <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/universities/:id" element={<UniversityRoute />} />
          <Route path="/study-tools" element={<SubpageShell><SEO title="UniGeni — AI Study Tools | HK Education Worldwide" description="Discover UniGeni — a free AI-powered platform to find universities, scholarships, and programs in Malaysia and UAE." canonicalUrl="https://hkeducationworldwide.com/study-tools" /><UnigeniPage /></SubpageShell>} />
          <Route path="/scholarships" element={<SubpageShell><SEO title="Scholarship Finder | HK Education Worldwide" description="Find 120+ scholarships across Malaysia and UAE universities with UniGeni's AI-powered matching." canonicalUrl="https://hkeducationworldwide.com/scholarships" /><ScholarshipGuidePage /></SubpageShell>} />
          <Route path="/blog" element={<SubpageShell><SEO title="Blog — Insights & Guides | HK Education Worldwide" description="Guides, scholarship tips, and study abroad insights for Pakistani students heading to Malaysia and the UAE." canonicalUrl="https://hkeducationworldwide.com/blog" /><BlogListPage /></SubpageShell>} />
          <Route path="/blog/:id" element={<BlogPostRoute />} />
          <Route path="/faq" element={<SubpageShell><FAQPage /></SubpageShell>} />
          <Route path="/about" element={<SubpageShell><AboutPage /></SubpageShell>} />
          <Route path="/contact" element={<SubpageShell><ContactPage /></SubpageShell>} />
          <Route path="/privacy" element={<SubpageShell><PrivacyPage /></SubpageShell>} />
          <Route path="/terms" element={<SubpageShell><TermsPage /></SubpageShell>} />
          <Route path="*" element={<SubpageShell><NotFoundPage /></SubpageShell>} />
        </Routes>
        </Suspense>
      </div>
    </>
  );
}

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.05 });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    return () => { lenis.destroy(); };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
