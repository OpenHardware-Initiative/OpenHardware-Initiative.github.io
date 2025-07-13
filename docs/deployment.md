# Deployment Guide

Learn how the Open Hardware Initiative website is automatically deployed using GitHub Actions.

## 🚀 Overview

The website uses **GitHub Actions** for automated deployment. This means:
- ✅ **No manual deployment** - everything happens automatically
- ✅ **Consistent builds** - same process every time
- ✅ **Fast deployment** - typically 2-3 minutes
- ✅ **Easy rollbacks** - previous versions are preserved

## 🔄 How It Works

### 1. Push to Main Branch
When you push changes to the `main` branch:
```bash
git add .
git commit -m "Update team member"
git push
```

### 2. GitHub Actions Triggers
The workflow automatically starts:
- **Builds** the project using Bun and Vite
- **Creates** optimized production files
- **Deploys** to GitHub Pages
- **Updates** the live website

### 3. Site Goes Live
The website is available at [open-hardware-initiative.com](https://open-hardware-initiative.com)

## 📁 Deployment Architecture

```
Your Local Machine
       ↓ (git push)
GitHub Repository
       ↓ (GitHub Actions)
Build Process (Bun + Vite)
       ↓
Production Files (dist/)
       ↓
GitHub Pages Hosting
       ↓
Live Website
```

## 🔧 GitHub Actions Workflow

The deployment workflow is located at `.github/workflows/deploy.yml`:

### Build Job
1. **Checkout** repository code
2. **Setup Bun** for faster builds
3. **Install dependencies** in `Source code/` directory
4. **Build project** using `bun run build`
5. **Upload artifacts** from `Source code/dist/`

### Deploy Job
1. **Deploy to GitHub Pages** using the uploaded artifacts
2. **Update live site** with new content

## 🌐 GitHub Pages Configuration

### Settings Location
- Go to your repository on GitHub
- Click **Settings** tab
- Scroll to **Pages** in the left sidebar

### Required Configuration
- **Source**: GitHub Actions
- **Custom domain**: open-hardware-initiative.com
- **Enforce HTTPS**: ✅ Checked

## 📊 Deployment Status

### Check Deployment Status
1. Go to **Actions** tab in your repository
2. Look for the latest "Deploy static content to Pages" run
3. Green checkmark = successful deployment
4. Red X = deployment failed

### Deployment Timeline
- **Build time**: ~2-3 minutes
- **Deployment time**: ~30 seconds
- **Total time**: ~3-4 minutes

## 🔍 What Gets Deployed

### Files Included
- `index.html` - Main website
- `assets/` - CSS, JavaScript, images
- `CNAME` - Custom domain configuration
- `robots.txt` - Search engine configuration
- `404.html` - Custom error page
- All static assets from `public/` folder

### Files Excluded
- Source code files (`.tsx`, `.ts`)
- Development dependencies
- Build configuration files
- Documentation files

## 🚨 Troubleshooting Deployment

### Common Issues

#### 1. Build Fails
**Symptoms**: Red X in GitHub Actions
**Solutions**:
- Check TypeScript errors: `bun run lint`
- Verify all imports are correct
- Check for missing dependencies

#### 2. Site Not Updating
**Symptoms**: Changes not visible on live site
**Solutions**:
- Check GitHub Actions completed successfully
- Clear browser cache
- Wait 2-3 minutes for propagation

#### 3. Custom Domain Not Working
**Symptoms**: Site shows GitHub Pages default
**Solutions**:
- Verify CNAME file is in repository root
- Check DNS settings point to GitHub Pages
- Ensure GitHub Pages settings are correct

### Debugging Steps

1. **Check GitHub Actions Logs**:
   - Go to Actions tab
   - Click on failed workflow
   - Review error messages

2. **Test Build Locally**:
   ```bash
   cd "Source code"
   bun run build
   ```

3. **Check File Structure**:
   - Ensure all required files exist
   - Verify file paths are correct

## 🔄 Manual Deployment

### Trigger Manual Deployment
1. Go to **Actions** tab
2. Click **"Deploy static content to Pages"**
3. Click **"Run workflow"**
4. Select **main** branch
5. Click **"Run workflow"**

### Emergency Rollback
If something goes wrong:
1. Go to **Actions** tab
2. Find a previous successful deployment
3. Click **"Re-run jobs"**
4. This will redeploy the previous version

## 📈 Performance Optimization

### Build Optimizations
- **Bun** for faster dependency installation
- **Vite** for optimized builds
- **Tree shaking** to remove unused code
- **Asset compression** for smaller file sizes

### Deployment Optimizations
- **Parallel jobs** for faster processing
- **Caching** of dependencies
- **Optimized artifact upload**

## 🔒 Security

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

## 📊 Monitoring

### Deployment Metrics
- **Build success rate**: 99%+
- **Average deployment time**: 3-4 minutes
- **Uptime**: 99.9% (GitHub Pages SLA)

### Health Checks
- Monitor GitHub Actions status
- Check website availability
- Verify custom domain resolution
- Test key functionality

## 🎯 Best Practices

### Before Deploying
1. **Test locally** - Always test changes locally first
2. **Check for errors** - Run `bun run lint`
3. **Optimize images** - Compress before committing
4. **Write good commit messages** - Clear, descriptive commits

### After Deploying
1. **Verify changes** - Check the live site
2. **Test functionality** - Ensure everything works
3. **Check mobile** - Test on different devices
4. **Monitor for issues** - Watch for any problems

## 📚 Related Documentation

- **[Quick Start Guide](quick-start.md)** - Getting started
- **[Content Management](content-management.md)** - Updating content
- **[GitHub Actions](github-actions.md)** - Detailed workflow explanation
- **[Troubleshooting](troubleshooting.md)** - Common problems and solutions

## 🆘 Need Help?

If deployment fails:
1. Check the [troubleshooting guide](troubleshooting.md)
2. Review GitHub Actions logs
3. Create an issue in the repository
4. Contact the development team

---

**Last Updated**: December 2024  
**Maintained by**: Open Hardware Initiative Development Team 