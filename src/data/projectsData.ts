
// Define interfaces for better type safety
export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Chip Design" | "AI Hardware" | "IoT" | "Smart Manufacturing" | "TinyML";
  status: "Active" | "Completed";
  image: string;
  githubLink?: string;
  year: number;
}

// Projects data
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Neuromorphic Computing Accelerator",
    description: "A specialized hardware design that mimics the brain's neural structure to accelerate machine learning tasks with significantly lower power consumption.",
    category: "Chip Design",
    status: "Active",
    image: "/media/projects/neuromorphic-accelerator.jpg",
    githubLink: "https://github.com/example/neuromorphic-accelerator",
    year: 2023
  },
  {
    id: "2",
    title: "In-Memory Computing Architecture",
    description: "A novel architecture that performs computations directly in memory, reducing the energy cost of data movement and accelerating memory-bound operations.",
    category: "Chip Design",
    status: "Active",
    image: "/media/projects/in-memory-computing.jpg",
    year: 2023
  },
  {
    id: "3",
    title: "Vision Transformer Accelerator on FPGA",
    description: "Implementation of an efficient Vision Transformer (ViT) model on FPGA for real-time image processing and collision avoidance on drones.",
    category: "AI Hardware",
    status: "Active",
    image: "/media/projects/vit-fpga.jpg",
    githubLink: "https://github.com/example/vit-fpga",
    year: 2023
  },
  {
    id: "4",
    title: "AI Compiler for Heterogeneous Hardware",
    description: "Development of a compiler that optimizes neural network models for various hardware accelerators, including GPUs, FPGAs, and custom ASICs.",
    category: "AI Hardware",
    status: "Active",
    image: "/media/projects/ai-compiler.jpg",
    githubLink: "https://github.com/example/ai-compiler",
    year: 2023
  },
  {
    id: "5",
    title: "Smart Factory IoT Sensor Network",
    description: "A network of low-power IoT sensors for monitoring and optimizing manufacturing processes, with edge computing capabilities.",
    category: "IoT",
    status: "Completed",
    image: "/media/projects/iot-sensor-network.jpg",
    githubLink: "https://github.com/example/smart-factory-iot",
    year: 2022
  },
  {
    id: "6",
    title: "TinyML for Predictive Maintenance",
    description: "Implementation of tiny machine learning models on microcontrollers for real-time equipment maintenance prediction in industrial settings.",
    category: "TinyML",
    status: "Completed",
    image: "/media/projects/tinyml-maintenance.jpg",
    githubLink: "https://github.com/example/predictive-maintenance-tinyml",
    year: 2022
  },
  {
    id: "7",
    title: "Energy-Efficient Deep Learning Processor",
    description: "A custom processor design optimized for deep learning inference with minimal energy consumption for battery-powered devices.",
    category: "Chip Design",
    status: "Completed",
    image: "/media/projects/dl-processor.jpg",
    year: 2021
  },
  {
    id: "8",
    title: "Industry 4.0 Digital Twin Framework",
    description: "A framework for creating digital twins of manufacturing processes, enabling simulation, optimization, and predictive analytics.",
    category: "Smart Manufacturing",
    status: "Completed",
    image: "/media/projects/digital-twin.jpg",
    githubLink: "https://github.com/example/digital-twin-framework",
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
