import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product, SortOption } from '../types';
import { CATEGORIES } from '../constants';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface ShopProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ products, onAddToCart, onQuickView }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>(SortOption.NEWEST);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== "All Systems") {
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
    <div className="min-h-screen bg-[#09090b]">
      
      {/* Header Control Panel */}
      <div className="border-b border-muted/30 bg-surface sticky top-20 z-30">
         <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <h1 className="text-3xl font-black uppercase italic text-white tracking-tighter">
                  Catalog <span className="text-neon text-lg not-italic font-mono ml-2">[{filteredProducts.length}]</span>
               </h1>

               <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  {/* Search */}
                  <div className="relative w-full md:w-64">
                     <input 
                        type="text" 
                        placeholder="SEARCH_DATABASE" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black border border-muted text-white px-4 py-2 font-mono text-xs focus:border-neon outline-none placeholder-muted"
                     />
                     <Search className="absolute right-3 top-2.5 w-4 h-4 text-muted" />
                  </div>
                  
                  {/* Mobile Filter Toggle */}
                  <button 
                     onClick={() => setShowFilters(!showFilters)}
                     className="md:hidden w-full flex items-center justify-center gap-2 border border-muted py-2 font-mono text-xs uppercase hover:bg-white hover:text-black"
                  >
                     <SlidersHorizontal className="w-4 h-4" /> Filters
                  </button>
               </div>
            </div>

            {/* Filters Area */}
            <div className={`mt-6 pt-6 border-t border-muted/30 ${showFilters ? 'block' : 'hidden md:block'}`}>
               <div className="flex flex-col md:flex-row justify-between gap-8">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                     {CATEGORIES.map(cat => (
                        <button
                           key={cat}
                           onClick={() => setSelectedCategory(cat)}
                           className={`px-4 py-1 text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                              selectedCategory === cat 
                                 ? 'bg-neon border-neon text-black' 
                                 : 'bg-transparent border-muted text-muted hover:border-white hover:text-white'
                           }`}
                        >
                           {cat}
                        </button>
                     ))}
                  </div>

                  {/* Sort */}
                  <div className="flex items-center gap-4">
                     <span className="text-xs font-mono text-muted uppercase hidden md:block">Sort Protocol:</span>
                     <div className="relative">
                        <select 
                           value={sortBy}
                           onChange={(e) => setSortBy(e.target.value as SortOption)}
                           className="appearance-none bg-black border border-muted text-white px-4 py-1 pr-8 font-mono text-xs focus:border-neon outline-none cursor-pointer"
                        >
                           <option value={SortOption.NEWEST}>NEW_ARRIVALS</option>
                           <option value={SortOption.PRICE_LOW}>PRICE_ASC</option>
                           <option value={SortOption.PRICE_HIGH}>PRICE_DESC</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1.5 w-3 h-3 text-white pointer-events-none" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-12">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
               <ProductCard 
                 key={product.id} 
                 product={product} 
                 onAddToCart={onAddToCart} 
                 onQuickView={onQuickView}
               />
            ))}
         </div>
         
         {filteredProducts.length === 0 && (
            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-muted opacity-50">
               <p className="font-mono text-xl text-white mb-4">NO DATA FOUND</p>
               <button onClick={() => {setSelectedCategory("All Systems"); setSearchQuery("");}} className="text-neon underline text-sm font-mono">
                  RESET_PARAMETERS
               </button>
            </div>
         )}
      </div>
    </div>
  );
};
