# Content Management Guide

Learn how to update and manage all content on the Open Hardware Initiative website.

## 📝 Overview

The website uses **TypeScript data files** for content management. This approach:
- ✅ **No database required** - everything is in code
- ✅ **Version controlled** - all changes are tracked in Git
- ✅ **Easy to maintain** - simple file editing
- ✅ **Type-safe** - TypeScript prevents errors

## 📁 Content Files Location

All content is managed in these files:
```
Source code/src/data/
├── peopleData.ts      # Team members
├── projectsData.ts    # Projects showcase
└── eventsData.ts      # Events and activities

Source code/src/config/
└── applicationConfig.ts  # Application form settings
```

## 👥 Team Management

### Adding a New Team Member

1. **Edit `src/data/peopleData.ts`**:
   ```typescript
   export const peopleData = [
     // ... existing members
     {
       name: "John Doe",
       role: "Team Member",
       image: "/media/team/john-doe.jpg",
       linkedin: "https://linkedin.com/in/johndoe",
       github: "https://github.com/johndoe",
       email: "john.doe@tum.de",
       description: "Hardware enthusiast with expertise in FPGA design.",
       skills: ["FPGA", "VHDL", "Digital Design"],
       year: 2024,
       semester: "SoSe"
     }
   ];
   ```

2. **Add team member photo**:
   - Save photo as `Source code/public/media/team/john-doe.jpg`
   - Use JPG format, recommended size: 400x400px
   - Keep file size under 200KB

3. **Test locally**: `bun run dev`
4. **Deploy**: Commit and push changes

### Editing Existing Team Members

1. Find the member in `src/data/peopleData.ts`
2. Update any fields:
   - `name` - Full name
   - `role` - Position/role
   - `image` - Photo path
   - `linkedin` - LinkedIn profile URL
   - `github` - GitHub profile URL
   - `email` - Email address
   - `description` - Bio/description
   - `skills` - Array of skills
   - `year` - Year joined
   - `semester` - Semester joined (WiSe/SoSe)

### Removing Team Members

1. Remove the member object from `peopleData` array
2. Optionally delete their photo from `public/media/team/`
3. Commit and push changes

## 🚀 Project Management

### Adding a New Project

1. **Edit `src/data/projectsData.ts`**:
   ```typescript
   export const projectsData = [
     // ... existing projects
     {
       title: "FPGA-Based Neural Network",
       description: "Implementation of a neural network on FPGA for real-time inference.",
       image: "/media/projects/fpga-neural-network.jpg",
       technologies: ["VHDL", "Python", "TensorFlow"],
       github: "https://github.com/ohw/fpga-neural-network",
       demo: "https://demo.example.com",
       status: "In Progress", // "Completed", "In Progress", "Planning"
       team: ["John Doe", "Jane Smith"],
       year: 2024
     }
   ];
   ```

2. **Add project image**:
   - Save as `Source code/public/media/projects/project-name.jpg`
   - Recommended size: 800x600px
   - Keep file size under 500KB

### Project Fields Explained

- `title` - Project name
- `description` - Brief project description
- `image` - Project screenshot/logo
- `technologies` - Array of technologies used
- `github` - GitHub repository URL (optional)
- `demo` - Live demo URL (optional)
- `status` - Project status
- `team` - Array of team member names
- `year` - Year project started

## 📅 Event Management

### Adding a New Event

1. **Edit `src/data/eventsData.ts`**:
   ```typescript
   export const eventsData = [
     // ... existing events
     {
       title: "Hardware Workshop",
       date: "2024-03-15",
       time: "14:00-17:00",
       location: "TUM Campus",
       description: "Learn FPGA programming basics.",
       image: "/media/events/hardware-workshop.jpg",
       registration: "https://forms.google.com/workshop",
       status: "Upcoming", // "Upcoming", "Past", "Cancelled"
       category: "Workshop" // "Workshop", "Lecture", "Competition", "Social"
     }
   ];
   ```

2. **Add event image** (optional):
   - Save as `Source code/public/media/events/event-name.jpg`
   - Recommended size: 800x400px

### Event Fields Explained

- `title` - Event name
- `date` - Date in YYYY-MM-DD format
- `time` - Time range (optional)
- `location` - Event location
- `description` - Event description
- `image` - Event banner/image
- `registration` - Registration form URL
- `status` - Event status
- `category` - Event type

## 📋 Application Management

### Managing Application Status

Edit `src/config/applicationConfig.ts`:

```typescript
export const applicationConfig = {
  isOpen: false, // Set to true to enable applications
  formUrl: "https://forms.google.com/your-form-url",
  closedMessage: "Application period is currently closed. Check back later!",
  openMessage: "We're currently accepting applications! Apply now."
};
```

### Application States

1. **Applications Open**:
   - Set `isOpen: true`
   - Update `formUrl` with your Google Form link
   - Update `openMessage` if needed

2. **Applications Closed**:
   - Set `isOpen: false`
   - Update `closedMessage` with appropriate message
   - The form URL will be ignored

### Setting Up Google Forms

1. Create a Google Form for applications
2. Copy the form URL
3. Update `formUrl` in `applicationConfig.ts`
4. Test the link works correctly

## 🖼️ Media Management

### Image Guidelines

- **Team photos**: 400x400px, JPG format
- **Project images**: 800x600px, JPG format
- **Event banners**: 800x400px, JPG format
- **File size**: Keep under 500KB for optimal loading

### File Organization

```
Source code/public/media/
├── team/           # Team member photos
├── projects/       # Project screenshots/logos
├── events/         # Event banners
├── logos/          # Organization logos
├── sponsors/       # Sponsor logos
└── alumni/         # Alumni photos
```

### Adding Images

1. Save image in appropriate folder
2. Reference in data file with `/media/folder/filename.jpg`
3. Test locally to ensure image loads
4. Commit and push changes

## 🔄 Workflow for Content Updates

### 1. Local Development
```bash
cd "Source code"
bun run dev
```

### 2. Make Changes
- Edit the appropriate data file
- Add/update images if needed
- Test changes in browser

### 3. Deploy Changes
```bash
git add .
git commit -m "Update team member: John Doe"
git push
```

### 4. Verify Deployment
- Check GitHub Actions workflow completes
- Visit [open-hardware-initiative.com](https://open-hardware-initiative.com)
- Verify changes are live

## 🎯 Best Practices

### Content Guidelines

- **Keep descriptions concise** - 1-2 sentences max
- **Use consistent formatting** - Follow existing patterns
- **Optimize images** - Compress before uploading
- **Test responsiveness** - Check on mobile devices

### Data Structure

- **Maintain consistent field names** - Don't change existing structure
- **Use arrays for multiple values** - Skills, technologies, team members
- **Keep URLs valid** - Test all links before deploying
- **Use proper date formats** - YYYY-MM-DD for events

### Version Control

- **Commit frequently** - Small, focused commits
- **Use descriptive commit messages** - "Add team member: John Doe"
- **Test before pushing** - Always test locally first
- **Review changes** - Check the live site after deployment

## 🐛 Common Issues

### Image Not Loading
- Check file path is correct
- Ensure image exists in public folder
- Verify file permissions

### Build Errors
- Check TypeScript syntax in data files
- Ensure all required fields are present
- Run `bun run lint` to find errors

### Content Not Updating
- Clear browser cache
- Check GitHub Actions workflow status
- Verify changes were pushed to main branch

## 📚 Related Documentation

- **[Quick Start Guide](quick-start.md)** - Getting started
- **[Development Guide](development.md)** - Technical setup
- **[Deployment Guide](deployment.md)** - How deployment works
