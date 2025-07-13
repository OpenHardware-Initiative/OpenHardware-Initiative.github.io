# Project Overview

This document provides a high-level overview of the Open Hardware Initiative website project.

## Purpose
The Open Hardware Initiative website serves as the official online presence for a student-led group at TUM focused on hardware acceleration, chip design, and smart manufacturing systems.

## Target Audience
- **Students** - Current and prospective team members
- **Industry Partners** - Potential collaborators and sponsors
- **Academic Community** - Researchers and educators
- **General Public** - Anyone interested in hardware innovation

## Website Structure

### Main Sections
- **Home** - Landing page with hero section and key highlights
- **Team** - Current team members and alumni
- **Projects** - Showcase of ongoing and completed projects
- **Events** - Upcoming and past events/workshops
- **Application** - Join the team (form or closed status)
- **Contact** - Get in touch with the team

### Key Features
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Content Management** - Easy updates via TypeScript data files
- **Application System** - Toggle between open/closed application periods
- **Custom Domain** - Professional branding with open-hardware-initiative.com

## Technology Approach
- **Static Site** - Fast loading, SEO-friendly
- **No Database** - Content managed through code files
- **GitHub Pages** - Free hosting with automatic deployment
- **TypeScript** - Type-safe content management

## Content Management
- **Team Data** - `src/data/peopleData.ts`
- **Project Data** - `src/data/projectsData.ts`
- **Event Data** - `src/data/eventsData.ts`
- **Application Config** - `src/config/applicationConfig.ts`

## Development Workflow
1. **Local Development** - `bun run dev` for testing
2. **Content Updates** - Edit TypeScript data files
3. **Automatic Deployment** - Push to main branch triggers GitHub Actions
4. **Live Updates** - Changes appear on website in 2-3 minutes

---

**Last Updated**: December 2024  
**Maintained by**: Open Hardware Initiative Development Team 