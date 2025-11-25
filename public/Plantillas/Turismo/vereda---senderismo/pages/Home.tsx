import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Users, Leaf, Sun } from 'lucide-react';
import { Button } from '../components/Button';
import { TrailCard } from '../components/TrailCard';
import { MOCK_TRAILS } from '../constants';

export const Home: React.FC = () => {
  const featuredTrails = MOCK_TRAILS.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Editorial Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-20 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 pt-10 lg:pt-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-citrus-300/30 border border-citrus-300 w-fit">
              <span className="w-2 h-2 rounded-full bg-citrus-600 animate-pulse"></span>
              <span className="text-xs font-bold text-pine-800 uppercase tracking-wider">Nueva Temporada 2025</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-display font-medium text-pine-950 tracking-tight leading-[1.1]">
              Camina hacia <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pine-800 to-pine-500">lo salvaje.</span>
            </h1>
            
            <p className="text-lg text-pine-600 leading-relaxed max-w-md">
              Vereda cura las mejores experiencias de senderismo. Sin ruido, solo naturaleza. Mapas offline, comunidad real y guías expertos.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/explore">
                <Button size="lg" variant="primary" className="shadow-xl shadow-pine-900/10">
                  Explorar Rutas
                </Button>
              </Link>
              <Link to="/assistant">
                <Button size="lg" variant="outline">
                  Preguntar a la IA
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center space-x-6 text-pine-400">
               <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-sand-50 bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt=""/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-sand-50 bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=5" alt=""/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-sand-50 bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=8" alt=""/></div>
               </div>
               <p className="text-sm font-medium text-pine-600">+12k exploradores unidos</p>
            </div>
          </div>

          {/* Hero Image / Graphic */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[700px] group shadow-2xl shadow-pine-900/20">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop" 
                alt="Mountains" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Floating Cards overlaid on image */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hidden sm:block">
                 <div className="flex justify-between items-center text-white">
                    <div>
                        <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Ubicación Actual</p>
                        <p className="text-xl font-display font-bold">Parque Nacional Torres del Paine</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold">12°C</p>
                        <p className="text-xs opacity-80">Despejado</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-20 -right-20 w-64 h-64 bg-citrus-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -z-10 bottom-20 -left-20 w-80 h-80 bg-pine-300 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-20">
        <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-pine-950 mb-4">Todo lo que necesitas para salir</h2>
            <p className="text-pine-600">Tecnología punta al servicio de lo primitivo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
           {/* Card 1: Large Vertical */}
           <div className="md:row-span-2 bg-pine-900 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Compass size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-citrus-400">
                    <Compass size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">Navegación 3D</h3>
                <p className="text-pine-200 leading-relaxed">Visualiza el terreno antes de pisarlo. Nuestros mapas topográficos inmersivos te muestran cada desnivel.</p>
              </div>
              <div className="relative z-10 mt-8">
                  <div className="h-32 w-full bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-4">
                     <div className="w-full h-full bg-gradient-to-t from-citrus-500/20 to-transparent rounded-lg relative">
                        <div className="absolute bottom-0 w-full h-px bg-citrus-400"></div>
                        <div className="absolute bottom-0 left-1/4 w-px h-10 bg-citrus-400/50"></div>
                        <div className="absolute bottom-0 left-2/4 w-px h-16 bg-citrus-400/80"></div>
                        <div className="absolute bottom-0 left-3/4 w-px h-8 bg-citrus-400/50"></div>
                     </div>
                  </div>
              </div>
           </div>

           {/* Card 2: Wide Horizontal */}
           <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 shadow-sm border border-sand-200">
              <div className="flex-1">
                 <div className="w-12 h-12 rounded-2xl bg-pine-50 flex items-center justify-center mb-6 text-pine-600">
                    <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2 text-pine-900">Comunidad Verificada</h3>
                <p className="text-pine-600">Reseñas reales de senderistas reales. Sin bots, sin spam. Solo consejos útiles sobre el estado de la ruta.</p>
              </div>
              <div className="flex-1 w-full">
                 <div className="space-y-3">
                    <div className="bg-sand-50 p-4 rounded-2xl flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-pine-200"></div>
                        <div className="w-full">
                            <div className="h-2 w-20 bg-pine-200 rounded mb-2"></div>
                            <div className="h-2 w-full bg-sand-200 rounded"></div>
                        </div>
                    </div>
                    <div className="bg-sand-50 p-4 rounded-2xl flex gap-3 opacity-60">
                         <div className="w-8 h-8 rounded-full bg-pine-200"></div>
                        <div className="w-full">
                            <div className="h-2 w-20 bg-pine-200 rounded mb-2"></div>
                            <div className="h-2 w-3/4 bg-sand-200 rounded"></div>
                        </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Card 3: Small */}
           <div className="bg-citrus-300 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="relative z-10">
                <Shield className="h-8 w-8 text-pine-900 mb-4" />
                <h3 className="text-xl font-bold font-display text-pine-900 mb-2">Modo Offline</h3>
                <p className="text-pine-800 text-sm">Sin señal, sin problema.</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-citrus-400 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
           </div>

           {/* Card 4: Small */}
           <div className="bg-sand-200 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden">
               <div className="relative z-10">
                <Leaf className="h-8 w-8 text-pine-900 mb-4" />
                <h3 className="text-xl font-bold font-display text-pine-900 mb-2">Eco-Friendly</h3>
                <p className="text-pine-800 text-sm">Rutas sostenibles.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Selected Trails Carousel / List */}
      <section className="py-20 bg-white rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-citrus-600 font-bold uppercase tracking-wider text-sm">Selección del Editor</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-pine-950 mt-2">Destinos de esta semana</h2>
            </div>
            <Link to="/explore">
                <Button variant="ghost" className="group">
                    Ver catálogo completo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrails.map(trail => (
              <TrailCard key={trail.id} trail={trail} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-pine-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-64 h-64 bg-pine-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-10 right-10 w-64 h-64 bg-citrus-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-pine-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>
            
            <div className="relative z-10">
                <Sun className="w-16 h-16 text-citrus-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Únete al club de exploradores.</h2>
                <p className="text-pine-200 text-lg mb-10 max-w-xl mx-auto">Recibe guías de rutas secretas, descuentos en equipo técnico y acceso a eventos exclusivos cada mes.</p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="tu@email.com" 
                        className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-pine-300 focus:outline-none focus:ring-2 focus:ring-citrus-400 backdrop-blur-sm"
                    />
                    <Button variant="accent" size="lg">Suscribirse</Button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
};