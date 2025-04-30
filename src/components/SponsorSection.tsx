
import React from "react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { MEDIA_PATHS } from "@/utils/mediaUtils";

interface Sponsor {
  name: string;
  logo: string;
  description?: string;
}

const sponsors: Sponsor[] = [
  { 
    name: "Freunde der TUM", 
    logo: "/lovable-uploads/cd54e028-fd30-418e-9da8-f6c1135ca0d5.png",
    description: "Association of Alumni and Friends" 
  }
];

const SponsorSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-primary-blue/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-blue">
          <span className="relative pb-2">
            Our Sponsors
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-bistre"></span>
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-offwhite border border-primary-blue/20 hover:border-primary-blue/50 transition-all overflow-hidden">
            <div className="p-8 flex flex-col items-center justify-center">
              <div className="w-full max-w-md mx-auto mb-4">
                <img 
                  src={sponsors[0].logo} 
                  alt={`${sponsors[0].name} logo`} 
                  className="w-full h-auto" 
                />
              </div>
              {sponsors[0].description && (
                <p className="text-primary-blue text-lg text-center mt-2">
                  {sponsors[0].description}
                </p>
              )}
            </div>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-night">
              Interested in sponsoring our initiatives? <a href="/contact" className="text-primary-blue hover:underline">Contact us</a> to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
