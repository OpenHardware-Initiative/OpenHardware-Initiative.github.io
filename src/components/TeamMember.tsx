
import React from "react";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import TeamMemberImage from "./TeamMemberImage";

interface TeamMemberProps {
  name: string;
  role?: string;
  image: string;
  linkedIn: string;
  education?: string;
  personIndex?: number;
  isCoDirector?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  linkedIn,
  education,
  personIndex = -1,
  isCoDirector = false
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        {isCoDirector && image.includes("c4ac8743-6682-42b2-9e3f-61d5bee406ef") ? (
          <TeamMemberImage image={image} name={name} personIndex={personIndex} />
        ) : (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover object-center" 
          />
        )}
        {role && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-blue text-white text-sm rounded-full">
              {role}
            </span>
          </div>
        )}
        <a 
          href={linkedIn} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 p-2 bg-white text-primary-blue rounded-full hover:bg-primary-blue hover:text-white transition-colors"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <Linkedin size={20} />
        </a>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        {education && (
          <p className="text-gray-600 text-sm mt-1">{education}</p>
        )}
      </div>
    </Card>
  );
};

export default TeamMember;
