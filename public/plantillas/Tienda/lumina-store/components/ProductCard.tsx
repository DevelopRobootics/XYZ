import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100 relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Badge overlay examples */}
          {product.price > 200 && (
            <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded uppercase tracking-wide font-bold">
              Premium
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="text-xs text-slate-500 font-medium">{product.rating}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="text-slate-900 font-semibold text-lg leading-tight mb-1 group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-slate-500 text-sm mb-4 line-clamp-1">{product.category}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="p-2 rounded-full bg-gray-50 text-slate-900 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm border border-gray-200 hover:border-transparent"
            aria-label="Agregar al carrito"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};