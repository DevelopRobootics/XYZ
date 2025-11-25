import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/properties/${property.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${property.type === 'Sale' ? 'bg-brand-900 text-white' : 'bg-brand-accent text-white'}`}>
            For {property.type}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 right-4 text-white font-bold text-xl drop-shadow-md">
           {property.type === 'Rent' ? `$${property.price.toLocaleString()}/mo` : `$${property.price.toLocaleString()}`}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-1">
          {property.title}
        </h3>
        <div className="flex items-center text-gray-500 mb-4 text-sm">
          <MapPin size={16} className="mr-1 text-brand-accent" />
          <span className="line-clamp-1">{property.address}</span>
        </div>
        
        <div className="flex items-center justify-between py-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Bed size={18} />
            <span className="text-sm font-medium">{property.beds} <span className="text-gray-400 text-xs font-normal">Beds</span></span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Bath size={18} />
            <span className="text-sm font-medium">{property.baths} <span className="text-gray-400 text-xs font-normal">Baths</span></span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Move size={18} />
            <span className="text-sm font-medium">{property.sqft.toLocaleString()} <span className="text-gray-400 text-xs font-normal">Sqft</span></span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;