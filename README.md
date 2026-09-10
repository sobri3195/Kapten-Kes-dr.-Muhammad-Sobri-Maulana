# SOBRI / LPDP & BTKV Portfolio

A static academic-medical portfolio for **Kapten Kes dr. Muhammad Sobri Maulana**, documenting careful preparation for LPDP and future specialist training in Bedah Toraks, Kardiak, dan Vaskular. Content is deliberately conservative: works and prototypes carry explicit status labels and the site makes no unsupported clinical, publication, scholarship, or institutional claims.

## Stack

Vite, React, TypeScript, Tailwind CSS, React Router, Lucide React, Recharts, and Framer Motion. There is no backend, authentication, or database.

## Install and run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

The production output is `dist/`.

## Deploy to Vercel

Import the repository in Vercel, use `npm run build`, and select `dist` as the output directory. `vercel.json` rewrites every application route to `index.html` for SPA routing.

## Edit portfolio content

All public content lives in `src/data/`:

- Edit identity and links in `src/data/profile.ts`.
- Add only verified BTKV research manuscripts to `src/data/research.ts`; retain accurate status labels.
- Add personally appraised articles to `src/data/journalClub.ts`. The default intentionally contains no fabricated entries.
- Edit scholarship dashboard frameworks in `src/data/lpdp.ts`. Personal tracker values are entered in the browser and saved to localStorage.
- Edit study topics and competency stages in `src/data/btkv.ts`.
- Edit the six-month roadmap in `src/data/roadmap.ts`; completion checkboxes persist locally.
- Edit educational concepts in `src/data/projects.ts`; use synthetic data only and retain validation disclaimers.

## Replace the CV PDF

Place a verified CV at `public/Muhammad_Sobri_Maulana_BTKV_CV.pdf`, then enable the download control in `src/pages/CV.tsx`. Until that file is supplied, download is disabled gracefully while browser printing remains available.

## Content safety

Never place patient-identifiable data, licensing numbers, private addresses, or unverified academic/clinical claims in the repository. The site presents Muhammad Sobri Maulana as a **BTKV Aspirant**, never as a BTKV specialist.
