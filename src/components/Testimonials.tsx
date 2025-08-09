
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type TestimonialType = {
  id: number;
  name: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    company: "Al Majlis Restaurant",
    content: "Jawad Metal Works delivered exceptional quality stainless steel kitchen equipment for our restaurant. Their attention to detail and craftsmanship exceeded our expectations.",
    rating: 5,
    initials: "AH"
  },
  {
    id: 2,
    name: "Sara Al Mansoori",
    company: "Emirates Catering",
    content: "We've worked with many fabricators over the years, but Jawad Metal Works stands out for their professionalism and quality. Their team was responsive to our needs.",
    rating: 5,
    initials: "SM"
  },
  {
    id: 3,
    name: "Mohammed Al-Qassim",
    company: "Royal Grand Hotel",
    content: "The custom food service counters that Jawad Metal Works created for our hotel are both functional and beautiful. Their team's expertise is evident in every detail.",
    rating: 4,
    initials: "MQ"
  },
  {
    id: 4,
    name: "Fatima Zaidi",
    company: "Zafran Bakery",
    content: "Jawad Metal Works understood our unique requirements for our bakery equipment. The quality of their work is outstanding and their after-sales service is excellent!",
    rating: 5,
    initials: "FZ"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-2 mb-4">
          <Quote size={20} className="text-accent-orange flex-shrink-0 mt-1" />
          <p className="text-matte-black/80 italic text-xs sm:text-sm">{testimonial.content}</p>
        </div>
        
        <div className="flex justify-between items-center mt-4 sm:mt-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Avatar className="h-8 w-8 bg-accent-orange/10 border border-accent-orange/20">
              <AvatarFallback className="text-accent-orange text-xs">
                {testimonial.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-matte-black text-xs sm:text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.company}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < testimonial.rating ? "text-accent-orange fill-accent-orange" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  // For mobile view, we'll show one testimonial at a time
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6 md:mb-10 lg:mb-12 reveal-animation">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            What Our <span className="text-accent-orange">Clients Say</span>
          </h2>
          <p className="text-matte-black/70 max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 text-sm sm:text-base">
            Don't just take our word for it. Here's what our satisfied clients have to say about our custom stainless steel fabrication services.
          </p>
        </div>
        
        {/* Desktop and tablet view - grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 px-2 sm:px-4 lg:px-0">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="reveal-animation">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        {/* Mobile view - carousel */}
        <div className="md:hidden px-2 sm:px-4">{" "}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" 
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === activeIndex ? "bg-accent-orange" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
