
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
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
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-blue">Circuit<span className="text-bistre">Forge</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive("/about") ? "nav-link-active" : ""}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${isActive("/projects") ? "nav-link-active" : ""}`}
            >
              Projects
            </Link>
            <Link 
              to="/team" 
              className={`nav-link ${isActive("/team") ? "nav-link-active" : ""}`}
            >
              Team
            </Link>
            <Link 
              to="/alumni" 
              className={`nav-link ${isActive("/alumni") ? "nav-link-active" : ""}`}
            >
              Alumni
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive("/contact") ? "nav-link-active" : ""}`}
            >
              Contact
            </Link>
            <a 
              href="https://forms.google.com/form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button className="bg-primary-blue hover:bg-primary-blue/90">Join Us</Button>
            </a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden p-2 rounded-md text-primary-blue"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-2 border-t mt-4">
            <Link 
              to="/" 
              className={`p-2 ${isActive("/") ? "font-semibold text-primary-blue" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`p-2 ${isActive("/about") ? "font-semibold text-primary-blue" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`p-2 ${isActive("/projects") ? "font-semibold text-primary-blue" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/team" 
              className={`p-2 ${isActive("/team") ? "font-semibold text-primary-blue" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/alumni" 
              className={`p-2 ${isActive("/alumni") ? "font-semibold text-primary-blue" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Alumni
            </Link>
            <Link 
              to="/contact" 
              className={`p-2 ${isActive("/contact") ? "font-semibold text-primary-blue" : "text-gray-700"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://forms.google.com/form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-primary-blue text-white font-semibold rounded-md text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
