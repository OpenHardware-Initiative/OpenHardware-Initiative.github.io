
import { Project } from "@/data/projectsData";
import { getStringBasedColor, getRotatingColor } from "@/utils/colorUtils";

// Re-export functions for backward compatibility
export { getStringBasedColor as getCategoryColor, getRotatingColor };

/**
 * Gets a category color for a project based on its category name
 * This is a wrapper around getStringBasedColor for specific use with projects
 * @param project - The project to get a category color for
 * @returns A color string in hex format
 */
export const getProjectCategoryColor = (project: Project): string => {
  return getStringBasedColor(project.category);
};
