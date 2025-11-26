import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Home: React.FC = () => {
  const featuredProperties = MOCK_PROPERTIES.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Hero Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold mb-6 tracking-wide">
            #1 Agencia Inmobiliaria Premiada 2024
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Descubre el Hogar <br/> Donde Perteneces
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Más que propiedades, encontramos espacios que inspiran tu vida. Explora nuestra selección exclusiva.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-2 rounded-xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Ubicación</label>
              <input type="text" placeholder="Madrid, Barcelona..." className="w-full outline-none text-gray-800 placeholder-gray-400 font-medium" />
            </div>
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Tipo</label>
              <select className="w-full outline-none text-gray-800 bg-transparent font-medium cursor-pointer">
                <option>Cualquiera</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Ático</option>
              </select>
            </div>
            <div className="flex-1 px-4 py-3">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Precio Max</label>
              <input type="number" placeholder="€500,000" className="w-full outline-none text-gray-800 placeholder-gray-400 font-medium" />
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
              <Search size={20} />
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">Propiedades Destacadas</h2>
              <p className="text-gray-500">Selección exclusiva recién llegada al mercado.</p>
            </div>
            <Link to="/properties" className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Ver todas <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/properties" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700">
              Ver todas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">¿Por qué Lumina Estates?</h2>
            <p className="text-gray-500">Nos diferenciamos por un servicio personalizado y tecnología de vanguardia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform text-primary-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seguridad Garantizada</h3>
              <p className="text-gray-500 leading-relaxed">Verificamos legalmente cada propiedad para asegurar una transacción transparente y sin sorpresas.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform text-primary-600">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapidez en Gestión</h3>
              <p className="text-gray-500 leading-relaxed">Procesos digitalizados que reducen el tiempo de compra-venta en un 40% respecto al mercado.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform text-primary-600">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agentes Expertos</h3>
              <p className="text-gray-500 leading-relaxed">Nuestro equipo cuenta con más de 10 años de experiencia promedio en el sector de lujo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para encontrar tu lugar?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Deja que nuestros expertos te guíen en cada paso del camino, desde la primera visita hasta la entrega de llaves.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-primary-600/30">
              Contactar Agente
            </Link>
            <Link to="/properties" className="bg-transparent border border-gray-600 hover:border-white text-white px-8 py-4 rounded-lg font-bold transition-all">
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;