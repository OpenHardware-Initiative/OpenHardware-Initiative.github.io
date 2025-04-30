
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
 * Events data
 * All the events organized by the team
 */
export const eventsData: Event[] = [
  {
    id: "1",
    title: "ASIP Hackathon 2025",
    description: "A hackathon focused on Application-Specific Instruction Set Processors using the ASIP Designer Tool from Synopsys. Participants developed ML inference accelerators with guidance from industry experts.",
    date: "2025-03-15",
    image: "/lovable-uploads/707528b4-75fe-4127-8f4c-f8e84f77cde9.png",
    link: {
      url: "https://www.linkedin.com/events/asiphackathon2025/",
      type: "linkedin"
    },
    organizers: [
      { name: "Agustin N. Coppari Hollmann", role: "Lead Organizer" },
      { name: "Ipek Akdeniz", role: "Co-organizer" },
      { name: "Isabel Whitely Tscherniak", role: "Co-organizer" }
    ],
    supporters: [
      { name: "AI Processor Design Chair at TUM", type: "chair" },
      { name: "Synopsys", type: "company" }
    ],
    location: "Technical University of Munich",
    isArchived: true
  },
  {
    id: "2",
    title: "Munich Neuromorphic Hackathon 2024",
    description: "An immersive hackathon on neuromorphic computing technologies with collaboration from fortiss, neurobus, and IBM, featuring expert talks and hands-on challenges.",
    date: "2024-04-20",
    image: "/lovable-uploads/8740789a-c667-49ca-b58d-81a4ee08031f.png",
    link: {
      url: "https://www.instagram.com/p/munich-neuromorphic-hackathon/",
      type: "instagram"
    },
    organizers: [
      { name: "Agustin N. Coppari Hollmann", role: "Lead Organizer" },
      { name: "Ipek Akdeniz", role: "Co-organizer" },
      { name: "Alyona Starikova", role: "Co-organizer" },
      { name: "Ana Villalobos", role: "Co-organizer" }
    ],
    supporters: [
      { name: "fortiss", type: "organization" },
      { name: "neurobus", type: "organization" },
      { name: "IBM", type: "company" }
    ],
    location: "Munich, Germany",
    isArchived: true
  },
  {
    id: "3",
    title: "Neuromorphic Hackathon 2023",
    description: "Four-day hackathon focused on neuromorphic technologies, hosted in collaboration with Fortiss Neuromorphic Labs and Intel, featuring team challenges based on state-of-the-art research.",
    date: "2023-11-06",
    image: "/lovable-uploads/57267699-d192-4297-aad6-1220736103b6.png",
    link: {
      url: "https://luma.com/events/neuromorphic-hackathon-2023",
      type: "luma"
    },
    organizers: [
      { name: "Agustin N. Coppari Hollmann", role: "Lead Organizer" }
    ],
    supporters: [
      { name: "neuroTUM", type: "organization" },
      { name: "Fortiss Neuromorphic Labs", type: "organization" },
      { name: "Intel", type: "company" }
    ],
    location: "Fortiss offices, Munich",
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
