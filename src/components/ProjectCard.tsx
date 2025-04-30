
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
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-3 left-3">
          <Badge 
            variant="secondary" 
            style={{ 
              backgroundColor: categoryBgColor,
              color: categoryTextColor
            }}
          >
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge variant={getStatusBadgeVariant()}>
            {status}
          </Badge>
          {recruitingFor && (
            <Badge 
              variant="secondary"
              className="bg-green-600 text-white border-green-600"
            >
              Recruiting
            </Badge>
          )}
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
      
      <CardFooter className="pt-2 border-t flex justify-between items-center">
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
        
        {recruitingFor && (
          <Link to="/contact" className="ml-2">
            <Button variant="default" className="flex items-center gap-2">
              <UserPlus size={18} />
              <span>Join</span>
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
