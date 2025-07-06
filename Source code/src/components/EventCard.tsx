import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Link, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Event } from "@/data/eventsData";
import { getRotatingColor, getContrastTextColor } from "@/utils/colorUtils";

interface EventCardProps {
  event: Event;
}

/**
 * EventCard component
 * Displays a single event with its details in a card format
 */
const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, description, date, image, link, organizers, supporters, location } = event;

  /**
   * Formats a date string for display
   * @param dateString - Date in format YYYY-MM-DD
   * @returns Formatted date string
   */
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  /**
   * Returns the appropriate icon based on link type
   * @param type - Link type (instagram, linkedin, etc.)
   * @returns Icon component
   */
  const getLinkIcon = (type: string) => {
    switch (type) {
      case "instagram":
        return <Instagram size={16} className="flex-shrink-0" />;
      case "linkedin":
        return <Linkedin size={16} className="flex-shrink-0" />;
      default:
        return <Link size={16} className="flex-shrink-0" />;
    }
  };

  /**
   * Returns descriptive text based on link type
   * @param type - Link type
   * @returns Text to display for the link
   */
  const getLinkText = (type: string) => {
    switch (type) {
      case "instagram":
        return "View on Instagram";
      case "linkedin":
        return "View on LinkedIn";
      case "signup":
        return "Registration";
      case "luma":
        return "View on Luma";
      default:
        return "Learn More";
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      {/* Image and date/location badges */}
      <div className="relative h-48">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 flex items-center justify-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
              className="opacity-50"
            >
              {/* Confetti pieces */}
              <path d="M20 20l10-10 10 10-10 10z" fill="#AB9A89" />
              <path d="M80 30l15-15 15 15-15 15z" fill="rgb(51 51 81)" />
              <path d="M40 80l12-12 12 12-12 12z" fill="rgb(248 221 186)" />
              <path d="M90 70l8-8 8 8-8 8z" fill="#AB9A89" />
              <path d="M60 40l6-6 6 6-6 6z" fill="rgb(51 51 81)" />
              <path d="M30 50l9-9 9 9-9 9z" fill="rgb(248 221 186)" />
              <path d="M70 90l11-11 11 11-11 11z" fill="#AB9A89" />
              {/* Calendar icon in center */}
              <rect x="45" y="45" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="45" y1="55" x2="75" y2="55" stroke="currentColor" strokeWidth="2" />
              <line x1="55" y1="45" x2="55" y2="65" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        )}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md">
          <Calendar size={14} className="text-primary-blue flex-shrink-0" />
          <span className="text-xs font-medium truncate max-w-[150px]">{formatDate(date)}</span>
        </div>
        {location && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-offwhite text-primary-blue text-xs truncate max-w-[120px]">
              {location}
            </Badge>
          </div>
        )}
      </div>
      
      {/* Event title */}
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg text-primary-blue line-clamp-2">{title}</h3>
      </CardHeader>
      
      {/* Event details */}
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        {/* Organizers */}
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Organized by:</h4>
          <div className="flex flex-wrap gap-1">
            {organizers.map((organizer, index) => (
              <span key={index} className="text-xs">
                {organizer.name}{organizer.role ? ` (${organizer.role})` : ""}
                {index < organizers.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
        
        {/* Supporters */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Supported by:</h4>
          <div className="flex flex-wrap gap-1">
            {supporters.map((supporter, index) => {
              // Get color based on index
              const backgroundColor = "#AB9A89";//getRotatingColor(index);
              // Get appropriate text color for contrast
              const textColor = "hsl(40 33% 98%)";//getContrastTextColor("#AB9A89");
              
              return (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs border truncate max-w-[240px]"
                  style={{ 
                    backgroundColor, 
                    borderColor: backgroundColor,
                    color: textColor
                  }}
                >
                  {supporter.name}
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>
      
      {/* Link to event */}
      {link?.url && (
        <CardFooter className="pt-2 border-t">
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
            >
              {getLinkIcon(link.type)}
              <span className="truncate">{getLinkText(link.type)}</span>
            </Button>
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default EventCard;
