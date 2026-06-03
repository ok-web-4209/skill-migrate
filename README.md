# SkillMigrate

SkillMigrate is a static, content-first website for **study abroad guides, course comparisons, visa pathway explainers, and country planning resources**. The repository includes the homepage plus standalone guide pages for every linked country, course, comparison, and visa topic.

## Tech stack

- Static HTML
- Plain CSS in `assets/css/styles.css`
- Vanilla JavaScript
- Inter font

No Vite, Tailwind build, React, Next.js, backend, database, authentication, ad scripts, or heavy client-side libraries are included. The root-level HTML files and assets can be served directly by static hosts such as GitHub Pages or Hostinger.

## GitHub Pages deployment

Deploy this repository from the branch root. The site is intentionally static, so GitHub Pages can serve the checked-in files directly without running a Node build.

Custom-domain publishing is currently disabled: there is no root-level `CNAME` file, so GitHub Pages will serve the site from the default GitHub Pages URL for previewing.

## Updating styles

The production stylesheet is checked in at `assets/css/styles.css`. Edit this file directly when adding reusable styles. Do not run npm, Tailwind, Vite, React, Next.js, or any external build step for this static website.

## Content direction

The site is designed as an informational blog/content hub for students researching:

- Country guides for the USA, UK, Canada, Australia, New Zealand, and Germany
- Career-focused course categories
- Student visa and post-study work basics
- Possible skilled migration pathway research
- Future blog categories and display-ad placements without loading ad scripts

The site should avoid guarantees about PR, jobs, visas, scholarships, admission, or migration outcomes. Each article page includes an explicit disclaimer and uses official-source verification language.

## Project structure

```text
.
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── icons/
│   ├── images/
│   ├── js/
│   │   └── main.js
│   └── logos/
├── accounting-finance-courses-abroad.html
├── best-countries-to-study-abroad.html
├── best-courses-abroad.html
├── business-management-courses-abroad.html
├── comparisons.html
├── country-guides.html
├── course-guides.html
├── engineering-courses-abroad.html
├── hospitality-tourism-courses-abroad.html
├── how-to-choose-study-abroad-course.html
├── index.html
├── it-computer-science-courses-abroad.html
├── nursing-healthcare-courses-abroad.html
├── robots.txt
├── student-visa-mistakes-to-avoid.html
├── study-abroad-to-pr.html
├── study-in-australia.html
├── study-in-canada.html
├── study-in-germany.html
├── study-in-new-zealand.html
├── study-in-uk.html
├── study-in-usa.html
├── trades-vocational-courses-abroad.html
├── usa-vs-uk-vs-canada.html
└── visa-basics.html
```

## Disclaimer

SkillMigrate provides general educational information and does not provide legal, immigration, or visa advice. Visa and immigration rules change frequently. Always verify details with official government sources or licensed professionals.
