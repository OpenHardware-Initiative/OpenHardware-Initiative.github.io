import React from "react";
import { Link } from "react-router-dom";
import { APPLICATION_CONFIG } from "@/config/applicationConfig";

interface ApplicationLinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: "button" | "link";
  buttonProps?: React.ComponentProps<typeof Link> | React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const ApplicationLink: React.FC<ApplicationLinkProps> = ({ 
  children, 
  className = "", 
  variant = "link",
  buttonProps = {}
}) => {
  const isOpen = APPLICATION_CONFIG.isOpen;
  const url = APPLICATION_CONFIG.applicationUrl;
  const openInNewTab = APPLICATION_CONFIG.openInNewTab;

  if (isOpen && openInNewTab) {
    // External link (Google Form) - opens in new tab
    return (
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...buttonProps}
      >
        {children}
      </a>
    );
  } else {
    // Internal link (Application Closed page) - same tab
    return (
      <Link 
        to={url}
        className={className}
        {...buttonProps}
      >
        {children}
      </Link>
    );
  }
};

export default ApplicationLink; 