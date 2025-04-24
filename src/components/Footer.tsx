import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jawad Metal Works</h3>
            <p className="text-white/80 mb-4">
              Premium custom fabrication for commercial kitchens, built with precision and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-accent-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent-orange transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent-orange transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent-orange transition-colors">Request a Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-white/80">{area}</li>
              ))}
              <li className="text-white/80">United Arab Emirates</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-white/80 space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 shrink-0" />
                <p>Address, Ajman 100011, Al Ajman, United Arab Emirates</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={20} className="shrink-0" />
                  <p className="font-medium">Mobile Numbers:</p>
                </div>
                {mobileNumbers.map((number) => (
                  <p key={number} className="pl-7">{number}</p>
                ))}
                <p className="pl-7">Landline: +971 6 565 1865</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={20} className="shrink-0" />
                <p>jawadmetals@gmail.com</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left space-y-2">
              <p>© {new Date().getFullYear()} Jawad Metal Works. All rights reserved.</p>
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
              className="p-3 bg-accent-orange rounded-full hover:bg-accent-orange/80 transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
