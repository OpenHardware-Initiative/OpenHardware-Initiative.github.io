# Cloudflare Pages Deployment Guide

This guide will help you deploy the OpenHardware website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Your repository pushed to GitHub/GitLab/Bitbucket
3. Node.js 18+ for local development

## Deployment Options

### Option 1: GitHub Integration (Recommended)

1. **Connect Repository**:

   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
   - Click "Create a project" → "Connect to Git"
   - Select your repository

2. **Build Configuration**:

   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: (leave empty)
   Node.js version: 18 or later
   ```

3. **Environment Variables** (if needed):
   ```
   NODE_VERSION=18
   NPM_FLAGS=--production=false
   ```

### Option 2: Wrangler CLI

1. **Install Wrangler**:

   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:

   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   npm run build
   wrangler pages deploy dist --project-name openhardware-website
   ```

### Option 3: Direct Upload

1. Build the project:

   ```bash
   npm run build
   ```

2. Go to Cloudflare Pages Dashboard
3. Click "Create a project" → "Direct Upload"
4. Upload the `dist` folder

## Build Optimization Features

✅ **Chunk Splitting**: Optimized for better caching

- Vendor chunks (React, React DOM)
- Router chunk (React Router)
- UI library chunk (Radix UI components)
- Query chunk (TanStack Query)
- Utils chunk (date-fns, lucide-react, etc.)

✅ **Security Headers**: Configured in `_headers`

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

✅ **Caching Strategy**: Optimized cache headers

- Static assets: 1 year cache
- Media files: 1 month cache
- HTML files: No cache (always fresh)

✅ **Client-Side Routing**: Configured in `_redirects`

- All routes redirect to index.html for SPA functionality

## Performance Optimizations

- **CSS**: 70.54 kB (12.31 kB gzipped)
- **JavaScript**: Split into optimized chunks
- **Total bundle size**: ~470 kB (140 kB gzipped)
- **Images**: Properly organized in `/media` directories

## Custom Domain Setup

After deployment, you can add a custom domain:

1. Go to your Pages project → Custom domains
2. Add your domain (e.g., `openhardware.yourdomain.com`)
3. Update DNS records as instructed
4. SSL certificate will be automatically provisioned

## Environment Variables

If you need environment variables for production:

1. Go to your Pages project → Settings → Environment variables
2. Add variables for production environment
3. Redeploy if needed

## Monitoring and Analytics

Consider enabling:

- **Cloudflare Analytics** for traffic insights
- **Web Analytics** for user behavior
- **Core Web Vitals** monitoring

## File Structure

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-*.css        # Compiled CSS
│   ├── vendor-*.js        # React vendor chunk
│   ├── router-*.js        # React Router chunk
│   ├── ui-*.js           # UI components chunk
│   ├── query-*.js        # TanStack Query chunk
│   ├── utils-*.js        # Utility libraries chunk
│   └── index-*.js        # Main application chunk
├── media/                 # Static media assets
├── _redirects            # Client-side routing config
└── _headers              # Security and cache headers
```

## Troubleshooting

- **Build fails**: Check Node.js version (use 18+)
- **Routes not working**: Verify `_redirects` file is deployed
- **Slow loading**: Check if chunks are loading properly
- **Security warnings**: Verify `_headers` file is applied

## Next Steps

1. Deploy to Cloudflare Pages
2. Set up custom domain
3. Configure analytics
4. Set up monitoring
5. Consider adding a CDN for media assets
