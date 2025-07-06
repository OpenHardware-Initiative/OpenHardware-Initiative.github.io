# Application Configuration System

This system allows you to easily control whether applications are open or closed across the entire website by changing just one setting.

## How to Use

### To Open Applications:
1. Open `src/config/applicationConfig.ts`
2. Set `googleFormUrl` to your Google Form URL:
   ```typescript
   googleFormUrl: "https://forms.google.com/your-form-id",
   ```

### To Close Applications:
1. Open `src/config/applicationConfig.ts`
2. Set `googleFormUrl` to `null` or empty string:
   ```typescript
   googleFormUrl: null,
   // or
   googleFormUrl: "",
   ```

## What Happens

- **When applications are OPEN**: All "Join Us" buttons will link to your Google Form and open in a new tab
- **When applications are CLOSED**: All "Join Us" buttons will link to the "Application Period Closed" page

## Affected Components

The following components automatically use this configuration:
- Desktop Navigation
- Mobile Navigation  
- Hero Section
- Footer
- Contact Page
- Team Member cards (for open positions)
- Project cards (for recruiting projects)

## File Location

The configuration is located at:
```
src/config/applicationConfig.ts
```

## Example Configuration

```typescript
export const APPLICATION_CONFIG = {
  // Set this to your Google Form URL when applications are open
  googleFormUrl: "https://forms.google.com/your-actual-form-id",
  
  // The system automatically detects if applications are open
  // and routes to the appropriate destination
};
```

## Benefits

- ✅ **Single source of truth** - Change one setting, affects entire site
- ✅ **Automatic routing** - No need to update multiple files
- ✅ **Professional fallback** - Shows proper "Application Closed" page when needed
- ✅ **Easy maintenance** - No need to remember all the places to update
- ✅ **Consistent behavior** - All application links behave the same way 