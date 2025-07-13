# Open Hardware Initiative Website - Source Code

This directory contains the source code for the Open Hardware Initiative website, built with React, TypeScript, and Vite.

## 🚀 Quick Start

For a complete setup guide, see the **[Quick Start Guide](../docs/quick-start.md)**.

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Development
```bash
# Install dependencies
bun install

# Start development server
bun run dev

# The site will be available at http://localhost:8080
```

### Building Locally
```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

## 🚀 Deployment

**No manual deployment needed!** This project uses GitHub Actions for automatic deployment:

1. **Push to main branch** → Automatic build and deploy
2. **Site goes live** at [open-hardware-initiative.com](https://open-hardware-initiative.com)

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles:
- Installing dependencies with Bun
- Building the project
- Deploying to GitHub Pages

For detailed deployment information, see the **[Deployment Guide](../docs/deployment.md)**.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   └── ...             # Page-specific components
├── pages/              # Page components
├── data/               # Content data files
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── utils/              # Helper functions
└── config/             # Configuration files

public/                 # Static assets
├── media/              # Images and media files
├── lovable-uploads/    # Uploaded content
└── ...                 # Other static files

data/                   # Content data (TypeScript files)
├── peopleData.ts       # Team member information
├── projectsData.ts     # Project showcase data
└── eventsData.ts       # Events and activities
```

## 📝 Content Management

For detailed content management instructions, see the **[Content Management Guide](../docs/content-management.md)**.

### Quick Reference

**Team Members**: Edit `src/data/peopleData.ts`
**Projects**: Edit `src/data/projectsData.ts`
**Events**: Edit `src/data/eventsData.ts`
**Application Status**: Edit `src/config/applicationConfig.ts`

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Package Manager**: Bun (faster than npm)
- **Routing**: React Router DOM
- **Deployment**: GitHub Actions + GitHub Pages

## 🔧 Configuration Files

- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `CNAME` - Custom domain configuration

## 📦 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components for consistent design. All components are in `src/components/ui/`.

## 📱 Responsive Design

The website is fully responsive and mobile-friendly. All components are designed to work on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔍 SEO & Performance

- Optimized for search engines
- Fast loading with Vite
- Proper meta tags and structured data
- Responsive images and lazy loading

## 🐛 Troubleshooting

For common issues and solutions, see the **[Troubleshooting Guide](../docs/troubleshooting.md)**.

### Common Issues

1. **Port already in use**: Change the port in `vite.config.ts`
2. **Build errors**: Check TypeScript errors with `bun run lint`
3. **Missing dependencies**: Run `bun install`

### Getting Help

- Check the **[Documentation Index](../docs/README.md)** for comprehensive guides
- Create an issue in the repository for bugs
- Contact the development team for questions

## 📚 Documentation

For complete documentation, see the **[docs/](../docs/README.md)** directory:

- **[Quick Start Guide](../docs/quick-start.md)** - Getting started
- **[Content Management](../docs/content-management.md)** - Updating content
- **[Deployment Guide](../docs/deployment.md)** - How deployment works
- **[Troubleshooting](../docs/troubleshooting.md)** - Common problems and solutions

---

**Last Updated**: December 2024  
**Maintained by**: Open Hardware Initiative Development Team
