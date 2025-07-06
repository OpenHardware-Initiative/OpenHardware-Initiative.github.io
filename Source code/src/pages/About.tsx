
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About OpenHardware</h1>
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
                OpenHardware was founded in 2025 by members of the Brain-Inspired Computing group at neuroTUM. 
                The founders recognized a significant gap in hands-on student initiatives, particularly within 
                hardware design, chip development, and accelerator engineering. Initially rooted in neuromorphic 
                computing under neuroTUM, the group soon realized the scope of their mission extended far beyond 
                just neuromorphic technologies.
              </p>
              <p className="mb-4">
                The transition to an independent initiative was solidified during their participation in the AMD 
                Open Hardware Competition, developing custom hardware accelerators for Visual Transformers (ViT) 
                tailored for drone racing and collision avoidance, leveraging advanced AI compilers like IREE and MLIR.
              </p>
              <p>
                Today, OpenHardware explores a broad spectrum of emerging technologies including neuromorphic and 
                in-memory computing, custom accelerators, AI compilers, and targets real-world applications in 
                drones, robotics, and biomedical technology.
              </p>
            </div>
            <div className="relative h-80 md:h-full min-h-[320px]">
              <img 
                src="/placeholder.svg" 
                alt="OpenHardware team working" 
                className="rounded-lg shadow-lg object-cover h-full w-full" 
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="bg-primary-blue text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Founded in 2025</p>
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
              To foster innovation in hardware design by bridging theoretical research with practical 
              implementation, empowering students through direct engagement with cutting-edge technologies.
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
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
                    <span>Novel chip architectures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
                    <span>Energy-efficient designs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
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
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
                    <span>Hands-on workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
                    <span>Hackathons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
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
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
                    <span>Advancing emerging hardware technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
                    <span>Connecting diverse industries through events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-blue mt-1"><Award size={16} /></span>
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
              {/* 2022 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-primary-blue">2022</h3>
                  <p className="font-medium">neuroTUM e.V foundation</p>
                  <p className="text-gray-600 mt-2">
                    neuroTUM e.V was stablished by Leon Gebhard, Agustin N. Coppari Hollmann and Isabel Whitely Tscherniak 
                    with the goal of bridging the gap of neuroscience and engineering.
                  </p>
                </div>
                <div className="bg-primary-blue w-4 h-4 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              {/* 2023 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 pr-8"></div>
                <div className="bg-primary-blue w-4 h-4 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-primary-blue">2023</h3>
                  <p className="font-medium">Start of Brain-Inspired Computing (BIC) Group</p>
                  <p className="text-gray-600 mt-2">
                    The BIC group was stablished by Agustin N. Coppari Hollmann in order to explore 
                    the different Hardware and Software aspects of neuromorphic computing.
                  </p>
                </div>
              </div>
              
              {/* 2024 */}
              <div className="flex items-center mb-12">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-primary-blue">2024</h3>
                  <p className="font-medium">Synopsys ASIP Hackathon</p>
                  <p className="text-gray-600 mt-2">
                    The organization of the ASIP Hackathon with Synopsys by Ipek Akdeniz and Agustin N. Coppari 
                    Hollmann marked a shift for BIC towards a broader field and into processor design.
                  </p>
                </div>
                <div className="bg-primary-blue w-4 h-4 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              {/* 2025 */}
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="bg-primary-blue w-4 h-4 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-primary-blue">2025</h3>
                  <p className="font-medium">Foundation of the OpenHardware Initiative</p>
                  <p className="text-gray-600 mt-2">
                    OpenHardware is founded as a student initiative under the OpenResearch e.V. by Ipek Akdeniz, 
                    Deniz Onat Erdogan, Aleksa Stojkovic and Agustin N. Coppari Hollmann.
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
