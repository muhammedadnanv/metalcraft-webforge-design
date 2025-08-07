
import { ShowerHead, Table2, Refrigerator, BadgeDollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

const ServiceCard = ({ title, description, icon, className, animationDelay }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "p-4 sm:p-6 rounded-lg border border-gray-200 transition-all hover:shadow-lg hover:border-accent-orange/30",
        className
      )}
      style={{ animationDelay }}
    >
      <div className="p-2 sm:p-3 bg-accent-orange/10 rounded-full w-fit mb-3 sm:mb-4">
        <div className="text-accent-orange">{icon}</div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{title}</h3>
      <p className="text-steel-blue/80 text-xs sm:text-sm">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Exhaust Hood Systems",
      description: "Custom ventilation solutions designed for efficiency and code compliance, including Type I and Type II hoods with integrated fire suppression systems.",
      icon: <ShowerHead size={24} />
    },
    {
      title: "Worktables & Prep Stations",
      description: "Durable stainless steel work surfaces built for your specific space, workflow needs, and budget with customizable shelving and storage options.",
      icon: <Table2 size={24} />
    },
    {
      title: "Sinks & Washing Stations",
      description: "Commercial-grade hand wash sinks, compartment sinks, and pot washing stations with seamless construction and proper drainage systems.",
      icon: <BadgeDollarSign size={24} />
    },
    {
      title: "Equipment Stands",
      description: "Heavy-duty stands for ovens, refrigerators, and other equipment with reinforced construction to support substantial weight requirements.",
      icon: <Refrigerator size={24} />
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Commercial Kitchen Equipment <span className="text-accent-orange">Manufacturing</span></h2>
          <p className="text-steel-blue/80 max-w-2xl mx-auto px-4 sm:px-0">
            We specialize in custom fabrication of commercial kitchen equipment tailored to your specific requirements and specifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="reveal-animation"
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 p-4 sm:p-6 md:p-8 bg-matte-black rounded-lg text-white mx-4 sm:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Custom Solutions for Every Need</h3>
              <p className="mb-4 text-sm sm:text-base">
                Don't see what you're looking for? We offer fully customized fabrication services to meet unique requirements and specialized applications.
              </p>
              <a href="#contact" className="btn-primary">
                Discuss Your Custom Project
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-white/10 rounded-lg">
                <h4 className="font-bold text-accent-orange text-sm sm:text-base">Food Trucks</h4>
                <p className="text-xs sm:text-sm text-white/80">Complete stainless steel interiors for mobile food services</p>
              </div>
              <div className="p-3 sm:p-4 bg-white/10 rounded-lg">
                <h4 className="font-bold text-accent-orange text-sm sm:text-base">Display Cases</h4>
                <p className="text-xs sm:text-sm text-white/80">Custom front-of-house display units and serving stations</p>
              </div>
              <div className="p-3 sm:p-4 bg-white/10 rounded-lg">
                <h4 className="font-bold text-accent-orange text-sm sm:text-base">Bar Equipment</h4>
                <p className="text-xs sm:text-sm text-white/80">Specialized bar tops, ice bins, and bottle displays</p>
              </div>
              <div className="p-3 sm:p-4 bg-white/10 rounded-lg">
                <h4 className="font-bold text-accent-orange text-sm sm:text-base">Storage Solutions</h4>
                <p className="text-xs sm:text-sm text-white/80">Walk-in shelving systems and specialty storage units</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
