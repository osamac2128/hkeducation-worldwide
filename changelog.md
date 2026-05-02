# HK Education Worldwide — Changelog

## [Unreleased] — 2026-05-02

### Changed
- **Hero Section (`HeroField.tsx`)**
  - Centered content with `max-width: 1200px` for better visual balance
  - Removed arbitrary left margins that caused unbalanced layouts
  - Improved typography scaling and spacing for both mobile and desktop
  - Added subtle hover lift effect to CTA button

- **Philosophy / Why Malaysia Section (`PhilosophyCarousel.tsx`)**
  - Replaced artsy 3D rolling text ring with clean, professional tag pills
  - Unified mobile and desktop layouts — both now use elegant bordered pills
  - Added hover effects (lift + background brighten) for interactivity
  - Removed GSAP ScrollTrigger dependency for this section

- **Services Section (`MediumsGlossary.tsx`)**
  - Replaced gooey SVG hover animation with clean professional card grid
  - Cards now display service name, category label, and description upfront
  - 2-column grid on desktop, single column on mobile
  - Hover state brightens card background on desktop
  - Mobile tap-to-expand behavior retained but with cleaner animation

- **Universities Gallery (`ImmersiveGallery.tsx`)**
  - Replaced asymmetric staggered layout with clean responsive grid
  - Desktop: 2-column grid with 16:10 aspect ratio cards
  - Mobile: single column with 4:5 aspect ratio cards
  - Added subtle gradient overlay on images for text readability
  - Fixed project ID display to use readable format (`xiamen malaysia` instead of `xiamen-malaysia`)
  - Added image scale-on-hover effect

- **Footer (`Footer.tsx`)**
  - Centered content with `max-width: 1200px`
  - Reduced excessive vertical padding for tighter composition
  - Grid now explicitly uses 3 columns on desktop instead of `auto-fit`

- **Project Detail Page (`ProjectDetail.tsx`)**
  - Centered content with `max-width: 1200px`
  - Improved sticky image aspect ratio to 3:4 (was extreme portrait 1024:1536)
  - Top bar now shows location + year instead of raw project ID
  - Added hover states to back button
  - Increased backdrop blur and background opacity for better readability

- **Fluid Background Shader (`FluidBackground.tsx`)**
  - Toned down color palette for more professional, education-centric feel
  - Reduced cyan accent intensity — now deep navy with subtle variation
  - Slowed animation speed slightly for calmer, more trustworthy atmosphere

- **Navigation (`Navigation.tsx`)**
  - Added proper mobile hamburger menu with animated icon (morphs to X)
  - Full-screen overlay menu with staggered fade-in animation
  - Body scroll lock when menu is open
  - Improved desktop nav with subtle bottom border on scroll
  - Stronger backdrop blur when scrolled or menu open

- **Global Styles (`index.css`)**
  - Added custom dark scrollbar styling
  - Added selection highlight color (cyan-tinted)
  - Added `focus-visible` outlines for keyboard accessibility

- **HTML Meta (`index.html`)**
  - Fixed page title: `HK Education Worldwide | Study in Malaysia`
  - Added `lang="en"` attribute
  - Added meta description tag

### Removed
- GSAP + ScrollTrigger 3D rolling ring animation from Philosophy section
- Gooey SVG filter hover animation from Services section
- Asymmetric negative-margin gallery layout
- Unused `fadeIn` keyframe animation (CSS still present but unused)

### Fixed
- Build now passes cleanly with zero TypeScript errors
- `npm install` re-run to restore missing type definitions (`vite/client`, `node`)
- Mobile menu properly closes when switching between mobile/desktop breakpoints
