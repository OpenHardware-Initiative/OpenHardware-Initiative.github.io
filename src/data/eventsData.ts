
/**
 * Event data module
 * Contains types, data, and utility functions for events
 */

/**
 * Defines a supporter for an event
 * Can be a chair, company, or organization
 */
export interface EventSupporters {
  name: string;
  type: "chair" | "company" | "organization";
  logo?: string; // Optional logo URL
}

/**
 * Defines an organizer for an event
 * Can include optional role information
 */
export interface EventOrganizer {
  name: string;
  role?: string; // Optional role information
}

/**
 * Main event interface
 * Contains all information about an event
 */
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // Format: YYYY-MM-DD
  image: string;
  link: {
    url: string;
    type: "instagram" | "signup" | "linkedin" | "luma" | "other";
  };
  organizers: EventOrganizer[];
  supporters: EventSupporters[];
  location?: string; // Optional location
  isArchived: boolean; // True for past events that should be shown
}

/**
 * Mock events data
 * In a real application, this would likely come from an API or database
 */
export const eventsData: Event[] = [
  {
    id: "1",
    title: "Open Hardware Summit 2023",
    description: "Annual gathering of hardware enthusiasts and industry professionals discussing open-source hardware innovations.",
    date: "2023-10-15",
    image: "/placeholder.svg",
    link: {
      url: "https://www.linkedin.com/events/openhardwaresummit2023/",
      type: "linkedin"
    },
    organizers: [
      { name: "Emily Chen", role: "Lead Organizer" },
      { name: "Michael Rodriguez", role: "Operations Manager" }
    ],
    supporters: [
      { name: "TUM EDA Chair", type: "chair" },
      { name: "OpenResearch e.V.", type: "organization" },
      { name: "TechCorp", type: "company" }
    ],
    location: "Munich, Germany",
    isArchived: true
  },
  {
    id: "2",
    title: "Hardware Acceleration Workshop",
    description: "Hands-on workshop on implementing machine learning models on FPGAs and ASICs.",
    date: "2023-07-22",
    image: "/placeholder.svg",
    link: {
      url: "https://www.instagram.com/p/abcdefg/",
      type: "instagram"
    },
    organizers: [
      { name: "Sarah Kim", role: "Workshop Lead" },
      { name: "David Wang", role: "Communications" }
    ],
    supporters: [
      { name: "neuroTUM", type: "organization" },
      { name: "TUM Chair for Integrated Systems", type: "chair" }
    ],
    location: "Technical University of Munich",
    isArchived: true
  },
  {
    id: "3",
    title: "Open Source Chip Design Meetup",
    description: "Community meetup to discuss open-source chip design tools and methodologies.",
    date: "2023-04-10",
    image: "/placeholder.svg",
    link: {
      url: "https://luma.com/events/example",
      type: "luma"
    },
    organizers: [
      { name: "Lisa Müller", role: "Event Coordinator" }
    ],
    supporters: [
      { name: "Silicon Catalyst", type: "company" },
      { name: "OpenCores", type: "organization" }
    ],
    location: "Virtual Event",
    isArchived: true
  }
];

/**
 * Returns all past events sorted by date (newest first)
 * @returns Array of past events
 */
export const getPastEvents = () => {
  return eventsData.filter(event => event.isArchived).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

/**
 * Finds an event by its ID
 * @param id - The ID of the event to find
 * @returns The event with the matching ID or undefined if not found
 */
export const getEventById = (id: string): Event | undefined => {
  return eventsData.find(event => event.id === id);
};
