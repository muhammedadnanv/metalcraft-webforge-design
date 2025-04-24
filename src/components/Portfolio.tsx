
import { useState } from 'react';
import { cn } from '@/lib/utils';

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
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Hotel Kitchen",
      category: "Hotel",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      description: "Complete stainless steel kitchen installation for a five-star hotel"
    },
    {
      id: 2,
      title: "Gourmet Restaurant",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
      description: "Custom prep stations and specialized cooking equipment"
    },
    {
      id: 3,
      title: "Urban Food Truck",
      category: "Food Truck",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "Compact, high-efficiency mobile kitchen setup"
    },
    {
      id: 4,
      title: "Corporate Cafeteria",
      category: "Cafeteria",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      description: "Large-scale serving line and high-volume preparation area"
    },
    {
      id: 5,
      title: "Boutique Bistro",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      description: "Custom display kitchen with specialized workstations"
    },
    {
      id: 6,
      title: "University Dining Hall",
      category: "Cafeteria",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      description: "High-capacity production kitchen with modular serving areas"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-accent-orange">Projects</span></h2>
          <p className="text-steel-blue/80 max-w-2xl mx-auto">
            Explore our portfolio of custom fabrication projects for commercial kitchens across various industries.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category 
                  ? "bg-accent-orange text-white" 
                  : "bg-gray-100 text-steel-blue hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group overflow-hidden rounded-lg bg-gray-50 border border-gray-200 transition-all hover:shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium bg-accent-orange/10 text-accent-orange px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-1">{project.title}</h3>
                <p className="text-steel-blue/80 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
