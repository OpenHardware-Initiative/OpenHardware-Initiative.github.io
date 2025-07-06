import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowLeft, Mail } from "lucide-react";

const ApplicationClosed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-primary-blue/5 to-bistre/5">
      {/* Header */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <Clock size={64} className="mx-auto text-white/80" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Application Period Closed</h1>
            <p className="text-xl text-white/90">
              Thank you for your interest in joining OpenHardware Initiative!
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock size={32} className="text-primary-blue" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-blue">
                    Applications Currently Closed
                  </h2>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    We're currently not accepting new applications. Our team is at full capacity 
                    and we want to ensure we can provide the best experience for our current members.
                  </p>
                  
                  <div className="bg-bistre/5 border border-bistre/20 rounded-lg p-6 mb-8">
                    <h3 className="font-bold text-bistre mb-3">What's Next?</h3>
                    <ul className="text-left text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-bistre font-bold">•</span>
                        <span>Follow us on social media for updates on future opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-bistre font-bold">•</span>
                        <span>Check back here start of next semester for new application periods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-bistre font-bold">•</span>
                        <span>Explore our projects to learn more about our work</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                      <Button variant="outline" className="flex items-center gap-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                        <ArrowLeft size={16} />
                        Back to Home
                      </Button>
                    </Link>
                    
                    <Link to="/projects">
                      <Button className="bg-primary-blue hover:bg-primary-blue/90 text-white flex items-center gap-2">
                        View Our Projects
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">
                      Have questions? Feel free to reach out:
                    </p>
                    <a 
                      href="mailto:contact@open-hardware-initiative.com"
                      className="inline-flex items-center gap-2 text-primary-blue hover:underline font-medium"
                    >
                      <Mail size={16} />
                      contact@open-hardware-initiative.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationClosed; 