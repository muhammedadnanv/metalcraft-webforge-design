
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-accent-orange transition-colors">Exhaust Hood Systems</a></li>
              <li><a href="#services" className="hover:text-accent-orange transition-colors">Worktables & Prep Stations</a></li>
              <li><a href="#services" className="hover:text-accent-orange transition-colors">Sinks & Washing Stations</a></li>
              <li><a href="#services" className="hover:text-accent-orange transition-colors">Equipment Stands</a></li>
              <li><a href="#services" className="hover:text-accent-orange transition-colors">Custom Fabrication</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-white/80">
              <p>1234 Fabrication Lane</p>
              <p>Industry City, ST 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@jawadmetalworks.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Jawad Metal Works. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-accent-orange rounded-full mt-4 md:mt-0 hover:bg-accent-orange/80 transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
