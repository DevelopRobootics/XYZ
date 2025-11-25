import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative border border-stone-200 hover:border-stone-900 transition-colors duration-300 bg-white">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
            loading="lazy"
          />
          
          {/* Category Tag - Absolute top left */}
          <div className="absolute top-0 left-0 bg-white border-b border-r border-stone-900 px-3 py-1 z-10">
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone-900">
               {product.category}
            </span>
          </div>

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-white border-t border-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between px-4">
            <span className="text-sm font-bold">${product.price}</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              className="text-xs uppercase tracking-wider font-bold flex items-center gap-1 hover:text-stone-500 transition-colors"
            >
              Añadir <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4 border-t border-transparent group-hover:border-stone-900 transition-colors">
        <div className="flex justify-between items-baseline">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-xl text-stone-900 leading-none group-hover:underline decoration-1 underline-offset-4">
              {product.name}
            </h3>
          </Link>
        </div>
        <p className="mt-2 text-xs text-stone-500 line-clamp-1 font-light">
          {product.description}
        </p>
      </div>
    </div>
  );
};