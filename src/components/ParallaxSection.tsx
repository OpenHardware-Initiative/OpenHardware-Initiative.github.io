
import React, { useEffect, useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  height?: string;
  overlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  bgImage,
  height = "100vh",
  overlay = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Check if section is in viewport
      if (
        scrollPosition > sectionTop - window.innerHeight &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Calculate parallax effect
        const yOffset = (scrollPosition - sectionTop) * 0.4;
        
        if (sectionRef.current.querySelector(".parallax-bg")) {
          const bgElement = sectionRef.current.querySelector(".parallax-bg") as HTMLElement;
          bgElement.style.transform = `translateY(${yOffset}px)`;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {bgImage && (
        <div 
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-primary-blue/50 to-primary-blue/80"
        />
      )}
      
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
