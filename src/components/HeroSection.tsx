import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CircuitPattern from "@/components/CircuitPattern";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  // Advanced parallax effect on mouse move and scroll
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate distance from center of screen (in percentage)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (mouseX - centerX) / centerX * 100;
      const moveY = (mouseY - centerY) / centerY * 100;
      
      // Apply to decorative elements with varying intensity
      const decorativeCircles = heroRef.current.querySelectorAll('.hero-circle');
      decorativeCircles.forEach((circle, index) => {
        const speed = index === 0 ? 0.05 : 0.03;
        (circle as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
      
      // Apply subtle effect to team image
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translate(${-moveX * 0.03}px, ${-moveY * 0.03}px)`;
      }
      
      // Apply even more subtle effect to text for better readability
      if (heroTextRef.current) {
        heroTextRef.current.style.transform = `translate(${moveX * 0.01}px, ${moveY * 0.01}px)`;
      }
    };
    
    // Add scroll-based parallax
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollProgress = Math.min(1, scrollY / heroHeight);
      
      // Transform decorative elements based on scroll
      const decorativeCircles = heroRef.current.querySelectorAll('.hero-circle');
      decorativeCircles.forEach((circle, index) => {
        const direction = index === 0 ? -1 : 1;
        const translateY = scrollProgress * 50 * direction;
        const scale = 1 + scrollProgress * 0.1;
        const currentElement = circle as HTMLElement;
        const currentTransform = currentElement.style.transform;
        
        // Update only the Y transform, keep the mousemove X transform
        const newTransform = currentTransform.includes('translate') 
          ? currentTransform.replace(/translate\([^)]+\)/, `translate(${parseFloat(currentTransform.split(',')[0].substring(10))}px, ${translateY}px)`)
          : `translate(0px, ${translateY}px)`;
          
        currentElement.style.transform = newTransform + ` scale(${scale})`;
        currentElement.style.opacity = `${1 - scrollProgress * 0.5}`;
      });
      
      // Create depth effect with scroll
      if (heroTextRef.current) {
        heroTextRef.current.style.transform = `translateY(${scrollProgress * 70}px)`;
        heroTextRef.current.style.opacity = `${1 - scrollProgress * 1.2}`;
      }
      
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${scrollProgress * 30}px)`;
        heroImageRef.current.style.opacity = `${1 - scrollProgress * 1.2}`;
      }
      
      // Apply parallax to the circuit background
      const circuitBg = heroRef.current.querySelector('.circuit-bg');
      if (circuitBg) {
        (circuitBg as HTMLElement).style.transform = `translateY(${scrollProgress * 150}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24" style={{perspective: "1000px"}}>
      {/* Circuit background with parallax */}
      <div className="circuit-bg absolute inset-0 z-0" style={{
        backgroundImage: `url('/lovable-uploads/b1b3ac59-c3b2-4f3e-99d8-f4241b81e61e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05,
        willChange: 'transform'
      }} />
        
      {/* Static circuit pattern overlay */}
      <CircuitPattern />
        
      {/* Large decorative circles with enhanced parallax effect */}
      <div className="hero-circle absolute left-[10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-bistre opacity-10 hidden md:block transition-all duration-500 ease-out" style={{willChange: 'transform, opacity'}} />
      <div className="hero-circle absolute right-[-10%] bottom-[-30%] w-[600px] h-[600px] rounded-full bg-primary-blue/10 hidden md:block transition-all duration-500 ease-out" style={{willChange: 'transform, opacity'}} />
      <div className="hero-circle absolute left-[20%] bottom-[-10%] w-[300px] h-[300px] rounded-full bg-night/5 hidden md:block transition-all duration-500 ease-out" style={{willChange: 'transform, opacity'}} />
        
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div ref={heroTextRef} className="w-full lg:w-1/2" style={{willChange: 'transform, opacity'}}>
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
            
          {/* Team image with enhanced parallax effect */}
          <div ref={heroImageRef} className="w-full lg:w-1/2 flex justify-center lg:justify-end" style={{willChange: 'transform, opacity'}}>
            <div className="team-image relative overflow-hidden rounded-2xl shadow-lg border-4 border-offwhite transition-transform duration-500 ease-out">
              <img 
                src="/lovable-uploads/f96871b8-773a-4f10-a7bf-67c1abe3384c.png" 
                alt="OpenHardware Team" 
                className="w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
