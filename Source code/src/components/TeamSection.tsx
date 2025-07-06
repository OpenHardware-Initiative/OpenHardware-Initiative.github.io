
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-offwhite">
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('/lovable-uploads/b1b3ac59-c3b2-4f3e-99d8-f4241b81e61e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-blue">Our Team</h2>
          <p className="text-lg mb-10 text-night">
            We're a diverse group of students and researchers passionate about pushing 
            the boundaries of hardware innovation.
          </p>
          <Link to="/team">
            <Button className="bg-bistre hover:bg-bistre/90 text-offwhite">
              Meet The Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
