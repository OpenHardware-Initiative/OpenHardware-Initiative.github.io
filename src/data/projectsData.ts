
// Define interfaces for better type safety
export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Chip Design" | "AI Hardware" | "IoT" | "Smart Manufacturing" | "TinyML" | "Spiking Neural Networks";
  status: "Active" | "Completed" | "Discontinued";
  image: string;
  githubLink?: string;
  year: number;
  recruitingFor?: boolean;
}

// Projects data
export const projectsData: Project[] = [
  {
    id: "1",
    title: "SpikingC",
    description: "SNN implementation in C for efficient spiking neural network computation with optimized performance and debugging capabilities.",
    category: "Spiking Neural Networks",
    status: "Active",
    image: "/lovable-uploads/58fafde8-2ada-40fe-9f31-cbfcc28bbf05.png",
    githubLink: "https://github.com/example/spikingc",
    year: 2023,
    recruitingFor: true
  },
  {
    id: "2",
    title: "Fortiss Hackathon 2023 - Gesture Recognition",
    description: "SNN-based gesture recognition system developed during the November 2023 Hackathon with Fortiss.",
    category: "Spiking Neural Networks",
    status: "Completed",
    image: "/lovable-uploads/2dc03eef-0d17-4562-ab49-d9dbdaef773d.png",
    year: 2023
  },
  {
    id: "3",
    title: "DenseSpiking RTL",
    description: "Implementation of a Dense Layer with Leaky Integrate and Fire (LIF) neurons in SystemVerilog for FPGA deployment.",
    category: "Chip Design",
    status: "Active",
    image: "/lovable-uploads/b96b6259-c99d-43e3-a97b-fee16c0154bc.png",
    year: 2023,
    recruitingFor: true
  },
  {
    id: "4",
    title: "Drone-ViT-HW-Accelerator",
    description: "Hardware acceleration for Vision Transformer models specialized for drone applications with optimization for size and power constraints.",
    category: "AI Hardware",
    status: "Active",
    image: "/media/projects/drone-vit.jpg",
    year: 2023
  },
  {
    id: "5",
    title: "Spiking Mobile ViT",
    description: "A mobile-optimized Vision Transformer model using spiking neural networks for efficient visual processing on edge devices.",
    category: "Spiking Neural Networks",
    status: "Active",
    image: "/media/projects/mobile-vit.jpg",
    year: 2023
  },
  {
    id: "6",
    title: "Industry Smart Scheduling",
    description: "An intelligent scheduling system for manufacturing industries that optimizes production processes and resource allocation using AI algorithms.",
    category: "Smart Manufacturing",
    status: "Active",
    image: "/lovable-uploads/c0a233b0-7b4a-4d39-acee-012349ce425a.png",
    year: 2023,
    recruitingFor: true
  },
  {
    id: "7",
    title: "AI Compiler for Heterogeneous Hardware with IREE",
    description: "Development of a compiler that optimizes neural network models for various hardware accelerators, leveraging IREE (IR Execution Environment) technology.",
    category: "AI Hardware",
    status: "Active",
    image: "/lovable-uploads/ce44f0a3-0848-46f4-9306-5e14feb66003.png",
    githubLink: "https://github.com/example/ai-compiler-iree",
    year: 2023
  },
  {
    id: "8",
    title: "Energy-Efficient Deep Learning Processor",
    description: "A custom processor design optimized for deep learning inference with minimal energy consumption for battery-powered devices.",
    category: "Chip Design",
    status: "Discontinued",
    image: "/media/projects/dl-processor.jpg",
    year: 2021
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

// New helper function to get projects that are recruiting
export function getRecruitingProjects(): Project[] {
  return projectsData.filter(project => project.recruitingFor === true);
}
