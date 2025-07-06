# OpenHardware Initiative Website

This is the official website for the OpenHardware Initiative, a student-led group at TUM focused on hardware acceleration, chip design, and smart manufacturing systems.

## 🚀 Project Overview
- **Modern React website** built with Vite, TypeScript, and Tailwind CSS
- **Static data** managed in TypeScript files (no database required)
- **Fully responsive** and mobile-friendly
- **Easy to maintain**: add or edit data by changing files in `src/data/`
- **SPA routing** with React Router, including GitHub Pages support

## 🗂️ Repository Structure

```
/
├── Source code/           # Main website source (React, Vite, etc.)
│   ├── src/               # App source code
│   │   ├── components/    # React components
│   │   ├── data/          # All data (people, events, projects)
│   │   ├── pages/         # Page components
│   │   └── ...
│   ├── public/            # Static assets (images, uploads, etc.)
│   ├── ...
│   └── ...
├── media/                 # Additional media assets
├── lovable-uploads/       # Uploaded images
├── ...
```

## 🛠️ Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bun](https://bun.sh/) (for local development/build)

## 📦 Website Configuration Management
- All code is in `Source code/src/data/` as TypeScript files
- See `Source_code/README.md`, `Source_code/APPLICATION_CONFIG_README.md` & `Source_code/DATA_MANAGEMENT_README.md` for details on adding/editing data

## 🏗️ Building & Deploying
See `Source_code/DEPLOYMENT_README.md` for full instructions.

## 🌐 Hosting
- Designed for GitHub Pages, but can be hosted on Vercel, Netlify, etc.
- SPA routing is supported everywhere (see Vite config and `_redirects`/`vercel.json`)

---

For more details, see the documentation files in the repo. 
