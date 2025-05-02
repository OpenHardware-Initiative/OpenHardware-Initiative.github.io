
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Cpu, Database, Car, Microscope } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ApplicationsSection = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Advanced parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsRef.current) return;
      
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate how far through the section we've scrolled (0 to 1)
      const scrollProgress = (scrollPosition - (sectionTop - viewportHeight)) / 
                           (sectionHeight + viewportHeight);
      
      // Check if section is in viewport (with buffer)
      if (scrollProgress >= -0.2 && scrollProgress <= 1.2) {
        // Card staggered animations
        const cards = cardsRef.current.querySelectorAll('.focus-card');
        
        cards.forEach((card, index) => {
          const cardElement = card as HTMLElement;
          // Create a staggered effect based on index and scroll
          const delay = index * 0.15;
          const cardScrollProgress = Math.max(0, Math.min(1, (scrollProgress - delay) * 2));
          
          // Only apply effect if not on mobile
          if (!isMobile) {
            // Initial state is translated down and rotated
            const translateY = 100 - (cardScrollProgress * 100);
            const opacity = Math.min(1, cardScrollProgress * 2);
            const rotateX = 20 - (cardScrollProgress * 20); // Tilt effect
            const scale = 0.8 + (cardScrollProgress * 0.2); // Subtle scale
            
            cardElement.style.transform = `perspective(1000px) translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`;
            cardElement.style.opacity = `${opacity}`;
          } else {
            cardElement.style.transform = '';
            cardElement.style.opacity = '1';
          }
        });
        
        // Title parallax effect
        if (titleRef.current) {
          const titleProgress = Math.max(0, Math.min(1, scrollProgress * 3));
          const titleTranslateY = 50 - (titleProgress * 50);
          const titleOpacity = Math.min(1, titleProgress * 1.5);
          
          titleRef.current.style.transform = `translateY(${titleTranslateY}px)`;
          titleRef.current.style.opacity = `${titleOpacity}`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);
  
  return (
    <section ref={sectionRef} className="py-20 bg-primary-blue/5 relative overflow-hidden">
      {/* Decorative shapes with parallax */}
      <div className="absolute -z-10 opacity-10 top-0 left-0 w-full h-full overflow-hidden">
        <div className="parallax-item absolute top-10 left-10 w-64 h-64 rounded-full bg-bistre/20"></div>
        <div className="parallax-item absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary-blue/20"></div>
        <div className="parallax-item absolute top-[60%] left-[30%] w-40 h-40 rounded-full bg-bistre/15"></div>
        <div className="parallax-item absolute top-[20%] right-[20%] w-32 h-32 rounded-full bg-primary-blue/15"></div>
      </div>
      
      {/* 3D perspective wrapper for depth */}
      <div style={{ perspective: "2000px" }} className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 
              ref={titleRef} 
              className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary-blue"
              style={{ willChange: "transform, opacity" }}
            >
              <span className="relative pb-2">
                Where We Apply Our Technology
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-bistre"></span>
              </span>
            </h2>
            
            <div 
              ref={cardsRef} 
              className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-6 max-w-5xl mx-auto`}
            >
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 transition-all duration-700" style={{ willChange: "transform, opacity" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-blue">Robotics</h3>
                </CardContent>
              </Card>
              
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 transition-all duration-700" style={{ willChange: "transform, opacity" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-blue">Drones</h3>
                </CardContent>
              </Card>
              
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 transition-all duration-700" style={{ willChange: "transform, opacity" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <Database size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-blue">Smart Manufacturing</h3>
                </CardContent>
              </Card>
              
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 transition-all duration-700" style={{ willChange: "transform, opacity" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <Car size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-blue">Automotive</h3>
                </CardContent>
              </Card>
              
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 transition-all duration-700" style={{ willChange: "transform, opacity" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <Microscope size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-blue">Biomedical</h3>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-16">
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/5"
                >
                  Learn More About Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
