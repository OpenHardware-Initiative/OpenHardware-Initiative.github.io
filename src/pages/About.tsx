
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CircuitForge</h1>
          <p className="text-xl max-w-3xl">
            A student-led initiative at the forefront of hardware innovation, bridging academic research 
            with practical applications in chip design, electronics, and AI acceleration.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-blue">Our Story</h2>
              <p className="mb-4">
                CircuitForge was founded in 2020 by a group of passionate engineering students who recognized
                the growing need for specialized hardware solutions in the era of AI and IoT. What began as
                a small project group has evolved into a comprehensive initiative spanning multiple domains
                of hardware innovation.
              </p>
              <p className="mb-4">
                Our journey started with a simple FPGA project to accelerate neural networks, which quickly
                expanded to explore neuromorphic computing, in-memory computing architectures, and smart
                manufacturing solutions.
              </p>
              <p>
                Today, we collaborate with academic researchers, industry partners, and other student
                initiatives to develop cutting-edge hardware solutions that address real-world challenges.
              </p>
            </div>
            <div className="relative h-80 md:h-full min-h-[320px]">
              <img 
                src="/placeholder.svg" 
                alt="CircuitForge team working" 
                className="rounded-lg shadow-lg object-cover h-full w-full" 
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="bg-primary-blue text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Founded in 2020</p>
                  <p>Technical University Munich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary-blue">Our Mission</h2>
            <p className="text-lg">
              To foster innovation in hardware design by bridging the gap between theoretical research and practical
              implementation, while providing students with hands-on experience in cutting-edge technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="mb-4">
                  Pushing the boundaries of what's possible in hardware design through creative approaches
                  and interdisciplinary collaboration.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Novel chip architectures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Energy-efficient designs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Bio-inspired computing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <p className="mb-4">
                  Providing students with practical experience and knowledge in hardware design and implementation
                  that complements their academic studies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Hands-on workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Mentorship programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Industry connections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Impact</h3>
                <p className="mb-4">
                  Creating solutions that address real-world challenges and contribute to advancements
                  in technology and sustainable development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Energy-efficient AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Smart manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500 mt-1"><Check size={16} /></span>
                    <span>Open-source contributions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-blue">Our Journey</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary-blue/20 -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="relative z-10">
              {/* 2020 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-primary-blue">2020</h3>
                  <p className="font-medium">Foundation</p>
                  <p className="text-gray-600 mt-2">
                    CircuitForge was established by a group of engineering students with a shared passion for hardware innovation.
                  </p>
                </div>
                <div className="bg-primary-blue w-4 h-4 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              {/* 2021 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 pr-8"></div>
                <div className="bg-primary-blue w-4 h-4 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-primary-blue">2021</h3>
                  <p className="font-medium">First Projects</p>
                  <p className="text-gray-600 mt-2">
                    Launched our first FPGA-based projects and established partnerships with local industry.
                  </p>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-primary-blue">2022</h3>
                  <p className="font-medium">Expansion</p>
                  <p className="text-gray-600 mt-2">
                    Expanded our focus to include neuromorphic computing and IoT solutions for smart manufacturing.
                  </p>
                </div>
                <div className="bg-primary-blue w-4 h-4 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              {/* 2023 */}
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="bg-primary-blue w-4 h-4 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-primary-blue">2023</h3>
                  <p className="font-medium">Innovation Hub</p>
                  <p className="text-gray-600 mt-2">
                    Established CircuitForge as a recognized innovation hub with multiple ongoing projects and industry collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
