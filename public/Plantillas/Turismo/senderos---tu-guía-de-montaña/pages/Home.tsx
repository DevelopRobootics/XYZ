import React from 'react';
import Hero from '../components/Hero';
import TrailCard from '../components/TrailCard';
import Button from '../components/Button';
import { MOCK_TRAILS } from '../constants';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Users } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredTrails = MOCK_TRAILS.slice(0, 3);

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">¿Por qué elegir Senderos?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Te damos todas las herramientas necesarias para que tu única preocupación sea disfrutar del paisaje.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Navegación Precisa</h3>
              <p className="text-stone-600 leading-relaxed">Mapas topográficos detallados y GPS offline para que nunca pierdas el rumbo en la montaña.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Rutas Verificadas</h3>
              <p className="text-stone-600 leading-relaxed">Cada sendero es revisado por expertos y actualizado constantemente por nuestra comunidad.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Comunidad Activa</h3>
              <p className="text-stone-600 leading-relaxed">Comparte fotos, consejos y estado de las rutas con miles de apasionados del senderismo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trails */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-2">Rutas Destacadas</h2>
              <p className="text-stone-600">Las aventuras favoritas de este mes.</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/trails')} className="hidden sm:flex">
              Ver todas <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrails.map(trail => (
              <TrailCard key={trail.id} trail={trail} />
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Button variant="outline" fullWidth onClick={() => navigate('/trails')}>
              Ver todas las rutas
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#10B981" d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.5,19.1C51.6,30.1,41.8,40.1,30.3,49.4C18.8,58.7,5.6,67.2,-6.4,66C-18.4,64.8,-29.2,53.9,-41.4,43.2C-53.6,32.5,-67.2,22,-71.4,8.4C-75.6,-5.2,-70.5,-21.9,-60.1,-33.5C-49.7,-45.1,-34.1,-51.6,-20.5,-58.5C-6.9,-65.4,4.7,-72.7,19.3,-75.3C33.9,-77.9,51.5,-75.8,42.7,-62.9Z" transform="translate(100 100)" />
            </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para tu próxima aventura?</h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">Únete a nuestra comunidad hoy y accede a mapas offline, seguimiento GPS y ofertas exclusivas en equipamiento.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8 py-4 text-lg">
              Registrarse Gratis
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              Descargar App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;