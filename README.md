# BezaTo Consultancy Website

A premium, single-page-app style marketing site for BezaTo Consultancy — a data analytics training provider — built with React, TypeScript, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser. To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/          → Logo files (favicon icon + wordmark)
  components/      → Shared UI (Nav, Footer, Layout, CourseCard, BlogCard, WhatsAppCTA)
  components/ui/   → Small shadcn-style primitives (button, card, table)
  data/            → Static content: courses.ts, blog.tsx
  pages/           → Route-level pages: Home, Courses, Blog, BlogPost, Contact
public/
  founder.png      → Founder photo used across the homepage
```

Routing uses [wouter](https://github.com/molefrog/wouter) — a minimal alternative to React Router. Update `src/App.tsx` to add new pages/routes.

## What's new in this revision

**Branding**
- Replaced the old logo files with the new hexagonal favicon icon + "BezaTo" wordmark. Both now appear together in the nav and footer.
- Footer is dark navy (`#1a0a2e`) with gold accent typography for a more premium feel.

**Founder presence**
- The founder photo now anchors the homepage hero (right panel) with a gold "Top Analyst" floating badge and a "200+ Students Enrolled" stat card.
- A dedicated founder-quote section mid-page adds a personal, trust-building moment.

**Courses (fully restructured)**
- "Virtual" removed everywhere — the site now only distinguishes **Online** and **Physical** formats.
- SQL removed from the Research Analysis track's tool list.
- Three new full tracks added: **Database Management with SQL** (6 weeks), **Data Analytics with Python & R** (8 weeks), **Machine Learning with Python** (10 weeks).
- New bonus class: **Prompt Engineering for Data Analysis** (2 weeks, free with every enrolment), highlighted with a gold banner on the Programs page.
- The "hire our graduates" corporate section now links to WhatsApp instead of email.

**Blog / Insights**
- All 5 articles run 1,000–1,400+ words with a clear H2/H3 structure, pull quotes, and CTA boxes.
- Content now takes a global perspective — international job markets, salary context, and globally-used data sources (World Bank, IMF, FRED) — while keeping Nigeria-specific detail woven in naturally rather than as the sole focus.
- The Insights (blog) landing page header was rebuilt to match the same dark-navy hero treatment used on Home and Courses, with an "Insights & Resources" eyebrow label and updated copy.

**Home page**
- Split-screen hero: founder photo on the right, copy + CTAs on the left, consistent heading sizes across both hero lines.
- Deep navy + gold design language carried through every section (About, Tracks, Process, Founder Quote, Insights, Final CTA).
- Stats strip, 4-step process cards, and founder quote block for a more premium, editorial layout.

**Curriculum pages (new)**
- Added `src/pages/Curriculum.tsx`, wired to `/curriculum/:slug`. Every "Download Curriculum" button on a course card now opens a full page: header banner with logo, course details, investment options, "Who is this for?", a week-by-week breakdown (auto-generated from each course's `curriculum` array in `courses.ts`), the Career Launchpad bonus box, and contact details.
- Pricing on this page shows **Online and Physical only** — the old 3-tier "Virtual (Self-paced)" column from the original brochure PDFs was intentionally dropped to stay consistent with the rest of the site.
- No new content to maintain: add or edit a course's `curriculum` weeks in `src/data/courses.ts` and its detail page updates automatically.

## Deploying to GitHub Pages (with your custom domain)

This repo includes everything needed for automatic deployment:

1. **Edit `public/CNAME`** — replace the placeholder `yourdomain.com` with your actual domain (just the domain, nothing else, no `https://`).
2. **Push this whole project to your GitHub repo** (replacing whatever is currently in there — the old plain `index.html` + images).
   ```bash
   git rm -rf .
   cp -r /path/to/bezato-website/* .
   cp -r /path/to/bezato-website/.github .
   git add .
   git commit -m "Replace static site with React/Vite app"
   git push
   ```
3. In your repo, go to **Settings → Pages** and set the source to the `gh-pages` branch (this gets created automatically the first time the workflow runs — you may need to refresh/re-check this setting after the first push).
4. That's it. Every time you push to `main`, GitHub Actions (`.github/workflows/deploy.yml`) will run `npm install && npm run build` and publish the resulting `dist/` folder to the `gh-pages` branch automatically. You never need to run `npm run build` locally again.
5. Your domain's DNS should already point at GitHub Pages from your original setup — that doesn't need to change, since GitHub Pages reads `public/CNAME` (bundled into the build output) to know which domain to serve.

## Notes for deployment

- Replace the placeholder WhatsApp number (`2349137730282`) in `WhatsAppCTA.tsx`, `Nav.tsx`, `Footer.tsx`, `Home.tsx`, `Courses.tsx`, and `Curriculum.tsx` if the business number changes.
- Tailwind's typography plugin isn't installed; blog article styling is hand-rolled in `src/index.css` under `article.prose`. Install `@tailwindcss/typography` if you'd prefer the official plugin instead.
- The Curriculum page currently renders as a plain page (no shared Nav/Footer) so it reads like a standalone, printable brochure — similar to the reference PDFs. If you'd rather it match the rest of the site chrome, wrap its return value in `<Layout>...</Layout>` instead.
