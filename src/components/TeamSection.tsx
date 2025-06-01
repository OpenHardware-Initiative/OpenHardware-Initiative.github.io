import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-offwhite">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(45deg, rgba(51, 51, 81, 0.02) 0%, rgba(171, 154, 137, 0.02) 100%)",
          opacity: 0.5,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-blue">
            Our Team
          </h2>
          <p className="text-lg mb-10 text-night">
            We're a diverse group of students and researchers passionate about
            pushing the boundaries of hardware innovation.
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
