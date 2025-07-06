
import React, { useEffect, useState } from "react";
import { projectsData, Project } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, Search, UserPlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [recruitingFilter, setRecruitingFilter] = useState<string>("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    filterProjects();
  }, [searchTerm, categoryFilter, statusFilter, yearFilter, recruitingFilter]);
  
  const filterProjects = () => {
    let filtered = [...projectsData];
    
    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        project => 
          project.title.toLowerCase().includes(term) || 
          project.description.toLowerCase().includes(term)
      );
    }
    
    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(project => project.category === categoryFilter);
    }
    
    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(project => project.status === statusFilter);
    }
    
    // Year filter
    if (yearFilter !== "all") {
      filtered = filtered.filter(project => project.year.toString() === yearFilter);
    }
    
    // Recruiting filter
    if (recruitingFilter !== "all") {
      if (recruitingFilter === "recruiting") {
        filtered = filtered.filter(project => project.recruitingFor === true);
      } else {
        filtered = filtered.filter(project => !project.recruitingFor);
      }
    }
    
    setProjects(filtered);
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("all");
    setStatusFilter("all");
    setYearFilter("all");
    setRecruitingFilter("all");
  };
  
  // Get unique categories, years for filter options
  const categories = Array.from(new Set(projectsData.map(project => project.category)));
  const years = Array.from(new Set(projectsData.map(project => project.year))).sort((a, b) => b - a);
  
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of innovative hardware projects spanning chip design, 
            AI acceleration, IoT, smart manufacturing, and spiking neural networks.
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
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Discontinued">Discontinued</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={recruitingFilter} onValueChange={setRecruitingFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Recruitment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  <SelectItem value="recruiting">Recruiting</SelectItem>
                  <SelectItem value="not-recruiting">Not Recruiting</SelectItem>
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
          <div className="flex flex-wrap gap-2 mt-4">
            {categoryFilter !== "all" && (
              <div className="bg-primary-blue/10 text-primary-blue py-1 px-3 rounded-full flex items-center text-sm">
                <span>Category: {categoryFilter}</span>
              </div>
            )}
            
            {statusFilter !== "all" && (
              <div className="bg-primary-blue/10 text-primary-blue py-1 px-3 rounded-full flex items-center text-sm">
                <span>Status: {statusFilter}</span>
              </div>
            )}
            
            {yearFilter !== "all" && (
              <div className="bg-primary-blue/10 text-primary-blue py-1 px-3 rounded-full flex items-center text-sm">
                <span>Year: {yearFilter}</span>
              </div>
            )}
            
            {recruitingFilter !== "all" && (
              <div className="bg-primary-blue/10 text-primary-blue py-1 px-3 rounded-full flex items-center text-sm gap-1">
                <UserPlus size={14} />
                <span>
                  {recruitingFilter === "recruiting" ? "Recruiting" : "Not Recruiting"}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 bg-offwhite min-h-[60vh]">
        <div className="container mx-auto px-4">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
              <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
