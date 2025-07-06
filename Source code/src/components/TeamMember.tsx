import React from "react";
import { Card } from "@/components/ui/card";
import { Linkedin, UserPlus } from "lucide-react";
import TeamMemberImage from "./TeamMemberImage";
import { Link } from "react-router-dom";

interface TeamMemberProps {
  name: string;
  role?: string;
  image?: string;
  linkedIn?: string;
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
          image ? (
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
          ) : !isOpenPosition ? (
            // Placeholder image if no image and not open position
            <div className="w-full h-60 flex items-center justify-center bg-gradient-to-br from-primary-blue/10 to-primary-blue/5">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
                className="opacity-50"
              >
                {/* Fun character design */}
                {/* Head */}
                <circle cx="60" cy="45" r="25" fill="rgb(248 221 186)" />
                
                {/* Eyes */}
                <circle cx="50" cy="40" r="4" fill="rgb(51 51 81)" />
                <circle cx="70" cy="40" r="4" fill="rgb(51 51 81)" />
                
                {/* Smile */}
                <path d="M50 55 Q60 65 70 55" stroke="rgb(51 51 81)" strokeWidth="2" strokeLinecap="round" />
                
                {/* Body */}
                <path
                  d="M40 100C40 85.4315 50 75 60 75C70 75 80 85.4315 80 100"
                  fill="rgb(248 221 186)"
                />
                
                {/* Connection lines */}
                <path d="M25 85L40 100" stroke="#AB9A89" strokeWidth="2"  />
                <path d="M95 85L80 100" stroke="#AB9A89" strokeWidth="2"  />
              </svg>
            </div>
          ) : (
            <div className={`w-full h-60 flex items-center justify-center bg-gray-100 ${isOpenPosition ? 'opacity-80' : ''}`}>
              {isOpenPosition && (
                <div className="bg-primary-blue bg-opacity-70 p-4 rounded-full">
                  <UserPlus size={32} className="text-white" />
                </div>
              )}
            </div>
          )
        )}
        {/* {role && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-blue text-white text-xs md:text-sm rounded-full truncate max-w-[200px]">
              {role}
            </span>
          </div>
        )} */}
        {!isOpenPosition && linkedIn ? (
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 p-2 bg-white text-primary-blue rounded-full hover:bg-primary-blue hover:text-white transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin size={18} />
          </a>
        ) : null}
        {isOpenPosition && (
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
