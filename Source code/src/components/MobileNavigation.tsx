
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ApplicationLink from "./ApplicationLink";

interface NavLinkProps {
  to: string;
  isActive: boolean;
  delay: number;
  isMenuOpen: boolean;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<NavLinkProps> = ({ 
  to, isActive, delay, isMenuOpen, children 
}) => (
  <Link 
    to={to} 
    className={`text-3xl font-bold transition-all duration-300 transform ${
      isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
    } ${
      isActive ? "text-primary-blue" : "text-primary-blue/80 hover:text-primary-blue"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </Link>
);

interface MobileNavigationProps {
  isMenuOpen: boolean;
  location: ReturnType<typeof useLocation>;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isMenuOpen, location }) => {
  const isActive = (path: string) => location.pathname === path;

  return (
    <div 
      className={`fixed inset-0 bg-offwhite z-40 md:hidden flex flex-col items-center justify-center 
        ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} 
        transition-all duration-300 ease-in-out`}
      style={{ backgroundColor: "#FDF7EF" }}
    >
      <nav className="flex flex-col items-center space-y-8 w-full px-8">
        <MobileNavLink to="/" isActive={isActive("/")} delay={100} isMenuOpen={isMenuOpen}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/about" isActive={isActive("/about")} delay={150} isMenuOpen={isMenuOpen}>
          About
        </MobileNavLink>
        <MobileNavLink to="/projects" isActive={isActive("/projects")} delay={200} isMenuOpen={isMenuOpen}>
          Projects
        </MobileNavLink>
        <MobileNavLink to="/events" isActive={isActive("/events")} delay={250} isMenuOpen={isMenuOpen}>
          Events
        </MobileNavLink>
        <MobileNavLink to="/team" isActive={isActive("/team")} delay={300} isMenuOpen={isMenuOpen}>
          Team
        </MobileNavLink>
        <MobileNavLink to="/alumni" isActive={isActive("/alumni")} delay={350} isMenuOpen={isMenuOpen}>
          Alumni
        </MobileNavLink>
        <MobileNavLink to="/contact" isActive={isActive("/contact")} delay={400} isMenuOpen={isMenuOpen}>
          Contact
        </MobileNavLink>
        <ApplicationLink 
          className={`mt-8 w-4/5 transition-all duration-300 transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          buttonProps={{ style: { transitionDelay: "450ms" } }}
        >
          <Button className="bg-primary-blue hover:bg-primary-blue/90 font-bold text-xl w-full py-6">
            Join Us
          </Button>
        </ApplicationLink>
      </nav>
    </div>
  );
};

export default MobileNavigation;
