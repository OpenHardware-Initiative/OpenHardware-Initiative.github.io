
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Define navigation items for better maintainability
const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/team", label: "Team" },
  { path: "/alumni", label: "Alumni" },
  { path: "/contact", label: "Contact" }
];

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
      {navigationItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path} 
          className={`nav-link font-bold ${isActive(item.path) ? "nav-link-active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
      
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
