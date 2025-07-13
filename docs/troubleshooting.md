# Troubleshooting Guide

Solutions to common problems when working with the Open Hardware Initiative website.

## 🚨 Common Issues

### 🔴 Build & Development Issues

#### "Bun not found" or "bun: command not found"
**Problem**: Bun is not installed on your system.

**Solution**:
```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash

# Or use npm instead
npm install
npm run dev
```

#### "Port 8080 is already in use"
**Problem**: Another process is using port 8080.

**Solutions**:
```bash
# Kill the process using port 8080
lsof -ti:8080 | xargs kill -9

# Or change the port in vite.config.ts
```

#### "Module not found" or import errors
**Problem**: Missing dependencies or incorrect imports.

**Solutions**:
```bash
# Reinstall dependencies
rm -rf node_modules bun.lockb
bun install

# Check for TypeScript errors
bun run lint
```

#### Build fails with TypeScript errors
**Problem**: TypeScript compilation errors.

**Solutions**:
1. Check the error message in the terminal
2. Fix the TypeScript error in the file
3. Run `bun run lint` to see all errors
4. Make sure all required fields are present in data files

### 🌐 Deployment Issues

#### Site shows README instead of website
**Problem**: GitHub Pages is serving from a branch instead of GitHub Actions.

**Solution**:
1. Go to repository Settings → Pages
2. Change Source from "Deploy from a branch" to "GitHub Actions"
3. Save the changes

#### Custom domain not working
**Problem**: Site shows GitHub Pages default instead of custom domain.

**Solutions**:
1. **Check CNAME file exists** in repository root
2. **Verify GitHub Pages settings**:
   - Source: GitHub Actions
   - Custom domain: open-hardware-initiative.com
   - Enforce HTTPS: checked
3. **Check DNS settings** point to GitHub Pages
4. **Wait for propagation** (can take up to 24 hours)

#### Changes not appearing on live site
**Problem**: Updates pushed but not visible on website.

**Solutions**:
1. **Check GitHub Actions** completed successfully
2. **Clear browser cache** (Ctrl+Shift+R)
3. **Wait 2-3 minutes** for deployment to complete
4. **Check in incognito mode**

#### GitHub Actions workflow fails
**Problem**: Red X in Actions tab.

**Solutions**:
1. **Click on the failed workflow** to see error details
2. **Check the logs** for specific error messages
3. **Test build locally**: `bun run build`
4. **Fix the issue** and push again

### 📝 Content Issues

#### Images not loading
**Problem**: Images show as broken or missing.

**Solutions**:
1. **Check file path** in data file is correct
2. **Verify image exists** in public folder
3. **Check file permissions**
4. **Ensure correct format** (JPG, PNG)

#### Team member not appearing
**Problem**: Added team member but not showing on site.

**Solutions**:
1. **Check TypeScript syntax** in peopleData.ts
2. **Verify all required fields** are present
3. **Check image path** is correct
4. **Test locally** before pushing

#### Application form not working
**Problem**: Application links not working or showing wrong status.

**Solutions**:
1. **Check applicationConfig.ts** settings
2. **Verify formUrl** is correct and accessible
3. **Test the Google Form link** directly
4. **Clear browser cache**

### 🎨 Styling Issues

#### Styles not updating
**Problem**: CSS changes not reflected on site.

**Solutions**:
1. **Restart development server**: `bun run dev`
2. **Clear browser cache**
3. **Check Tailwind classes** are correct
4. **Verify CSS file** is being imported

#### Mobile responsiveness issues
**Problem**: Site doesn't look good on mobile.

**Solutions**:
1. **Test in browser dev tools** mobile view
2. **Check responsive classes** (sm:, md:, lg:)
3. **Verify viewport meta tag** in index.html
4. **Test on actual mobile device**

## 🔧 Debugging Steps

### 1. Check Local Development
```bash
cd "Source code"
bun run dev
```
- Look for error messages in terminal
- Check browser console for JavaScript errors
- Verify all pages load correctly

### 2. Test Production Build
```bash
bun run build
bun run preview
```
- Check if build completes without errors
- Verify preview shows correct content
- Test all functionality

### 3. Check GitHub Actions Logs
1. Go to Actions tab in repository
2. Click on latest workflow run
3. Review each step for errors
4. Check the deploy step output

### 4. Verify File Structure
```bash
# Check if all required files exist
ls -la "Source code/src/data/"
ls -la "Source code/public/media/"
```

## 🆘 Getting Help

### Before Asking for Help
1. **Check this troubleshooting guide**
2. **Search existing issues** in the repository
3. **Test the problem locally**
4. **Gather error messages** and logs

### When Creating an Issue
Include:
- **What you were trying to do**
- **What happened instead**
- **Error messages** (copy/paste)
- **Steps to reproduce**
- **Your environment** (OS, browser, etc.)

### Contact Information
- **GitHub Issues**: Create an issue in the repository
- **Development Team**: Contact via email or Slack
- **Documentation**: Check the [main docs](README.md)

## 🔄 Common Fixes

### Reset Everything
```bash
# Clean install
rm -rf node_modules bun.lockb
bun install

# Clear cache
bun run dev --force
```

### Force Rebuild
```bash
# Remove build artifacts
rm -rf dist

# Rebuild
bun run build
```

### Reset Git
```bash
# Reset to last working commit
git reset --hard HEAD~1

# Or pull latest changes
git pull origin main
```

## 📊 Health Checklist

Before pushing changes:
- [ ] **Local development works** (`bun run dev`)
- [ ] **Build succeeds** (`bun run build`)
- [ ] **No TypeScript errors** (`bun run lint`)
- [ ] **Images load correctly**
- [ ] **Mobile responsive**
- [ ] **All links work**
- [ ] **Application form works**

After deployment:
- [ ] **GitHub Actions completed** successfully
- [ ] **Live site loads** correctly
- [ ] **Custom domain works**
- [ ] **All functionality tested**
- [ ] **Mobile version works**

## 📚 Related Documentation

- **[Quick Start Guide](quick-start.md)** - Getting started
- **[Content Management](content-management.md)** - Updating content
- **[Deployment Guide](deployment.md)** - How deployment works
- **[Development Guide](development.md)** - Technical setup

---

**Last Updated**: December 2024  
**Maintained by**: Open Hardware Initiative Development Team 