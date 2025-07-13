# SEO & Performance

This guide explains how to optimize the Open Hardware Initiative website for search engines and fast loading.

## SEO (Search Engine Optimization)

### Meta Tags
The website includes essential meta tags in `index.html`:
```html
<title>Open Hardware Initiative - TUM</title>
<meta name="description" content="Student-led group at TUM focused on hardware acceleration, chip design, and smart manufacturing systems.">
<meta name="keywords" content="hardware, FPGA, chip design, TUM, student group">
<meta name="author" content="Open Hardware Initiative">
<meta name="robots" content="index, follow">
```

### Open Graph Tags
Social media sharing optimization:
```html
<meta property="og:title" content="Open Hardware Initiative">
<meta property="og:description" content="Hardware acceleration and chip design at TUM">
<meta property="og:image" content="/media/logos/ohw-logo.png">
<meta property="og:url" content="https://open-hardware-initiative.com">
```

### Semantic HTML
- **Proper heading hierarchy** (h1, h2, h3, etc.)
- **Semantic elements** (nav, main, section, article, footer)
- **Alt text** for all images
- **Descriptive link text** (avoid "click here")

### robots.txt
Located at `public/robots.txt`:
```txt
User-agent: *
Allow: /
Sitemap: https://open-hardware-initiative.com/sitemap.xml
```

## Performance Optimization

### Build Optimizations
- **Vite bundling** - Fast builds with tree shaking
- **Code splitting** - Automatic chunk splitting
- **Asset compression** - Gzip compression for all assets
- **Minification** - CSS and JavaScript minified

### Image Optimization
- **WebP format** - Modern, efficient image format
- **Responsive images** - Different sizes for different screens
- **Lazy loading** - Images load as needed
- **Optimized file sizes** - Compressed before deployment

### Loading Performance
- **Critical CSS** - Above-the-fold styles inlined
- **Non-blocking JavaScript** - Scripts load asynchronously
- **Font optimization** - System fonts preferred
- **Caching headers** - Static assets cached aggressively

## Core Web Vitals

### Largest Contentful Paint (LCP)
**Target**: < 2.5 seconds
- Optimize hero images
- Use efficient image formats
- Minimize render-blocking resources

### First Input Delay (FID)
**Target**: < 100 milliseconds
- Minimize JavaScript execution
- Use code splitting
- Optimize bundle size

### Cumulative Layout Shift (CLS)
**Target**: < 0.1
- Set image dimensions
- Reserve space for dynamic content
- Avoid layout shifts during loading

## Performance Monitoring

### Tools to Use
- **Google PageSpeed Insights** - Overall performance score
- **Lighthouse** - Detailed performance audit
- **WebPageTest** - Real-world performance testing
- **Chrome DevTools** - Performance profiling

### Key Metrics to Track
- **Page load time** - Total time to load
- **Time to First Byte (TTFB)** - Server response time
- **Bundle size** - JavaScript and CSS size
- **Image sizes** - Total image payload

## SEO Best Practices

### Content Structure
- **Clear page titles** - Descriptive and keyword-rich
- **Meta descriptions** - Compelling summaries (150-160 characters)
- **Heading structure** - Logical hierarchy (H1 → H2 → H3)
- **Internal linking** - Connect related pages

### Technical SEO
- **Mobile-friendly** - Responsive design
- **Fast loading** - Optimize for speed
- **HTTPS** - Secure connection
- **Clean URLs** - Descriptive, readable URLs

### Local SEO
- **TUM location** - Mention university affiliation
- **Contact information** - Clear contact details
- **Local keywords** - Munich, TUM, Germany

## Performance Checklist

### Before Deployment
- [ ] **Images optimized** - Compressed and proper format
- [ ] **Bundle size checked** - Under 500KB total
- [ ] **Meta tags complete** - Title, description, Open Graph
- [ ] **Alt text added** - All images have descriptions
- [ ] **Mobile tested** - Responsive on all devices

### After Deployment
- [ ] **PageSpeed score** - Above 90
- [ ] **Core Web Vitals** - All metrics in green
- [ ] **Search console** - No errors reported
- [ ] **Social sharing** - Open Graph tags working
- [ ] **Analytics tracking** - Google Analytics installed

## Common Issues

### Performance Problems
- **Large images** - Compress and use WebP
- **Unused CSS/JS** - Remove dead code
- **Render-blocking resources** - Load non-critical resources async
- **No caching** - Set proper cache headers

### SEO Problems
- **Missing meta tags** - Add title and description
- **Poor heading structure** - Fix heading hierarchy
- **No alt text** - Add descriptions to images
- **Slow loading** - Optimize performance

## Tools & Resources

### Performance Testing
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)

### Image Optimization
- [TinyPNG](https://tinypng.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [WebP Converter](https://convertio.co/webp-converter/) - Convert to WebP

---

**Last Updated**: December 2024  
**Maintained by**: Open Hardware Initiative Development Team 