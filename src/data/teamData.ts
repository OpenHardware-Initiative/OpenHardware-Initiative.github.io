
// Define interfaces for better type safety
export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  image: string;
  linkedIn: string;
  education?: string;
  isActive: boolean;
  joinDate: string;
  endDate?: string;
  contributions?: string[];
  isOpenPosition?: boolean;
}

// Team data
export const teamData: TeamMember[] = [
  // Co-directors
  {
    id: "1",
    name: "Ipek Akdeniz",
    role: "Co-Director",
    image: "/media/team/ipek-akdeniz.png",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2022-09"
  },
  {
    id: "2",
    name: "Agustin Nahuel Coppari Hollmann",
    role: "Co-Director",
    image: "/media/team/agustin-coppari.png",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2023-01"
  },
  {
    id: "3",
    name: "Deniz Onat Erdoğan",
    role: "Co-Director",
    image: "/media/team/deniz-erdogan.png",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2023-05"
  },
  
  // Team Leads - Open Positions
  {
    id: "4",
    name: "This could be you!",
    role: "Team Lead - Operations",
    image: "/media/team/open-position.png",
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
    image: "/media/team/open-position-alt.png",
    linkedIn: "https://linkedin.com",
    education: "Join our team!",
    isActive: true,
    joinDate: "2023-01",
    isOpenPosition: true
  },
  
  // Advisors
  {
    id: "12",
    name: "Aleksa Stojković",
    role: "Advisor",
    image: "/media/team/aleksa-stojkovic.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Master Electrical Engineering and Information Technology",
    isActive: true,
    joinDate: "2023-01"
  },
  {
    id: "13",
    name: "Johannes Geier",
    role: "Advisor",
    image: "/media/team/johannes-geier.png",
    linkedIn: "https://linkedin.com",
    education: "Technical University of Munich, Chair of Electronic Design Automation (Prof. Schlichtmann)",
    isActive: true,
    joinDate: "2023-01"
  },
  
  // Team Members
  {
    id: "6",
    name: "Kagan Dikmen",
    role: "Team Member",
    image: "/media/team/kagan-dikmen.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Bachelor Electrical Engineering and Information Technology",
    isActive: true,
    joinDate: "2023-06"
  },
  {
    id: "7",
    name: "Mehmet Efe Karadeniz",
    role: "Team Member",
    image: "/media/team/mehmet-karadeniz.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Bachelor Electrical Engineering and Information Technology",
    isActive: true,
    joinDate: "2023-09"
  },
  {
    id: "8",
    name: "Osman Yasar",
    role: "Team Member",
    image: "/media/team/osman-yasar.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Master Communications and Electronics",
    isActive: true,
    joinDate: "2023-10"
  },
  {
    id: "9",
    name: "Tobias Konieczny",
    role: "Team Member",
    image: "/media/team/tobias-konieczny.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Bachelor Computer Science",
    isActive: true,
    joinDate: "2023-10"
  },
  
  // Alumni
  {
    id: "26",
    name: "Alyona Starikova",
    role: "Former Co-Director",
    image: "/media/alumni/alyona-starikova.png",
    linkedIn: "https://linkedin.com",
    isActive: false,
    joinDate: "2021-06",
    endDate: "2023-01",
    contributions: [
      "Co-founded OpenHardware initiative",
      "Led strategic partnerships with industry",
      "Secured initial funding for operations"
    ]
  },
  {
    id: "25",
    name: "Fabio Veneto",
    role: "Former Team Lead",
    image: "/media/alumni/fabio-veneto.png",
    linkedIn: "https://linkedin.com",
    isActive: false,
    joinDate: "2021-09",
    endDate: "2023-05",
    contributions: [
      "Led the communications team",
      "Established partnership with TUM entrepreneurship center",
      "Organized multiple hackathons"
    ]
  },
  {
    id: "24",
    name: "Ingo Fritz",
    role: "Former Team Member",
    image: "/media/alumni/ingo-fritz.png",
    linkedIn: "https://linkedin.com",
    isActive: false,
    joinDate: "2022-01",
    endDate: "2023-04",
    contributions: [
      "Contributed to FPGA design for neuromorphic computing",
      "Developed power analysis tooling for SNN accelerators"
    ]
  },
  {
    id: "16",
    name: "Benedikt Witteler",
    role: "Former Team Member",
    image: "/media/alumni/benedikt-witteler.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Master Electrical Engineering and Information Technology",
    isActive: false,
    joinDate: "2023-11",
    endDate: "2024-03",
    contributions: [
      "Contributed to spiking neural network implementations",
      "Worked on hardware optimization for edge devices"
    ]
  },
  {
    id: "17",
    name: "Ashik Chalakariyil Jayamon",
    role: "Former Team Member",
    image: "/media/alumni/ashik-jayamon.png",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Communications and Electronics",
    isActive: false,
    joinDate: "2023-12",
    endDate: "2024-03",
    contributions: [
      "Developed hardware accelerators for neural networks",
      "Optimized power efficiency for edge AI applications"
    ]
  },
  {
    id: "14",
    name: "Michael Neumeier",
    role: "Former Advisor",
    image: "/media/alumni/michael-neumeier.png",
    linkedIn: "https://linkedin.com",
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
    linkedIn: "https://linkedin.com",
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
export const getActiveMembers = () => {
  return teamData.filter(member => member.isActive);
};

export const getAlumni = () => {
  return teamData.filter(member => !member.isActive);
};

export const getMemberById = (id: string): TeamMember | undefined => {
  return teamData.find(member => member.id === id);
};

export const getMembersByRole = (role: string): TeamMember[] => {
  return teamData.filter(member => 
    member.role?.toLowerCase().includes(role.toLowerCase())
  );
};

// Function to get co-directors
export const getCoDirectors = (): TeamMember[] => {
  return teamData.filter(member => 
    member.isActive && member.role?.includes("Co-Director")
  );
};

// Function to get team leads
export const getTeamLeads = (): TeamMember[] => {
  return teamData.filter(member => 
    member.isActive && member.role?.includes("Team Lead")
  );
};

// Function to get advisors
export const getAdvisors = (): TeamMember[] => {
  return teamData.filter(member => 
    member.isActive && member.role?.includes("Advisor")
  );
};

// Function to get team members
export const getTeamMembers = (): TeamMember[] => {
  return teamData.filter(member => 
    member.isActive && member.role?.includes("Team Member")
  );
};

// Keeping these for backward compatibility
export const getBoardMembers = getCoDirectors;
export const getTechnicalTeam = getTeamLeads;
export const getRegularMembers = getTeamMembers;
