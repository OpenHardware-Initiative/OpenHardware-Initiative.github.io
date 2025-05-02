
import React, { useEffect, useRef } from "react";
import SponsorSection from "@/components/SponsorSection";
import SupportersSection from "@/components/SupportersSection";
import HeroSection from "@/components/HeroSection";
import DevelopmentFocusSection from "@/components/DevelopmentFocusSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<HTMLDivElement[]>([]);
  
  // Enhanced scroll effects for multiple elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Apply parallax to decorative elements
      const elements = document.querySelectorAll('.parallax-item');
      
      elements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const parentSection = htmlElement.closest('section');
        
        if (!parentSection) return;
        
        const sectionTop = parentSection.offsetTop;
        const sectionHeight = parentSection.offsetHeight;
        
        // Calculate how far through this section we are (0 to 1)
        const scrollProgressInSection = (scrollPosition - sectionTop + viewportHeight) / (sectionHeight + viewportHeight);
        
        // Only apply effect when element is in view or approaching
        if (scrollProgressInSection >= -0.2 && scrollProgressInSection <= 1.2) {
          // Different effects based on index for variety
          switch (index % 4) {
            case 0:
              // Vertical movement
              const yPos = (scrollProgressInSection - 0.5) * 80;
              htmlElement.style.transform = `translateY(${yPos}px)`;
              htmlElement.style.opacity = `${1 - Math.abs(scrollProgressInSection - 0.5) * 1.2}`;
              break;
            case 1:
              // Rotation + scale
              const rotation = (scrollProgressInSection - 0.5) * 15;
              const scale = 1 + (scrollProgressInSection - 0.5) * 0.2;
              htmlElement.style.transform = `rotate(${rotation}deg) scale(${scale})`;
              htmlElement.style.opacity = `${1 - Math.abs(scrollProgressInSection - 0.5) * 1.2}`;
              break;
            case 2:
              // Horizontal movement
              const xPos = (scrollProgressInSection - 0.5) * 100;
              htmlElement.style.transform = `translateX(${xPos}px)`;
              htmlElement.style.opacity = `${1 - Math.abs(scrollProgressInSection - 0.5) * 1.2}`;
              break;
            case 3: 
              // 3D rotation effect
              const rotateX = (scrollProgressInSection - 0.5) * 10;
              const rotateY = (scrollProgressInSection - 0.5) * 10;
              const translateZ = (scrollProgressInSection - 0.5) * 50;
              htmlElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
              htmlElement.style.opacity = `${1 - Math.abs(scrollProgressInSection - 0.5) * 1.2}`;
              break;
          }
        }
      });
      
      // Apply counter-scroll effect to floating elements
      floatingElements.current.forEach((element, index) => {
        if (!element) return;
        
        const sectionTop = element.closest('section')?.offsetTop || 0;
        const relativeScroll = (scrollPosition - sectionTop) * (index % 2 === 0 ? -0.1 : 0.1);
        
        element.style.transform = `translateY(${relativeScroll}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Track elements for counter scrolling effect
  useEffect(() => {
    floatingElements.current = Array.from(document.querySelectorAll('.floating-element')) as HTMLDivElement[];
  }, []);
  
  return (
    <div ref={scrollRef} className="min-h-screen bg-offwhite overflow-x-hidden" style={{perspective: "1000px"}}>
      {/* Hero Section */}
      <HeroSection />

      {/* What we develop section with enhanced parallax background */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
          <div className="parallax-item absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-blue/30" style={{willChange: "transform, opacity"}}></div>
          <div className="parallax-item absolute top-40 right-20 w-48 h-48 rounded-full bg-bistre/30" style={{willChange: "transform, opacity"}}></div>
          <div className="parallax-item absolute bottom-60 left-[30%] w-24 h-24 rounded-full bg-night/20" style={{willChange: "transform, opacity"}}></div>
          <div className="parallax-item absolute bottom-20 right-[30%] w-36 h-36 rounded-full bg-primary-blue/20" style={{willChange: "transform, opacity"}}></div>
        </div>
        <DevelopmentFocusSection />
      </div>
      
      {/* Applications section with parallax effect */}
      <ApplicationsSection />
      
      {/* Team Section with advanced parallax effects */}
      <ParallaxSection 
        bgImage="/lovable-uploads/b1b3ac59-c3b2-4f3e-99d8-f4241b81e61e.png" 
        height="auto"
        direction="up"
        speed={0.3}
        overlay={false}
        className="py-32"
        rotation={true}
        scale={true}
        opacity={true}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-blue floating-element">Our Team</h2>
            <p className="text-lg mb-10 text-night floating-element">
              We're a diverse group of students and researchers passionate about pushing 
              the boundaries of hardware innovation.
            </p>
            <a href="/team" className="inline-block floating-element">
              <button className="bg-bistre hover:bg-bistre/90 text-offwhite py-2 px-6 rounded-md">
                Meet The Team
              </button>
            </a>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Sponsors with enhanced parallax */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
          <div className="parallax-item absolute bottom-20 left-[20%] w-40 h-40 rounded-full bg-primary-blue/30" style={{willChange: "transform, opacity"}}></div>
          <div className="parallax-item absolute top-20 right-[15%] w-24 h-24 rounded-full bg-bistre/30" style={{willChange: "transform, opacity"}}></div>
          <div className="parallax-item absolute top-[50%] left-[10%] w-16 h-16 rounded-full bg-night/20" style={{willChange: "transform, opacity"}}></div>
          <div className="parallax-item absolute bottom-[30%] right-[10%] w-32 h-32 rounded-full bg-bistre/20" style={{willChange: "transform, opacity"}}></div>
        </div>
        <SponsorSection />
      </div>
      
      {/* Supporters with subtle parallax */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
          <div className="parallax-item absolute top-[30%] left-[5%] w-28 h-28 rounded-full bg-primary-blue/20" style={{willChange: "transform, opacity"}}></div>
          <div className="parallax-item absolute bottom-[20%] right-[5%] w-36 h-36 rounded-full bg-bistre/20" style={{willChange: "transform, opacity"}}></div>
        </div>
        <SupportersSection />
      </div>
    </div>
  );
};

export default Index;
