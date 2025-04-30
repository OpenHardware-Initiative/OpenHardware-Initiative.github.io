
import React from "react";
import { Card } from "@/components/ui/card";

interface Supporter {
  name: string;
  role: string;
  organization: string;
}

const supporters: Supporter[] = [
  { name: "Dr. Sarah Johnson", role: "Research Director", organization: "National Institute of Technology" },
  { name: "Prof. Michael Chang", role: "Department Chair", organization: "University of Engineering" },
  { name: "Lisa Rodriguez", role: "Industry Advisor", organization: "TechCorp" },
  { name: "Dr. James Wilson", role: "Academic Partner", organization: "Advanced Computing Lab" },
];

const SupportersSection = () => {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-blue">
          <span className="relative pb-2">
            Our Supporters
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-bistre"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {supporters.map((supporter, index) => (
            <Card key={index} className="bg-offwhite border border-primary-blue/20 hover:border-primary-blue/50 transition-all">
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary-blue mb-1">{supporter.name}</h3>
                <p className="text-bistre mb-1">{supporter.role}</p>
                <p className="text-night text-sm">{supporter.organization}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
