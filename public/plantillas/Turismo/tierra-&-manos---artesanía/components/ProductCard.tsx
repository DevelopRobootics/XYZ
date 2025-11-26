import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import Button, { ButtonVariant } from './Button';
import Modal from './Modal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-white border border-transparent hover:border-earth-100 hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Badges */}
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-earth-600 text-white text-xs px-2 py-1 uppercase tracking-wider font-bold">
              Nuevo
            </span>
          )}

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white p-3 text-earth-800 hover:text-earth-600 hover:shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
              title="Vista Rápida"
            >
              <Eye size={20} />
            </button>
            <button 
              className="bg-white p-3 text-earth-800 hover:text-earth-600 hover:shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100"
              title="Añadir al Carrito"
            >
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>

        <div className="p-4 text-center">
          <p className="text-xs text-earth-500 uppercase tracking-widest mb-1">{product.category}</p>
          <h3 className="text-lg font-serif font-medium text-earth-900 mb-2 truncate group-hover:text-earth-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-900 font-bold font-sans">${product.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Detalles del Producto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-100 overflow-hidden">
             <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
             <div>
                <span className="text-earth-600 text-sm font-bold uppercase tracking-wide">{product.category}</span>
                <h3 className="text-3xl font-serif font-bold text-earth-900 mt-1">{product.name}</h3>
                <p className="text-2xl text-gray-800 mt-2 font-light">${product.price.toFixed(2)}</p>
             </div>
             
             <p className="text-gray-600 leading-relaxed">
               {product.description} Este producto ha sido elaborado siguiendo técnicas tradicionales, garantizando su durabilidad y un acabado único.
             </p>

             <div className="pt-4 space-y-3">
               <Button fullWidth variant={ButtonVariant.PRIMARY} icon={<ShoppingBag size={18} />}>
                  Añadir al Carrito
               </Button>
               <Button fullWidth variant={ButtonVariant.GHOST} icon={<Heart size={18} />}>
                  Añadir a Favoritos
               </Button>
             </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;