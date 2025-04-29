
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, category, status, image, githubLink, year } = project;
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Chip Design":
        return "bg-blue-100 text-blue-800";
      case "AI Hardware":
        return "bg-purple-100 text-purple-800";
      case "IoT":
        return "bg-green-100 text-green-800";
      case "Smart Manufacturing":
        return "bg-amber-100 text-amber-800";
      case "TinyML":
        return "bg-rose-100 text-rose-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant={status === "Active" ? "default" : "outline"}>
            {status}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{title}</h3>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t">
        {githubLink ? (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Github size={18} />
              <span>View on GitHub</span>
            </Button>
          </a>
        ) : (
          <span className="text-sm italic text-gray-500">Private Repository</span>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
