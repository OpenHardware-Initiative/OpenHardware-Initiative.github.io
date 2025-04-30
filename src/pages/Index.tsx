
import React from "react";
import { Link } from "react-router-dom";
import SponsorSection from "@/components/SponsorSection";
import SupportersSection from "@/components/SupportersSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, CircuitBoard, Database } from "lucide-react";
import CircuitPattern from "@/components/CircuitPattern";

const Index = () => {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Circuit background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/lovable-uploads/b0c52e6e-f6e2-40f7-9c6e-a9ac3973e58d.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05
          }}
        />
        
        {/* Static circuit pattern overlay */}
        <CircuitPattern />
        
        {/* Large decorative circles */}
        <div className="hero-circle left-[10%] top-[-10%] w-[500px] h-[500px] bg-bistre opacity-10 hidden md:block" />
        <div className="hero-circle right-[-10%] bottom-[-30%] w-[600px] h-[600px] bg-primary-blue/10 hidden md:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl mb-3 text-primary-blue">
              Open<span className="text-bistre">Hardware</span>
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
                <a 
                  href="https://forms.google.com/form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="border-bistre text-bistre hover:bg-bistre/5 text-lg px-8">
                    Join Our Team
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas with cleaner design */}
      <section className="py-20 bg-offwhite relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary-blue">
              <span className="relative pb-2">
                Our Focus Areas
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-bistre"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
                <CardContent className="p-8">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <CircuitBoard size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Chip Design</h3>
                  <p className="text-night">
                    Creating innovative chip architectures for next-generation computing, focusing on energy efficiency and performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
                <CardContent className="p-8">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">AI Hardware Acceleration</h3>
                  <p className="text-night">
                    Developing specialized hardware accelerators for machine learning workloads to improve both speed and efficiency.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
                <CardContent className="p-8">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">Smart Manufacturing</h3>
                  <p className="text-night">
                    Implementing Industry 4.0 techniques with IoT devices for smarter, more efficient manufacturing processes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
                <CardContent className="p-8">
                  <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                    <CircuitBoard size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-blue">TinyML</h3>
                  <p className="text-night">
                    Bringing machine learning to embedded and IoT devices with optimized algorithms and hardware designs.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-16">
              <Link to="/about">
                <Button variant="outline" className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/5">
                  Learn More About Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section with parallax */}
      <section className="relative py-32 overflow-hidden bg-primary-blue/5">
        <div 
          className="parallax-bg"
          style={{
            backgroundImage: `url('/lovable-uploads/b0c52e6e-f6e2-40f7-9c6e-a9ac3973e58d.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-blue">Our Team</h2>
            <p className="text-lg mb-10 text-night">
              We're a diverse group of students and researchers passionate about pushing 
              the boundaries of hardware innovation.
            </p>
            <Link to="/team">
              <Button className="bg-bistre hover:bg-bistre/90 text-offwhite">
                Meet The Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sponsors */}
      <SponsorSection />
      
      {/* Supporters */}
      <SupportersSection />
    </div>
  );
};

export default Index;
