
import React, { useEffect } from "react";
import { getActiveMembers } from "@/data/teamData";
import TeamMember from "@/components/TeamMember";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = getActiveMembers();
  
  // Split members by role for organization
  const boardMembers = teamMembers.filter(member => member.role?.includes("Board Member") || member.role?.includes("Team Lead"));
  const engineers = teamMembers.filter(member => 
    member.role?.includes("Engineer") || 
    member.role?.includes("Developer") || 
    member.role?.includes("Specialist")
  );
  const regularMembers = teamMembers.filter(member => 
    !member.role?.includes("Board Member") && 
    !member.role?.includes("Team Lead") && 
    !member.role?.includes("Engineer") && 
    !member.role?.includes("Developer") && 
    !member.role?.includes("Specialist")
  );
  
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl">
            Meet the brilliant minds behind CircuitForge. Our diverse team brings together expertise 
            in hardware design, software development, and cutting-edge research.
          </p>
        </div>
      </section>
      
      {/* Team Photo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/placeholder.svg" 
              alt="CircuitForge Team" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">CircuitForge Team, 2023</h2>
                <p>Technical University Munich</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Board Members */}
      {boardMembers.length > 0 && (
        <section className="py-16 bg-offwhite">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boardMembers.map(member => (
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
        </section>
      )}
      
      {/* Engineers */}
      {engineers.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {engineers.map(member => (
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
        </section>
      )}
      
      {/* Regular Members */}
      {regularMembers.length > 0 && (
        <section className="py-16 bg-offwhite">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {regularMembers.map(member => (
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
        </section>
      )}
      
      {/* Alumni Section Link */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover Our Alumni</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Learn about the former members who contributed to CircuitForge's success and where they are now.
          </p>
          <Link to="/alumni">
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
            >
              View Alumni Page
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Join Us Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Passionate about hardware innovation? We're always looking for talented and enthusiastic
            individuals to join our team and contribute to cutting-edge projects.
          </p>
          <a 
            href="https://forms.google.com/form" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary-blue hover:bg-primary-blue/90 text-lg px-8 py-6">
              Apply to Join CircuitForge
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
