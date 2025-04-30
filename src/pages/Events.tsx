
import React, { useEffect } from "react";
import { getPastEvents } from "@/data/eventsData";
import EventCard from "@/components/EventCard";
import { Calendar } from "lucide-react";

const Events = () => {
  const pastEvents = getPastEvents();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Past Events</h1>
          <p className="text-xl max-w-3xl">
            Explore our previous events and workshops that have contributed to the hardware community.
          </p>
        </div>
      </section>
      
      {/* Events Grid */}
      <section className="py-16 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12 gap-3">
              <Calendar className="text-primary-blue" size={28} />
              <h2 className="text-3xl font-bold text-primary-blue">Our Past Events</h2>
            </div>
            
            {pastEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No past events to display at this time.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
