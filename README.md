# SkillMigrate

SkillMigrate is a static informational blog/content website for study abroad country guides, university guides, course guides, and visa pathway explainers.

## Tech stack

- HTML
- CSS (`assets/css/styles.css`)
- Vanilla JavaScript (`assets/js/main.js`)

## Static hosting notes

- No build step is required.
- No `npm install` is required.
- No consultancy, contact form, lead form, booking, or application functionality is included.
- Do not add npm, Vite, Tailwind build, React, Next.js, backend, database, ad scripts, or form-processing dependencies for the current static version.

## Local preview options

1. Open `index.html` directly in a browser.
2. Or use a simple local server if available, for example:

   ```bash
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

## Hostinger deployment instructions

1. Open Hostinger hPanel.
2. Go to **Websites**.
3. Select `skillmigrate.com`.
4. Open **File Manager**.
5. Open `public_html`.
6. Upload all files and folders from the repo root into `public_html`.
7. Make sure `index.html` is directly inside `public_html`.
8. Make sure `assets/css/styles.css` and `assets/js/main.js` are uploaded.
9. Visit `https://skillmigrate.com`.

Do not upload the files inside an extra nested folder like `public_html/skill-migrate/index.html` unless that is intentionally the desired URL path.

### Optional Hostinger Git deployment note

If using Hostinger Git deployment, make sure `public_html` receives the static HTML files directly. Since this is pure static HTML/CSS/JS, no build command is required.

## Content direction

SkillMigrate is an informational content website, not a consultancy landing page. The site publishes:

- Article-style country guides for the USA, UK, Canada, Australia, New Zealand, and Germany
- University research guides
- Course guides for common study abroad fields
- Visa pathway explainers and general student visa research notes
- Country comparisons and related resource cards

Use soft informational CTAs only, such as:

- Read Country Guides
- Explore University Guides
- Compare Countries
- Read Visa Guides
- Learn More
- Explore Courses

Avoid aggressive sales copy, personal consultancy wording, contact forms, consultation forms, lead-generation forms, book-a-call CTAs, apply-now CTAs, fake reviews, fake ratings, fake addresses, unsupported immigration claims, or guarantees about visas, admission, scholarships, jobs, or permanent residence outcomes.

## Future monetization

The site may later be monetized with display ads such as Google AdSense. Do not add ad scripts now. If planning future placements, use non-visible HTML comments only so placeholders do not affect layout.

## Important files

```text
.
├── 404.html
├── index.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/styles.css
│   ├── images/og-image.svg
│   ├── js/main.js
│   └── logos/skillmigrate-logo.svg
├── country-guides.html
├── universities.html
├── courses.html
├── visa-guides.html
└── compare.html
```

## Disclaimer

SkillMigrate provides general educational information only and does not provide legal, immigration, visa, university admission, or personal consultancy advice. Visa, university, and immigration rules can change frequently. Always verify information with official government sources, official university websites, or licensed professionals.
