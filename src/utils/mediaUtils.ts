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
  return `${MEDIA_PATHS[category]}${filename}`;
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
  if (filename.startsWith("/")) {
    return filename;
  }
  
  // Otherwise, use the sponsors media path
  return getImagePath("SPONSORS", filename);
};
