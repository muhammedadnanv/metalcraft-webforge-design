
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">About <span className="text-accent-orange">Jawad Metal Works LLC</span></h2>
          <p className="text-steel-blue/80 max-w-3xl mx-auto px-4 sm:px-0">
            Custom stainless steel fabrication solutions for commercial kitchens and food service industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-0">
          <div className="order-2 lg:order-1">
            <div className="text-steel-blue/80 mb-6 space-y-4 text-sm sm:text-base">
              <p>
                JAWAD Metal Works is a fast growing company engaged in the manufacture,
                fabrication, supply and installation of stainless steel equipments and furnishings meeting
                the requirements of commercial and industrial kitchens, food catering units, restaurants,
                cafeterias, hotels, hospitals, super markets, bakeries, fish processing units etc.
              </p>
              
              <p>
                Under the supervision and guidance of highly experienced and technically proficient
                professionals with vast experience in the field of stainless steel fabrication for more than
                20 years, JAWAD has served many satisfied customers throughout UAE. Our products
                have been widely accepted and sought after. JAWAD is committed to high standards of
                quality and perfection with a sense of aestheticism.
              </p>
              
              <p>
                JAWAD is occupying a large warehouse in Jurf Industrial Area, Ajman with sufficient
                machineries and infrastructure. JAWAD is proud to have highly experienced and
                dedicated technicians and skilled workers who can fabricate virtually any custom
                equipment as per designs and specifications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                "NSF Certified Products",
                "Custom Sizing Available",
                "Premium Grade Materials",
                "Professional Installation",
                "5-Year Workmanship Warranty",
                "Compliance with Health Codes"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-orange flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#services" className="btn-secondary inline-block">
              Discover Our Services
            </a>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb" 
                alt="Metal fabrication process" 
                className="rounded-lg shadow-lg h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-rows-2 gap-3 sm:gap-4">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                alt="Quality steel materials" 
                className="rounded-lg shadow-lg h-full w-full object-cover"
                loading="lazy"
              />
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Commercial kitchen installation" 
                className="rounded-lg shadow-lg h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
