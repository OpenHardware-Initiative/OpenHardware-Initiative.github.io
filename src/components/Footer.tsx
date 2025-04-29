
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">CircuitForge</h3>
            <p className="mb-4 text-white/80">
              A student initiative focused on hardware innovation, including chip design, electronics, 
              smart manufacturing, AI hardware acceleration, and tinyML.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:contact@circuitforge.org" 
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/80 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="text-white/80 hover:text-white transition-colors">
                  Alumni
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-white/80 mb-2">Technical University Munich</p>
            <p className="text-white/80 mb-2">Munich, Germany</p>
            <p className="text-white/80 mb-4">Email: contact@circuitforge.org</p>
            <a 
              href="https://forms.google.com/form"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-blue px-4 py-2 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Join Us
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} CircuitForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
