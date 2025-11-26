import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, BedDouble, Bath, Square, Check, Phone, Mail, User } from 'lucide-react';
import { PROPERTIES } from '../constants';
import Button from '../components/Button';
import { Property } from '../types';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const found = PROPERTIES.find(p => p.id === id);
    if (found) setProperty(found);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Propiedad no encontrada</h2>
          <Link to="/propiedades" className="text-primary-600 mt-4 inline-block hover:underline">Volver al listado</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Detail Hero */}
      <div className="relative h-[50vh] w-full">
        <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-24 left-4 sm:left-8">
            <Link to="/propiedades">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition">
                    <ArrowLeft size={24} />
                </div>
            </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                        <div>
                            <span className="text-primary-600 font-bold uppercase tracking-wider text-xs mb-2 block">{property.type}</span>
                            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-2">{property.title}</h1>
                            <div className="flex items-center text-gray-500">
                                <MapPin size={18} className="mr-1 text-primary-500" />
                                <span>{property.location}</span>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <p className="text-3xl font-bold text-primary-700 font-serif">€{property.price.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-100 mb-6">
                        <div className="text-center">
                            <BedDouble size={24} className="mx-auto text-gray-400 mb-2" />
                            <span className="block font-bold text-gray-900 text-lg">{property.bedrooms}</span>
                            <span className="text-xs text-gray-500 uppercase">Habitaciones</span>
                        </div>
                        <div className="text-center border-l border-gray-100">
                            <Bath size={24} className="mx-auto text-gray-400 mb-2" />
                            <span className="block font-bold text-gray-900 text-lg">{property.bathrooms}</span>
                            <span className="text-xs text-gray-500 uppercase">Baños</span>
                        </div>
                        <div className="text-center border-l border-gray-100">
                            <Square size={24} className="mx-auto text-gray-400 mb-2" />
                            <span className="block font-bold text-gray-900 text-lg">{property.sqft}</span>
                            <span className="text-xs text-gray-500 uppercase">Metros Cuadrados</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Descripción</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{property.description}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Comodidades</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {property.amenities.map((amenity, idx) => (
                                <div key={idx} className="flex items-center text-gray-600">
                                    <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mr-2 text-primary-600">
                                        <Check size={14} />
                                    </div>
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar / Agent Card */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 sticky top-24">
                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-6">Contactar Agente</h3>
                    
                    <div className="flex items-center mb-6">
                        <img 
                            src={property.agent.image} 
                            alt={property.agent.name} 
                            className="w-16 h-16 rounded-full object-cover border-2 border-primary-100 mr-4"
                        />
                        <div>
                            <p className="font-bold text-gray-900 text-lg">{property.agent.name}</p>
                            <p className="text-primary-600 text-sm">Agente Senior</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <a href={`tel:${property.agent.phone}`} className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-colors">
                            <Phone size={20} className="mr-3 text-gray-400" />
                            <span className="font-medium">{property.agent.phone}</span>
                        </a>
                        <div className="flex items-center p-3 rounded-lg border border-gray-200">
                            <Mail size={20} className="mr-3 text-gray-400" />
                            <span className="font-medium">agente@lumina.com</span>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tu Nombre</label>
                            <div className="relative">
                                <User size={18} className="absolute left-3 top-2.5 text-gray-400" />
                                <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="Juan Pérez" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                            <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 outline-none" defaultValue={`Hola, estoy interesado en ${property.title}...`}></textarea>
                        </div>
                        <Button className="w-full">Enviar Mensaje</Button>
                    </form>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;