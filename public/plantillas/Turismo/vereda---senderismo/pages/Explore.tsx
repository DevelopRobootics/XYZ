import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Map } from 'lucide-react';
import { TrailCard } from '../components/TrailCard';
import { Button } from '../components/Button';
import { MOCK_TRAILS } from '../constants';
import { Difficulty } from '../types';

export const Explore: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Filter logic
  const filteredTrails = useMemo(() => {
    return MOCK_TRAILS.filter(trail => {
      const matchesSearch = trail.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            trail.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = selectedDifficulty === 'all' || trail.difficulty === selectedDifficulty;
      return matchesSearch && matchesDifficulty;
    });
  }, [searchTerm, selectedDifficulty]);

  return (
    <div className="min-h-screen pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      
      {/* Header Area */}
      <div className="py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-pine-950 mb-4">Encuentra tu ruta</h1>
        <p className="text-pine-600 max-w-2xl">Desde paseos costeros hasta cumbres nevadas. Todo comienza aquí.</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-[2rem] shadow-xl shadow-pine-900/5 border border-sand-200 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            
            {/* Search Input */}
            <div className="relative flex-grow w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-pine-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3 bg-sand-50 border-0 rounded-2xl text-pine-900 placeholder-pine-400 focus:ring-2 focus:ring-citrus-400 transition-all"
                placeholder="¿A dónde quieres ir hoy?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="w-px h-10 bg-sand-200 hidden md:block"></div>

            {/* Filter Pills Scrollable */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                 <button 
                    onClick={() => setSelectedDifficulty('all')}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedDifficulty === 'all' ? 'bg-pine-900 text-white' : 'bg-sand-100 text-pine-600 hover:bg-sand-200'}`}
                 >
                    Todo
                 </button>
                 {Object.values(Difficulty).map(diff => (
                    <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(diff)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedDifficulty === diff ? 'bg-pine-900 text-white' : 'bg-sand-100 text-pine-600 hover:bg-sand-200'}`}
                    >
                        {diff}
                    </button>
                 ))}
            </div>
          </div>
      </div>

      {/* Results Grid */}
      <div className="flex justify-between items-center mb-8 px-2">
          <h2 className="text-2xl font-bold font-display text-pine-900">Resultados</h2>
          <div className="flex items-center space-x-2 text-sm text-pine-500">
              <Map className="w-4 h-4" />
              <span>{filteredTrails.length} rutas encontradas</span>
          </div>
      </div>

      {filteredTrails.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrails.map(trail => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-[2.5rem] border border-sand-200 border-dashed">
            <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pine-400">
                <Search className="w-8 h-8" />
            </div>
            <p className="text-pine-900 font-bold text-lg mb-2">Sin resultados</p>
            <p className="text-pine-500 mb-6">Parece que no hay rutas con esos criterios.</p>
            <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedDifficulty('all'); }}>
            Ver todas las rutas
            </Button>
        </div>
      )}
    </div>
  );
};