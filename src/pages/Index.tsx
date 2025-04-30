
import React from "react";
import { Link } from "react-router-dom";
import SponsorSection from "@/components/SponsorSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Chip, Cpu, CircuitBoard, Database } from "lucide-react";
import CircuitPattern from "@/components/CircuitPattern";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with modern design inspired by reference */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Circuit background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/lovable-uploads/2026b668-4037-425a-b348-cf29b9b520bf.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.06
          }}
        />
        
        {/* Animated circuit pattern overlay */}
        <CircuitPattern />
        
        {/* Large decorative circles inspired by reference */}
        <div className="hero-circle left-[10%] top-[-10%] w-[500px] h-[500px] bg-tertiary-purple opacity-10 hidden md:block" />
        <div className="hero-circle right-[-10%] bottom-[-30%] w-[600px] h-[600px] bg-primary-blue/10 hidden md:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl mb-3 text-primary-blue">
              Open<span className="text-tertiary-purple">Hardware</span>
            </h1>
            
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-night mb-8 max-w-3xl">
              Pioneering the future of hardware acceleration
            </p>
            
            <div className="max-w-2xl">
              <p className="text-xl mb-10 text-gray-700">
                Student-led innovation and research in chip design, hardware acceleration, 
                and smart manufacturing systems from concept to implementation.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/projects">
                  <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90 text-white text-lg px-8">
                    Our Projects
                  </Button>
                </Link>
                <a 
                  href="https://forms.google.com/form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="border-tertiary-purple text-tertiary-purple hover:bg-tertiary-purple/5 text-lg px-8">
                    Join Our Team
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas with clean modern design */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 relative">
              Our Focus Areas
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-tertiary-purple"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="focus-card">
                <CardContent className="p-6">
                  <div className="focus-icon bg-tertiary-purple/10 text-tertiary-purple">
                    <CircuitBoard size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Chip Design</h3>
                  <p className="text-gray-600">
                    Creating innovative chip architectures for next-generation computing, focusing on energy efficiency and performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="focus-card">
                <CardContent className="p-6">
                  <div className="focus-icon bg-primary-blue/10 text-primary-blue">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI Hardware Acceleration</h3>
                  <p className="text-gray-600">
                    Developing specialized hardware accelerators for machine learning workloads to improve both speed and efficiency.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="focus-card">
                <CardContent className="p-6">
                  <div className="focus-icon bg-tertiary-purple/10 text-tertiary-purple">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Smart Manufacturing</h3>
                  <p className="text-gray-600">
                    Implementing Industry 4.0 techniques with IoT devices for smarter, more efficient manufacturing processes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="focus-card">
                <CardContent className="p-6">
                  <div className="focus-icon bg-primary-blue/10 text-primary-blue">
                    <Chip size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">TinyML</h3>
                  <p className="text-gray-600">
                    Bringing machine learning to embedded and IoT devices with optimized algorithms and hardware designs.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-16">
              <Link to="/about">
                <Button variant="outline" className="border-2 border-primary-blue hover:bg-primary-blue/5">
                  Learn More About Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section with parallax */}
      <section className="relative py-32 overflow-hidden bg-gray-50">
        <div 
          className="parallax-bg"
          style={{
            backgroundImage: `url('/lovable-uploads/00225023-66fb-4121-a55e-2d302a639d83.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-blue">Our Team</h2>
            <p className="text-lg mb-10 text-gray-700">
              We're a diverse group of students and researchers passionate about pushing 
              the boundaries of hardware innovation.
            </p>
            <Link to="/team">
              <Button className="bg-tertiary-purple hover:bg-tertiary-purple/90 text-white">
                Meet The Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sponsors */}
      <SponsorSection />
    </div>
  );
};

export default Index;
