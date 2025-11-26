import React, { useState } from 'react';
import TrailCard from '../components/TrailCard';
import Button from '../components/Button';
import { MOCK_TRAILS } from '../constants';
import { Difficulty } from '../types';
import { Filter, ChevronDown, Search } from 'lucide-react';

const Trails: React.FC = () => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTrails = MOCK_TRAILS.filter(trail => {
    const matchesDiff = filterDifficulty === 'all' || trail.difficulty === filterDifficulty;
    const matchesSearch = trail.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trail.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiff && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-stone-900 mb-4">Explora Rutas</h1>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Filtra por dificultad, ubicación o nombre para encontrar la ruta perfecta para tu nivel y tiempo disponible.
          </p>

          <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-stone-200">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input 
                type="text"
                placeholder="Buscar por nombre o lugar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative min-w-[200px]">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 w-4 h-4" />
                <select 
                  value={filterDifficulty}
                  onChange={(e) => setFilterDifficulty(e.target.value)}
                  className="w-full pl-10 pr-8 py-2 bg-white border border-stone-200 rounded-lg appearance-none text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
                >
                  <option value="all">Cualquier Dificultad</option>
                  <option value={Difficulty.EASY}>{Difficulty.EASY}</option>
                  <option value={Difficulty.MODERATE}>{Difficulty.MODERATE}</option>
                  <option value={Difficulty.HARD}>{Difficulty.HARD}</option>
                  <option value={Difficulty.EXPERT}>{Difficulty.EXPERT}</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredTrails.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrails.map(trail => (
              <TrailCard key={trail.id} trail={trail} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-4 rounded-full bg-stone-100 mb-4">
              <Filter className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="text-lg font-medium text-stone-900 mb-2">No se encontraron rutas</h3>
            <p className="text-stone-500">Intenta ajustar tus filtros de búsqueda.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {setFilterDifficulty('all'); setSearchQuery('');}}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trails;