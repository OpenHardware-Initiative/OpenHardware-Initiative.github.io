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

## 📦 Data Management
- All data is in `Source code/src/data/` as TypeScript files
- See `DATA_MANAGEMENT_README.md` for details on adding/editing data

## 🏗️ Building & Deploying
1. **Build the site:**
   ```sh
   cd "Source code"
   bun run build
   ```
2. **Move the build output:**
   ```sh
   mv dist/* ../
   mv dist/.* ../ 2>/dev/null || true
   rm -rf dist
   ```
3. **Commit and push to GitHub**

See `DEPLOYMENT_README.md` for full instructions.

## 🌐 Hosting
- Designed for GitHub Pages, but can be hosted on Vercel, Netlify, etc.
- SPA routing is supported everywhere (see Vite config and `_redirects`/`vercel.json`)

## 🤝 Contributing
- Open to student and alumni contributions!
- Please open an issue or pull request for improvements or bug fixes.

## 📄 License
MIT License

---

For more details, see the documentation files in the repo. 