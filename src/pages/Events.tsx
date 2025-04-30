
import React, { useEffect, useState } from "react";
import { getPastEvents, Event } from "@/data/eventsData";
import EventsFilters from "@/components/EventsFilters";
import EventsGrid from "@/components/EventsGrid";
import { 
  filterEvents, 
  getUniqueOrganizers, 
  getUniqueSupporters, 
  getUniqueYears 
} from "@/utils/eventFilters";

/**
 * Events page component
 * Displays past events with filtering capabilities
 */
const Events = () => {
  // Get all past events
  const allPastEvents = getPastEvents();
  const [events, setEvents] = useState<Event[]>(allPastEvents);
  
  // Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [organizerFilter, setOrganizerFilter] = useState("all");
  const [supporterFilter, setSupporterFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Apply filters when any filter changes
  useEffect(() => {
    const filteredEvents = filterEvents(
      allPastEvents,
      searchTerm,
      organizerFilter,
      supporterFilter,
      yearFilter
    );
    setEvents(filteredEvents);
  }, [searchTerm, organizerFilter, supporterFilter, yearFilter, allPastEvents]);
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setOrganizerFilter("all");
    setSupporterFilter("all");
    setYearFilter("all");
  };
  
  // Get unique values for filters
  const organizers = getUniqueOrganizers(allPastEvents);
  const supporters = getUniqueSupporters(allPastEvents);
  const years = getUniqueYears(allPastEvents);
  
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
      
      {/* Filters */}
      <EventsFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        organizerFilter={organizerFilter}
        setOrganizerFilter={setOrganizerFilter}
        supporterFilter={supporterFilter}
        setSupporterFilter={setSupporterFilter}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
        clearFilters={clearFilters}
        organizers={organizers}
        supporters={supporters}
        years={years}
      />
      
      {/* Events Grid */}
      <EventsGrid events={events} clearFilters={clearFilters} />
    </div>
  );
};

export default Events;
