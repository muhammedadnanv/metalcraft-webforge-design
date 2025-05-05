
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mobileNumbers = [
    '+971 554610350',
    '+971 506771566', 
    '+971 508937800'
  ];

  const serviceAreas = [
    'Ras Al Khaimah',
    'Abu Dhabi', 
    'Dubai',
    'Sharjah'
  ];

  return (
    <footer className="bg-steel-blue text-white">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-0">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">Jawad Metal Works LLC</h3>
            <p className="text-white/80 mb-4 text-sm sm:text-base">
              Premium customized stainless steel equipment for commercial kitchen and food industry.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                <Facebook size={isMobile ? 16 : 20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                <Twitter size={isMobile ? 16 : 20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                <Instagram size={isMobile ? 16 : 20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                <Linkedin size={isMobile ? 16 : 20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-accent-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent-orange transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent-orange transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent-orange transition-colors">Request a Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {serviceAreas.map((area) => (
                <li key={area} className="text-white/80">{area}</li>
              ))}
              <li className="text-white/80">United Arab Emirates</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">Contact</h3>
            <address className="not-italic text-white/80 space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-2">
                <MapPin size={isMobile ? 16 : 20} className="mt-1 shrink-0" />
                <p>Address, Ajman 100011, Al Ajman, United Arab Emirates</p>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={isMobile ? 16 : 20} className="shrink-0" />
                  <p className="font-medium">Mobile Numbers:</p>
                </div>
                {mobileNumbers.map((number) => (
                  <p key={number} className="pl-5 sm:pl-7">{number}</p>
                ))}
                <p className="pl-5 sm:pl-7">Landline: +971 6 565 1865</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={isMobile ? 16 : 20} className="shrink-0" />
                <p>jawadmetals@gmail.com</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20 px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left space-y-1 sm:space-y-2 text-sm">
              <p>© {new Date().getFullYear()} Jawad Metal Works LLC. All rights reserved.</p>
              <p className="text-white/80">
                Developed by{' '}
                <a 
                  href="https://adwebcomicagency.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-orange hover:underline"
                >
                  Ad Web Comic Agency
                </a>
              </p>
            </div>
            <button 
              onClick={scrollToTop}
              className="p-2 sm:p-3 bg-accent-orange rounded-full hover:bg-accent-orange/80 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={isMobile ? 16 : 20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
