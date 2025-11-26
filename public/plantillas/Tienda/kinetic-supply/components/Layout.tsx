import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Zap, Shield, User } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col bg-[#09090b] text-white">
      
      {/* Ticker Tape */}
      <div className="bg-neon h-8 flex items-center overflow-hidden whitespace-nowrap border-b border-black">
         <div className="animate-marquee flex items-center gap-12 text-black font-bold text-sm font-mono uppercase tracking-widest">
            {[...Array(5)].map((_, i) => (
               <React.Fragment key={i}>
                  <span>New Drop Live</span>
                  <span>//</span>
                  <span>Global Shipping</span>
                  <span>//</span>
                  <span>Secure Checkout</span>
                  <span>//</span>
                  <span>System Online</span>
                  <span>//</span>
               </React.Fragment>
            ))}
         </div>
      </div>

      {/* Industrial Header */}
      <header className="sticky top-0 z-40 bg-[#09090b]/90 backdrop-blur-md border-b border-muted/30">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-neon flex items-center justify-center text-black font-black text-2xl tracking-tighter group-hover:rotate-180 transition-transform duration-500">K</div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter leading-none">KINETIC</h1>
              <span className="text-[10px] text-neon font-mono tracking-[0.3em] block">SUPPLY_LTD</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
            <NavLink to="/" current={location.pathname} label="HQ" />
            <NavLink to="/shop" current={location.pathname} label="Catalog" />
            <a href="#" className="text-muted hover:text-neon transition-colors">Archive</a>
            <a href="#" className="text-muted hover:text-neon transition-colors">Intel</a>
          </nav>

          {/* Utils */}
          <div className="flex items-center gap-6">
             <button className="hidden md:block hover:text-neon transition-colors"><Search className="w-5 h-5" /></button>
             <button className="hidden md:block hover:text-neon transition-colors"><User className="w-5 h-5" /></button>
             <button 
               onClick={() => setIsCartOpen(true)} 
               className="flex items-center gap-2 hover:text-neon transition-colors group"
             >
               <div className="relative">
                 <ShoppingCart className="w-5 h-5" />
                 {cartCount > 0 && (
                   <span className="absolute -top-2 -right-2 bg-neon text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-none border border-black">
                     {cartCount}
                   </span>
                 )}
               </div>
             </button>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden hover:text-neon">
               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#09090b] z-30 pt-32 px-8 md:hidden">
          <nav className="flex flex-col space-y-8 font-sans text-4xl font-black uppercase italic tracking-tighter">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon hover:pl-4 transition-all">Home Base</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-neon hover:pl-4 transition-all">All Products</Link>
            <a href="#" className="text-muted">Login</a>
          </nav>
        </div>
      )}

      {/* Main */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Technical Footer */}
      <footer className="border-t border-muted/30 bg-[#09090b] text-muted py-16 font-mono text-xs">
         <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
               <h3 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h3>
               <div className="flex border border-muted p-1">
                 <input type="email" placeholder="ENTER_EMAIL" className="bg-transparent w-full outline-none px-2 text-white placeholder-muted/50" />
                 <button className="bg-neon text-black px-4 py-2 font-bold uppercase hover:bg-white transition-colors">Sub</button>
               </div>
            </div>
            
            <div>
               <h3 className="text-white font-bold uppercase tracking-widest mb-6">Sitemap</h3>
               <ul className="space-y-2 uppercase">
                  <li><a href="#" className="hover:text-neon">Products</a></li>
                  <li><a href="#" className="hover:text-neon">Lookbook</a></li>
                  <li><a href="#" className="hover:text-neon">About</a></li>
               </ul>
            </div>

            <div>
               <h3 className="text-white font-bold uppercase tracking-widest mb-6">Legal</h3>
               <ul className="space-y-2 uppercase">
                  <li><a href="#" className="hover:text-neon">Terms of Svc</a></li>
                  <li><a href="#" className="hover:text-neon">Privacy Protocol</a></li>
                  <li><a href="#" className="hover:text-neon">Shipping</a></li>
               </ul>
            </div>

            <div className="space-y-4">
               <div className="flex items-center gap-2">
                 <Shield className="w-4 h-4 text-neon" />
                 <span>SECURE_CONNECTION</span>
               </div>
               <div className="flex items-center gap-2">
                 <Zap className="w-4 h-4 text-neon" />
                 <span>POWERED_BY_REACT</span>
               </div>
               <p className="opacity-50 mt-8">© 2025 KINETIC SUPPLY LTD.<br/>ALL RIGHTS RESERVED.</p>
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

const NavLink = ({ to, current, label }: { to: string, current: string, label: string }) => {
  const isActive = current === to;
  return (
    <Link 
      to={to} 
      className={`relative py-1 group ${isActive ? 'text-neon' : 'text-white'}`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-neon transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
    </Link>
  );
};