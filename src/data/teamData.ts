
interface TeamMember {
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

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Emily Chen",
    role: "Team Lead",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "Ph.D. Computer Engineering",
    isActive: true,
    joinDate: "2022-09"
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Hardware Engineer",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Electrical Engineering",
    isActive: true,
    joinDate: "2022-10"
  },
  {
    id: "3",
    name: "Sarah Kim",
    role: "Board Member",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Computer Science",
    isActive: true,
    joinDate: "2023-01"
  },
  {
    id: "4",
    name: "David Wang",
    role: "FPGA Specialist",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "B.Sc. Computer Engineering",
    isActive: true,
    joinDate: "2023-03"
  },
  {
    id: "5",
    name: "Lisa Müller",
    role: "AI Compiler Developer",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Machine Learning",
    isActive: true,
    joinDate: "2023-05"
  },
  {
    id: "6",
    name: "James Wilson",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "B.Sc. Electrical Engineering",
    isActive: true,
    joinDate: "2023-06"
  },
  {
    id: "7",
    name: "Thomas Schmidt",
    image: "/placeholder.svg",
    linkedIn: "https://linkedin.com",
    education: "M.Sc. Robotics",
    isActive: true,
    joinDate: "2023-09"
  },
  {
    id: "8",
    name: "Nina Patel",
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
    role: "Former Team Lead",
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
    role: "Former Hardware Engineer",
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
    role: "Former FPGA Developer",
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

// Helper function to get active team members
export const getActiveMembers = () => {
  return teamData.filter(member => member.isActive);
};

// Helper function to get alumni
export const getAlumni = () => {
  return teamData.filter(member => !member.isActive);
};
