import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { Star, ShieldCheck, Truck, ArrowLeft, ShoppingBag, Info } from 'lucide-react';

interface ProductDetailProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ products, onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <Link to="/shop" className="text-indigo-600 hover:underline">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/shop" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Volver a la tienda
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-gray-50 cursor-pointer opacity-70 hover:opacity-100 transition-opacity border border-gray-200">
                <img src={`https://picsum.photos/id/${product.id * 10 + idx}/200/200`} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-amber-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-1 text-slate-700 font-medium">{product.rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 text-sm">{product.reviews} reseñas verificadas</span>
            </div>
          </div>

          <div className="text-3xl font-bold text-slate-900 mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {product.description} Un producto diseñado pensando en la durabilidad y la estética contemporánea. Perfecto para quienes valoran el detalle.
          </p>

          <div className="space-y-4 mb-8">
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" /> Agregar al Carrito
            </button>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-slate-700">Garantía de 2 años</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Envío Express</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
             <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
             <div className="text-sm text-blue-800">
               <p className="font-semibold mb-1">Consejo de Experto</p>
               <p>¿Tienes dudas sobre este artículo? Usa el chat de IA en la esquina para preguntar detalles específicos sobre materiales o cuidados.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};