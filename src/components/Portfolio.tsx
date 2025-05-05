
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const categories = ["All", "Restaurant", "Hotel", "Food Truck", "Cafeteria"];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const isMobile = useIsMobile();
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Commercial Gas Range",
      category: "Restaurant",
      image: "/lovable-uploads/43985ca5-73bc-4ba7-a8af-32b29632e08b.png",
      description: "Heavy-duty stainless steel gas range with multiple burners for commercial kitchens"
    },
    {
      id: 2,
      title: "Shawarma Machine",
      category: "Restaurant",
      image: "/lovable-uploads/762074dc-fa0d-410a-9f71-d6342ee2a358.png",
      description: "Double vertical broiler machine with temperature control and durable construction"
    },
    {
      id: 3,
      title: "High-Power Burner",
      category: "Restaurant",
      image: "/lovable-uploads/d48466e8-7820-4afa-8121-c2e5e41076d1.png",
      description: "Professional-grade single burner with brass valves and sturdy frame"
    },
    {
      id: 4,
      title: "Utility Cart",
      category: "Hotel",
      image: "/lovable-uploads/a10759ee-61db-42e9-ad56-19280babe4ce.png",
      description: "Multi-level stainless steel cart with wheels for kitchen transport"
    },
    {
      id: 5,
      title: "Commercial Grill",
      category: "Restaurant",
      image: "/lovable-uploads/54a10075-98d0-497e-a2d4-44952a37ad80.png",
      description: "Professional griddle with temperature controls and durable construction"
    },
    {
      id: 6,
      title: "Gas Cooking Station",
      category: "Restaurant",
      image: "/lovable-uploads/38cf500c-40f0-40bd-8d58-336afe405bed.png",
      description: "Multi-burner cooking range with high-efficiency burners and storage"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our <span className="text-accent-orange">Projects</span></h2>
          <p className="text-steel-blue/80 max-w-2xl mx-auto px-4 sm:px-0">
            Explore our portfolio of custom fabrication projects for commercial kitchens across various industries.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all",
                activeCategory === category 
                  ? "bg-accent-orange text-white" 
                  : "bg-gray-100 text-steel-blue hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-0">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group overflow-hidden rounded-lg bg-gray-50 border border-gray-200 transition-all hover:shadow-lg"
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4">
                <span className="text-xs font-medium bg-accent-orange/10 text-accent-orange px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-1">{project.title}</h3>
                <p className="text-steel-blue/80 text-xs sm:text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <a href="#contact" className="btn-outline">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
