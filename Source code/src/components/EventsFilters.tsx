
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Filters component for the Events page
 * Handles search, organizer, supporter, and year filters
 */
interface EventsFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  organizerFilter: string;
  setOrganizerFilter: (value: string) => void;
  supporterFilter: string;
  setSupporterFilter: (value: string) => void;
  yearFilter: string;
  setYearFilter: (value: string) => void;
  clearFilters: () => void;
  organizers: string[];
  supporters: string[];
  years: string[];
}

const EventsFilters: React.FC<EventsFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  organizerFilter,
  setOrganizerFilter,
  supporterFilter,
  setSupporterFilter,
  yearFilter,
  setYearFilter,
  clearFilters,
  organizers,
  supporters,
  years,
}) => {
  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search input */}
          <div className="flex-grow">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                className="pl-10"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Filter selects */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Organizer filter */}
            <Select value={organizerFilter} onValueChange={setOrganizerFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Organizer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Organizers</SelectItem>
                {organizers.map((organizer) => (
                  <SelectItem key={organizer} value={organizer}>
                    {organizer}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Supporter filter */}
            <Select value={supporterFilter} onValueChange={setSupporterFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Supporter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Supporters</SelectItem>
                {supporters.map((supporter) => (
                  <SelectItem key={supporter} value={supporter}>
                    {supporter}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Year filter */}
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Clear filters button */}
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
  );
};

export default EventsFilters;
