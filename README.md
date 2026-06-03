# SkillMigrate

SkillMigrate is a static, content-first website for **study abroad guides, course comparisons, visa pathway explainers, and country planning resources**. The repository now includes the homepage plus standalone guide pages for every linked country, course, comparison, and visa topic.

## Tech stack

- Vite
- HTML
- Tailwind CSS
- Vanilla JavaScript
- Inter font

No React, Next.js, backend, database, authentication, ad scripts, or heavy client-side libraries are included.

## Getting started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

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
│   ├── icons/
│   ├── images/
│   └── logos/
├── src/
│   ├── input.css
│   └── main.js
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
├── package.json
├── postcss.config.js
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── student-visa-mistakes-to-avoid.html
├── study-abroad-to-pr.html
├── study-in-australia.html
├── study-in-canada.html
├── study-in-germany.html
├── study-in-new-zealand.html
├── study-in-uk.html
├── study-in-usa.html
├── tailwind.config.js
├── trades-vocational-courses-abroad.html
├── usa-vs-uk-vs-canada.html
├── visa-basics.html
└── vite.config.js
```

## Disclaimer

SkillMigrate provides general educational information and does not provide legal, immigration, or visa advice. Visa and immigration rules change frequently. Always verify details with official government sources or licensed professionals.
