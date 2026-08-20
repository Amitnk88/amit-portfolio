# Amit B Naik — Portfolio

Personal portfolio site for Amit B Naik: Software Engineer, Full-Stack &amp; Android developer, AI/ML enthusiast.

## Features

- Recruiter-first layout: Hero → About → Skills → Featured Projects → Certifications → Experience → Contact
- Fraud Lens featured as the flagship project with a custom animated SVG pipeline diagram
- Dark/light mode (dark by default), persisted across visits
- Content centralized in `src/data/portfolio.ts` for easy updates
- No backend, no database, no AI/LLM APIs — fully static frontend
- Mobile-first responsive layout, keyboard-accessible, respects reduced-motion

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion (light use) · lucide-react

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. No environment variables or API keys are required — click **Deploy**.

## Updating content

Edit `src/data/portfolio.ts` to update profile info, skills, projects, certifications, and experience. A few fields are marked `TODO: ADD URL` where the source resume didn't include a direct link (individual project repos, certification credential pages) — fill these in as you publish them.

To swap the downloadable resume, replace `public/AmitBNaik_Resume.pdf` with an updated file of the same name.
