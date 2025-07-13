# Open Hardware Initiative Website - Source Code

This directory contains the source code for the Open Hardware Initiative website, built with React, TypeScript, and Vite.

## 🚀 Quick Start

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

### Adding/Editing Team Members
Edit `src/data/peopleData.ts`:
```typescript
export const peopleData = [
  {
    name: "John Doe",
    role: "Team Member",
    image: "/media/team/john-doe.jpg",
    // ... other fields
  }
];
```

### Adding/Editing Projects
Edit `src/data/projectsData.ts`:
```typescript
export const projectsData = [
  {
    title: "Project Name",
    description: "Project description",
    image: "/media/projects/project.jpg",
    // ... other fields
  }
];
```

### Adding/Editing Events
Edit `src/data/eventsData.ts`:
```typescript
export const eventsData = [
  {
    title: "Event Name",
    date: "2024-01-15",
    description: "Event description",
    // ... other fields
  }
];
```

### Managing Application Status
Edit `src/config/applicationConfig.ts`:
```typescript
export const applicationConfig = {
  isOpen: false, // Set to true to enable applications
  formUrl: "https://forms.google.com/your-form", // Google Form URL
  closedMessage: "Application period is currently closed."
};
```

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

### Common Issues

1. **Port already in use**: Change the port in `vite.config.ts`
2. **Build errors**: Check TypeScript errors with `bun run lint`
3. **Missing dependencies**: Run `bun install`

### Getting Help

- Check the [main README.md](../README.md) for repository overview
- Create an issue in the repository for bugs
- Contact the development team for questions
