import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin, Heart } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-secondary-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {property.status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="bg-white/90 p-2 rounded-full text-gray-600 hover:text-red-500 transition-colors shadow-sm">
            <Heart size={18} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white font-bold text-xl">€{property.price.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-1">{property.type}</p>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
              <Link to={`/properties/${property.id}`}>{property.title}</Link>
            </h3>
          </div>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1 text-gray-400" />
          <span className="truncate">{property.address}, {property.city}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-700 font-semibold">
              <Bed size={18} className="mr-1.5 text-primary-500" />
              {property.beds}
            </div>
            <span className="text-xs text-gray-400">Habs</span>
          </div>
          <div className="flex flex-col items-center border-l border-r border-gray-100 px-2">
            <div className="flex items-center text-gray-700 font-semibold">
              <Bath size={18} className="mr-1.5 text-primary-500" />
              {property.baths}
            </div>
            <span className="text-xs text-gray-400">Baños</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-700 font-semibold">
              <Move size={18} className="mr-1.5 text-primary-500" />
              {property.sqft}
            </div>
            <span className="text-xs text-gray-400">ft²</span>
          </div>
        </div>

        <Link 
          to={`/properties/${property.id}`}
          className="block w-full text-center bg-gray-50 text-gray-700 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-600 hover:text-white transition-colors"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
