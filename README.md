# Open Hardware Initiative Website

This repository contains the official website for the Open Hardware Initiative, built with React, TypeScript, and Vite.

## 🚀 Quick Start

Want to get started quickly? See our **[Quick Start Guide](docs/quick-start.md)** for a 5-minute setup. (Usually enough for typical maintenance of the website)

## 🚀 Deployment

This website is automatically deployed using **GitHub Actions**. When you push changes to the `main` branch, the following happens automatically:

1. **Build**: The source code is built using Bun and Vite
2. **Deploy**: The built files are deployed to GitHub Pages
3. **Live**: The site is available at [open-hardware-initiative.com](https://open-hardware-initiative.com)

### How it works

- The GitHub Actions workflow is located in `.github/workflows/deploy.yml`
- It uses Bun for faster dependency installation and builds
- The workflow runs on every push to the `main` branch
- No manual build or deployment steps are needed

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions deployment workflow
├── Source code/           # Main source code directory
│   ├── src/              # React components and pages
│   ├── public/           # Static assets
│   ├── data/             # Content data files
│   └── ...               # Configuration files
├── docs/                 # 📚 Comprehensive documentation
└── README.md            # This file
```

## 📚 Documentation

We have comprehensive documentation to help you work with the website:

### 🚀 Getting Started
- **[Quick Start Guide](docs/quick-start.md)** - Get up and running in 5 minutes
- **[Project Overview](docs/project-overview.md)** - Understanding the website structure

### 📝 Content Management
- **[Content Management Guide](docs/content-management.md)** - How to update website content

### 🚀 Deployment & Hosting
- **[Deployment Guide](docs/deployment.md)** - How the website is deployed
- **[GitHub Actions](docs/github-actions.md)** - Understanding the automated workflow
- **[Domain Configuration](docs/domain-configuration.md)** - Custom domain setup

## 🛠️ Development

For local development, see the **[Development Guide](docs/development.md)** for detailed instructions.

## 📝 Content Management

- **Team Members**: Edit `Source code/data/peopleData.ts`
- **Projects**: Edit `Source code/data/projectsData.ts`
- **Events**: Edit `Source code/data/eventsData.ts`
- **Application Status**: Edit `Source code/src/config/applicationConfig.ts`

## 🔧 Configuration

- **Custom Domain**: Configured via `Source code/CNAME`
- **Application Links**: Managed in `Source code/src/config/applicationConfig.ts`
- **Build Settings**: Configured in `Source code/vite.config.ts`


## 🎯 Quick Links

- **Live Website**: [open-hardware-initiative.com](https://open-hardware-initiative.com)
- **GitHub Repository**: [OpenHardware-Initiative/OpenHardware-Initiative.github.io](https://github.com/OpenHardware-Initiative/OpenHardware-Initiative.github.io)
- **GitHub Actions**: [Workflow runs](https://github.com/OpenHardware-Initiative/OpenHardware-Initiative.github.io/actions)
- **Documentation**: [docs/README.md](docs/README.md)

---
**Maintained by**: Open Hardware Initiative Development Team 
