import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import ApplicationLink from "@/components/ApplicationLink";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions about our projects or interested in collaborating? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Contact Info Card */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary-blue">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Whether you're interested in joining our team,
                collaborating on a project, or just want to learn more about what we do.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue/10 p-3 rounded-full text-primary-blue">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">contact@open-hardware-initiative.com</p>
                      <a 
                        href="mailto:contact@open-hardware-initiative.com" 
                        className="text-primary-blue hover:underline mt-1 inline-block"
                      >
                        Send an email
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue/10 p-3 rounded-full text-primary-blue">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">Location</h3>
                      <p className="text-gray-600">
                        Technical University Munich<br />
                        Arcisstraße 21<br />
                        80333 Munich, Germany
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-4">Social Media</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue/10 p-3 rounded-full text-primary-blue">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">LinkedIn</h3>
                      <p className="text-gray-600 mb-2">Follow us on LinkedIn</p>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-blue hover:underline inline-block"
                      >
                        Visit our LinkedIn
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-blue/10 p-3 rounded-full text-primary-blue">
                      <Github size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">GitHub</h3>
                      <p className="text-gray-600 mb-2">Check out our projects</p>
                      <a 
                        href="https://github.com/OpenHardware-Initiative" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-blue hover:underline inline-block"
                      >
                        Visit our GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-bold mb-4">Join our team</h3>
                <p className="text-gray-600 mb-4">
                  Interested in being part of OpenHardware? We're always looking for talented individuals
                  who are passionate about hardware innovation.
                </p>
                <ApplicationLink>
                  <Button variant="outline" className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                    Apply to Join Us
                  </Button>
                </ApplicationLink>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary-blue">Find Us</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="OpenHardware Location"
              className="w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.985656863296!2d11.5663333!3d48.1508957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75ea98a59a67%3A0x5886ef6d96b94c66!2sTechnical%20University%20of%20Munich!5e0!3m2!1sen!2sus!4v1625581697523!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
