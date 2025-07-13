# Development Guide

This guide explains how to set up and work on the Open Hardware Initiative website as a developer.

## Prerequisites

### Required Software
- **Git** - [Download here](https://git-scm.com/)
- **Bun** (recommended) - [Download here](https://bun.sh/)
- **Node.js 18+** (alternative) - [Download here](https://nodejs.org/)
- **Code Editor** - VS Code, Sublime Text, etc.

### Recommended Extensions (VS Code)
- **TypeScript and JavaScript Language Features**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier**
- **GitHub Copilot** - AI coding assistant (highly recommended!)

## Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/OpenHardware-Initiative/OpenHardware-Initiative.github.io.git
cd OpenHardware-Initiative.github.io
```

### 2. Install Dependencies
```bash
cd "Source code"
bun install
```

### 3. Start Development Server
```bash
bun run dev
```

The site will be available at **http://localhost:8080**

## Development Workflow

### Making Changes
1. **Create a feature branch** (optional for small changes)
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the code
3. **Test locally** - Check the browser for your changes
4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add feature: brief description"
   ```

5. **Push to main branch**
   ```bash
   git push origin main
   ```

### Code Quality
- **Lint your code**: `bun run lint`
- **Check TypeScript errors** in your editor
- **Test on different screen sizes** (mobile, tablet, desktop)

## Development Tips

### Using GitHub Copilot
GitHub Copilot is excellent for this project! It can help with:
- **Component generation** - "Create a React component for a team member card"
- **Tailwind classes** - "Add responsive grid layout with 3 columns on desktop"
- **TypeScript interfaces** - "Create interface for project data"
- **Common patterns** - "Add conditional rendering for loading state"

**Pro tip**: Be specific in your prompts for better results!

### Hot Reload
- Save any file to see changes immediately
- Browser automatically refreshes
- No need to restart the dev server

### Debugging
- **Browser DevTools** - Check console for errors
- **React DevTools** - Inspect component state
- **Network tab** - Check for failed requests
- **Vite error overlay** - Shows build errors in browser

### Common Commands
```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run preview      # Preview production build
bun run lint         # Check code quality
```

## File Structure for Development

### Key Directories
```
src/
├── components/       # React components
├── pages/           # Page components
├── data/            # Content data (edit these!)
├── config/          # Configuration files
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
└── lib/             # Third-party library configs
```

### Where to Make Changes
- **Content**: `src/data/` files
- **Components**: `src/components/`
- **Pages**: `src/pages/`
- **Styling**: Tailwind classes in components
- **Configuration**: `src/config/` files

## Best Practices

### Code Style
- **Use TypeScript** for all new code
- **Follow existing patterns** in the codebase
- **Use meaningful variable names**
- **Add comments** for complex logic

### Git Workflow
- **Small, focused commits** - One change per commit
- **Descriptive commit messages** - "Add team member: John Doe"
- **Test before pushing** - Always test locally first

### Performance
- **Optimize images** before adding to public/
- **Use lazy loading** for heavy components
- **Check bundle size** with `bun run build`

## Deployment

### Automatic Deployment
- **Push to main** → GitHub Actions builds and deploys
- **No manual steps** required
- **Site updates** in 2-3 minutes

### Manual Build (if needed)
```bash
bun run build
bun run preview
```

---

**Pro Tip**: GitHub Copilot is incredibly helpful for this React/TypeScript/Tailwind stack. It understands the project structure and can generate code that follows existing patterns!
