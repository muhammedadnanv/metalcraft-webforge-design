
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold font-poppins text-matte-black">
            <span className="text-accent-orange">Jawad</span> Metal Works
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="font-medium text-steel-blue hover:text-accent-orange transition-colors">About</a>
          <a href="#services" className="font-medium text-steel-blue hover:text-accent-orange transition-colors">Services</a>
          <a href="#portfolio" className="font-medium text-steel-blue hover:text-accent-orange transition-colors">Portfolio</a>
          <a href="#contact" className="btn-primary">Request Quote</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-steel-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="font-medium text-steel-blue py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="font-medium text-steel-blue py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="font-medium text-steel-blue py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className="btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>Request Quote</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
