import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  
  // Dynamic header styles based on page and scroll
  const headerClass = scrolled || !isHome
    ? 'bg-white shadow-md py-3' 
    : 'bg-transparent py-5';
    
  const textClass = scrolled || !isHome
    ? 'text-slate-800'
    : 'text-white';

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Propiedades', path: '/propiedades' },
    { name: 'Nosotros', path: '#' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-1.5 rounded-lg ${scrolled || !isHome ? 'bg-primary-600 text-white' : 'bg-white text-primary-900'}`}>
              <Home size={20} />
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight ${textClass}`}>
              Lumina Estates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-medium hover:text-primary-500 transition-colors ${textClass}`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant={scrolled || !isHome ? "primary" : "secondary"} size="sm">
              Publicar Propiedad
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${textClass}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Button className="w-full justify-center">Publicar Propiedad</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;