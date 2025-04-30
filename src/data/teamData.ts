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
    image: "/lovable-uploads/c4ac8743-6682-42b2-9e3f-61d5bee406ef.png",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2022-09"
  },
  {
    id: "2",
    name: "Agustin Nahuel Coppari Hollmann",
    role: "Co-Director",
    image: "/lovable-uploads/c4ac8743-6682-42b2-9e3f-61d5bee406ef.png",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Electrical Engineering and Information Technology, TUM",
    isActive: true,
    joinDate: "2023-01"
  },
  {
    id: "3",
    name: "Deniz Onat Erdoğan",
    role: "Co-Director",
    image: "/lovable-uploads/c4ac8743-6682-42b2-9e3f-61d5bee406ef.png",
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
    image: "/lovable-uploads/ce44f0a3-0848-46f4-9306-5e14feb66003.png",
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
    image: "/lovable-uploads/c0a233b0-7b4a-4d39-acee-012349ce425a.png",
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
    image: "/lovable-uploads/9ef5aa20-f425-4846-b4ec-1c018fe72ff8.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Master Electrical Engineering and Information Technology",
    isActive: true,
    joinDate: "2023-01"
  },
  {
    id: "13",
    name: "Johannes Geier",
    role: "Advisor",
    image: "/lovable-uploads/7e48c9e4-b24e-4d43-8061-fc5d8977e73e.png",
    linkedIn: "https://linkedin.com",
    education: "Technical University of Munich, Chair of Electronic Design Automation (Prof. Schlichtmann)",
    isActive: true,
    joinDate: "2023-01"
  },
  
  // Team Members - New team members with uploaded images
  {
    id: "6",
    name: "Kagan Dikmen",
    role: "Team Member",
    image: "/lovable-uploads/b7787fa8-d8a8-4c59-b082-811aa7f8f93e.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Bachelor Electrical Engineering and Information Technology",
    isActive: true,
    joinDate: "2023-06"
  },
  {
    id: "7",
    name: "Mehmet Efe Karadeniz",
    role: "Team Member",
    image: "/lovable-uploads/ab13a4db-2938-4aed-9a39-80130bb95fb1.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Bachelor Electrical Engineering and Information Technology",
    isActive: true,
    joinDate: "2023-09"
  },
  {
    id: "8",
    name: "Osman Yasar",
    role: "Team Member",
    image: "/lovable-uploads/ce44f0a3-0848-46f4-9306-5e14feb66003.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Master Communications and Electronics",
    isActive: true,
    joinDate: "2023-10"
  },
  {
    id: "9",
    name: "Tobias Konieczny",
    role: "Team Member",
    image: "/lovable-uploads/c0a233b0-7b4a-4d39-acee-012349ce425a.png",
    linkedIn: "https://linkedin.com",
    education: "TUM, Bachelor Computer Science",
    isActive: true,
    joinDate: "2023-10"
  },
  
  // Alumni
  {
    id: "9",
    name: "Robert Garcia",
    role: "Former Co-Director",
    image: "/media/alumni/robert-garcia.jpg",
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
    image: "/media/alumni/julia-schwarz.jpg",
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
    image: "/media/alumni/kai-zhang.jpg",
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
