import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product, SortOption } from '../types';
import { CATEGORIES } from '../constants';
import { Search, ArrowDownUp } from 'lucide-react';

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
    if (selectedCategory !== "Todos") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case SortOption.PRICE_LOW: result.sort((a, b) => a.price - b.price); break;
      case SortOption.PRICE_HIGH: result.sort((a, b) => b.price - a.price); break;
      default: break;
    }
    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      
      {/* Left Filter Panel (Desktop) */}
      <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-stone-900 bg-white p-8">
        <div className="sticky top-24">
          <h2 className="font-serif text-3xl mb-8 hidden lg:block">Filtros</h2>
          
          {/* Search Mobile/Desktop */}
          <div className="relative mb-8 border-b border-stone-300 pb-2">
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-stone-900 placeholder-stone-400 font-sans uppercase text-sm tracking-wider"
            />
            <Search className="absolute right-0 top-0 w-4 h-4 text-stone-400" />
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Categoría</p>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 lg:gap-2 pb-4 lg:pb-0 no-scrollbar">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left whitespace-nowrap text-sm transition-colors ${
                    selectedCategory === cat 
                      ? 'text-stone-900 font-bold border-l-2 border-stone-900 pl-2' 
                      : 'text-stone-500 hover:text-stone-900 border-l-2 border-transparent pl-2'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="mt-8 hidden lg:block">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Orden</p>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full bg-transparent text-sm outline-none border-b border-stone-200 pb-2 cursor-pointer"
            >
              <option value={SortOption.NEWEST}>Nuevos</option>
              <option value={SortOption.PRICE_LOW}>Precio: Bajo - Alto</option>
              <option value={SortOption.PRICE_HIGH}>Precio: Alto - Bajo</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 p-4 lg:p-8 bg-[#f4f4f0]">
         {/* Mobile Sort Header */}
         <div className="lg:hidden flex justify-between items-center mb-6">
           <span className="text-sm text-stone-500">{filteredProducts.length} Resultados</span>
           <button className="flex items-center gap-2 text-sm font-bold">
             <ArrowDownUp className="w-4 h-4" /> Ordenar
           </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
           {filteredProducts.map(product => (
             <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
           ))}
         </div>

         {filteredProducts.length === 0 && (
           <div className="h-96 flex flex-col items-center justify-center border border-stone-300 border-dashed m-8">
             <p className="font-serif text-2xl text-stone-400">Sin resultados</p>
             <button 
                onClick={() => {setSelectedCategory("Todos"); setSearchQuery("");}}
                className="mt-4 text-sm border-b border-stone-900 pb-1"
             >
               Limpiar filtros
             </button>
           </div>
         )}
      </div>
    </div>
  );
};