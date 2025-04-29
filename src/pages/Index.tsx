
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ParallaxSection from "@/components/ParallaxSection";
import SponsorSection from "@/components/SponsorSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Chip, Lightbulb, Database } from "lucide-react";

const Index = () => {
  const focusAreasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create animated shapes
    const createShapes = () => {
      const shapes = document.querySelectorAll('.geometric-shape');
      shapes.forEach(shape => shape.remove());
      
      const container = document.querySelector('.hero-section');
      if (container) {
        for (let i = 0; i < 5; i++) {
          const shape = document.createElement('div');
          shape.classList.add('geometric-shape');
          
          // Random size between 100px and 300px
          const size = Math.floor(Math.random() * 200) + 100;
          shape.style.width = `${size}px`;
          shape.style.height = `${size}px`;
          
          // Random position
          const maxX = container.clientWidth - size;
          const maxY = container.clientHeight - size;
          const x = Math.floor(Math.random() * maxX);
          const y = Math.floor(Math.random() * maxY);
          shape.style.left = `${x}px`;
          shape.style.top = `${y}px`;
          
          // Random color gradient
          const colors = [
            'from-primary-blue/30 to-bistre/30',
            'from-bistre/20 to-primary-blue/20',
            'from-primary-blue/20 to-night/20'
          ];
          shape.classList.add(colors[Math.floor(Math.random() * colors.length)]);
          
          // Add animation
          shape.style.animationDelay = `${Math.random() * 5}s`;
          shape.classList.add('animate-float');
          
          container.appendChild(shape);
        }
      }
    };
    
    createShapes();
    window.addEventListener('resize', createShapes);
    
    return () => {
      window.removeEventListener('resize', createShapes);
    };
  }, []);

  const animateElement = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(animateElement, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="hero-section bg-offwhite">
        <div className="circuit-pattern"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full md:w-3/5 pt-24">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-primary-blue">
              CircuitForge
              <span className="block text-bistre">Hardware Initiative</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Pioneering the future of hardware acceleration, chip design, and smart manufacturing
              through student-led innovation and research.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button className="bg-primary-blue hover:bg-primary-blue/90 text-lg px-8 py-6">
                  Explore Projects
                </Button>
              </Link>
              <a 
                href="https://forms.google.com/form" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="text-lg px-8 py-6 border-2">
                  Join Our Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section ref={focusAreasRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="animate-on-scroll opacity-0 shadow-sm hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 w-14 h-14 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue">
                  <Chip size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Chip Design</h3>
                <p className="text-gray-600">
                  Creating innovative chip architectures for next-generation computing, focusing on energy efficiency and performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-on-scroll opacity-0 shadow-sm hover:shadow-md transition-all" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6">
                <div className="mb-4 w-14 h-14 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue">
                  <Cpu size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Hardware Acceleration</h3>
                <p className="text-gray-600">
                  Developing specialized hardware accelerators for machine learning workloads to improve both speed and efficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-on-scroll opacity-0 shadow-sm hover:shadow-md transition-all" style={{ animationDelay: "0.4s" }}>
              <CardContent className="pt-6">
                <div className="mb-4 w-14 h-14 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue">
                  <Database size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Manufacturing</h3>
                <p className="text-gray-600">
                  Implementing Industry 4.0 techniques with IoT devices for smarter, more efficient manufacturing processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-on-scroll opacity-0 shadow-sm hover:shadow-md transition-all" style={{ animationDelay: "0.6s" }}>
              <CardContent className="pt-6">
                <div className="mb-4 w-14 h-14 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">TinyML</h3>
                <p className="text-gray-600">
                  Bringing machine learning to embedded and IoT devices with optimized algorithms and hardware designs.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="outline" className="border-2">
                Learn More About Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Team Section with Parallax */}
      <ParallaxSection bgImage="/placeholder.svg">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/90 backdrop-blur-sm py-12 px-6 md:px-12 rounded-lg shadow-xl max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-primary-blue">Our Team</h2>
            <p className="text-lg mb-8">
              We're a diverse group of students and researchers passionate about pushing the boundaries of hardware innovation.
            </p>
            <Link to="/team">
              <Button className="bg-primary-blue hover:bg-primary-blue/90">
                Meet The Team
              </Button>
            </Link>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Sponsors */}
      <SponsorSection />
    </>
  );
};

export default Index;
