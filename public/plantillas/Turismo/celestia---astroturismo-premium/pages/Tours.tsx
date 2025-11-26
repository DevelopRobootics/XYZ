import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { TOURS } from '../constants';
import { Clock, Star, MapPin, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tours: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Fácil' | 'Moderado' | 'Avanzado'>('Todos');

  const filteredTours = filter === 'Todos' 
    ? TOURS 
    : TOURS.filter(t => t.difficulty === filter);

  return (
    <Layout>
      <div className="bg-space-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Nuestros Destinos</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Seleccionamos meticulosamente cada ubicación por su calidad de cielo nocturno (escala Bortle 1-2) y su belleza natural.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-12 space-x-2 overflow-x-auto pb-4">
            {['Todos', 'Fácil', 'Moderado', 'Avanzado'].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === level 
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25' 
                    : 'bg-space-800 text-slate-400 hover:bg-space-700'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                   <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold uppercase">
                    {tour.difficulty}
                  </div>
                </div>
                <div className="w-full md:w-3/5 p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                     <div className="text-sm text-cyan-400 flex items-center">
                        <MapPin size={14} className="mr-1" /> {tour.location}
                     </div>
                     <div className="flex items-center text-yellow-400 text-sm font-bold">
                        <Star size={14} fill="currentColor" className="mr-1" /> {tour.rating}
                     </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{tour.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{tour.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {tour.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center text-slate-300 text-sm">
                        <Check size={14} className="text-green-400 mr-2" /> {feat}
                      </div>
                    ))}
                    <div className="flex items-center text-slate-300 text-sm">
                       <Clock size={14} className="text-purple-400 mr-2" /> {tour.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-space-800">
                    <div>
                      <span className="text-xs text-slate-500 block">Desde</span>
                      <span className="text-2xl font-bold text-white">${tour.price}</span>
                    </div>
                    <Link to="/book">
                      <Button>Reservar Ahora</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tours;