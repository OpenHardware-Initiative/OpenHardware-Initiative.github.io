
import React, { useEffect } from "react";
import { getActiveMembers } from "@/data/teamData";
import TeamMember from "@/components/TeamMember";

const Team = () => {
  const teamMembers = getActiveMembers();
  
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
            {/* Board Members */}
            <h2 className="text-2xl font-bold mb-8 text-primary-blue">Board Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers
                .filter(member => member.role?.includes("Lead") || member.role?.includes("Board"))
                .map(member => (
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
            
            {/* Technical Team */}
            <h2 className="text-2xl font-bold mb-8 text-primary-blue">Technical Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers
                .filter(
                  member => 
                    !member.role?.includes("Lead") && 
                    !member.role?.includes("Board") && 
                    member.role
                )
                .map(member => (
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
            
            {/* Members */}
            <h2 className="text-2xl font-bold my-8 text-primary-blue">Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers
                .filter(member => !member.role)
                .map(member => (
                  <TeamMember
                    key={member.id}
                    name={member.name}
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
