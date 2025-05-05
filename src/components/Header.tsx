
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2 md:py-3" : "bg-transparent py-3 md:py-5"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl sm:text-2xl font-bold font-poppins text-matte-black">
            <span className="text-accent-orange">Jawad</span> Metal Works LLC
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <a href="#about" className="font-medium text-steel-blue hover:text-accent-orange transition-colors">About</a>
          <a href="#services" className="font-medium text-steel-blue hover:text-accent-orange transition-colors">Services</a>
          <a href="#portfolio" className="font-medium text-steel-blue hover:text-accent-orange transition-colors">Portfolio</a>
          <a href="#contact" className="btn-primary">Request Quote</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-steel-blue p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t shadow-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a href="#about" className="font-medium text-steel-blue py-2 border-b border-gray-100 pl-4" onClick={handleMobileNavClick}>About</a>
            <a href="#services" className="font-medium text-steel-blue py-2 border-b border-gray-100 pl-4" onClick={handleMobileNavClick}>Services</a>
            <a href="#portfolio" className="font-medium text-steel-blue py-2 border-b border-gray-100 pl-4" onClick={handleMobileNavClick}>Portfolio</a>
            <div className="px-4">
              <a href="#contact" className="btn-primary w-full flex justify-center" onClick={handleMobileNavClick}>Request Quote</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
