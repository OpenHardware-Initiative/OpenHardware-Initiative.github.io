# OpenHardware Initiative Website — Source Code

This folder contains the full source code for the OpenHardware Initiative website.

## 📁 Structure
- `src/` — Main app source code
  - `components/` — React UI components
  - `data/` — All data (people, events, projects)
  - `pages/` — Page components
  - `...`
- `public/` — Static assets (images, uploads, etc.)

## 🛠️ Development
- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [Bun](https://bun.sh/)
- All data is managed in `src/data/` as TypeScript files
- No database or CMS required

## 📦 Data Management
See [`../DATA_MANAGEMENT_README.md`](../DATA_MANAGEMENT_README.md) for how to add or edit people, events, or projects.

## 🏗️ Building & Deploying
See [`../DEPLOYMENT_README.md`](../DEPLOYMENT_README.md) for how to build and deploy the site with Bun and GitHub Pages.

## ⚡ Quick Start
1. Install dependencies (if needed):
   ```sh
   bun install
   ```
2. Start the dev server:
   ```sh
   bun run dev
   ```
3. Build for production:
   ```sh
   bun run build
   ```

## 📝 Notes
- SPA routing is supported for GitHub Pages, Vercel, and Netlify
- All application links are managed via `src/config/applicationConfig.ts`

---

For more, see the main repo README and the documentation files.
