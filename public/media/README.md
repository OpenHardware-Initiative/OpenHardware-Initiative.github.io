
# Media Organization Strategy

This folder contains all media assets used throughout the application, organized by category.

## Folder Structure

```
public/media/
├── team/         # Current team member images
├── alumni/       # Alumni member images
├── events/       # Event-related images
├── projects/     # Project-related images
├── logos/        # Organization and partner logos
```

## Best Practices

1. **File Naming Convention**:
   - Use lowercase with hyphens for spaces (`team-member-name.jpg`)
   - Be descriptive but concise
   - Include person's name for team/alumni images

2. **Image Optimization**:
   - Compress all images before adding to the repository
   - Keep file sizes under 200KB when possible
   - Use JPEG for photos, PNG for graphics with transparency, WebP where supported

3. **Dimensions**:
   - Team/Alumni photos: 800x800px (1:1 aspect ratio)
   - Event images: 1200x800px (3:2 aspect ratio)
   - Project images: 1200x800px (3:2 aspect ratio)
   - Logos: variable, but maintain consistent height

4. **Adding New Images**:
   - Place in the appropriate subdirectory
   - Update the relevant data file with the correct path
   - Reference using the `getImagePath` utility function

## Accessing Images

Use the `getImagePath` utility function from `src/utils/mediaUtils.ts` to construct image paths:

```typescript
import { getImagePath, MEDIA_PATHS } from "@/utils/mediaUtils";

// Example usage
const teamMemberImage = getImagePath(MEDIA_PATHS.TEAM, "john-doe.jpg");
```

This ensures consistency and makes it easier to move media files if needed in the future.
