import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product, SortOption } from '../types';
import { CATEGORIES } from '../constants';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ShopProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>(SortOption.NEWEST);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== "Todos") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case SortOption.PRICE_LOW:
        result.sort((a, b) => a.price - b.price);
        break;
      case SortOption.PRICE_HIGH:
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Keep default order or randomized
        break;
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Catálogo</h1>
          <p className="text-slate-500 mt-1">Explora nuestra colección completa ({filteredProducts.length} productos)</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none w-full sm:w-64 transition-all"
            />
          </div>

          {/* Sort */}
          <div className="relative">
             <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-white border border-gray-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none cursor-pointer w-full sm:w-auto"
             >
               <option value={SortOption.NEWEST}>Más Recientes</option>
               <option value={SortOption.PRICE_LOW}>Precio: Bajo a Alto</option>
               <option value={SortOption.PRICE_HIGH}>Precio: Alto a Bajo</option>
             </select>
             <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat 
                ? 'bg-slate-900 text-white shadow-md transform scale-105' 
                : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-block p-6 bg-gray-50 rounded-full mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900">No se encontraron productos</h3>
          <p className="text-slate-500">Intenta con otra categoría o término de búsqueda.</p>
          <button 
            onClick={() => {setSelectedCategory("Todos"); setSearchQuery("");}}
            className="mt-4 text-indigo-600 font-medium hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
};