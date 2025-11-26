import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowLeft, Plus, Star } from 'lucide-react';

interface ProductDetailProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ products, onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Immersive Image (Scrollable on desktop if multiple images existed) */}
        <div className="h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-900 bg-stone-100 relative">
           <Link to="/shop" className="absolute top-8 left-8 z-20 bg-white/80 backdrop-blur-sm px-4 py-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:bg-stone-900 hover:text-white transition-colors">
              <ArrowLeft className="w-3 h-3" /> Volver
           </Link>
           <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
           />
        </div>

        {/* Right: Details */}
        <div className="p-8 lg:p-20 flex flex-col justify-center min-h-[50vh] lg:h-screen overflow-y-auto bg-[#f4f4f0]">
          <div className="max-w-md mx-auto w-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 border border-stone-900 text-[10px] font-bold uppercase tracking-widest">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-stone-500">
                 <Star className="w-3 h-3 fill-stone-900 text-stone-900" />
                 <span className="text-xs font-bold text-stone-900">{product.rating}</span>
                 <span className="text-xs">({product.reviews} reviews)</span>
              </div>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl leading-none mb-8 text-stone-900">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-6 mb-10 border-b border-stone-300 pb-8">
              <span className="text-4xl font-light text-stone-900">${product.price}</span>
              <span className="text-stone-500 text-sm uppercase tracking-wider">Incluye maceta</span>
            </div>

            <div className="space-y-6 text-stone-600 font-light leading-relaxed mb-12">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:mr-1 first-letter:float-left">
                {product.description}
              </p>
              <p>
                Ideal para espacios interiores con luz controlada. Requiere atención mínima pero constante. 
                Una pieza viva que evoluciona con tu espacio.
              </p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full py-5 bg-stone-900 text-white hover:bg-[#2f4f4f] transition-colors flex items-center justify-center gap-3 group"
              >
                <span className="uppercase tracking-[0.2em] text-xs font-bold">Adquirir Pieza</span>
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </button>
              <p className="text-center text-[10px] uppercase text-stone-400 tracking-widest">
                Envío gratuito en órdenes sobre $100
              </p>
            </div>
            
            {/* Specs */}
            <div className="grid grid-cols-2 gap-px bg-stone-300 border border-stone-300 mt-12">
               <div className="bg-[#f4f4f0] p-4 text-center">
                  <span className="block text-xs text-stone-400 uppercase mb-1">Altura</span>
                  <span className="font-serif text-lg">40-50cm</span>
               </div>
               <div className="bg-[#f4f4f0] p-4 text-center">
                  <span className="block text-xs text-stone-400 uppercase mb-1">Dificultad</span>
                  <span className="font-serif text-lg">Media</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};