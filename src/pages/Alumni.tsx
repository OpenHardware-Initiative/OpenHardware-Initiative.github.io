import React, { useEffect, useState } from "react";
import { getAlumni } from "@/data/peopleData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, parse } from "date-fns";

const Alumni = () => {
  const allAlumni = getAlumni();
  const [alumni, setAlumni] = useState(allAlumni);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterAlumni();
  }, [searchTerm, roleFilter, yearFilter]);
  
  const filterAlumni = () => {
    let filtered = [...allAlumni];
    
    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        member => 
          member.name.toLowerCase().includes(term) || 
          (member.role && member.role.toLowerCase().includes(term)) ||
          (member.contributions && member.contributions.some(c => c.toLowerCase().includes(term)))
      );
    }
    
    // Role filter
    if (roleFilter !== "all" && roleFilter !== "") {
      filtered = filtered.filter(
        member => member.role && member.role.toLowerCase().includes(roleFilter.toLowerCase())
      );
    }
    
    // Year filter
    if (yearFilter !== "all" && yearFilter !== "") {
      // Extract year from endDate
      filtered = filtered.filter(member => {
        if (!member.endDate) return false;
        const year = member.endDate.split('-')[0];
        return year === yearFilter;
      });
    }
    
    setAlumni(filtered);
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setRoleFilter("all");
    setYearFilter("all");
  };
  
  // Get unique roles for filter options
  const roles = Array.from(
    new Set(
      allAlumni
        .filter(member => member.role)
        .map(member => {
          const role = member.role as string;
          if (role.includes("Former ")) {
            return role.replace("Former ", "");
          }
          return role;
        })
    )
  );
  
  // Get unique years for filter options
  const years = Array.from(
    new Set(
      allAlumni
        .filter(member => member.endDate)
        .map(member => member.endDate?.split('-')[0])
    )
  ).sort((a, b) => Number(b) - Number(a));

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    try {
      const date = parse(dateString, 'yyyy-MM', new Date());
      return format(date, 'MMM yyyy');
    } catch (e) {
      return dateString;
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni</h1>
          <p className="text-xl max-w-3xl">
            Recognizing the former members who contributed to the growth and success of OpenHardware.
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
                  placeholder="Search by name, role, or contribution..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  {roles.map(role => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Departure Year" />
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
        </div>
      </section>
      
      {/* Alumni Table */}
      <section className="py-12 bg-offwhite min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Role</TableHead>
                  <TableHead className="hidden lg:table-cell">Contributions</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alumni.length > 0 ? (
                  alumni.map(member => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell className="hidden md:table-cell">{member.role || "Member"}</TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {member.contributions ? (
                          <ul className="list-disc list-inside text-sm">
                            {member.contributions.map((contribution, index) => (
                              <li key={index}>{contribution}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-gray-500 italic">No specific contributions listed</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {formatDate(member.joinDate)} - {member.endDate ? formatDate(member.endDate) : "Present"}
                      </TableCell>
                      <TableCell>
                        <a 
                          href={member.linkedIn} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 text-primary-blue hover:text-primary-blue/70 transition-colors"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin size={20} />
                        </a>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      <p className="text-gray-500">No alumni found matching your search criteria</p>
                      <Button 
                        variant="outline" 
                        onClick={clearFilters}
                        className="mt-4"
                      >
                        Clear Filters
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          {/* Mobile View - Cards for smaller screens */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl font-bold mb-4">Contributions</h3>
            <div className="space-y-6">
              {alumni.length > 0 ? (
                alumni.map(member => (
                  <div key={member.id} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{member.name}</h4>
                      <a 
                        href={member.linkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1 text-primary-blue hover:text-primary-blue/70"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-2">{member.role || "Member"}</p>
                    <p className="text-sm mb-3">
                      {formatDate(member.joinDate)} - {member.endDate ? formatDate(member.endDate) : "Present"}
                    </p>
                    
                    {member.contributions && (
                      <div>
                        <h5 className="font-medium mb-1">Contributions:</h5>
                        <ul className="list-disc list-inside text-sm text-gray-700">
                          {member.contributions.map((contribution, index) => (
                            <li key={index}>{contribution}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No alumni found matching your search criteria</p>
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
