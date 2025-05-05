
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="reveal-animation">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-matte-black mb-4">
              <span className="text-accent-orange">Premium customized stainless steel equipment</span> for commercial kitchen and food industry
            </h1>
            
            <p className="text-lg text-steel-blue mb-8 max-w-lg">
              Meticulously crafted commercial kitchen equipment tailored to your exact specifications. Built for performance, durability, and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#portfolio" className="btn-primary">
                View Our Work
              </a>
              <a href="#contact" className="btn-outline">
                Request a Quote
              </a>
            </div>
          </div>
          
          <div className="relative reveal-animation" style={{ animationDelay: '0.3s' }}>
            <div className="bg-metal-silver/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-metal-silver/30 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Premium metal fabrication" 
                className="rounded-lg w-full h-auto object-cover"
              />
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-bold text-2xl text-steel-blue">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-steel-blue">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-steel-blue">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-orange/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-steel-blue/10 rounded-full blur-3xl"></div>
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
