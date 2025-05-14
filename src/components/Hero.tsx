
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="reveal-animation px-4 sm:px-0 order-2 md:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-matte-black mb-2 leading-tight">
              <span className="text-accent-orange">Premium customized stainless steel equipment</span>
            </h1>
            
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-steel-blue mb-4">
              for commercial kitchen and food industry
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-steel-blue mb-6 md:mb-8 max-w-lg">
              Meticulously crafted commercial kitchen equipment tailored to your exact specifications. Built for performance, durability, and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="#portfolio" className="btn-primary text-center sm:text-left">
                View Our Work
              </a>
              <a href="#contact" className="btn-outline text-center sm:text-left">
                Request a Quote
              </a>
            </div>
          </div>
          
          <div className="relative reveal-animation px-4 sm:px-0 order-1 md:order-2" style={{
            animationDelay: '0.3s'
          }}>
            <div className="bg-metal-silver/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-metal-silver/30 shadow-xl">
              <img alt="Premium metal fabrication" className="rounded-lg w-full h-auto object-cover" src="/lovable-uploads/716620fc-9de7-4155-9ce6-d8fc9cbbf5d1.png" />
              
              <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-xl md:text-2xl text-steel-blue">15+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-xl md:text-2xl text-steel-blue">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg sm:text-xl md:text-2xl text-steel-blue">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-accent-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 sm:w-32 h-24 sm:h-32 bg-steel-blue/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-metal-silver/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-accent-orange/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
