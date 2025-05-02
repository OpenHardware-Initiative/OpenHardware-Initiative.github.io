
import React, { useEffect, useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  height?: string;
  overlay?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
  className?: string;
  rotation?: boolean;
  scale?: boolean;
  opacity?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  bgImage,
  height = "100vh",
  overlay = true,
  direction = "down",
  speed = 0.4,
  className = "",
  rotation = false,
  scale = false,
  opacity = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled (0 to 1)
      const scrollProgress = (scrollPosition - (sectionTop - viewportHeight)) / 
                            (sectionHeight + viewportHeight);
      
      // Check if section is in viewport (with buffer)
      if (scrollProgress >= -0.5 && scrollProgress <= 1.5) {
        // Calculate parallax effect
        const yOffset = (scrollPosition - sectionTop) * speed;
        const xOffset = (scrollPosition - sectionTop) * speed;
        
        // Apply background parallax
        if (sectionRef.current.querySelector(".parallax-bg")) {
          const bgElement = sectionRef.current.querySelector(".parallax-bg") as HTMLElement;
          
          let transform = '';
          if (direction === "down" || direction === "up") {
            transform += `translateY(${direction === "down" ? yOffset : -yOffset}px)`;
          } else if (direction === "left" || direction === "right") {
            transform += `translateX(${direction === "right" ? xOffset : -xOffset}px)`;
          }
          
          if (rotation) {
            transform += ` rotate(${scrollProgress * 5}deg)`;
          }
          
          if (scale) {
            const scaleValue = 1 + (scrollProgress * 0.2);
            transform += ` scale(${Math.max(0.8, Math.min(scaleValue, 1.2))})`;
          }
          
          bgElement.style.transform = transform;
          
          if (opacity) {
            // Fade in as enters view, fade out as leaves
            const opacityValue = 1 - Math.abs((scrollProgress - 0.5) * 1.5);
            bgElement.style.opacity = Math.max(0, Math.min(opacityValue, 1)).toString();
          }
        }
        
        // Add content parallax effect
        if (contentRef.current) {
          let contentTransform = '';
          
          // Content moves slower than background for depth effect
          if (direction === "down" || direction === "up") {
            contentTransform += `translateY(${direction === "down" ? yOffset * 0.2 : -yOffset * 0.2}px)`;
          } else if (direction === "left" || direction === "right") {
            contentTransform += `translateX(${direction === "right" ? xOffset * 0.2 : -xOffset * 0.2}px)`;
          }
          
          contentRef.current.style.transform = contentTransform;
          
          if (opacity) {
            // Fade in as user scrolls into view
            const contentOpacity = Math.min(1, 0.3 + scrollProgress * 0.7);
            contentRef.current.style.opacity = Math.max(0, Math.min(contentOpacity, 1)).toString();
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial call to set positions
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [direction, speed, rotation, scale, opacity]);
  
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
            willChange: "transform, opacity",
            zIndex: 0
          }}
        />
      )}
      
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-primary-blue/50 to-primary-blue/80 z-[1]"
        />
      )}
      
      <div 
        ref={contentRef} 
        className="relative z-10 h-full flex items-center justify-center"
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
