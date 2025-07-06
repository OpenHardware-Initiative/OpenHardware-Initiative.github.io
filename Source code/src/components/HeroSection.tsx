import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CircuitPattern from "@/components/CircuitPattern";
import ApplicationLink from "./ApplicationLink";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 min-h-screen flex items-center">
      {/* Circuit background */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url('/lovable-uploads/b1b3ac59-c3b2-4f3e-99d8-f4241b81e61e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05
      }} />
        
      {/* Static circuit pattern overlay - visible on all screens */}
      <CircuitPattern />
        
      {/* Large decorative circles - adjusted for mobile */}
      <div className="hero-circle left-[5%] sm:left-[10%] top-[-5%] sm:top-[-10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-bistre opacity-10 hidden sm:block" />
      <div className="hero-circle right-[-5%] sm:right-[-10%] bottom-[-15%] sm:bottom-[-30%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-primary-blue/10 hidden sm:block" />
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-3 text-primary-blue lg:text-[#333351] leading-tight">
              Open<span className="text-[#AB9A89]">Hardware</span>
            </h1>
              
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-night mb-4 sm:mb-6 lg:mb-8 max-w-4xl mx-auto lg:mx-0 leading-tight">
              Pioneering the future of hardware acceleration
            </p>
              
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-6 sm:mb-8 lg:mb-10 text-night leading-relaxed">
                Student-led innovation and research in chip design, hardware acceleration, 
                and smart manufacturing systems from concept to implementation.
              </p>
                
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-primary-blue hover:bg-primary-blue/90 text-offwhite text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    Our Projects
                  </Button>
                </Link>
                <ApplicationLink className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-bistre text-bistre hover:bg-bistre/5 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    Join Our Team
                  </Button>
                </ApplicationLink>
              </div>
            </div>
          </div>
            
          {/* Team image with much smaller size to fit in hero section */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-2 sm:border-4 border-offwhite w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-sm xl:max-w-md h-[400px] sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
              <img 
                src="/Everyone_SoSe2025.jpg" 
                alt="OpenHardware Team" 
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
