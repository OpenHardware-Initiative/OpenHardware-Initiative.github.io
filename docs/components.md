# Component Guide

This guide explains the structure and usage of React components in the Open Hardware Initiative website.

## Component Structure

### Directory Organization
```
src/components/
├── ui/                    # Reusable UI components (shadcn/ui)
│   ├── button.tsx        # Button component
│   ├── card.tsx          # Card component
│   ├── dialog.tsx        # Modal dialogs
│   └── ...               # Other UI primitives
├── HeroSection.tsx       # Landing page hero
├── Navbar.tsx            # Navigation bar
├── Footer.tsx            # Site footer
├── TeamSection.tsx       # Team display
├── ProjectCard.tsx       # Individual project card
├── EventCard.tsx         # Individual event card
└── ...                   # Other page-specific components
```

### Component Types
- **UI Components** (`ui/`) - Reusable, generic components (buttons, cards, etc.)
- **Page Components** (`pages/`) - Full page layouts
- **Section Components** - Major page sections (hero, team, projects)
- **Card Components** - Individual item displays (team member, project, event)

## Key Components

### Navigation
- **Navbar** - Main navigation with mobile menu
- **DesktopNavigation** - Desktop navigation bar
- **MobileNavigation** - Mobile hamburger menu

### Content Sections
- **HeroSection** - Landing page hero with call-to-action
- **TeamSection** - Team member grid display
- **ProjectCard** - Individual project showcase
- **EventCard** - Individual event display
- **SponsorSection** - Sponsor logos and information

### UI Elements
- **Button** - Primary, secondary, and ghost button variants
- **Card** - Content containers with headers and bodies
- **Dialog** - Modal popups for forms and confirmations
- **Badge** - Status indicators and tags

## Component Patterns

### Props Interface
```typescript
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}
```

### Styling with Tailwind
```typescript
// Use Tailwind classes for styling
<div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
  <p className="text-gray-600">{description}</p>
</div>
```

### Responsive Design
```typescript
// Mobile-first responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content adapts to screen size */}
</div>
```

## Best Practices

### Component Design
- **Single Responsibility** - Each component has one clear purpose
- **Reusability** - UI components should be generic and reusable
- **Props Interface** - Always define TypeScript interfaces for props
- **Default Props** - Provide sensible defaults where appropriate

### Styling Guidelines
- **Tailwind First** - Use Tailwind classes for most styling
- **Component Variants** - Use class-variance-authority for component variants
- **Consistent Spacing** - Follow Tailwind spacing scale
- **Accessibility** - Include proper ARIA labels and semantic HTML

### Performance
- **Memoization** - Use React.memo for expensive components
- **Lazy Loading** - Lazy load components that aren't immediately visible
- **Image Optimization** - Use proper image formats and sizes

## Common Patterns

### Conditional Rendering
```typescript
{isOpen && <ApplicationForm />}
{status === 'loading' ? <Spinner /> : <Content />}
```

### List Rendering
```typescript
{teamMembers.map((member) => (
  <TeamMemberCard key={member.id} member={member} />
))}
```

### Event Handling
```typescript
const handleClick = (event: React.MouseEvent) => {
  event.preventDefault();
  // Handle click logic
};
```

## Adding New Components

### 1. Create Component File
```typescript
// src/components/NewComponent.tsx
import React from 'react';

interface NewComponentProps {
  title: string;
  // Add other props
}

export const NewComponent: React.FC<NewComponentProps> = ({ title }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};
```

### 2. Export from Index (if needed)
```typescript
// src/components/index.ts
export { NewComponent } from './NewComponent';
```

### 3. Import and Use
```typescript
import { NewComponent } from '@/components/NewComponent';
```

---

**Last Updated**: December 2024  
**Maintained by**: Open Hardware Initiative Development Team 