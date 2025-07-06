# Building and Deploying the Website with Bun & GitHub Pages

This guide explains how to compile your React website using Bun and deploy it to GitHub Pages. It also covers how to move the build output to the correct location for GitHub Pages hosting.

---

## 1. Build the Website with Bun

1. **Open a terminal** and navigate to the `Source code` directory:
   ```sh
   cd "Source code"
   ```

2. **Run the build command:**
   ```sh
   bun run build
   ```
   This will generate a `dist/` folder inside the `Source code` directory containing the production-ready website files.

---

## 2. Move the Build Output for GitHub Pages

GitHub Pages expects the static site files to be in the root of your repository (or in a `docs/` folder if configured). To deploy from the root, move the contents of the `dist/` folder up one level:

1. **Move the build output:**
   ```sh
   mv dist/* ../
   mv dist/.* ../ 2>/dev/null || true
   rm -rf dist
   ```
   This moves all files (including hidden files like `.nojekyll`) from `Source code/dist/` to the root of your repository and removes the now-empty `dist/` folder.

---

## 3. Commit and Push to GitHub

1. **Go to the root of your repository:**
   ```sh
   cd ..
   ```
2. **Add, commit, and push your changes:**
   ```sh
   git add .
   git commit -m "Deploy website build"
   git push
   ```

---

## 4. Check Your GitHub Pages Settings

- Make sure GitHub Pages is set to deploy from the root (`/`) of your repository (or from `/docs` if you use that folder).
- The site should be live at `https://<your-username>.github.io/<your-repo>/` after a few minutes.

---

## Notes
- **Always move the build output out of the `Source code` folder** before deploying, or GitHub Pages will not find your site files.
- If you use a custom domain, make sure your `CNAME` file is also in the root directory.
- For automated deployment, see the provided GitHub Actions workflow in `.github/workflows/`.

---

That's it! Your site is now built with Bun and deployed to GitHub Pages. 