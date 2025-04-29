
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
      
      {/* Contact Form and Info */}
      <section className="py-16 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary-blue">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary-blue hover:bg-primary-blue/90">
                  Send Message
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="flex flex-col space-y-8">
              <h2 className="text-2xl font-bold mb-2 text-primary-blue">Contact Information</h2>
              <p className="text-gray-600">
                We'd love to hear from you! Whether you're interested in joining our team,
                collaborating on a project, or just want to learn more about what we do.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-blue/10 p-3 rounded-full text-primary-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">contact@circuitforge.org</p>
                    <a 
                      href="mailto:contact@circuitforge.org" 
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
              
              <div>
                <h3 className="font-bold mb-4">Connect with us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-primary-blue text-white p-3 rounded-full hover:bg-primary-blue/90 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-primary-blue text-white p-3 rounded-full hover:bg-primary-blue/90 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="mt-auto pt-8">
                <h3 className="font-bold mb-4">Join our team</h3>
                <p className="text-gray-600 mb-4">
                  Interested in being part of CircuitForge? We're always looking for talented individuals
                  who are passionate about hardware innovation.
                </p>
                <a 
                  href="https://forms.google.com/form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                    Apply to Join Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary-blue">Find Us</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="CircuitForge Location"
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
