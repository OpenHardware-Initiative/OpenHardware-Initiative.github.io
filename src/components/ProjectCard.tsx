import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projectsData";
import { getStringBasedColor, getContrastTextColor } from "@/utils/colorUtils";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, category, status, image, githubLink, year, recruitingFor } = project;
  
  // Get background color for category based on category name
  const categoryBgColor = getStringBasedColor(category);
  // Get text color that will have good contrast with the background
  const categoryTextColor = getContrastTextColor(categoryBgColor);
  
  // Determine status badge style
  const getStatusBadgeVariant = () => {
    switch(status) {
      case "Active": return "default";
      case "Completed": return "outline";
      case "Discontinued": return "destructive";
      default: return "outline";
    }
  };
  
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative h-48">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-3 left-3">
          <Badge 
            variant="secondary" 
            className="text-xs truncate max-w-[180px]"
            style={{ 
              backgroundColor: categoryBgColor,
              color: categoryTextColor
            }}
          >
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Badge 
            variant={getStatusBadgeVariant()}
            className="text-xs truncate max-w-[120px]"
          >
            {status}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
          <span className="text-sm text-gray-500 flex-shrink-0 ml-2">{year}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t flex justify-between items-center gap-2">
        {githubLink ? (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-grow"
          >
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Github size={16} className="flex-shrink-0" />
              <span className="truncate">View on GitHub</span>
            </Button>
          </a>
        ) : (
          <div className="flex-grow">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2" disabled>
              <Github size={16} className="flex-shrink-0" />
              <span className="truncate text-gray-500">Private Repository</span>
            </Button>
          </div>
        )}
        
        {recruitingFor && (
          <Link to="/contact" className="flex-shrink-0">
            <Button variant="default" className="flex items-center gap-2" size="sm">
              <UserPlus size={16} className="flex-shrink-0" />
              <span className="sm:inline hidden">Join</span>
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
