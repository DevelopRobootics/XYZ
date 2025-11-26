import React, { useState, useMemo } from 'react';
import { MOCK_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { Filter, Search } from 'lucide-react';

const Properties: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<number>(2000000); // Max default
  const [selectedType, setSelectedType] = useState('Todos');

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = p.price <= priceRange;
      const matchesType = selectedType === 'Todos' || p.type === selectedType;
      
      return matchesSearch && matchesPrice && matchesType;
    });
  }, [searchTerm, priceRange, selectedType]);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900">Propiedades Disponibles</h1>
          <p className="text-gray-500 mt-2">Explora nuestro catálogo exclusivo de inmuebles.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold text-lg">
                <Filter size={20} /> Filtros
              </div>

              {/* Search Text */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Buscar</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ciudad, título..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
                  />
                  <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Propiedad</label>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 bg-white"
                >
                  <option value="Todos">Todos</option>
                  <option value="Casa">Casa</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Condominio">Condominio</option>
                  <option value="Terreno">Terreno</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-gray-700">Precio Máximo</label>
                  <span className="text-sm text-primary-600 font-bold">€{priceRange.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="3000000" 
                  step="50000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>€0</span>
                  <span>€3M+</span>
                </div>
              </div>

              <button 
                onClick={() => {setPriceRange(3000000); setSearchTerm(''); setSelectedType('Todos')}}
                className="w-full py-2 text-sm text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Limpiar Filtros
              </button>
            </div>
          </aside>

          {/* Listings Grid */}
          <div className="lg:w-3/4">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron resultados</h3>
                <p className="text-gray-500">Intenta ajustar los filtros o ampliar tu búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
