import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowLeft, Plus, ShieldCheck, Truck, Info } from 'lucide-react';

interface ProductDetailProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ products, onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) return null;

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
       {/* Breadcrumb */}
       <div className="container mx-auto px-4 py-6 border-b border-muted/30">
          <Link to="/shop" className="inline-flex items-center gap-2 text-muted hover:text-neon transition-colors font-mono text-xs uppercase">
             <ArrowLeft className="w-3 h-3" /> Back to Index
          </Link>
       </div>

       <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
             
             {/* Image Section */}
             <div className="relative group">
                <div className="aspect-[4/5] border border-muted/30 bg-surface overflow-hidden relative">
                   {/* Decorative HUD elements */}
                   <div className="absolute top-4 left-4 border border-white/20 px-2 py-1 z-10 bg-black/50 backdrop-blur">
                      <span className="font-mono text-[10px] text-white">IMG_SRC: RAW</span>
                   </div>
                   <div className="absolute bottom-4 right-4 z-10">
                      <div className="flex gap-1">
                         <div className="w-1 h-1 bg-neon"></div>
                         <div className="w-1 h-1 bg-white"></div>
                         <div className="w-1 h-1 bg-white"></div>
                      </div>
                   </div>

                   <img 
                     src={product.image} 
                     alt={product.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
             </div>

             {/* Info Section */}
             <div className="flex flex-col h-full justify-center">
                <div className="mb-8">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-neon font-mono text-xs uppercase tracking-[0.2em] border border-neon/50 px-2 py-1">
                         {product.category}
                      </span>
                      <span className="text-muted font-mono text-xs">SKU: KIN-{product.id}00-X</span>
                   </div>
                   <h1 className="text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight mb-6">
                      {product.name}
                   </h1>
                   <div className="text-3xl font-mono text-white mb-8 flex items-baseline gap-4">
                      ${product.price.toFixed(2)}
                      <span className="text-sm text-muted line-through opacity-50">$999.00</span>
                   </div>
                   
                   <div className="prose prose-invert mb-10">
                      <p className="text-gray-300 font-mono text-sm leading-relaxed border-l-2 border-neon pl-4">
                         {product.description} <br/><br/>
                         Engineered for durability and style. This item features KINETIC's proprietary weave technology ensuring weather resistance and breathability.
                      </p>
                   </div>

                   {/* Actions */}
                   <div className="flex flex-col gap-4">
                      <button 
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-neon text-black py-5 font-sans font-black uppercase text-xl tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-3"
                      >
                         Acquire Asset <Plus className="w-5 h-5" />
                      </button>
                      <button className="w-full border border-muted text-white py-4 font-mono text-xs uppercase tracking-widest hover:border-white transition-colors">
                         View Sizing Chart
                      </button>
                   </div>

                   {/* Meta */}
                   <div className="grid grid-cols-3 gap-4 mt-12 border-t border-muted/30 pt-8">
                      <div className="text-center">
                         <ShieldCheck className="w-6 h-6 mx-auto text-muted mb-2" />
                         <span className="block text-[10px] font-mono uppercase text-muted">Auth. Guarantee</span>
                      </div>
                      <div className="text-center border-l border-r border-muted/30">
                         <Truck className="w-6 h-6 mx-auto text-muted mb-2" />
                         <span className="block text-[10px] font-mono uppercase text-muted">Express Ship</span>
                      </div>
                      <div className="text-center">
                         <Info className="w-6 h-6 mx-auto text-muted mb-2" />
                         <span className="block text-[10px] font-mono uppercase text-muted">24/7 Support</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};