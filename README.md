# HK Education Worldwide

Marketing website for **HK Education Worldwide** — a Pakistan-based student recruitment agency that places Pakistani students in Malaysian universities. The site showcases partner universities, outlines the recruitment process, and drives enquiries via WhatsApp.

Deployed on Vercel as **hkeducation-worldwide**.

## Sections

| Section | File | Description |
|---------|------|-------------|
| Hero | `sections/HeroField.tsx` | Full-screen intro with wordmark, tagline, and dual CTAs ("Explore Universities" / "Free Consultation") |
| Stats Bar | `sections/StatsBar.tsx` | Key metrics strip (500+ students, 95% visa rate, etc.) |
| Why Malaysia | `sections/PhilosophyCarousel.tsx` | Value proposition with tag pills for keywords (Affordable, Recognized, English-medium, etc.) |
| Universities | `sections/ImmersiveGallery.tsx` | Responsive card grid of 5 partner universities, each clickable for detail |
| Process | `sections/ProcessSteps.tsx` | 5-step journey from consultation to post-arrival support |
| Testimonials | `sections/Testimonials.tsx` | Student quotes from placed students |
| Services | `sections/MediumsGlossary.tsx` | Card grid of 6 services (Counseling, Admissions, Visa, Post-Arrival, Career, Scholarships) |
| Footer | `sections/Footer.tsx` | Contact info, navigation links, social links |
| Detail Page | `pages/ProjectDetail.tsx` | University detail view with sticky image and editorial copy; scroll position preserved on back |

A floating **WhatsApp FAB** (`components/WhatsAppFab.tsx`) links directly to a pre-filled WhatsApp chat.

## Tech Stack

- **React 19** + **TypeScript 5.9**
- **Vite 7** — dev server and bundler
- **Tailwind CSS 3** + **shadcn/ui** (new-york style, 53 UI primitives in `components/ui/`)
- **Three.js** — persistent WebGL fluid shader background on hero/philosophy/gallery
- **GSAP + ScrollTrigger** — scroll-driven animations
- **Lenis** — global smooth scrolling (`lerp: 0.05`)
- **PostCSS + Autoprefixer**

### Fonts (Google Fonts)

- Display serif: **Noto Serif SC**
- Body sans: **Noto Sans SC**

## Project Structure

```
HKEducation/
├── app/                          # Vite React app
│   ├── public/
│   │   ├── images/               # University photos (5 JPGs)
│   │   └── videos/               # Optional footer ambient video (unused)
│   ├── src/
│   │   ├── config.ts             # ALL site content — universities, services, stats, testimonials, etc.
│   │   ├── App.tsx               # Root layout, Lenis init, IntersectionObserver for shader
│   │   ├── main.tsx              # ReactDOM entry
│   │   ├── index.css             # Global styles, CSS variables, scrollbar, selection color
│   │   ├── components/
│   │   │   ├── FluidBackground.tsx   # Three.js fluid shader
│   │   │   ├── Navigation.tsx        # Desktop + mobile hamburger nav
│   │   │   ├── WhatsAppFab.tsx       # Floating WhatsApp button
│   │   │   └── ui/                   # 53 shadcn/ui primitives
│   │   ├── sections/
│   │   │   ├── HeroField.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── PhilosophyCarousel.tsx
│   │   │   ├── ImmersiveGallery.tsx
│   │   │   ├── ProcessSteps.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── MediumsGlossary.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   └── ProjectDetail.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.ts
│   │   │   └── useMediaQuery.ts
│   │   └── lib/
│   │       └── utils.ts          # cn() helper (clsx + tailwind-merge)
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── components.json           # shadcn/ui config
│   ├── eslint.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── dist/                     # Production build output
├── changelog.md                  # Design iteration history
└── *.png                         # Design screenshots (mobile + desktop variants)
```

## Setup

```bash
cd app
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `app/dist/`.

## Content Editing

All site content is in **`app/src/config.ts`**. No other files need editing for content changes.

Key config objects:
- `siteConfig` — page title, meta description
- `navigationConfig` — nav brand mark and links
- `heroConfig` — hero text and CTAs
- `statsConfig` — metrics bar items
- `philosophyConfig` — "Why Malaysia" section text and tag pills
- `galleryConfig` — partner universities (5 entries with detail pages)
- `processConfig` — 5-step process section
- `testimonialsConfig` — student quotes
- `mediumsConfig` — services offered (6 cards)
- `footerConfig` — footer content, contact info, social links
- `whatsappConfig` — WhatsApp FAB phone number and message
- `projectDetailConfig` — detail page back button label

### Adding a University

1. Add image to `app/public/images/`
2. Add a `ProjectData` entry to `galleryConfig.projects` in `config.ts`
3. Rebuild

## Design

- **Colors**: Deep navy base (`#050A0F`), ivory text (`#EDE8E4`), cyan accent (`#30B0D0`)
- **Shader**: Three.js fluid background shared across hero, philosophy, and gallery sections; paused below fold via IntersectionObserver
- **Responsive**: Mobile hamburger menu with full-screen overlay; responsive grid layouts throughout
