
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
}

// Team data
export const teamData: TeamMember[] = [
  // Co-directors
  {
    id: "1",
    name: "Emily Chen",
    role: "Co-Director",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "Ph.D. Computer Engineering",
    isActive: true,
    joinDate: "2022-09"
  },
  {
    id: "3",
    name: "Sarah Kim",
    role: "Co-Director",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Computer Science",
    isActive: true,
    joinDate: "2023-01"
  },
  {
    id: "5",
    name: "Lisa Müller",
    role: "Co-Director",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Machine Learning",
    isActive: true,
    joinDate: "2023-05"
  },
  
  // Team Leads
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Team Lead - Operations",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Electrical Engineering",
    isActive: true,
    joinDate: "2022-10"
  },
  {
    id: "4",
    name: "David Wang",
    role: "Team Lead - Communications",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "B.Sc. Computer Engineering",
    isActive: true,
    joinDate: "2023-03"
  },
  
  // Advisors
  {
    id: "12",
    name: "Prof. Ulf Schlichtmann",
    role: "Advisor - EDA Chair, TUM",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "Ph.D. Electronic Design Automation",
    isActive: true,
    joinDate: "2022-01"
  },
  {
    id: "13",
    name: "OpenResearch e.V.",
    role: "Advisor - Umbrella Organization",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    isActive: true,
    joinDate: "2022-03"
  },
  {
    id: "14",
    name: "neuroTUM",
    role: "Advisor - Student Initiative",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    isActive: true,
    joinDate: "2022-06"
  },
  
  // Team Members
  {
    id: "6",
    name: "James Wilson",
    role: "Team Member",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "B.Sc. Electrical Engineering",
    isActive: true,
    joinDate: "2023-06"
  },
  {
    id: "7",
    name: "Thomas Schmidt",
    role: "Team Member",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Robotics",
    isActive: true,
    joinDate: "2023-09"
  },
  {
    id: "8",
    name: "Nina Patel",
    role: "Team Member",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "B.Sc. Computer Science",
    isActive: true,
    joinDate: "2023-10"
  },
  
  // Alumni
  {
    id: "9",
    name: "Robert Garcia",
    role: "Former Co-Director",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    isActive: false,
    joinDate: "2021-09",
    endDate: "2023-06",
    contributions: [
      "Led the team that developed our first neuromorphic accelerator",
      "Established partnership with industry leaders",
      "Published paper on in-memory computing"
    ]
  },
  {
    id: "10",
    name: "Julia Schwarz",
    role: "Former Team Lead",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    isActive: false,
    joinDate: "2021-10",
    endDate: "2023-08",
    contributions: [
      "Designed PCB layouts for IoT sensor modules",
      "Implemented power management systems",
      "Mentored junior team members"
    ]
  },
  {
    id: "11",
    name: "Kai Zhang",
    role: "Former Team Member",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    isActive: false,
    joinDate: "2022-01",
    endDate: "2023-07",
    contributions: [
      "Implemented ViT accelerator on FPGA",
      "Optimized memory bandwidth for ML models",
      "Created tutorials on hardware acceleration"
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
