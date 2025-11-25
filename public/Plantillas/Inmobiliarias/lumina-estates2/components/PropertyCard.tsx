import React from 'react';
import { Property } from '../types';
import { MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {property.type}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-500 hover:text-red-500 hover:bg-white transition-colors">
          <Heart size={18} />
        </button>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
           <p className="text-white font-bold text-xl font-serif">€{property.price.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
              <Link to={`/propiedad/${property.id}`}>{property.title}</Link>
            </h3>
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <MapPin size={14} className="mr-1 text-primary-500" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
          
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
            <div className="flex items-center text-gray-600 text-xs sm:text-sm">
              <BedDouble size={16} className="mr-1.5 text-gray-400" />
              <span>{property.bedrooms} <span className="hidden sm:inline">Hab</span></span>
            </div>
            <div className="h-4 w-px bg-gray-200"></div>
            <div className="flex items-center text-gray-600 text-xs sm:text-sm">
              <Bath size={16} className="mr-1.5 text-gray-400" />
              <span>{property.bathrooms} <span className="hidden sm:inline">Baños</span></span>
            </div>
            <div className="h-4 w-px bg-gray-200"></div>
            <div className="flex items-center text-gray-600 text-xs sm:text-sm">
              <Square size={16} className="mr-1.5 text-gray-400" />
              <span>{property.sqft} m²</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;