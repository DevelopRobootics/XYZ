import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain, Instagram, Twitter, Facebook } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-sand-50 selection:bg-citrus-300">
      
      {/* Floating Island Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className={`
          w-full max-w-5xl transition-all duration-300 ease-out
          ${isMenuOpen ? 'rounded-3xl bg-white' : 'rounded-full'} 
          ${scrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-pine-900/5 border border-white/20' : 'bg-transparent'}
        `}>
          <div className="px-6 h-16 sm:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group z-50">
              <div className="bg-pine-900 text-white p-2 rounded-full">
                <Mountain className="h-5 w-5" />
              </div>
              <span className={`text-xl font-display font-bold tracking-tight transition-colors ${scrolled || isMenuOpen ? 'text-pine-900' : 'text-pine-900 md:text-pine-900'}`}>
                Vereda
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center bg-sand-100/50 p-1.5 rounded-full border border-sand-200/50 backdrop-blur-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-white text-pine-900 shadow-sm'
                      : 'text-pine-600 hover:text-pine-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              <Link to="/explore">
                <Button size="sm" variant="accent" className="hidden sm:flex">
                  Empezar
                </Button>
              </Link>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-pine-900 hover:bg-sand-200 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden px-6 pb-6 pt-2 animate-in slide-in-from-top-4 fade-in duration-200">
              <div className="space-y-2 flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-pine-50 text-pine-900'
                        : 'text-pine-600 hover:bg-sand-50 hover:text-pine-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to="/explore" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full" variant="accent">Empezar Aventura</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-32">
        {children}
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-pine-950 text-sand-100 py-16 sm:py-24 mt-20 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-pine-800 pb-12 mb-12">
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <Mountain className="h-8 w-8 text-citrus-400" />
                <span className="text-3xl font-bold font-display tracking-tight text-white">Vereda</span>
              </Link>
              <h3 className="text-2xl font-light leading-snug max-w-sm text-sand-200">
                La naturaleza no es un lugar al que visitas. Es el hogar.
              </h3>
            </div>
            
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Plataforma</h4>
              <ul className="space-y-4 text-sand-300">
                <li><Link to="/explore" className="hover:text-citrus-400 transition-colors">Rutas</Link></li>
                <li><Link to="/assistant" className="hover:text-citrus-400 transition-colors">Asistente IA</Link></li>
                <li><a href="#" className="hover:text-citrus-400 transition-colors">Membresía</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Compañía</h4>
              <ul className="space-y-4 text-sand-300">
                <li><Link to="/contact" className="hover:text-citrus-400 transition-colors">Contacto</Link></li>
                <li><a href="#" className="hover:text-citrus-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-citrus-400 transition-colors">Términos</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-pine-900 p-2 rounded-full hover:bg-citrus-400 hover:text-pine-950 transition-all"><Instagram size={20} /></a>
                <a href="#" className="bg-pine-900 p-2 rounded-full hover:bg-citrus-400 hover:text-pine-950 transition-all"><Twitter size={20} /></a>
                <a href="#" className="bg-pine-900 p-2 rounded-full hover:bg-citrus-400 hover:text-pine-950 transition-all"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-pine-600">
            <p>&copy; {new Date().getFullYear()} Vereda.</p>
            <p className="mt-2 md:mt-0">Diseñado con pasión por la montaña.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};