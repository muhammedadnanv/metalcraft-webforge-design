
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const categories = ["All", "Restaurant", "Hotel", "Food Truck", "Cafeteria", "Supermarket", "Kitchen Equipment"];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCategories, setVisibleCategories] = useState<string[]>(["All"]);
  const isMobile = useIsMobile();
  
  // For small screens, limit initially visible categories
  useEffect(() => {
    if (isMobile) {
      setVisibleCategories(["All", "Restaurant", "Kitchen Equipment"]);
    } else {
      setVisibleCategories(categories);
    }
  }, [isMobile]);

  // Toggle additional categories on mobile
  const toggleCategories = () => {
    if (visibleCategories.length === categories.length) {
      setVisibleCategories(["All", "Restaurant", "Kitchen Equipment"]);
    } else {
      setVisibleCategories(categories);
    }
  };
  
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
    },
    {
      id: 7,
      title: "Fruit Display Unit",
      category: "Supermarket",
      image: "/lovable-uploads/fe8034d2-b8ad-4c92-90a4-5ec0a8b51296.png",
      description: "Custom fruit display stand with stainless steel trays for supermarkets and grocery stores"
    },
    {
      id: 8,
      title: "Vegetable Display Rack",
      category: "Supermarket",
      image: "/lovable-uploads/f00fba22-7c80-44df-acab-a19e573f15aa.png",
      description: "Multi-tier vegetable display showcase with adjustable shelving for retail stores"
    },
    {
      id: 9,
      title: "Produce Display System",
      category: "Supermarket",
      image: "/lovable-uploads/51a0a9c0-8742-47c9-965c-c02bddaa1381.png",
      description: "Durable produce display fixture with perforated shelves for optimal airflow"
    },
    {
      id: 10,
      title: "Premium Supermarket Display",
      category: "Supermarket",
      image: "/lovable-uploads/d50b2289-825f-48c4-8c74-d65f6d3285b0.png",
      description: "High-end supermarket produce display system with multiple tiered shelves"
    },
    {
      id: 11,
      title: "Commercial Grill Grates",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/9c4d7bd5-b7ea-41cf-97c3-466e5ea41e93.png",
      description: "Heavy-duty stainless steel grill grates for commercial grills and broilers"
    },
    {
      id: 12,
      title: "Gas Cooking Range",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/d077d79c-0f63-43b7-9f07-557d6ad354dd.png",
      description: "Professional dual-burner gas range with griddle plate for commercial kitchens"
    },
    {
      id: 13,
      title: "Industrial Sink Unit",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/f8b78ff0-20f2-4b9c-b267-e4662376b5e5.png",
      description: "Stainless steel industrial sink with sturdy construction for restaurant use"
    },
    {
      id: 14,
      title: "Metal Grating System",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/2e9facc1-5ed4-4949-bf80-3fdb3dcf466e.png",
      description: "Custom fabricated metal grating for drainage systems and industrial floors"
    },
    {
      id: 15,
      title: "Multi-Burner Gas Stove",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/a47f1079-193d-45c4-97cc-4e5b3a0985ef.png",
      description: "Commercial multi-burner gas stove with heavy-duty construction for high-volume cooking"
    },
    {
      id: 16,
      title: "Commercial Baking Ovens",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/9d8c946e-aa4c-4770-827d-be5b2a133e94.png",
      description: "Stainless steel commercial baking ovens with multiple racks for bakeries and restaurants"
    },
    {
      id: 17,
      title: "Mobile Storage Rack",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/2d916249-f6b7-47c9-b0a8-5e3a0f2dfa02.png",
      description: "Round stainless steel mobile storage rack with casters for kitchen storage solutions"
    },
    {
      id: 18,
      title: "Industrial Gas Stove",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/cb380529-ef4e-47b7-aefc-021a5d014e28.png",
      description: "Heavy-duty commercial gas cooking range with backsplash for restaurants and hotels"
    },
    {
      id: 19,
      title: "Professional Cooking Line",
      category: "Kitchen Equipment",
      image: "/lovable-uploads/24999fc7-7e1e-44f6-88eb-7b14d4675609.png",
      description: "Complete professional cooking line with multiple burners for high-volume food service"
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
          <p className="text-steel-blue/80 max-w-2xl mx-auto px-4 sm:px-0 text-sm sm:text-base">
            Explore our portfolio of custom fabrication projects for commercial kitchens across various industries.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-2">
          {visibleCategories.map((category) => (
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
          
          {isMobile && visibleCategories.length !== categories.length && (
            <button 
              onClick={toggleCategories}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all bg-gray-200 text-steel-blue"
            >
              + More
            </button>
          )}
          
          {isMobile && visibleCategories.length === categories.length && (
            <button 
              onClick={toggleCategories}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all bg-gray-200 text-steel-blue"
            >
              - Less
            </button>
          )}
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
