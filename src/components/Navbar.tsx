
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
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
  
  // Close the mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobile) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
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
            className="md:hidden p-2 rounded-md text-primary-blue transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
        
      {/* Mobile Navigation Menu - Moved outside the container to prevent content overlap */}
      {isMobile && (
        <div 
          className={`md:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-white overflow-hidden">
            <nav className="flex flex-col p-6 space-y-6 h-[calc(100vh-72px)] overflow-y-auto">
              <div className="flex flex-col space-y-6">
                <Link 
                  to="/" 
                  className={`py-4 px-4 font-bold text-xl rounded-md ${
                    isActive("/") 
                      ? "bg-primary-blue/10 text-primary-blue" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`py-4 px-4 font-bold text-xl rounded-md ${
                    isActive("/about") 
                      ? "bg-primary-blue/10 text-primary-blue" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/projects" 
                  className={`py-4 px-4 font-bold text-xl rounded-md ${
                    isActive("/projects") 
                      ? "bg-primary-blue/10 text-primary-blue" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Projects
                </Link>
                <Link 
                  to="/team" 
                  className={`py-4 px-4 font-bold text-xl rounded-md ${
                    isActive("/team") 
                      ? "bg-primary-blue/10 text-primary-blue" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Team
                </Link>
                <Link 
                  to="/alumni" 
                  className={`py-4 px-4 font-bold text-xl rounded-md ${
                    isActive("/alumni") 
                      ? "bg-primary-blue/10 text-primary-blue" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Alumni
                </Link>
                <Link 
                  to="/contact" 
                  className={`py-4 px-4 font-bold text-xl rounded-md ${
                    isActive("/contact") 
                      ? "bg-primary-blue/10 text-primary-blue" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Contact
                </Link>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-200">
                <a 
                  href="https://forms.google.com/form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="bg-primary-blue hover:bg-primary-blue/90 font-bold w-full py-7 text-xl">
                    Join Us
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
