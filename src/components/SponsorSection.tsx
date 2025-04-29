
import React from "react";
import { Card } from "@/components/ui/card";

interface Sponsor {
  name: string;
  logo: string;
}

const sponsors: Sponsor[] = [
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "InnovateSystems", logo: "/placeholder.svg" },
  { name: "NextGen Semiconductor", logo: "/placeholder.svg" },
  { name: "AI Accelerate", logo: "/placeholder.svg" },
  { name: "ChipFoundry", logo: "/placeholder.svg" },
];

const SponsorSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="flex items-center justify-center p-6 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="max-w-full max-h-full p-2" 
                  />
                </div>
                <p className="font-medium">{sponsor.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
