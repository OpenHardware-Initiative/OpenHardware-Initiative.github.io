
import React from "react";
import { Card } from "@/components/ui/card";

interface Partner {
  name: string;
  role: string;
  organization: string;
  logoSrc: string;
}

const partners: Partner[] = [
  {
    name: "Prof. Schlichtmann",
    role: "EDA Chair",
    organization: "TUM",
    logoSrc: "/lovable-uploads/c437def5-92ff-48cf-86eb-2300aa696360.png"
  }, 
  {
    name: "OpenResearch e.V.",
    role: "Non-Profit Organization",
    organization: "",
    logoSrc: "/lovable-uploads/eb05a193-9f42-4e1b-84c5-197b7eacb6a5.png"
  }, 
  {
    name: "neuroTUM",
    role: "Student Initiative",
    organization: "part of OpenResearch e.V.",
    logoSrc: "/lovable-uploads/13247213-358a-4273-9ad0-b5fa1af9c924.png"
  }
];

const SupportersSection = () => {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-blue">
          <span className="relative pb-2">
            Our Partners
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-bistre"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-offwhite border border-primary-blue/20 hover:border-primary-blue/50 transition-all">
              <div className="p-6 text-center flex flex-col items-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logoSrc} 
                    alt={`${partner.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary-blue mb-1">{partner.name}</h3>
                <p className="text-bistre mb-1 font-medium">{partner.role}</p>
                {partner.organization && (
                  <p className="text-night text-sm font-semibold">{partner.organization}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
