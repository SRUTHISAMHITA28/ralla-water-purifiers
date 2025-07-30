import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Droplet } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Droplet className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-blue-900">Ralla</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#products" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">
              Products
            </a>
            <a href="#about" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-blue-900 font-medium hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button aria-label="Search" className="text-blue-900 hover:text-blue-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="User profile" className="text-blue-900 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Shopping cart" className="text-blue-900 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <nav className="flex flex-col px-4 py-2">
            <a 
              href="#" 
              className="py-3 border-b border-gray-100 text-blue-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#products" 
              className="py-3 border-b border-gray-100 text-blue-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#about" 
              className="py-3 border-b border-gray-100 text-blue-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="py-3 text-blue-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          <div className="flex justify-around py-4 border-t border-gray-100">
            <button aria-label="Search" className="text-blue-900">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="User profile" className="text-blue-900">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Shopping cart" className="text-blue-900">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;