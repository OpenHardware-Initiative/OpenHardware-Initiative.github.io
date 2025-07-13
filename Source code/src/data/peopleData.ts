/**
 * Combined data file for team members and alumni
 * Contains types, data, and utility functions for all people associated with OpenHardware
 */

// Define interfaces for better type safety
export interface Person {
  id: string;
  name: string;
  role?: string;
  image?: string;
  linkedIn?: string;
  education?: string;
  isActive: boolean;
  joinDate: string;
  endDate?: string;
  contributions?: string[];
  isOpenPosition?: boolean;
}

// Combined data array for all team members and alumni
export const peopleData: Person[] = [
  // Co-directors
  {
    id: "1",
    name: "Ipek Akdeniz",
    role: "Co-Director",
    image: "/media/team/ipek-akdeniz.jpg",
    linkedIn: "https://linkedin.com/in/ipek-akdeniz/",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2022-09"
  },
  {
    id: "2",
    name: "Agustin Nahuel Coppari Hollmann",
    role: "Co-Director",
    image: "/media/team/agustin-coppari.JPG",
    linkedIn: "https://linkedin.com/in/agustin-nahuel-coppari-hollmann/",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2023-01"
  },
  {
    id: "3",
    name: "Deniz Onat Erdoğan",
    role: "Co-Director",
    image: "/media/team/deniz-erdogan.jpg",
    linkedIn: "https://linkedin.com/in/deniz-onat/",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2023-05"
  },
  
  // Team Leads - Open Positions
/**  {
    id: "4",
    name: "This could be you!",
    role: "Team Lead - Operations",
    linkedIn: "https://linkedin.com",
    education: "Join our team!",
    isActive: true,
    joinDate: "2023-01",
    isOpenPosition: true
  },
  {
    id: "5",
    name: "This could be you!",
    role: "Team Lead - Communications",
    linkedIn: "https://linkedin.com",
    education: "Join our team!",
    isActive: true,
    joinDate: "2023-01",
    isOpenPosition: true
  },*/
  
  // Advisors
  {
    id: "12",
    name: "Aleksa Stojković",
    role: "Advisor",
    linkedIn: "https://www.linkedin.com/in/aleksa-stojkovi%C4%87-288550200/",
    image: "/media/team/aleksa-stojkovic.jpg",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2023-01"
  },
/**  {
    id: "13",
    name: "Johannes Geier",
    role: "Advisor",
    education: "Technical University of Munich, Chair of Electronic Design Automation (Prof. Schlichtmann)",
    isActive: true,
    joinDate: "2023-01"
  },*/
  
  // Team Members
  {
    id: "6",
    name: "Kagan Dikmen",
    role: "Team Member",
    image: "/media/team/kagan-dikmen.jpg",
    linkedIn: "https://linkedin.com/in/kagan-dikmen/",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2023-06"
  },
  {
    id: "7",
    name: "Mehmet Efe Karadeniz",
    role: "Team Member",
    image: "/media/team/mehmet-karadeniz.jpg",
    education: "B.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2023-09"
  },
  {
    id: "8",
    name: "Osman Yasar",
    role: "Team Member",
    image: "/media/team/osman-yasar.JPG",
    education: "M.Sc. Communications and Electronics, TUM",
    isActive: true,
    joinDate: "2023-10"
  },
  {
    id: "10",
    name: "Danylo Struk",
    role: "Team Member",
    image: "/media/team/danylo-struk.jpg",
    linkedIn: "https://linkedin.com/in/danylo-struk-666085195",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2025-05"
  },
  {
    id: "11",
    name: "Jakub Skupień",
    role: "Team Member",
    image: "/media/team/jakub-skupien.jpg",
    linkedIn: "https://www.linkedin.com/in/jakub-skupien",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2025-05"
  },
  {
    id: "18",
    name: "Deniz Öztürk",
    role: "Team Member",
    image: "/media/team/deniz-ozturk.jpg",
    education: "M.Sc. Informatics, TUM",
    isActive: true,
    joinDate: "2024-10"
  },
  {
    id: "19",
    name: "Youssef Sharafaldin",
    role: "Team Member",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2025-05"
  },
  {
    id: "20",
    name: "Michael Lobis",
    role: "Team Member",
    image: "/media/team/michael-lobis.jpg",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2025-05"
  },
  {
    id: "21",
    name: "Dinis Carmona",
    role: "Team Member",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2025-05"
  },
  {
    id: "22",
    name: "Efe Karavelioğlu",
    role: "Team Member",
    linkedIn: "https://linkedin.com/in/efe-karavelioğlu-1110ba318",
    image: "/media/team/efe-karavelioglu.jpg",
    education: "B.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2025-05"
  },
  
  // Alumni
  {
    id: "26",
    name: "Alyona Starikova",
    role: "Former Team Lead",
    image: "/media/alumni/alyona-starikova.png",
    isActive: false,
    joinDate: "2021-06",
    endDate: "2023-01",
    contributions: [
      "Co-founded the brain-inspired computing group at neuroTUM",
      "Co-organized the neuromorphic hackathon of 2024",
      "Worked on learning rules usng SNNs"
    ]
  },
  {
    id: "25",
    name: "Fabio Veneto",
    role: "Former Advisor",
    image: "/media/alumni/fabio-veneto.png",
    isActive: false,
    joinDate: "2021-09",
    endDate: "2023-05",
    contributions: [
      "Advised on topics related to computational neuroscience",
      "Worked on continual learning using Intel's neuromorphic framework"
    ]
  },
  {
    id: "9",
    name: "Tobias Konieczny",
    role: "Former Team Member",
    image: "/media/team/tobias-konieczny.jpg",
    education: "B.Sc Computer Science, TUM",
    isActive: false,
    joinDate: "2023-10"
  },
  {
    id: "24",
    name: "Ingo Fritz",
    role: "Former Team Member",
    image: "/media/alumni/ingo-fritz.png",
    isActive: false,
    joinDate: "2022-01",
    endDate: "2023-04",
    contributions: [
      "Worked on learning rules related to computational neuroscience",
      "Contributed to the transformer SNN model"
    ]
  },
  {
    id: "16",
    name: "Benedikt Witteler",
    role: "Former Team Member",
    image: "/media/alumni/benedikt-witteler.png",
    education: "TUM, Master Electrical Engineering and Information Technology",
    isActive: false,
    joinDate: "2023-11",
    endDate: "2024-03",
    contributions: [
      "Contributed to spiking neural network implementations",
      "Worked on FPGA SoC integration with SNN accelerator"
    ]
  },
  {
    id: "17",
    name: "Ashik Chalakariyil Jayamon",
    role: "Former Team Member",
    image: "/media/alumni/ashik-jayamon.png",
    education: "M.Sc. Communications and Electronics",
    isActive: false,
    joinDate: "2023-12",
    endDate: "2024-03",
    contributions: [
      "Developed analog LIF neuron for SNNs",
      "Optimized power efficiency for edge AI applications"
    ]
  },
  {
    id: "14",
    name: "Michael Neumeier",
    role: "Former Advisor",
    image: "/media/alumni/michael-neumeier.png",
    education: "Neuromorphic Computing Researcher at Fortiss",
    isActive: false,
    joinDate: "2023-02",
    endDate: "2024-02",
    contributions: [
      "Provided expertise in neuromorphic computing architectures",
      "Mentored team members on hardware-software co-design"
    ]
  },
  {
    id: "15",
    name: "Elvin Hajizada",
    role: "Former Advisor",
    image: "/media/alumni/elvin-hajizada.png",
    education: "Neuromorphic & Continual AI Researcher at Intel Labs",
    isActive: false,
    joinDate: "2023-03",
    endDate: "2024-01",
    contributions: [
      "Advised on SNN implementations for industrial applications",
      "Shared expertise on hardware-efficient neural network design"
    ]
  },
  {
    id: "27",
    name: "Ana Villalobos",
    role: "Former Team Member",
    image: "/media/alumni/ana-villalobos.png",
    linkedIn: "https://linkedin.com",
    isActive: false,
    joinDate: "2022-09",
    endDate: "2023-12",
    contributions: [
      "Contributed to neuromorphic computing research",
      "Helped organize the Munich Neuromorphic Hackathon 2024"
    ]
  }
];

// Helper functions

/**
 * Returns all active team members
 */
export const getActiveMembers = () => {
  return peopleData.filter(person => person.isActive);
};

/**
 * Returns all former members (alumni)
 */
export const getAlumni = () => {
  return peopleData.filter(person => !person.isActive);
};

/**
 * Find person by their ID
 */
export const getPersonById = (id: string): Person | undefined => {
  return peopleData.find(person => person.id === id);
};

/**
 * Returns people with a specific role
 */
export const getPeopleByRole = (role: string): Person[] => {
  return peopleData.filter(person => 
    person.role?.toLowerCase().includes(role.toLowerCase())
  );
};

/**
 * Returns all co-directors (active)
 */
export const getCoDirectors = (): Person[] => {
  return peopleData.filter(person => 
    person.isActive && person.role?.includes("Co-Director")
  );
};

/**
 * Returns all team leads (active)
 */
export const getTeamLeads = (): Person[] => {
  return peopleData.filter(person => 
    person.isActive && person.role?.includes("Team Lead")
  );
};

/**
 * Returns all advisors (active)
 */
export const getAdvisors = (): Person[] => {
  return peopleData.filter(person => 
    person.isActive && person.role?.includes("Advisor")
  );
};

/**
 * Returns all regular team members (active)
 */
export const getTeamMembers = (): Person[] => {
  return peopleData.filter(person => 
    person.isActive && person.role?.includes("Team Member")
  );
};

// Keeping these for backward compatibility
export const getBoardMembers = getCoDirectors;
export const getTechnicalTeam = getTeamLeads;
export const getRegularMembers = getTeamMembers;
