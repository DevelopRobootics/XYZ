import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Properties: React.FC = () => {
  const [activeType, setActiveType] = useState<'All' | 'Sale' | 'Rent'>('All');

  const filteredProperties = activeType === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === activeType);

  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-900">Properties</h1>
            <p className="text-gray-500 mt-2">Showing {filteredProperties.length} homes</p>
          </div>

          <div className="flex flex-wrap gap-3">
             <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
               {(['All', 'Sale', 'Rent'] as const).map((type) => (
                 <button
                   key={type}
                   onClick={() => setActiveType(type)}
                   className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                     activeType === type 
                       ? 'bg-brand-900 text-white shadow-sm' 
                       : 'text-gray-600 hover:bg-gray-100'
                   }`}
                 >
                   {type === 'All' ? 'All Homes' : `For ${type}`}
                 </button>
               ))}
             </div>
             
             <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 shadow-sm">
               <Filter size={18} className="mr-2" />
               Filters
               <ChevronDown size={16} className="ml-2 text-gray-400" />
             </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-900">No properties found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;