
import React from "react";
import SponsorSection from "@/components/SponsorSection";
import SupportersSection from "@/components/SupportersSection";
import HeroSection from "@/components/HeroSection";
import DevelopmentFocusSection from "@/components/DevelopmentFocusSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero Section */}
      <HeroSection />

      {/* What we develop section */}
      <DevelopmentFocusSection />
      
      {/* Applications section */}
      <ApplicationsSection />
      
      {/* Team Section with parallax */}
      <TeamSection />
      
      {/* Sponsors */}
      <SponsorSection />
      
      {/* Supporters */}
      <SupportersSection />
    </div>
  );
};

export default Index;
