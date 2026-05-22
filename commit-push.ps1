$ErrorActionPreference = "Continue"
Set-Location -LiteralPath "C:\DevCentral\HKEducation"

Write-Host "=== Git Status ==="
git status --short

Write-Host "`n=== Recent Commits ==="
git log --oneline -5

Write-Host "`n=== Staging and Committing ==="
git add -A
git status --short

git commit -m "feat: comprehensive site upgrade - SEO, blog, accessibility, design

- Fix double FluidBackground bug (SubpageShell + SubpageLayout conflict)
- Add React Router migration with 12 routes, code-splitting, 404 page
- Add SEO infrastructure (sitemap, JSON-LD, per-page meta tags)
- Add university structured data (EducationalOrganization schema)
- Fix blog CTAs: balanced HK Education primary + UniGeni secondary
- Fix UAE salary claims (fresh grad $40-65K vs experienced $80-141K)
- Fix homepage canonical URL and trim description to 155 chars
- Remove broken WebSite SearchAction schema (no search functionality)
- Fix footer links: internal routes for study-tools, scholarships, pages
- Add footer links to /about, /contact, /faq, /privacy, /terms
- Add 11 new SEO blog posts (total 15) with dual CTAs
- Add accessibility: skip-link, aria-labels, focus management, Escape key
- Add mobile menu: role=dialog, aria-modal, aria-expanded
- Add contact form focus management after submission
- Performance: bundle split (303KB main + 485KB three + 114KB gsap)"

Write-Host "`n=== Pushing ==="
git push

Write-Host "`nDone!"
