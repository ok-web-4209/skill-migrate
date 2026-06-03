# SkillMigrate

SkillMigrate is a pure static, content-first website for **study abroad guides, course comparisons, visa pathway explainers, and country planning resources**.

## Tech stack

- Plain HTML
- Plain CSS
- Vanilla JavaScript
- Static assets only

There is no Vite, Tailwind build, package install, npm build step, React, backend, database, authentication, or external build tooling required.

## Preview locally

Open `index.html` directly in a browser, or serve the folder with any static file server. For example, if Python is available:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173/`.

## Project structure

```text
.
├── index.html
├── study-in-usa.html
├── study-in-uk.html
├── study-in-canada.html
├── study-in-australia.html
├── study-in-new-zealand.html
├── study-in-germany.html
├── courses.html
├── visa-guides.html
├── compare.html
├── free-consultation.html
├── contact.html
├── 404.html
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    ├── images/
    └── logos/
```

## Content direction

The site is an informational blog/content hub for students researching:

- Country guides for the USA, UK, Canada, Australia, New Zealand, and Germany
- Career-focused course categories
- Student visa and post-study work basics
- Possible skilled migration pathway research
- Country comparisons and planning checklists

The site avoids guarantees about permanent residence, jobs, visas, scholarships, admission, or migration outcomes.

## Disclaimer

SkillMigrate provides general educational information and does not provide legal, immigration, visa, admission, scholarship, employment, financial, or migration advice. Visa and immigration rules change frequently. Always verify details with official government sources or licensed professionals.
