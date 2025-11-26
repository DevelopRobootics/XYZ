import React, { useState, useEffect } from 'react';
import { Filter, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES, PROPERTY_TYPES } from '../constants';
import { Property } from '../types';

const Properties: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(PROPERTIES);
  const [filterType, setFilterType] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState(2000000);

  useEffect(() => {
    let result = PROPERTIES;

    // Filter by Type
    if (filterType !== "Todos") {
      result = result.filter(p => p.type === filterType);
    }

    // Filter by Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(lowerTerm) || 
        p.location.toLowerCase().includes(lowerTerm)
      );
    }

    // Filter by Price
    result = result.filter(p => p.price <= priceRange);

    setFilteredProperties(result);
  }, [filterType, searchTerm, priceRange]);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Nuestras Propiedades</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Explora nuestro catálogo completo de residencias de lujo, apartamentos modernos y casas con encanto.</p>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-10 border border-gray-100 sticky top-20 z-30">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Search Input */}
            <div className="w-full lg:w-1/3 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Buscar por ciudad, título..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Tabs */}
            <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              <div className="flex space-x-2">
                {PROPERTY_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      filterType === type 
                        ? 'bg-primary-600 text-white shadow-sm' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter (Simple Slider) */}
            <div className="w-full lg:w-1/4 flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Max Precio:</span>
              <div className="flex-grow">
                <input 
                  type="range" 
                  min="100000" 
                  max="2000000" 
                  step="50000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="text-xs text-right text-primary-600 font-bold mt-1">
                  €{priceRange.toLocaleString()}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Results Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron propiedades</h3>
            <p className="text-gray-500">Intenta ajustar tus filtros de búsqueda.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Properties;