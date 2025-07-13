# Quick Start Guide

Get the Open Hardware Initiative website up and running on your local machine in minutes.

## 🚀 Prerequisites

Before you start, make sure you have:

- **Git** - [Download here](https://git-scm.com/)
- **Bun** (recommended) - [Download here](https://bun.sh/)  
  - *Alternative: Node.js 18+* - [Download here](https://nodejs.org/)
- **A code editor** - VS Code, Sublime Text, etc.

## ⚡ Quick Setup (5 minutes)

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

### 4. Open Your Browser
Navigate to: **http://localhost:8080**

You should see the Open Hardware Initiative website running locally! 🎉

## 🔄 Making Changes

### Content Updates
- **Team members**: Edit `src/data/peopleData.ts`
- **Projects**: Edit `src/data/projectsData.ts`
- **Events**: Edit `src/data/eventsData.ts`
- **Application status**: Edit `src/config/applicationConfig.ts`

### Code Changes
- **Components**: Edit files in `src/components/`
- **Pages**: Edit files in `src/pages/`
- **Styling**: Edit files in `src/` or use Tailwind classes

### Testing Changes
1. Save your file
2. The development server will automatically reload
3. Check your changes in the browser
4. Test on different screen sizes (mobile, tablet, desktop)

## 🚀 Deploying Changes

### Automatic Deployment (Recommended)
1. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Your change description"
   git push
   ```
2. **GitHub Actions** automatically builds and deploys
3. **Site goes live** at [open-hardware-initiative.com](https://open-hardware-initiative.com)

### Manual Build (Optional)
```bash
bun run build    # Build for production
bun run preview  # Preview production build
```

## 📁 Project Structure

```
OpenHardware-Initiative.github.io/
├── Source code/              # Main source code
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── data/           # Content data
│   │   └── config/         # Configuration
│   ├── public/             # Static assets
│   └── package.json        # Dependencies
├── docs/                   # Documentation
├── .github/workflows/      # GitHub Actions
└── README.md              # Main README
```

## 🎯 Common Tasks

### Adding a Team Member
1. Edit `src/data/peopleData.ts`
2. Add new member object
3. Add photo to `public/media/team/`
4. Save and test locally
5. Push to deploy

### Updating Application Status
1. Edit `src/config/applicationConfig.ts`
2. Change `isOpen` to `true`/`false`
3. Update `formUrl` if needed
4. Save and push

### Changing Colors/Styling
1. Edit `tailwind.config.ts` for theme colors
2. Use Tailwind classes in components
3. Edit `src/index.css` for global styles

## 🐛 Troubleshooting

### "Port already in use"
- Change port in `vite.config.ts`
- Or kill the process using port 8080

### "Bun not found"
- Install Bun: `curl -fsSL https://bun.sh/install | bash`
- Or use npm: `npm install` and `npm run dev`

### "Build errors"
- Check TypeScript errors: `bun run lint`
- Make sure all imports are correct
- Check for missing dependencies

## 📚 Next Steps

- Read the **[Development Guide](development.md)** for detailed setup
- Check **[Content Management](content-management.md)** for editing content
- Review **[Deployment Guide](deployment.md)** for deployment details
- Explore **[Component Guide](components.md)** for code structure

## 🆘 Need Help?

- Check the [troubleshooting guide](troubleshooting.md)
- Create an issue in the GitHub repository
- Contact the development team

---

**Time to complete**: ~5 minutes  
**Difficulty**: Beginner-friendly 