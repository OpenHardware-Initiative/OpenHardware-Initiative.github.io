
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
  image?: string;
  link?: {
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
    title: "ASIP Hackathon 2024",
    description: "A hackathon focused on Application-Specific Instruction Set Processors using the ASIP Designer Tool from Synopsys. Participants developed ML inference accelerators with guidance from industry experts.",
    date: "2024-05-25",
    image: "/media/events/Asip_2024.png",
    link: {
      url: "https://www.instagram.com/p/C4N15fFoJYI/?img_index=1",
      type: "instagram"
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
    location: "TUM",
    isArchived: true
  },
  {
    id: "2",
    title: "Neuromorphic Hackathon 2024",
    description: "An immersive hackathon on neuromorphic computing technologies with collaboration from fortiss, neurobus, and IBM, featuring expert talks and hands-on challenges.",
    date: "2024-04-20",
    image: "/media/events/fortiss_2024.png",
    link: {
      url: "https://www.linkedin.com/posts/fortiss_%F0%9D%97%AA%F0%9D%97%BF%F0%9D%97%AE%F0%9D%97%BD%F0%9D%97%BD%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B4-%F0%9D%97%A8%F0%9D%97%BD-%F0%9D%98%81%F0%9D%97%B5%F0%9D%97%B2-%F0%9D%97%BB%F0%9D%97%B2%F0%9D%98%82%F0%9D%97%BF%F0%9D%97%BC%F0%9D%97%A7%F0%9D%97%A8%F0%9D%97%A0-activity-7264179266274119680-ZElX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3APW4BigkIXkDHHZZZj49K9zvVfV4w4AM",
      type: "linkedin"
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
    location: "Munich",
    isArchived: true
  },
  {
    id: "3",
    title: "Neuromorphic Hackathon 2023",
    description: "Four-day hackathon focused on neuromorphic technologies, hosted in collaboration with Fortiss Neuromorphic Labs and Intel, featuring team challenges based on state-of-the-art research.",
    date: "2023-11-06",
    image: "/media/events/fortiss_2023.png",
    link: {
      url: "https://www.instagram.com/p/CwplfkPovDD/",
      type: "instagram"
    },
    organizers: [
      { name: "Agustin N. Coppari Hollmann", role: "Lead Organizer" }
    ],
    supporters: [
      { name: "neuroTUM", type: "organization" },
      { name: "Fortiss Neuromorphic Labs", type: "organization" },
      { name: "Intel", type: "company" }
    ],
    location: "Fortiss offices",
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
