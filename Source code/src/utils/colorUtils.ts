
/**
 * Color utilities
 * 
 * Centralized color management for consistent use across the application.
 * Includes pastel colors for tags and badges, and helper functions for
 * color assignment.
 */

/**
 * Pastel colors for tags, badges, and other UI elements
 * These are used to create a rotating color scheme
 */
export const pastelColors = [
  "#F2FCE2", // Soft Green
  "#FEF7CD", // Soft Yellow
  "#FEC6A1", // Soft Orange
  "#E5DEFF", // Soft Purple
  "#FFDEE2", // Soft Pink
  "#FDE1D3", // Soft Peach
  "#D3E4FD", // Soft Blue
  "#F1F0FB", // Soft Gray
];

/**
 * Gets a color from the pastel colors array based on a string
 * This ensures the same string always gets the same color
 * @param str - The string to use for selecting a color (e.g., category name)
 * @returns A pastel color string in hex format
 */
export const getStringBasedColor = (str: string): string => {
  // Simple hash function to get a consistent index for a string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % pastelColors.length;
  return pastelColors[index];
};

/**
 * Gets a color based on position in an array - good for tags that appear together
 * @param index - The index to use for selecting a color
 * @returns A pastel color string in hex format
 */
export const getRotatingColor = (index: number): string => {
  return pastelColors[index % pastelColors.length];
};

/**
 * Gets a random color from the pastel colors array
 * @returns A random pastel color string in hex format
 */
export const getRandomPastelColor = (): string => {
  const randomIndex = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[randomIndex];
};

/**
 * Function to get a text color that will have good contrast with the background
 * @param backgroundColor - The background color in hex format
 * @returns Either black (#000) or dark gray (#333) depending on background lightness
 */
export const getContrastTextColor = (backgroundColor: string): string => {
  // Convert hex to RGB
  const r = parseInt(backgroundColor.slice(1, 3), 16);
  const g = parseInt(backgroundColor.slice(3, 5), 16);
  const b = parseInt(backgroundColor.slice(5, 7), 16);
  
  // Calculate perceived brightness (using a common formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Return black for light backgrounds, white for dark backgrounds
  return brightness > 155 ? '#333' : '#000';
};
