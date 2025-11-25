import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin, Check, ArrowLeft, Phone, Mail } from 'lucide-react';
import { PROPERTIES } from '../constants';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="h-screen flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold text-gray-800">Property not found</h2>
        <Link to="/properties" className="mt-4 text-brand-600 hover:underline">Back to listings</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Detail Hero Image */}
      <div className="relative h-[400px] md:h-[600px] w-full">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-6 left-4 md:left-8">
           <Link to="/properties" className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full transition-colors text-sm font-medium">
             <ArrowLeft size={16} className="mr-2" /> Back to Search
           </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Info */}
            <div className="mb-8 border-b border-gray-100 pb-8">
               <div className="flex items-center gap-2 mb-2">
                 <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${property.type === 'Sale' ? 'bg-brand-900 text-white' : 'bg-brand-accent text-white'}`}>
                   For {property.type}
                 </span>
                 <span className="text-gray-500 text-sm flex items-center"><MapPin size={14} className="mr-1" /> {property.address}</span>
               </div>
               <h1 className="font-serif text-3xl md:text-5xl font-bold text-brand-900 mb-4">{property.title}</h1>
               <div className="text-3xl font-semibold text-brand-600">
                 {property.type === 'Rent' ? `$${property.price.toLocaleString()}/mo` : `$${property.price.toLocaleString()}`}
               </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
                <Bed size={28} className="mx-auto text-brand-accent mb-2" />
                <div className="font-bold text-xl text-gray-900">{property.beds}</div>
                <div className="text-gray-500 text-sm">Bedrooms</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
                <Bath size={28} className="mx-auto text-brand-accent mb-2" />
                <div className="font-bold text-xl text-gray-900">{property.baths}</div>
                <div className="text-gray-500 text-sm">Bathrooms</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
                <Move size={28} className="mx-auto text-brand-accent mb-2" />
                <div className="font-bold text-xl text-gray-900">{property.sqft.toLocaleString()}</div>
                <div className="text-gray-500 text-sm">Square Ft</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-brand-900 mb-4">About this home</h2>
              <p className="text-gray-600 leading-loose text-lg">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-900 mb-6">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <div className="bg-green-100 text-green-600 p-1.5 rounded-full mr-3">
                      <Check size={14} />
                    </div>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="font-serif text-xl font-bold text-brand-900 mb-6">Contact Agent</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-accent" />
                <div>
                  <div className="font-bold text-lg text-gray-900">{property.agent.name}</div>
                  <div className="text-sm text-gray-500">LuxeEstate Senior Agent</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <a href={`tel:${property.agent.phone}`} className="flex items-center text-gray-600 hover:text-brand-600 transition-colors">
                  <Phone size={18} className="mr-3 text-brand-accent" /> {property.agent.phone}
                </a>
                <a href={`mailto:${property.agent.email}`} className="flex items-center text-gray-600 hover:text-brand-600 transition-colors">
                  <Mail size={18} className="mr-3 text-brand-accent" /> {property.agent.email}
                </a>
              </div>

              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-accent" />
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-accent" />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-accent" />
                <textarea rows={4} placeholder="Hello, I am interested in..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-accent"></textarea>
                <button className="w-full py-3 bg-brand-900 text-white font-bold rounded-lg hover:bg-brand-800 transition-colors">
                  Schedule Viewing
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;