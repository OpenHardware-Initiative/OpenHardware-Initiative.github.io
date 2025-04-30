
import { Event } from "@/data/eventsData";

/**
 * Pastel colors for tags and badges
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
 * Gets a color from the pastel colors array based on an index
 * This will rotate through colors when display multiple tags
 * @param index - The index to use for selecting a color
 * @returns A pastel color string in hex format
 */
export const getRotatingColor = (index: number): string => {
  return pastelColors[index % pastelColors.length];
};

/**
 * Filters events based on search term, organizer, supporter and year
 * @param events - List of all events to filter
 * @param searchTerm - Text to search in title, description, and location
 * @param organizerFilter - Specific organizer to filter by
 * @param supporterFilter - Specific supporter to filter by
 * @param yearFilter - Specific year to filter by
 * @returns Filtered list of events
 */
export const filterEvents = (
  events: Event[],
  searchTerm: string,
  organizerFilter: string,
  supporterFilter: string,
  yearFilter: string
): Event[] => {
  let filtered = [...events];
  
  // Search filter
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      event => 
        event.title.toLowerCase().includes(term) || 
        event.description.toLowerCase().includes(term) ||
        (event.location && event.location.toLowerCase().includes(term))
    );
  }
  
  // Organizer filter
  if (organizerFilter !== "all") {
    filtered = filtered.filter(event => 
      event.organizers.some(organizer => 
        organizer.name.toLowerCase() === organizerFilter.toLowerCase()
      )
    );
  }
  
  // Supporter filter
  if (supporterFilter !== "all") {
    filtered = filtered.filter(event => 
      event.supporters.some(supporter => 
        supporter.name.toLowerCase() === supporterFilter.toLowerCase()
      )
    );
  }
  
  // Year filter
  if (yearFilter !== "all") {
    filtered = filtered.filter(event => {
      const eventYear = event.date.split('-')[0];
      return eventYear === yearFilter;
    });
  }
  
  return filtered;
};

/**
 * Extracts unique organizers from events list
 * @param events - List of events to extract organizers from
 * @returns Array of unique organizer names
 */
export const getUniqueOrganizers = (events: Event[]): string[] => {
  return Array.from(
    new Set(
      events.flatMap(event => 
        event.organizers.map(organizer => organizer.name)
      )
    )
  ).sort();
};

/**
 * Extracts unique supporters from events list
 * @param events - List of events to extract supporters from
 * @returns Array of unique supporter names
 */
export const getUniqueSupporters = (events: Event[]): string[] => {
  return Array.from(
    new Set(
      events.flatMap(event => 
        event.supporters.map(supporter => supporter.name)
      )
    )
  ).sort();
};

/**
 * Extracts unique years from events list
 * @param events - List of events to extract years from
 * @returns Array of unique years, sorted in descending order
 */
export const getUniqueYears = (events: Event[]): string[] => {
  return Array.from(
    new Set(
      events.map(event => event.date.split('-')[0])
    )
  ).sort((a, b) => Number(b) - Number(a));
};
