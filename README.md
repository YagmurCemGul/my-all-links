# Yağmur Cem Gül – OneLink Site

A Nuxt 3–based landing page tailored to present Yağmur Cem Gül’s profile and links in a single view.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development](#development)
- [Production Build](#production-build)
- [Customizing Data](#customizing-data)
- [Icons](#icons)
- [Deploying to Netlify](#deploying-to-netlify)
- [Useful Commands](#useful-commands)

## Features
- Built with Nuxt 3 and Tailwind CSS.
- All profile content lives in `utils/defaultData.js` for easy updates.
- Social and custom link icons rely on Nuxt Icon + Iconify; critical icons are also mirrored under `public/icons/`.
- `npm run generate` produces a fully static bundle ready for any CDN or static host.

## Requirements
- **Node.js 18.x** (recommended to manage via `nvm use 18`).
- npm 9+ (bundled with Node 18).

## Installation
```bash
npm install
```
Running the install script will trigger `nuxt prepare` and create the `.nuxt` build artifacts.

## Development
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build
```bash
npm run generate
```
The static output is emitted to the `dist/` directory. Deploy this folder to any static hosting provider.

## Customizing Data
- Profile name, bio, socials, and custom link list are defined in `utils/defaultData.js`.
- Avatar lives at `public/profil-foto.png`; change the file or update the `i` field in `defaultData.js`.
- To add more links, append objects with `{ l, i, u }` fields to the `ls` array in the same file.

## Icons
- Primary icon keys reference Iconify collections (`zondicons`, `simple-icons`, `pixel`, `tabler`).
- Matching SVG assets are stored under `public/icons/`. To add a new icon offline, drop the SVG file there and extend the `iconMap` in `components/ExternalLink.vue` (and optionally in the quick-pick buttons within `components/AppForm/Links.vue`).

## Deploying to Netlify
### Using Git
1. Push the project to a Git host (GitHub, GitLab, Bitbucket, etc.).
2. In Netlify, choose **Add new site → Import an existing project** and connect your repository.
3. Configure build settings:
   - **Build command**: `npm run generate`
   - **Publish directory**: `dist`
4. Trigger the first deploy. Netlify will provide a live URL; set up a custom domain if needed.

### Using Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir=dist        # draft
netlify deploy --dir=dist --prod  # production
```

## Useful Commands
| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run generate` | Produce the static site in `dist/`. |
| `npm run build` | Create an SSR build inside `.output/`. |
| `npm run preview` | Preview the SSR build locally. |

> **Note:** Only the `dist/` directory is required for static hosting. Nuxt and npm will regenerate `.nuxt/` and `node_modules/` during fresh deployments on Netlify.
