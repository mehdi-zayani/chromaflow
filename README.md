<h1 align="center">🎨 Chromaflow</h1>

<p align="center">
  <em>A sleek color palette generator for designers and developers.</em><br/>
  Generate and copy perfect color combinations in one click.
</p>


<p align="center">
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/" target="_blank"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.framer.com/motion/" target="_blank"><img src="https://img.shields.io/badge/Framer_Motion-EA4C89?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  <a href="https://vercel.com/" target="_blank"><img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
<a href="https://github.com/mehdi-zayani/chromaflow/actions/workflows/ci.yml" target="_blank">
  <img src="https://img.shields.io/github/actions/workflow/status/mehdi-zayani/chromaflow/ci.yml?label=CI%20Build&logo=githubactions&logoColor=white&style=for-the-badge" alt="CI Status" />
</a>
<a href="https://github.com/mehdi-zayani/chromaflow/blob/main/LICENSE" target="_blank">
  <img src="https://img.shields.io/badge/License-MIT-3B82F6?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="License: MIT" />
</a>

</p>


---

## Overview

**Chromaflow** is a modern, minimalistic color palette generator built with Next.js, TypeScript, and Tailwind CSS.  
It allows designers and developers to generate harmonious color schemes, copy HEX codes, and experiment with palettes in a clean and animated interface.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-blue?style=for-the-badge&logo=vercel)](https://chromaflow-git-main-mzlab-projects.vercel.app?_vercel_share=96VGTNr8Cbb1Zhg0oAsz2ucqSsWLVgSR)



---

## Features

- Generate 5 random colors instantly  
- Copy HEX codes with a single click  
- Smooth UI animations using Framer Motion  
- Fully responsive layout  
- Built with TypeScript for reliability  
- Modern minimalist design  

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Base project structure

```
chromaflow/
 ├─ .github/
 │   ├─ workflows/
 │   │   └─ ci.yml
 ├─ src/
 │   ├─ app/
 │   │   └─ layout.tsx
 │   │   └─ page.tsx
 │   ├─ components/
 │   │   └─ Container.tsx
 │   │   └─ Navbar.tsx
 │   │   └─ Footer.tsx
 │   │   └─ Header.tsx
 │   │   └─ ColorCard.tsx
 │   │   └─ PaletteGenerator.tsx
 │   │   └─ ToastProvider.tsx
 │   └─ styles/
 │       └─ globals.css
 ├─ public/
 ├─ package.json
 ├─ tailwind.config.js
 ├─ README.md
 ├─ tsconfig.json
 ├─ next.config.js
 ├─ postcss.config.js
 ├─ postcss.config.mjs
 └─ .gitignore
```


## Installation

```bash
# Clone the repository
git clone https://github.com/mehdi-zayani/chromaflow.git

# Go inside the folder
cd chromaflow

# Install dependencies
npm install

# Run the development server
npm run dev

```

- Then open http://localhost:3000 in your browser.



