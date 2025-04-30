
import React, { useEffect, useState } from "react";
import { getPastEvents, Event } from "@/data/eventsData";
import EventCard from "@/components/EventCard";
import { Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Events = () => {
  const allPastEvents = getPastEvents();
  const [events, setEvents] = useState<Event[]>(allPastEvents);
  const [searchTerm, setSearchTerm] = useState("");
  const [organizerFilter, setOrganizerFilter] = useState("all");
  const [supporterFilter, setSupporterFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    filterEvents();
  }, [searchTerm, organizerFilter, supporterFilter, yearFilter]);
  
  const filterEvents = () => {
    let filtered = [...allPastEvents];
    
    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        event => 
          event.title.toLowerCase().includes(term) || 
          event.description.toLowerCase().includes(term) ||
          (event.location && event.location.toLowerCase().includes(term))
      );
    }
    
    // Organizer filter
    if (organizerFilter !== "all") {
      filtered = filtered.filter(event => 
        event.organizers.some(organizer => 
          organizer.name.toLowerCase() === organizerFilter.toLowerCase()
        )
      );
    }
    
    // Supporter filter
    if (supporterFilter !== "all") {
      filtered = filtered.filter(event => 
        event.supporters.some(supporter => 
          supporter.name.toLowerCase() === supporterFilter.toLowerCase()
        )
      );
    }
    
    // Year filter
    if (yearFilter !== "all") {
      filtered = filtered.filter(event => {
        const eventYear = event.date.split('-')[0];
        return eventYear === yearFilter;
      });
    }
    
    setEvents(filtered);
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setOrganizerFilter("all");
    setSupporterFilter("all");
    setYearFilter("all");
  };
  
  // Get unique organizers for filter options
  const organizers = Array.from(
    new Set(
      allPastEvents.flatMap(event => 
        event.organizers.map(organizer => organizer.name)
      )
    )
  ).sort();
  
  // Get unique supporters for filter options
  const supporters = Array.from(
    new Set(
      allPastEvents.flatMap(event => 
        event.supporters.map(supporter => supporter.name)
      )
    )
  ).sort();
  
  // Get unique years for filter options
  const years = Array.from(
    new Set(
      allPastEvents.map(event => event.date.split('-')[0])
    )
  ).sort((a, b) => Number(b) - Number(a));
  
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
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  className="pl-10"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select value={organizerFilter} onValueChange={setOrganizerFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Organizer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Organizers</SelectItem>
                  {organizers.map(organizer => (
                    <SelectItem key={organizer} value={organizer}>
                      {organizer}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={supporterFilter} onValueChange={setSupporterFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Supporter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Supporters</SelectItem>
                  {supporters.map(supporter => (
                    <SelectItem key={supporter} value={supporter}>
                      {supporter}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="whitespace-nowrap"
            >
              Clear Filters
            </Button>
          </div>
          
          {/* Filter tags */}
          {(organizerFilter !== "all" || supporterFilter !== "all" || yearFilter !== "all") && (
            <div className="flex flex-wrap gap-2 mt-4">
              {organizerFilter !== "all" && (
                <div className="bg-primary-blue/10 text-primary-blue py-1 px-3 rounded-full flex items-center text-sm">
                  <span>Organizer: {organizerFilter}</span>
                </div>
              )}
              
              {supporterFilter !== "all" && (
                <div className="bg-primary-blue/10 text-primary-blue py-1 px-3 rounded-full flex items-center text-sm">
                  <span>Supporter: {supporterFilter}</span>
                </div>
              )}
              
              {yearFilter !== "all" && (
                <div className="bg-primary-blue/10 text-primary-blue py-1 px-3 rounded-full flex items-center text-sm">
                  <span>Year: {yearFilter}</span>
                </div>
              )}
            </div>
          )}
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
    </div>
  );
};

export default Events;
