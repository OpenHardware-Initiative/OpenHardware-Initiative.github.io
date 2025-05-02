
import React, { useEffect, useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  height?: string;
  overlay?: boolean;
  direction?: 'up' | 'down';
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  bgImage,
  height = "100vh",
  overlay = true,
  direction = "down",
  speed = 0.4,
  className = ""
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
        const yOffset = (scrollPosition - sectionTop) * speed;
        
        if (sectionRef.current.querySelector(".parallax-bg")) {
          const bgElement = sectionRef.current.querySelector(".parallax-bg") as HTMLElement;
          bgElement.style.transform = `translateY(${direction === "down" ? yOffset : -yOffset}px)`;
        }
        
        // Add subtle effect to content as well
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${direction === "down" ? yOffset * 0.1 : -yOffset * 0.1}px)`;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [direction, speed]);
  
  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {bgImage && (
        <div 
          className="parallax-bg absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
            zIndex: 0
          }}
        />
      )}
      
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-primary-blue/50 to-primary-blue/80 z-[1]"
        />
      )}
      
      <div ref={contentRef} className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
