# GitHub Actions

This document explains the automated deployment workflow for the Open Hardware Initiative website.

## Overview

GitHub Actions automatically builds and deploys the website whenever changes are pushed to the `main` branch. The workflow is located at `.github/workflows/deploy.yml`.

## What It Does

### Build Process
1. **Checkout** repository code
2. **Setup Bun** for faster dependency installation
3. **Install dependencies** in `Source code/` directory
4. **Build project** using `bun run build`
5. **Upload artifacts** from `Source code/dist/`

### Deployment Process
1. **Deploy to GitHub Pages** using the uploaded artifacts
2. **Update live site** with new content
3. **Site goes live** at [open-hardware-initiative.com](https://open-hardware-initiative.com)

## Workflow File

### Location
`.github/workflows/deploy.yml`

### Key Configuration
```yaml
on:
  push:
    branches: ["main"]  # Triggers on main branch pushes
  workflow_dispatch:    # Allows manual triggering

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
      
      - name: Install dependencies
        working-directory: ./Source code
        run: bun install
      
      - name: Build project
        working-directory: ./Source code
        run: bun run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './Source code/dist'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

## Triggering Deployment

### Automatic Deployment
- **Push to main branch** → Workflow starts automatically
- **Any file change** triggers a new deployment
- **No manual intervention** required

### Manual Deployment
1. Go to **Actions** tab in repository
2. Click **"Deploy static content to Pages"**
3. Click **"Run workflow"**
4. Select **main** branch
5. Click **"Run workflow"**

## Deployment Timeline

### Typical Duration
- **Build time**: ~2-3 minutes
- **Deployment time**: ~30 seconds
- **Total time**: ~3-4 minutes

### What Gets Deployed
- `index.html` - Main website
- `assets/` - CSS, JavaScript, images
- `CNAME` - Custom domain configuration
- `robots.txt` - Search engine configuration
- `404.html` - Custom error page
- All static assets from `public/` folder

## Monitoring Deployment

### Check Status
1. Go to **Actions** tab in repository
2. Look for latest "Deploy static content to Pages" run
3. **Green checkmark** = successful deployment
4. **Red X** = deployment failed

### View Logs
1. Click on the workflow run
2. Expand each step to see detailed logs
3. Look for error messages in failed steps

## Troubleshooting

### Common Issues

#### Build Fails
**Symptoms**: Red X in build step
**Solutions**:
- Check TypeScript errors: `bun run lint`
- Verify all imports are correct
- Check for missing dependencies

#### Deployment Fails
**Symptoms**: Red X in deploy step
**Solutions**:
- Check GitHub Pages settings
- Verify CNAME file exists
- Check repository permissions

#### Site Not Updating
**Symptoms**: Changes not visible on live site
**Solutions**:
- Check workflow completed successfully
- Clear browser cache
- Wait 2-3 minutes for propagation

### Debugging Steps

1. **Test Build Locally**
   ```bash
   cd "Source code"
   bun run build
   ```

2. **Check Workflow Logs**
   - Go to Actions tab
   - Click on failed workflow
   - Review error messages

3. **Verify File Structure**
   - Ensure all required files exist
   - Check file paths are correct

## Configuration

### GitHub Pages Settings
- **Source**: GitHub Actions
- **Custom domain**: open-hardware-initiative.com
- **Enforce HTTPS**: ✅ Checked

### Workflow Permissions
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## Performance Optimizations

### Build Optimizations
- **Bun** for faster dependency installation
- **Vite** for optimized builds
- **Tree shaking** to remove unused code
- **Asset compression** for smaller file sizes

### Deployment Optimizations
- **Parallel jobs** for faster processing
- **Caching** of dependencies
- **Optimized artifact upload**

## Security

### What's Secure
- ✅ Source code is version controlled
- ✅ Build process is automated
- ✅ No manual deployment steps
- ✅ HTTPS enforced

### Best Practices
- Never commit sensitive data
- Use environment variables for secrets
- Keep dependencies updated
- Review workflow changes

## Rollback

### Emergency Rollback
If something goes wrong:
1. Go to **Actions** tab
2. Find a previous successful deployment
3. Click **"Re-run jobs"**
4. This will redeploy the previous version
