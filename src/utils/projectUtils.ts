
import { Project } from "@/data/projectsData";

/**
 * Pastel colors for project categories
 * These are used to create a rotating color scheme for tags
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
 * This ensures the same category always gets the same color
 * @param str - The string to use for selecting a color (e.g., category name)
 * @returns A pastel color string in hex format
 */
export const getCategoryColor = (str: string): string => {
  // Simple hash function to get a consistent index for a string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % pastelColors.length;
  return pastelColors[index];
};

/**
 * Gets a color based on position in an array
 * @param index - The index to use for selecting a color
 * @returns A pastel color string in hex format
 */
export const getRotatingColor = (index: number): string => {
  return pastelColors[index % pastelColors.length];
};
