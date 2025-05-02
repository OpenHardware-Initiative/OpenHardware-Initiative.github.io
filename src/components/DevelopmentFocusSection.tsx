
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CircuitBoard, Cpu, Database } from "lucide-react";

const DevelopmentFocusSection = () => {
  return (
    <section className="py-20 bg-offwhite relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary-blue">
            <span className="relative pb-2">
              What We Work On
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-bistre"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 animate-float duration-[4s] delay-[0s]">
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
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 animate-float duration-[4s] delay-[0.5s]">
              <CardContent className="p-8">
                <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-blue">Control and Computer Vision</h3>
                <p className="text-night">Developing software for Drones and Robotics using state-of-the-art control and computer vision systems.</p>
              </CardContent>
            </Card>
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 animate-float duration-[4s] delay-[1s]">
              <CardContent className="p-8">
                <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-blue">AI Processors and Accelerators</h3>
                <p className="text-night">Building next-generation processors and accelerators specifically designed for AI and machine learning applications.</p>
              </CardContent>
            </Card>
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 animate-float duration-[4s] delay-[0.2s]">
              <CardContent className="p-8">
                <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-blue">EDA & Manufacturing Tools</h3>
                <p className="text-night">
                  Creating electronic design automation tools that streamline chip development and manufacturing processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 animate-float duration-[4s] delay-[0.7s]">
              <CardContent className="p-8">
                <div className="focus-icon bg-primary-blue/5 text-primary-blue">
                  <CircuitBoard size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-blue">AI Compilers</h3>
                <p className="text-night">
                  Developing specialized compilers that optimize AI models for efficient execution on custom hardware.
                </p>
              </CardContent>
            </Card>
            
            <Card className="focus-card bg-offwhite border-primary-blue/20 hover:border-primary-blue/50 animate-float duration-[4s] delay-[1.2s]">
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
        </div>
      </div>
    </section>
  );
};

export default DevelopmentFocusSection;
