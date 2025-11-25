import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Zap, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
  return (
    <div className="group relative bg-surface border border-muted/30 hover:border-neon transition-colors duration-300 flex flex-col">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/5]">
        <div className="absolute inset-0 bg-neon/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay pointer-events-none"></div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
          loading="lazy"
        />
        
        {/* Tech Markers */}
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
           <span className="bg-black text-white text-[10px] font-mono px-1 border border-white/20">ID_{product.id.toString().padStart(3, '0')}</span>
        </div>

        {/* Action Overlay */}
        <div className="absolute bottom-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col-reverse">
           <button 
             onClick={(e) => {
               e.preventDefault();
               onAddToCart(product);
             }}
             className="bg-neon text-black p-3 hover:bg-white transition-colors"
             title="Add to Cart"
           >
             <Plus className="w-6 h-6" />
           </button>
           
           {onQuickView && (
             <button 
               onClick={(e) => {
                 e.preventDefault();
                 e.stopPropagation();
                 onQuickView(product);
               }}
               className="bg-black text-white border-l border-t border-muted/30 p-3 hover:text-neon transition-colors"
               title="Quick View"
             >
               <Eye className="w-6 h-6" />
             </button>
           )}
        </div>
      </Link>

      {/* Details */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-4">
        <div>
          <div className="flex justify-between items-start mb-1">
             <span className="text-[10px] font-mono text-neon uppercase tracking-widest">{product.category}</span>
             <div className="flex gap-1">
                {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-muted/50 rounded-full"></div>)}
             </div>
          </div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-sans text-xl font-bold uppercase leading-tight text-white group-hover:text-neon transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <div className="flex items-end justify-between border-t border-muted/30 pt-3">
          <span className="font-mono text-lg text-white">${product.price.toFixed(2)}</span>
          <div className="flex items-center gap-1 text-[10px] text-muted uppercase">
            <Zap className="w-3 h-3 text-neon" />
            <span>In Stock</span>
          </div>
        </div>
      </div>
    </div>
  );
};
