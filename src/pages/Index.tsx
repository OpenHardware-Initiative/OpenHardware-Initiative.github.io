
import React from "react";
import { Link } from "react-router-dom";
import ParallaxSection from "@/components/ParallaxSection";
import SponsorSection from "@/components/SponsorSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, CircuitBoard, Lightbulb, Database } from "lucide-react";
import CircuitAnimation from "@/components/CircuitAnimation";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-night relative overflow-hidden">
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pt-24 z-10 text-offwhite">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
              OpenHardware
              <span className="block text-tertiary-purple">Initiative</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Pioneering the future of hardware acceleration, chip design, and smart manufacturing
              through student-led innovation and research.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button className="bg-tertiary-purple hover:bg-tertiary-purple/90 text-lg px-8 py-6">
                  Explore Projects
                </Button>
              </Link>
              <a 
                href="https://forms.google.com/form" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="text-lg px-8 py-6 border-2 border-tertiary-purple hover:bg-tertiary-purple/10">
                  Join Our Team
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[500px] mt-12 md:mt-0 z-10">
            <CircuitAnimation />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-blue">Our Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-sm hover:shadow-md transition-all border-l-4 border-l-tertiary-purple">
              <CardContent className="pt-6">
                <div className="mb-4 w-14 h-14 bg-tertiary-purple/10 rounded-full flex items-center justify-center text-tertiary-purple">
                  <CircuitBoard size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Chip Design</h3>
                <p className="text-gray-600">
                  Creating innovative chip architectures for next-generation computing, focusing on energy efficiency and performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-all">
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
            
            <Card className="shadow-sm hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="mb-4 w-14 h-14 bg-bistre/10 rounded-full flex items-center justify-center text-bistre">
                  <Database size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Manufacturing</h3>
                <p className="text-gray-600">
                  Implementing Industry 4.0 techniques with IoT devices for smarter, more efficient manufacturing processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-all border-l-4 border-l-tertiary-purple">
              <CardContent className="pt-6">
                <div className="mb-4 w-14 h-14 bg-tertiary-purple/10 rounded-full flex items-center justify-center text-tertiary-purple">
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
              <Button variant="outline" className="border-2 border-tertiary-purple hover:bg-tertiary-purple/10">
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
              <Button className="bg-tertiary-purple hover:bg-tertiary-purple/90 text-white">
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
