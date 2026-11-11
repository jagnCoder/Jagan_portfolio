# Jagan Mohan Dash Portfolio

A cinematic personal portfolio built with Next.js, Tailwind CSS, Motion, and React Three Fiber. This project presents a modern, full-stack developer profile with sections for about, skills, projects, certifications, experience, and contact.

**Live Demo:** [https://jagan-mohan-dash.netlify.app/](https://jagan-mohan-dash.netlify.app/)

## Overview

This portfolio is designed for a full-stack developer specializing in backend systems and RESTful APIs, with a premium visual style and interactive UI. It highlights personal projects like the Neighborhood Community Chat, technical expertise across multiple stacks, certifications from Google and IBM, and academic background.

## Tech Stack

- **Framework:** Next.js 15
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Motion (formerly Framer Motion)
- **3D Graphics:** React Three Fiber, Three.js, @react-three/drei
- **Icons:** Lucide React

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
│   ├── canvas/      # 3D interactive components
│   ├── sections/    # Page sections (Hero, About, etc.)
│   └── ui/          # Reusable UI components
├── data/
│   └── portfolio-data.ts  # Centralized content and project data
├── lib/
│   └── utils.ts
├── public/          # Static assets (images, PDFs)
├── assets/          # Project-specific assets
├── .eslintrc.json
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Key Files

- `data/portfolio-data.ts` — contains all personal content, skills, projects, and contact details. Update this file to change the site content.
- `app/page.tsx` — main landing page composition.
- `components/sections/*` — individual page sections like Hero, About, Projects, etc.
- `components/canvas/neural-field.tsx` — the interactive 3D background.
- `app/layout.tsx` — global metadata, fonts, and the site shell.

## Getting Started

1. **Install dependencies:**

```bash
npm install
# or
bun install
```

2. **Start the development server:**

```bash
npm run dev
```

3. **Open the app in your browser:**

```text
http://localhost:3000
```

## Production Build

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Notes

- **Centralized Data:** Personal content is managed in `data/portfolio-data.ts`. This allows for easy updates without touching component logic.
- **WebGL Fallback:** The site includes a robust fallback for the 3D background if WebGL is unavailable or blocked, ensuring visibility across all devices.
- **Hydration:** Components are optimized to prevent hydration mismatches, especially in high-motion areas.

## License

This project is personal portfolio work. All rights reserved.
