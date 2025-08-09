
import { CheckCircle } from 'lucide-react';
import ImageProcessor from './ImageProcessor';

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
              <p>JAWAD Metal Works LLC is a fast growing company engaged in the manufacture, fabrication, supply and installation of stainless steel equipments and furnishings meeting the requirements of commercial and industrial kitchens, food catering units, restaurants, cafeterias, hotels, hospitals, super markets, bakeries, fish processing units etc.</p>
              
              <p>Under the supervision and guidance of highly experienced and technically proficient professionals with vast experience in the field of stainless steel fabrication for more than 20 years, JAWAD Metal Works LLC has served many satisfied customers throughout UAE. Our products have been widely accepted and sought after. JAWAD is committed to high standards of quality and perfection with a sense of aestheticism.</p>
              
              <p className="hidden sm:block">JAWAD Metal Works LLC is occupying a large warehouse in Industrial Area, New Lucky rounde Ajman with sufficient machineries and infrastructure. JAWAD Metal Works LLC is proud to have highly experienced and dedicated technicians and skilled workers who can fabricate virtually any custom equipment as per designs and specifications.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {["NSF Certified", "Custom Sizing", "Premium Materials", "Professional Installation", "5-Year Warranty", "Health Code Compliant"].map((item, index) => (
                <div key={index} className="flex items-center gap-1 sm:gap-2">
                  <CheckCircle size={14} className="text-accent-orange flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#services" className="btn-secondary inline-block">
              Discover Our Services
            </a>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <ImageProcessor 
                src="/lovable-uploads/43985ca5-73bc-4ba7-a8af-32b29632e08b.png" 
                alt="Commercial Gas Range fabrication" 
                className="rounded-lg shadow-lg h-full w-full object-cover" 
                loading="lazy" 
              />
            </div>
            <div className="grid grid-rows-2 gap-3 sm:gap-4">
              <ImageProcessor 
                src="/lovable-uploads/38cf500c-40f0-40bd-8d58-336afe405bed.png" 
                alt="Gas Cooking Station equipment" 
                className="rounded-lg shadow-lg h-full w-full object-cover" 
                loading="lazy" 
              />
              <ImageProcessor 
                src="/lovable-uploads/54a10075-98d0-497e-a2d4-44952a37ad80.png" 
                alt="Commercial kitchen grill installation" 
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
