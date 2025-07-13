# Open Hardware Initiative Website

This repository contains the official website for the Open Hardware Initiative, built with React, TypeScript, and Vite.

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
├── media/                # Media assets (images, etc.)
└── README.md            # This file
```

## 🛠️ Development

For local development, see the [Source code/README.md](Source%20code/README.md) file for detailed instructions.

## 📝 Content Management

- **Team Members**: Edit `Source code/data/peopleData.ts`
- **Projects**: Edit `Source code/data/projectsData.ts`
- **Events**: Edit `Source code/data/eventsData.ts`
- **Application Status**: Edit `Source code/src/config/applicationConfig.ts`

## 🔧 Configuration

- **Custom Domain**: Configured via `Source code/CNAME`
- **Application Links**: Managed in `Source code/src/config/applicationConfig.ts`
- **Build Settings**: Configured in `Source code/vite.config.ts`

## 📞 Support

For questions or issues, please contact the development team or create an issue in this repository. 
