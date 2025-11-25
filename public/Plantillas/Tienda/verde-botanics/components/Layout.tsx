import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Instagram, Twitter, ArrowRight } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f4f4f0]">
      {/* Desktop Sidebar Navigation */}
      <aside className="hidden md:flex w-64 flex-col justify-between border-r border-stone-900 h-screen sticky top-0 bg-[#f4f4f0] z-40">
        {/* Top: Logo */}
        <div className="p-8 border-b border-stone-900">
          <Link to="/" className="block">
            <h1 className="font-serif text-4xl font-bold tracking-tighter leading-none">Verde.</h1>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mt-1 block">Atelier</span>
          </Link>
        </div>

        {/* Middle: Nav Links */}
        <nav className="flex-1 flex flex-col p-8 space-y-6 justify-center">
          <NavLink to="/" current={location.pathname} label="01 / Inicio" />
          <NavLink to="/shop" current={location.pathname} label="02 / Colección" />
          <a href="#" className="text-lg text-stone-400 hover:text-stone-900 transition-colors font-medium hover:pl-2 duration-300">03 / Espacios</a>
          <a href="#" className="text-lg text-stone-400 hover:text-stone-900 transition-colors font-medium hover:pl-2 duration-300">04 / Manifiesto</a>
        </nav>

        {/* Bottom: Utility & Social */}
        <div className="p-8 border-t border-stone-900 space-y-6">
          <div className="flex items-center justify-between">
             <button className="hover:text-stone-600 transition-colors"><Search className="w-5 h-5" /></button>
             <button 
               onClick={() => setIsCartOpen(true)} 
               className="flex items-center gap-2 hover:text-stone-600 transition-colors group relative"
             >
               <span className="text-xs font-bold uppercase">Cesta</span>
               <ShoppingBag className="w-5 h-5" />
               {cartCount > 0 && (
                 <span className="absolute -top-2 -right-2 bg-stone-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-none">
                   {cartCount}
                 </span>
               )}
             </button>
          </div>
          <div className="flex gap-4 text-stone-400">
            <Instagram className="w-4 h-4 hover:text-stone-900 cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 hover:text-stone-900 cursor-pointer transition-colors" />
          </div>
          <div className="text-[10px] text-stone-400 uppercase tracking-wider">
            © 2025 Verde.
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#f4f4f0] border-b border-stone-900 z-50 flex items-center justify-between px-4">
        <Link to="/" className="font-serif text-2xl font-bold">Verde.</Link>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[10px] w-3 h-3 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#f4f4f0] z-40 pt-20 px-6 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-6 text-3xl font-serif font-bold">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Colección</Link>
            <a href="#" className="text-stone-400">Espacios</a>
            <a href="#" className="text-stone-400">Diario</a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:mt-0 mt-16 w-full overflow-x-hidden">
        {children}
        
        {/* Minimal Footer for Main Content */}
        <footer className="border-t border-stone-900 py-12 px-8 md:px-16 bg-stone-900 text-[#f4f4f0]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="space-y-4">
               <h3 className="font-serif text-2xl">Newsletter</h3>
               <div className="flex border-b border-stone-700 pb-2">
                 <input type="email" placeholder="Email address" className="bg-transparent w-full outline-none placeholder-stone-600 text-sm" />
                 <button className="text-xs uppercase font-bold hover:text-stone-400">Enviar</button>
               </div>
             </div>
             <div className="md:col-span-2 flex flex-col md:flex-row justify-between gap-8">
               <div>
                 <h4 className="uppercase text-xs tracking-widest text-stone-500 mb-4">Dirección</h4>
                 <p className="font-light text-sm">Av. Botánica 123<br/>Distrito Diseño<br/>CDMX</p>
               </div>
               <div>
                 <h4 className="uppercase text-xs tracking-widest text-stone-500 mb-4">Legal</h4>
                 <ul className="space-y-2 text-sm font-light opacity-60">
                   <li><a href="#">Términos</a></li>
                   <li><a href="#">Privacidad</a></li>
                   <li><a href="#">Envíos</a></li>
                 </ul>
               </div>
             </div>
          </div>
        </footer>
      </main>

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

const NavLink = ({ to, current, label }: { to: string, current: string, label: string }) => {
  const isActive = current === to;
  return (
    <Link 
      to={to} 
      className={`text-xl transition-all duration-300 font-medium flex items-center group ${
        isActive ? 'text-stone-900 translate-x-2' : 'text-stone-400 hover:text-stone-900 hover:translate-x-2'
      }`}
    >
      {label}
      {isActive && <ArrowRight className="ml-2 w-4 h-4 opacity-100 transition-opacity" />}
    </Link>
  );
};