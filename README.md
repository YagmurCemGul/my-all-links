# Yağmur Cem Gül • All-Link

[![Built with Nuxt 3](https://img.shields.io/badge/Nuxt-3.1.1-00DC82?logo=nuxt.js&logoColor=white)](#tech-stack)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38BDF8?logo=tailwind-css&logoColor=white)](#tech-stack)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](#deploying-to-netlify)

A polished, single-page “link in bio” experience that instantly presents Yağmur Cem Gül’s profile, socials, and curated resources. The editing form from the original project has been removed so the published site is ready out of the box.

---

## Table of Contents
- [Highlights](#highlights)
- [Tech Stack](#tech-stack)
- [Live Preview](#live-preview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
- [Project Structure](#project-structure)
- [Customizing the Content](#customizing-the-content)
- [Deployment](#deployment)
  - [Deploying to Netlify](#deploying-to-netlify)
  - [Netlify CLI Workflow](#netlify-cli-workflow)
- [Available Scripts](#available-scripts)
- [Troubleshooting](#troubleshooting)

---

## Highlights
- **Instant portfolio** – visiting the site lands users directly on the final profile layout.
- **Fully static** – `npm run generate` outputs static files for any CDN or static host.
- **Nuxt Icon + Iconify** – resilient icon loading with local fallbacks in `public/icons/`.
- **Pure data-driven setup** – update a single file to change all visible information.

## Tech Stack
- [Nuxt 3.1](https://nuxt.com/) & [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Icon](https://github.com/nuxt-modules/icon)
- Hosted on [Netlify](https://www.netlify.com/)

## Live Preview
- **Production**: _Add your Netlify URL once deployed_
- **Design source**: `pages/index.vue` renders the final profile screen.

---

## Getting Started

### Prerequisites
- **Node.js 18.x** (lower versions or 20+ will break Nuxt 3.1 builds). Use `nvm use 18` if available.
- npm 9+ (shipped with Node 18).

### Installation
```bash
npm install
```
Installs project dependencies and runs `nuxt prepare` automatically.

### Development Server
```bash
npm run dev
```
Opens the site at [http://localhost:3000](http://localhost:3000) with hot module replacement.

---

## Project Structure
```
├── components/
│   ├── AppForm/…      # Legacy form components (Links.vue now uses quick icon buttons)
│   ├── ExternalLink.vue
│   └── Templates/Simple.vue
├── pages/
│   ├── index.vue      # Main published profile
│   └── 1.vue          # Preview route used by the generator
├── public/
│   ├── profil-foto.png
│   └── icons/         # SVG fallbacks for critical icons
├── utils/
│   └── defaultData.js # Master dataset for profile + link content
├── netlify.toml       # Netlify build configuration
└── package.json
```

---

## Customizing the Content
- **Profile & socials** – edit the fields inside `utils/defaultData.js` (`n`, `d`, `i`, `f`, `t`, `ig`, etc.).
- **Custom links** – update the `ls` array in the same file. Each entry uses `{ l, i, u }` (label, icon key, URL).
- **Profile picture** – replace `public/profil-foto.png` or change the `i` property to another publicly accessible URL.
- **Icons** – if an icon requires an offline fallback, drop an SVG into `public/icons/` and map it in `components/ExternalLink.vue`.

---

## Deployment
### Build Command
```bash
npm run generate
```
Static assets are placed in the `dist/` directory.

### Deploying to Netlify
1. Push the project to your Git provider.
2. In Netlify, select **Add new site → Import an existing project** and connect the repo.
3. Configure build settings:
   - **Build command**: `npm run generate`
   - **Publish directory**: `dist`
   - **Environment variable**: `NODE_VERSION=18`
4. Trigger the deploy. Netlify will serve the generated files from `dist/`.

### Netlify CLI Workflow
```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir=dist          # Preview deploy (after running npm run generate)
netlify deploy --dir=dist --prod   # Production deploy
```

---

## Available Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run generate` | Build the static site into `dist/`. |
| `npm run build` | Create an SSR bundle under `.output/`. |
| `npm run preview` | Preview the SSR build locally. |

---

## Troubleshooting
- **Netlify build fails with Node 22**: ensure `netlify.toml` sets `NODE_VERSION = "18"`.
- **Icons missing**: double-check icon keys in `defaultData.js` and the `iconMap` fallback paths.
- **Cache issues after deploy**: run a hard refresh (`Cmd+Shift+R`) or clear Netlify’s build cache before redeploying.

> Need further tweaks? Update `utils/defaultData.js` and rebuild—the site will pick up the new content instantly.
