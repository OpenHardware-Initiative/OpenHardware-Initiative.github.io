
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
        return <Instagram size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      default:
        return <Link size={18} />;
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
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md">
          <Calendar size={16} className="text-primary-blue" />
          <span className="text-sm font-medium">{formatDate(date)}</span>
        </div>
        {location && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-offwhite text-primary-blue">
              {location}
            </Badge>
          </div>
        )}
      </div>
      
      {/* Event title */}
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg text-primary-blue">{title}</h3>
      </CardHeader>
      
      {/* Event details */}
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
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
              const backgroundColor = getRotatingColor(index);
              // Get appropriate text color for contrast
              const textColor = getContrastTextColor(backgroundColor);
              
              return (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs border"
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
            <span>{getLinkText(link.type)}</span>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
