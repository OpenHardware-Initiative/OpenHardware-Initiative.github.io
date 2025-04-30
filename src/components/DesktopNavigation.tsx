
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface DesktopNavigationProps {
  isScrolled: boolean;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ isScrolled }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
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
  );
};

export default DesktopNavigation;
