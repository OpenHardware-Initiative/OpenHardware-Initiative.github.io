import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CircuitPattern from "@/components/CircuitPattern";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Circuit background */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('/lovable-uploads/b1b3ac59-c3b2-4f3e-99d8-f4241b81e61e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05
      }} />
        
      {/* Static circuit pattern overlay */}
      <CircuitPattern />
        
      {/* Large decorative circles */}
      <div className="hero-circle left-[10%] top-[-10%] w-[500px] h-[500px] bg-bistre opacity-10 hidden md:block" />
      <div className="hero-circle right-[-10%] bottom-[-30%] w-[600px] h-[600px] bg-primary-blue/10 hidden md:block" />
        
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="font-bold text-6xl md:text-7xl mb-3 text-primary-blue lg:text-[#333351] text-[#333351]">
              Open<span className="text-[#AB9A89] text-[#AB9A89]">Hardware</span>
            </h1>
              
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-night mb-8 max-w-3xl">
              Pioneering the future of hardware acceleration
            </p>
              
            <div className="max-w-2xl">
              <p className="text-xl mb-10 text-night">
                Student-led innovation and research in chip design, hardware acceleration, 
                and smart manufacturing systems from concept to implementation.
              </p>
                
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/projects">
                  <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90 text-offwhite text-lg px-8">
                    Our Projects
                  </Button>
                </Link>
                <a href="https://forms.google.com/form" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-bistre text-bistre hover:bg-bistre/5 text-lg px-8">
                    Join Our Team
                  </Button>
                </a>
              </div>
            </div>
          </div>
            
          {/* Team image with rounded corners */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-offwhite h-[600px]">
              <img 
                src="/Everyone_SoSe2025.jpg" 
                alt="OpenHardware Team" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
