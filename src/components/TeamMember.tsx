
import React from "react";
import { Card } from "@/components/ui/card";
import { Linkedin, UserPlus } from "lucide-react";
import TeamMemberImage from "./TeamMemberImage";
import { Link } from "react-router-dom";

interface TeamMemberProps {
  name: string;
  role?: string;
  image: string;
  linkedIn: string;
  education?: string;
  personIndex?: number;
  isCoDirector?: boolean;
  isOpenPosition?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  linkedIn,
  education,
  personIndex = -1,
  isCoDirector = false,
  isOpenPosition = false
}) => {
  // Check if this is a co-director with the composite image
  const isCompositeImage = isCoDirector && image.includes("team/") && personIndex >= 0;
  
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${isOpenPosition ? 'border-dashed border-2 border-primary-blue' : ''}`}>
      <div className="relative">
        {isCompositeImage ? (
          <TeamMemberImage image={image} name={name} personIndex={personIndex} />
        ) : (
          <div className="relative">
            <img 
              src={image} 
              alt={name} 
              className={`w-full h-60 object-cover object-center ${isOpenPosition ? 'opacity-80' : ''}`}
            />
            {isOpenPosition && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary-blue bg-opacity-70 p-4 rounded-full">
                  <UserPlus size={32} className="text-white" />
                </div>
              </div>
            )}
          </div>
        )}
        {role && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-blue text-white text-xs md:text-sm rounded-full truncate max-w-[200px]">
              {role}
            </span>
          </div>
        )}
        {!isOpenPosition ? (
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 p-2 bg-white text-primary-blue rounded-full hover:bg-primary-blue hover:text-white transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin size={18} />
          </a>
        ) : (
          <Link 
            to="/contact"
            className="absolute bottom-4 right-4 p-2 bg-white text-primary-blue rounded-full hover:bg-primary-blue hover:text-white transition-colors"
            aria-label="Apply for this position"
          >
            <UserPlus size={18} />
          </Link>
        )}
      </div>
      <div className="p-4">
        <h3 className={`font-bold text-lg ${isOpenPosition ? 'text-primary-blue' : ''} truncate`}>{name}</h3>
        {education && (
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{education}</p>
        )}
        {isOpenPosition && (
          <Link 
            to="/contact" 
            className="inline-block mt-3 text-sm font-medium text-primary-blue hover:underline"
          >
            Apply Now →
          </Link>
        )}
      </div>
    </Card>
  );
};

export default TeamMember;
