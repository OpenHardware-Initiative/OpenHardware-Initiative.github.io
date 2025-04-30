
import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import { Event } from "@/data/eventsData";

/**
 * Grid layout for displaying event cards
 * Shows either a grid of events or a "no events found" message
 */
interface EventsGridProps {
  events: Event[];
  clearFilters: () => void;
}

const EventsGrid: React.FC<EventsGridProps> = ({ events, clearFilters }) => {
  return (
    <section className="py-16 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12 gap-3">
            <Calendar className="text-primary-blue" size={28} />
            <h2 className="text-3xl font-bold text-primary-blue">Our Past Events</h2>
          </div>
          
          {events.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">No events found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters or search term</p>
              <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;
