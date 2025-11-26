import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home as HomeIcon, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-900 text-white p-2 rounded-lg group-hover:bg-brand-600 transition-colors">
                <HomeIcon size={24} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-900">
                Luxe<span className="text-brand-accent">Estate</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-brand-600' : 'text-gray-600 hover:text-brand-900'}`}
              >
                Home
              </Link>
              <Link 
                to="/properties" 
                className={`text-sm font-medium transition-colors ${isActive('/properties') ? 'text-brand-600' : 'text-gray-600 hover:text-brand-900'}`}
              >
                Properties
              </Link>
              <Link 
                to="/sell" 
                className={`text-sm font-medium transition-colors ${isActive('/sell') ? 'text-brand-600' : 'text-gray-600 hover:text-brand-900'}`}
              >
                List With AI
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/contact" className="px-5 py-2.5 bg-brand-900 text-white text-sm font-medium rounded-full hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/20">
                Contact Agent
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                className="text-base font-medium text-gray-700 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/properties" 
                className="text-base font-medium text-gray-700 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                to="/sell" 
                className="text-base font-medium text-gray-700 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                List With AI
              </Link>
              <hr className="border-gray-100" />
              <button className="w-full py-3 bg-brand-900 text-white rounded-lg font-medium">
                Contact Agent
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-serif text-2xl font-bold tracking-tight">
                  Luxe<span className="text-brand-accent">Estate</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Redefining luxury real estate with cutting-edge technology and personalized service. Find your dream home today.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/properties" className="hover:text-white transition-colors">Properties</Link></li>
                <li><Link to="/sell" className="hover:text-white transition-colors">Sell Your Home</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Agents</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Property Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relocation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe for the latest market updates.</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-brand-800 text-white px-4 py-2 rounded-lg text-sm flex-grow focus:outline-none focus:ring-1 focus:ring-brand-accent"
                />
                <button type="button" className="bg-brand-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 LuxeEstate. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;