
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Cpu, Database, Car, Microscope } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ApplicationsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-20 bg-primary-blue/5 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary-blue">
            <span className="relative pb-2">
              Where We Apply Our Technology
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-bistre"></span>
            </span>
          </h2>
          
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-6 max-w-5xl mx-auto`}>
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                  <Bot size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-blue">Robotics</h3>
              </CardContent>
            </Card>
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                  <Cpu size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-blue">Drones</h3>
              </CardContent>
            </Card>
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                  <Database size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-blue">Smart Manufacturing</h3>
              </CardContent>
            </Card>
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                  <Car size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-blue">Automotive</h3>
              </CardContent>
            </Card>
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50">
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
              <Button variant="outline" className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/5">
                Learn More About Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
