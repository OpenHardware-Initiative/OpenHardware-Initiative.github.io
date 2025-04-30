
import React, { useEffect } from "react";
import { getCoDirectors, getTeamLeads, getTeamMembers } from "@/data/teamData";
import TeamMember from "@/components/TeamMember";
import { UserCheck, User } from "lucide-react";

const Team = () => {
  const coDirectors = getCoDirectors();
  const teamLeads = getTeamLeads();
  const teamMembers = getTeamMembers();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl">
            Meet the passionate individuals behind OpenHardware who are driving innovation in hardware design and implementation.
          </p>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-16 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Co-Directors */}
            <div className="flex items-center mb-8 gap-3">
              <h2 className="text-2xl font-bold text-primary-blue">Co-Directors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {coDirectors.map(member => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  linkedIn={member.linkedIn}
                  education={member.education}
                />
              ))}
            </div>
            
            {/* Team Leads */}
            <div className="flex items-center mb-8 gap-3">
              <UserCheck className="text-primary-blue" size={24} />
              <h2 className="text-2xl font-bold text-primary-blue">Team Leads</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {teamLeads.map(member => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  linkedIn={member.linkedIn}
                  education={member.education}
                />
              ))}
            </div>
            
            {/* Team Members */}
            <div className="flex items-center mb-8 gap-3">
              <User className="text-primary-blue" size={24} />
              <h2 className="text-2xl font-bold text-primary-blue">Team Members</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map(member => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  linkedIn={member.linkedIn}
                  education={member.education}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
