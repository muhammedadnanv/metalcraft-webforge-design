
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="reveal-animation px-2 sm:px-4 lg:px-0 order-2 lg:order-1">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-matte-black mb-2 leading-tight">
              <span className="text-accent-orange">Premium customized stainless steel equipment</span>
            </h1>
            
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-steel-blue mb-3 sm:mb-4">
              for commercial kitchen and food industry
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-steel-blue mb-6 md:mb-8 max-w-xl">
              Meticulously crafted commercial kitchen equipment tailored to your exact specifications. Built for performance, durability, and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#portfolio" className="btn-primary text-center sm:text-left">
                View Our Work
              </a>
              <a href="#contact" className="btn-outline text-center sm:text-left">
                Request a Quote
              </a>
            </div>
          </div>
          
          <div className="relative reveal-animation px-2 sm:px-4 lg:px-0 order-1 lg:order-2" style={{
            animationDelay: '0.3s'
          }}>
            <div className="bg-metal-silver/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-metal-silver/30 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <img alt="Premium metal fabrication" className="rounded-lg w-full h-auto object-cover" src="/lovable-uploads/716620fc-9de7-4155-9ce6-d8fc9cbbf5d1.png" />
              </div>
              
              <div className="mt-3 sm:mt-4 md:mt-6 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                <div className="text-center">
                  <div className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-steel-blue">15+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-steel-blue">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-steel-blue">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-accent-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-steel-blue/10 rounded-full blur-3xl"></div>
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
