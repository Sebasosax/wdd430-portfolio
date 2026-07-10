# WDD 430 Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS as part of the WDD 430 course at BYU-Pathway. The site uses the App Router to demonstrate file-based routing, Server Components, and component composition.

## Live Demo

🔗 [https://wdd430-portfolio-gold.vercel.app/](https://wdd430-portfolio-gold.vercel.app/)

## Features

- Home page displaying portfolio projects
- About page with a custom skills component
- A simple API route (`/api/hello`)
- Fully responsive and accessible design

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS

## Project Structure
app/
├── page.tsx          (Home page)
├── layout.tsx         (Root layout)
├── about/
│   └── page.tsx       (About page)
└── api/
└── hello/
└── route.ts   (Sample API route)
components/
├── Header.tsx
├── Footer.tsx
├── ProjectCard.tsx
├── ProjectList.tsx
└── SkillCard.tsx

## Getting Started Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Author

Sebastian Sosa ([@Sebasosax](https://github.com/Sebasosax))