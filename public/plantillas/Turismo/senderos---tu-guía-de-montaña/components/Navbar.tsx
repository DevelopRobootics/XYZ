import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MountainSnow } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <MountainSnow className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-stone-900 tracking-tight">Senderos</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-emerald-600 ${
                    isActive ? 'text-emerald-700 font-semibold' : 'text-stone-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button size="sm" variant="primary">Iniciar Sesión</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-stone-600 hover:text-stone-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 mt-4 border-t border-stone-100">
              <Button fullWidth onClick={() => setIsOpen(false)}>Iniciar Sesión</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;