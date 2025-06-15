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
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 flex items-center justify-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50"
            >
              {/* Circuit Board Base */}
              <rect x="20" y="20" width="80" height="80" rx="8" fill="#AB9A89" />
              
              {/* Circuit Traces */}
              <path d="M30 40h60" stroke="rgb(51 51 81)" strokeWidth="2" />
              <path d="M30 60h60" stroke="rgb(51 51 81)" strokeWidth="2" />
              <path d="M30 80h60" stroke="rgb(51 51 81)" strokeWidth="2" />
              <path d="M40 30v60" stroke="rgb(51 51 81)" strokeWidth="2" />
              <path d="M60 30v60" stroke="rgb(51 51 81)" strokeWidth="2" />
              <path d="M80 30v60" stroke="rgb(51 51 81)" strokeWidth="2" />
              
              {/* Circuit Components */}
              {/* Microchip */}
              <rect x="45" y="45" width="30" height="30" rx="2" fill="rgb(51 51 81)" />
              <rect x="50" y="50" width="20" height="20" rx="1" fill="rgb(248 221 186)" />
              
              {/* Capacitors */}
              <rect x="35" y="35" width="4" height="10" fill="rgb(248 221 186)" />
              <rect x="81" y="35" width="4" height="10" fill="rgb(248 221 186)" />
              <rect x="35" y="75" width="4" height="10" fill="rgb(248 221 186)" />
              <rect x="81" y="75" width="4" height="10" fill="rgb(248 221 186)" />
              
              {/* Connection Points */}
              <circle cx="30" cy="40" r="2" fill="rgb(248 221 186)" />
              <circle cx="90" cy="40" r="2" fill="rgb(248 221 186)" />
              <circle cx="30" cy="60" r="2" fill="rgb(248 221 186)" />
              <circle cx="90" cy="60" r="2" fill="rgb(248 221 186)" />
              <circle cx="30" cy="80" r="2" fill="rgb(248 221 186)" />
              <circle cx="90" cy="80" r="2" fill="rgb(248 221 186)" />
            </svg>
          </div>
        )}
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
