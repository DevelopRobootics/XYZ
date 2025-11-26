import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User, Github } from 'lucide-react';
import { CartDrawer } from './CartDrawer';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
  cartItems: any[];
  onRemoveItem: (id: number) => void;
  total: number;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  cartCount, 
  cartItems, 
  onRemoveItem, 
  total 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
          scrolled || isMenuOpen ? 'bg-white/80 backdrop-blur-md border-gray-200 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                L
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-slate-900">Lumina</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-sm font-medium hover:text-indigo-600 transition-colors ${location.pathname === '/' ? 'text-indigo-600' : 'text-slate-600'}`}>Inicio</Link>
              <Link to="/shop" className={`text-sm font-medium hover:text-indigo-600 transition-colors ${location.pathname === '/shop' ? 'text-indigo-600' : 'text-slate-600'}`}>Catálogo</Link>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Colecciones</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Contacto</a>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-slate-600 hover:text-indigo-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-slate-600 hover:text-indigo-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-slate-600 hover:text-indigo-600 transition-colors group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 mr-2 text-slate-600"
              >
                 <ShoppingBag className="w-6 h-6" />
                 {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50">Inicio</Link>
              <Link to="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50">Catálogo</Link>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50">Colecciones</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-white text-2xl font-serif font-bold">Lumina</h3>
              <p className="text-sm leading-relaxed opacity-80">
                Diseño curado para la vida moderna. Calidad, estética y funcionalidad en cada producto.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                {/* Add more social icons here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Comprar</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/shop" className="hover:text-white transition-colors">Todo</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Novedades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Ayuda</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Envíos y Devoluciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Newsletter</h4>
              <p className="text-sm mb-4 opacity-80">Recibe las últimas novedades y ofertas exclusivas.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                  Ok
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-xs opacity-60">
            <p>&copy; 2025 Lumina Store. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={onRemoveItem}
        total={total}
      />
    </div>
  );
};