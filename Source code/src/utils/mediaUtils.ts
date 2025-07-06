
/**
 * Media organization utilities
 * 
 * This file defines constants and helper functions related to
 * organizing and accessing media assets across the application.
 */

/**
 * Base paths for media files by category 
 */
export const MEDIA_PATHS = {
  TEAM: "/media/team/",
  ALUMNI: "/media/alumni/",
  EVENTS: "/media/events/",
  PROJECTS: "/media/projects/",
  LOGOS: "/media/logos/",
  SPONSORS: "/media/sponsors/",
};

/**
 * Helper function to get a complete image path based on category and filename
 * @param category - Media category (team, alumni, events, projects)
 * @param filename - Image filename (with extension)
 * @returns Full path to the image file
 */
export const getImagePath = (
  category: keyof typeof MEDIA_PATHS,
  filename: string
): string => {
  // If the path already contains a full URL or starts with /
  if (filename.startsWith('https') || filename.startsWith('/')) {
    return filename;
  }
  return `${MEDIA_PATHS[category]}${filename}`;
};

/**
 * Gets a fallback image path when the original is not available
 * @param category - Media category
 * @returns Path to a placeholder image for the category
 */
export const getFallbackImageForCategory = (
  category: keyof typeof MEDIA_PATHS
): string => {
  switch (category) {
    case 'TEAM':
      return '/media/team/open-position.png';
    case 'ALUMNI':
      return '/media/alumni/placeholder.png';
    case 'EVENTS':
      return '/placeholder.svg';
    case 'PROJECTS':
      return '/placeholder.svg';
    case 'LOGOS':
      return '/media/logos/placeholder.png';
    case 'SPONSORS':
      return '/media/sponsors/placeholder.png';
    default:
      return '/placeholder.svg';
  }
};

/**
 * Helper function to generate a placeholder image URL with specified dimensions
 * @param width - Desired width in pixels
 * @param height - Desired height in pixels
 * @param text - Optional text to display on the placeholder
 * @returns Placeholder image URL
 */
export const getPlaceholderImage = (
  width: number = 400,
  height: number = 300,
  text: string = "Image"
): string => {
  return `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(text)}`;
};

/**
 * Gets a sponsor logo path with optional fallback
 * @param filename - Image filename or full path
 * @returns Full path to the sponsor logo
 */
export const getSponsorLogoPath = (filename: string): string => {
  // If the filename already contains a full path (e.g., /lovable-uploads/...)
  if (filename.startsWith("/") || filename.startsWith("https")) {
    return filename;
  }
  
  // Otherwise, use the sponsors media path
  return getImagePath("SPONSORS", filename);
};

/**
 * Creates a symbolic link in the public folder
 * Used for backward compatibility with existing image references
 * @param targetPath - Path to the target file or directory
 * @param linkPath - Path where the symlink will be created
 */
export const createSymbolicLink = (
  sourcePath: string,
  linkPath: string
): void => {
  // This function is a placeholder since we can't actually create symbolic links in the browser
  // In a real project, this would be done during build or server-side
  console.log(`Creating symbolic link from ${sourcePath} to ${linkPath}`);
  // Implementation would depend on the build system or server environment
};
