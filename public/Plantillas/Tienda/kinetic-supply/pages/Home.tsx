import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Box } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  featuredProducts: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ featuredProducts, onAddToCart, onQuickView }) => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] border-b border-muted/30 flex items-center justify-center overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/40 z-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=1920" 
             alt="Urban Runner" 
             className="w-full h-full object-cover"
           />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl px-4">
           <div className="inline-block border border-neon bg-black/50 backdrop-blur px-4 py-1 mb-6">
              <span className="text-neon font-mono text-xs uppercase tracking-[0.3em] animate-pulse">/// System Override Active</span>
           </div>
           <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-lg">
             Future <span className="text-transparent text-stroke">Ready</span>
           </h1>
           <p className="text-lg md:text-xl text-gray-300 font-mono max-w-xl mx-auto mb-10">
             Technical apparel for the digital age. Engineered for performance in urban environments.
           </p>
           <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/shop" className="bg-neon text-black px-8 py-4 font-sans font-black uppercase text-lg hover:bg-white transition-colors clip-path-slant">
                 Shop The Drop
              </Link>
              <Link to="/shop" className="border border-white text-white px-8 py-4 font-sans font-black uppercase text-lg hover:bg-white hover:text-black transition-colors">
                 View Lookbook
              </Link>
           </div>
        </div>
        
        {/* Decorative Tech Lines */}
        <div className="absolute bottom-8 left-8 z-20 hidden md:block">
           <div className="text-xs font-mono text-white/70 flex flex-col gap-1">
              <span>COORDINATES: 35.6762° N, 139.6503° E</span>
              <span>TEMP: 24°C</span>
              <span>HUMIDITY: 65%</span>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-muted/30 bg-surface">
         <div className="p-12 border-b md:border-b-0 md:border-r border-muted/30 hover:bg-white/5 transition-colors group">
            <Zap className="w-10 h-10 text-muted group-hover:text-neon mb-4 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">High Voltage Design</h3>
            <p className="text-sm text-muted font-mono">Radical silhouettes meeting functional requirements.</p>
         </div>
         <div className="p-12 border-b md:border-b-0 md:border-r border-muted/30 hover:bg-white/5 transition-colors group">
            <Globe className="w-10 h-10 text-muted group-hover:text-neon mb-4 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">Global Logistics</h3>
            <p className="text-sm text-muted font-mono">Worldwide shipping nodes. 48hr dispatch guarantee.</p>
         </div>
         <div className="p-12 hover:bg-white/5 transition-colors group">
            <Box className="w-10 h-10 text-muted group-hover:text-neon mb-4 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-2">Secure Drops</h3>
            <p className="text-sm text-muted font-mono">Bot-protection enabled. Fair access for real humans.</p>
         </div>
      </section>

      {/* Latest Drop Grid */}
      <section className="py-20 px-4 md:px-8 bg-[#09090b]">
        <div className="flex justify-between items-end mb-12">
           <div>
              <span className="text-neon font-mono text-xs uppercase tracking-widest block mb-2">Latest Arrivals</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Season 04: <span className="text-muted">GLITCH</span></h2>
           </div>
           <Link to="/shop" className="hidden md:flex items-center gap-2 text-white hover:text-neon font-mono text-sm uppercase tracking-widest border-b border-transparent hover:border-neon pb-1 transition-all">
              View All Specs <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {featuredProducts.map(product => (
              <ProductCard 
                 key={product.id} 
                 product={product} 
                 onAddToCart={onAddToCart} 
                 onQuickView={onQuickView}
              />
           ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/shop" className="inline-block border border-muted text-white px-8 py-3 font-mono text-sm hover:border-neon hover:text-neon transition-colors">
             VIEW ALL
          </Link>
        </div>
      </section>

      {/* Big Image Break */}
      <section className="relative py-32 border-y border-muted/30 overflow-hidden">
         <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover grayscale opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]"></div>
         </div>
         <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase mb-8 tracking-tighter">
               Redefine <span className="text-neon">Movement</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 font-mono text-sm md:text-base mb-12">
               We build gear for the concrete jungle. Every seam, every zipper, every fabric choice is calculated for maximum durability and style impact.
            </p>
            <button className="bg-white text-black px-10 py-4 font-black uppercase hover:bg-neon hover:scale-105 transition-all duration-300">
               Read The Manifesto
            </button>
         </div>
      </section>

    </div>
  );
};
