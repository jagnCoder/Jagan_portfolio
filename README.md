# Jagan Mohan Dash Portfolio

A cinematic personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and React Three Fiber. This project presents a modern, research-driven developer profile with sections for about, skills, projects, research interests, experience, and contact.

## Overview

This portfolio is designed for a full-stack developer and cybersecurity enthusiast, with a premium visual style and interactive UI. It highlights personal projects, technical expertise, education, research interests, and contact information.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- @react-three/fiber
- @react-three/drei
- Three.js

## Project Structure

```text
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── canvas/
│   ├── sections/
│   └── ui/
├── data/
│   └── portfolio-data.ts
├── lib/
│   └── utils.ts
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Key Files

- `data/portfolio-data.ts` — all personal content, skills, projects, education, and contact details
- `app/page.tsx` — main landing page composition
- `components/sections/*` — page sections like hero, about, projects, experience, contact
- `app/layout.tsx` — metadata and global app shell

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

## Run Production Server

```bash
npm run start
```

## Notes

- Personal portfolio content is centralized in `data/portfolio-data.ts`, so updates are easy to manage without rewriting components.
- The project is currently using placeholder content and sample URLs in some sections; replace them with your real details before publishing.
- Resume download currently uses a generated text file; replace it with a real PDF if needed.

## GitHub / Deployment

This project is structured for easy deployment to platforms such as Vercel or GitHub Pages-like hosting setups, depending on your deployment target.
