
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Prevent scrolling on body when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/8c21749c-761b-4cf2-85ca-64f204ac61dd.png" 
                alt="OpenHardware Logo" 
                className="h-10 w-auto mr-2" 
              />
              <span className="text-2xl font-bold text-[#333351]">Open<span className="text-[#AB9A89]">Hardware</span></span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                to="/" 
                className={`nav-link font-bold ${isActive("/") ? "nav-link-active" : ""}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link font-bold ${isActive("/about") ? "nav-link-active" : ""}`}
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className={`nav-link font-bold ${isActive("/projects") ? "nav-link-active" : ""}`}
              >
                Projects
              </Link>
              <Link 
                to="/team" 
                className={`nav-link font-bold ${isActive("/team") ? "nav-link-active" : ""}`}
              >
                Team
              </Link>
              <Link 
                to="/alumni" 
                className={`nav-link font-bold ${isActive("/alumni") ? "nav-link-active" : ""}`}
              >
                Alumni
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link font-bold ${isActive("/contact") ? "nav-link-active" : ""}`}
              >
                Contact
              </Link>
              <a 
                href="https://forms.google.com/form" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4"
              >
                <Button className="bg-primary-blue hover:bg-primary-blue/90 font-bold">Join Us</Button>
              </a>
            </nav>
            
            {/* Mobile Navigation Toggle */}
            <button 
              className="md:hidden p-2 rounded-md text-primary-blue z-[100]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Full-screen Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-offwhite z-40 md:hidden flex flex-col items-center justify-center 
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} 
          transition-opacity duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-center space-y-8 w-full px-8">
          <Link 
            to="/" 
            className={`text-3xl font-bold transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} 
              ${isActive("/") ? "text-primary-blue" : "text-primary-blue/80 hover:text-primary-blue"}`}
            style={{ transitionDelay: "100ms" }}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-3xl font-bold transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} 
              ${isActive("/about") ? "text-primary-blue" : "text-primary-blue/80 hover:text-primary-blue"}`}
            style={{ transitionDelay: "150ms" }}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`text-3xl font-bold transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} 
              ${isActive("/projects") ? "text-primary-blue" : "text-primary-blue/80 hover:text-primary-blue"}`}
            style={{ transitionDelay: "200ms" }}
          >
            Projects
          </Link>
          <Link 
            to="/team" 
            className={`text-3xl font-bold transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} 
              ${isActive("/team") ? "text-primary-blue" : "text-primary-blue/80 hover:text-primary-blue"}`}
            style={{ transitionDelay: "250ms" }}
          >
            Team
          </Link>
          <Link 
            to="/alumni" 
            className={`text-3xl font-bold transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} 
              ${isActive("/alumni") ? "text-primary-blue" : "text-primary-blue/80 hover:text-primary-blue"}`}
            style={{ transitionDelay: "300ms" }}
          >
            Alumni
          </Link>
          <Link 
            to="/contact" 
            className={`text-3xl font-bold transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} 
              ${isActive("/contact") ? "text-primary-blue" : "text-primary-blue/80 hover:text-primary-blue"}`}
            style={{ transitionDelay: "350ms" }}
          >
            Contact
          </Link>
          <a 
            href="https://forms.google.com/form" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`mt-8 w-4/5 transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <Button className="bg-primary-blue hover:bg-primary-blue/90 font-bold text-xl w-full py-6">Join Us</Button>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
