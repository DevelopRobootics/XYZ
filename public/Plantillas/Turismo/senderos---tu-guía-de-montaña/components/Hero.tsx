import React from 'react';
import Button from './Button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Montañas y senderista" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider mb-6 border border-white/30">
          EXPLORA EL MUNDO
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight shadow-sm">
          Encuentra tu próximo <span className="text-emerald-400">camino</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Descubre miles de rutas de senderismo seleccionadas para ti. Desde paseos tranquilos hasta cumbres desafiantes.
        </p>
        
        {/* Search Box */}
        <div className="bg-white p-2 rounded-xl shadow-xl max-w-2xl mx-auto flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center px-4 bg-stone-50 rounded-lg h-12">
            <Search className="w-5 h-5 text-stone-400 mr-3" />
            <input 
              type="text" 
              placeholder="¿A dónde quieres ir?" 
              className="bg-transparent border-none focus:outline-none text-stone-800 w-full placeholder:text-stone-400"
            />
          </div>
          <Button 
            className="h-12 md:w-auto w-full" 
            onClick={() => navigate('/trails')}
          >
            Buscar Rutas
          </Button>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-stone-300">
          <span className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> +5,000 Rutas</span>
          <span className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> Guías expertos</span>
          <span className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> Mapas Offline</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;