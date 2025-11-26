import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Moon, Map } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { TOURS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop" 
            alt="Milky Way" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-950/60 via-space-950/40 to-space-950"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="mb-6 inline-block">
            <span className="py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold tracking-widest uppercase border border-cyan-500/30 backdrop-blur-sm">
              Descubre el Universo
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Donde la Tierra <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 animate-pulse">Toca las Estrellas</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Viajes exclusivos a los santuarios de cielo oscuro más impresionantes del planeta. 
            Guiados por astrónomos expertos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/tours">
              <Button size="lg" className="w-full sm:w-auto">
                Explorar Destinos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/guide">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Preguntar a la IA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-space-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-space-900/30">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-purple-500/10 text-purple-400 mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cielos Certificados</h3>
              <p className="text-slate-400">
                Solo operamos en Reservas Starlight y zonas protegidas de contaminación lumínica para garantizar visibilidad perfecta.
              </p>
            </Card>
            <Card className="p-8 text-center bg-space-900/30">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-cyan-500/10 text-cyan-400 mb-6">
                <Map size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Guías Astrónomos</h3>
              <p className="text-slate-400">
                Aprende de astrofísicos y expertos locales que te enseñarán a navegar por las constelaciones como los antiguos.
              </p>
            </Card>
            <Card className="p-8 text-center bg-space-900/30">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-pink-500/10 text-pink-400 mb-6">
                <Moon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Equipo Premium</h3>
              <p className="text-slate-400">
                Acceso a telescopios computerizados de gran apertura y binoculares astronómicos de alta gama.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tours Preview */}
      <section className="py-24 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Destinos Destacados</h2>
              <p className="text-slate-400">Las experiencias más solicitadas de esta temporada</p>
            </div>
            <Link to="/tours" className="hidden md:flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Ver todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOURS.slice(0, 3).map((tour) => (
              <Card key={tour.id} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-space-950/80 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-bold border border-white/10">
                    ${tour.price} USD
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{tour.location}</span>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star size={14} fill="currentColor" className="mr-1" /> {tour.rating}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{tour.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">{tour.description}</p>
                  <Link to="/tours">
                    <Button variant="outline" size="sm" className="w-full">Ver Detalles</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/tours">
              <Button variant="ghost">Ver todos los destinos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-space-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-white mb-16">Lo que dicen los viajeros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <Card key={t.id} className="p-8 bg-gradient-to-br from-space-900 to-space-950 border-space-800">
                <p className="text-slate-300 italic mb-6">"{t.content}"</p>
                <div className="flex items-center">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-500/30" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <span className="text-xs text-slate-500 uppercase">{t.role}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;