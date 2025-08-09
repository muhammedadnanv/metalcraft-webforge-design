
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

  const iconSize = isMobile ? 14 : 18;

  return (
    <footer className="bg-steel-blue text-white">
      <div className="container mx-auto py-8 md:py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2 sm:px-4 lg:px-0">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 md:mb-4">Jawad Metal Works LLC</h3>
            <p className="text-white/80 mb-4 text-xs sm:text-sm">
              Premium customized stainless steel equipment for commercial kitchen and food industry.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="#" className="p-1.5 sm:p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors touch-manipulation">
                <Facebook size={iconSize} />
              </a>
              <a href="#" className="p-1.5 sm:p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors touch-manipulation">
                <Twitter size={iconSize} />
              </a>
              <a href="#" className="p-1.5 sm:p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors touch-manipulation">
                <Instagram size={iconSize} />
              </a>
              <a href="#" className="p-1.5 sm:p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors touch-manipulation">
                <Linkedin size={iconSize} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-accent-orange transition-colors block py-1">About Us</a></li>
              <li><a href="#services" className="hover:text-accent-orange transition-colors block py-1">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent-orange transition-colors block py-1">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent-orange transition-colors block py-1">Request a Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 md:mb-4">Service Areas</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              {serviceAreas.map((area) => (
                <li key={area} className="text-white/80 py-1">{area}</li>
              ))}
              <li className="text-white/80 py-1">United Arab Emirates</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 md:mb-4">Contact</h3>
            <address className="not-italic text-white/80 space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={iconSize} className="mt-0.5 shrink-0" />
                <p>Address, Ajman 100011, Al Ajman, United Arab Emirates</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone size={iconSize} className="shrink-0" />
                  <p className="font-medium">Mobile Numbers:</p>
                </div>
                {mobileNumbers.map((number) => (
                  <p key={number} className="pl-6">{number}</p>
                ))}
                <p className="pl-6">Landline: +971 6 565 1865</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={iconSize} className="shrink-0" />
                <p>jawadmetals@gmail.com</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 border-t border-white/20 px-2 sm:px-4 lg:px-0">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left space-y-1 text-xs sm:text-sm">
              <p>© {new Date().getFullYear()} Jawad Metal Works LLC. All rights reserved.</p>
              <p className="text-white/80">
                Developed by{' '}
                <a 
                  href="https://adwebcomicagency.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-orange hover:underline touch-manipulation"
                >
                  Ad Web Comic Agency
                </a>
              </p>
            </div>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-accent-orange rounded-full hover:bg-accent-orange/80 transition-colors touch-manipulation"
              aria-label="Scroll to top"
            >
              <ArrowUp size={iconSize} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
