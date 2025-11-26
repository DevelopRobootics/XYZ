import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, CheckCircle2 } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import { PROPERTIES } from '../constants';

const Home: React.FC = () => {
  const featuredProperties = PROPERTIES.filter(p => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] flex items-center justify-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/164/1920/1080" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in">
              Descubre el Hogar <br/>
              <span className="text-primary-100">Donde Viven tus Sueños</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl font-light">
              Explora nuestra colección exclusiva de propiedades premium. Desde villas costeras hasta áticos urbanos, encontramos el espacio perfecto para tu estilo de vida.
            </p>
            
            {/* Search Bar Visual */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl sm:inline-flex w-full sm:w-auto items-center gap-2 shadow-2xl">
              <div className="flex-grow bg-white rounded-xl flex items-center px-4 py-3 sm:w-80">
                <Search className="text-gray-400 mr-2" size={20} />
                <input 
                  type="text" 
                  placeholder="Ciudad, zona o código postal..." 
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
                />
              </div>
              <Link to="/propiedades" className="w-full sm:w-auto mt-2 sm:mt-0">
                <Button size="lg" className="w-full shadow-lg">Buscar</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div>
              <p className="text-3xl font-bold text-primary-600 font-serif">1500+</p>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Propiedades Vendidas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600 font-serif">98%</p>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Clientes Felices</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600 font-serif">15</p>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600 font-serif">24/7</p>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Soporte Dedicado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Propiedades Destacadas</h2>
              <p className="text-slate-600 max-w-xl">Una selección curada de nuestras residencias más exclusivas, elegidas por su diseño, ubicación y comodidades excepcionales.</p>
            </div>
            <Link to="/propiedades" className="hidden sm:flex items-center text-primary-700 hover:text-primary-900 font-medium transition-colors">
              Ver todas <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/propiedades">
              <Button variant="outline" className="w-full">Ver todas las propiedades</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <img 
                src="https://picsum.photos/id/374/600/800" 
                alt="Interior Design" 
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[600px]"
              />
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Certificado</p>
                    <p className="text-xs text-gray-500">Agencia Premium</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Garantizamos la máxima calidad en cada una de nuestras gestiones.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Más que una inmobiliaria, somos creadores de estilo de vida.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Entendemos que comprar una propiedad no es solo una transacción, es el comienzo de un nuevo capítulo. Nuestro enfoque personalizado combina tecnología de vanguardia con un toque humano inigualable.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Valoración Experta", desc: "Datos de mercado en tiempo real para decisiones inteligentes." },
                  { title: "Gestión Integral", desc: "Nos ocupamos de todo el papeleo legal y administrativo." },
                  { title: "Diseño y Reformas", desc: "Asesoramiento arquitectónico para personalizar tu nuevo hogar." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 font-bold font-serif text-xl">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/contacto">
                  <Button size="lg">Contactar un Agente</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;