import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';

const Shop: React.FC = () => {
  const categories = ["Todos", "Cerámica", "Cestería", "Textil", "Madera", "Decoración"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle title="Nuestra Colección" subtitle="Tienda" center={true} />
      
      {/* Category Filter Bar (Visual only for template) */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, index) => (
          <button 
            key={cat}
            className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
              index === 0 
                ? 'bg-earth-800 text-white' 
                : 'bg-white text-gray-600 hover:bg-earth-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* Repeating products to fill the grid for demo */}
        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={`rep-${product.id}`} product={{...product, id: `rep-${product.id}`}} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm mb-4">Mostrando 12 de 24 productos</p>
        <button className="inline-block border-b border-earth-800 text-earth-800 pb-1 hover:opacity-70 transition-opacity">
          Cargar más productos
        </button>
      </div>
    </div>
  );
};

export default Shop;