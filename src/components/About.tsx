
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-accent-orange">Jawad Metal Works</span></h2>
          <p className="text-steel-blue/80 max-w-2xl mx-auto">
            Building exceptional commercial kitchen equipment with precision engineering and attention to detail since 2008.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Craftsmanship Meets Modern Technology</h3>
            
            <p className="text-steel-blue/80 mb-6">
              At Jawad Metal Works, we combine traditional metalworking expertise with cutting-edge fabrication technology to deliver commercial kitchen equipment that exceeds industry standards. Our team of skilled artisans and engineers work closely with clients to understand their unique requirements and create solutions that optimize workflow and efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "NSF Certified Products",
                "Custom Sizing Available",
                "Premium Grade Materials",
                "Professional Installation",
                "5-Year Workmanship Warranty",
                "Compliance with Health Codes"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-accent-orange" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#services" className="btn-secondary">
              Discover Our Services
            </a>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb" 
                alt="Metal fabrication process" 
                className="rounded-lg shadow-lg h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                alt="Quality steel materials" 
                className="rounded-lg shadow-lg h-full w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Commercial kitchen installation" 
                className="rounded-lg shadow-lg h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
