
// Define interfaces for better type safety
export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Chip Design" | "AI Hardware" | "AI Software" | "TinyML" | "Spiking Neural Networks";
  status: "Active" | "Completed" | "Discontinued";
  image?: string;
  githubLink?: string;
  year: number;
  recruitingFor?: boolean;
}

// Projects data
export const projectsData: Project[] = [
  {
    id: "1",
    title: "AMD Competition - Drone-ViT-HW-Accelerator",
    description: "Hardware acceleration for Vision Transformer models specialized for drone applications with optimization for size and power constraints",
    category: "Chip Design",
    status: "Active",
    image: "/media/projects/AMD_comp.png",
    githubLink: "https://github.com/OpenHardware-Initiative/ITA-FPGA",
    year: 2025,
    recruitingFor: true
  },
  {
    id: "2",
    title: "Neural Network Quantization Benchmarking",
    description: "Systematic comparison of quantization methods across multiple deep learning architectures.",
    category: "AI Software",
    status: "Active",
    year: 2025,
    recruitingFor: true
  },
  {
    id: "3",
    title: "SpikingC",
    description: "SNN implementation in C for efficient spiking neural network computation with optimized performance and debugging capabilities.",
    category: "Spiking Neural Networks",
    status: "Completed",
    githubLink: "https://github.com/neuroTUM/SpikingC",
    year: 2024
  },
  {
    id: "4",
    title: "Fortiss Hackathon 2023 - Gesture Recognition",
    description: "SNN-based gesture recognition system developed during the November 2023 Hackathon with Fortiss.",
    category: "Spiking Neural Networks",
    status: "Completed",
    image: "",
    year: 2023
  },
  {
    id: "5",
    title: "DenseSpiking RTL",
    description: "Implementation of a Dense Layer with Leaky Integrate and Fire (LIF) neurons in SystemVerilog for FPGA deployment.",
    category: "Chip Design",
    status: "Completed",
    year: 2023
  },
  {
    id: "6",
    title: "Spiking Mobile ViT",
    description: "A mobile-optimized Vision Transformer model using spiking neural networks for efficient visual processing on edge devices.",
    category: "Spiking Neural Networks",
    status: "Completed",
    image: "/lovable-uploads/image.png",
    year: 2023
  }
];

// Helper functions for common data operations
export function getProjectById(id: string): Project | undefined {
  return projectsData.find(project => project.id === id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projectsData.filter(project => project.category === category);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projectsData.filter(project => project.status === status);
}

export function getProjectsByYear(year: number): Project[] {
  return projectsData.filter(project => project.year === year);
}

// Function to get projects that are recruiting
export function getRecruitingProjects(): Project[] {
  return projectsData.filter(project => project.recruitingFor === true);
}
