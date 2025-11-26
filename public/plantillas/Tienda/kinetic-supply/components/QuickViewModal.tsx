import React, { useEffect } from 'react';
import { X, Plus, Zap, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-[#09090b] border border-neon shadow-[0_0_30px_rgba(204,255,0,0.15)] flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white hover:text-neon hover:rotate-90 transition-all"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative bg-surface border-b md:border-b-0 md:border-r border-muted/30">
           <div className="absolute top-4 left-4 z-10 bg-black border border-white/20 px-2 py-1">
              <span className="font-mono text-[10px] text-neon uppercase">QUICK_VIEW_MODE</span>
           </div>
           <img 
             src={product.image} 
             alt={product.name} 
             className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
           />
           {/* Tech Overlay */}
           <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent opacity-80 pointer-events-none"></div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col h-full overflow-y-auto text-white custom-scrollbar">
          
          <div className="mb-auto">
            <div className="flex items-center gap-3 mb-4">
               <span className="text-neon font-mono text-xs uppercase tracking-widest border border-neon/30 px-2">
                 {product.category}
               </span>
               <div className="h-px flex-grow bg-muted/30"></div>
               <span className="text-muted font-mono text-[10px]">ID_{product.id.toString().padStart(4, '0')}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] mb-4">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-4 mb-6 border-b border-muted/30 pb-6">
              <span className="font-mono text-2xl text-white">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-1 text-[10px] text-neon uppercase">
                 <Zap className="w-3 h-3" />
                 <span>In Stock / Ready to ship</span>
              </div>
            </div>

            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
              {product.description}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <button 
               onClick={() => {
                 onAddToCart(product);
                 onClose(); // Optional: keep open or close
               }}
               className="w-full bg-neon text-black py-4 font-sans font-black uppercase text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 clip-path-slant"
            >
               Add To Supply <Plus className="w-5 h-5" />
            </button>
            
            <Link 
               to={`/product/${product.id}`} 
               onClick={onClose}
               className="block w-full text-center py-3 border border-muted text-muted font-mono text-xs uppercase hover:text-white hover:border-white transition-colors"
            >
               View Full Spec Sheet
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-muted/30 flex justify-between items-center text-muted">
             <div className="flex items-center gap-2 text-[10px] font-mono uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Authentic</span>
             </div>
             <span className="text-[10px] font-mono">KINETIC SUPPLY_LTD</span>
          </div>

        </div>
      </div>
    </div>
  );
};
