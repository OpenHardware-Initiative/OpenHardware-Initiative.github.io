
import React, { useEffect, useRef } from "react";
import SponsorSection from "@/components/SponsorSection";
import SupportersSection from "@/components/SupportersSection";
import HeroSection from "@/components/HeroSection";
import DevelopmentFocusSection from "@/components/DevelopmentFocusSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import TeamSection from "@/components/TeamSection";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for additional effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elements = document.querySelectorAll('.parallax-item');
      
      elements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const speed = index % 2 === 0 ? 0.05 : -0.05;
        const yPos = scrollPosition * speed;
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={scrollRef} className="min-h-screen bg-offwhite overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* What we develop section with parallax background */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="parallax-item absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-blue/30"></div>
          <div className="parallax-item absolute top-40 right-20 w-48 h-48 rounded-full bg-bistre/30"></div>
        </div>
        <DevelopmentFocusSection />
      </div>
      
      {/* Applications section with parallax effect */}
      <ApplicationsSection />
      
      {/* Team Section with parallax background */}
      <ParallaxSection 
        bgImage="/lovable-uploads/b1b3ac59-c3b2-4f3e-99d8-f4241b81e61e.png" 
        height="auto"
        direction="up"
        speed={0.2}
        overlay={false}
        className="py-32"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-blue">Our Team</h2>
            <p className="text-lg mb-10 text-night">
              We're a diverse group of students and researchers passionate about pushing 
              the boundaries of hardware innovation.
            </p>
            <a href="/team" className="inline-block">
              <button className="bg-bistre hover:bg-bistre/90 text-offwhite py-2 px-6 rounded-md">
                Meet The Team
              </button>
            </a>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Sponsors with subtle parallax */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="parallax-item absolute bottom-20 left-[20%] w-40 h-40 rounded-full bg-primary-blue/30"></div>
          <div className="parallax-item absolute top-20 right-[15%] w-24 h-24 rounded-full bg-bistre/30"></div>
        </div>
        <SponsorSection />
      </div>
      
      {/* Supporters */}
      <SupportersSection />
    </div>
  );
};

export default Index;
