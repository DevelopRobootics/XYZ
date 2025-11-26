import React from 'react';
import { Trail, Difficulty } from '../types';
import { MapPin, ArrowUpRight, Clock, Mountain } from 'lucide-react';

interface TrailCardProps {
  trail: Trail;
}

export const TrailCard: React.FC<TrailCardProps> = ({ trail }) => {
  const difficultyConfig = {
    [Difficulty.Easy]: { color: 'bg-emerald-100 text-emerald-800', label: 'Suave' },
    [Difficulty.Moderate]: { color: 'bg-amber-100 text-amber-800', label: 'Media' },
    [Difficulty.Hard]: { color: 'bg-orange-100 text-orange-800', label: 'Dura' },
    [Difficulty.Expert]: { color: 'bg-rose-100 text-rose-800', label: 'Extrema' },
  };

  const config = difficultyConfig[trail.difficulty];

  return (
    <div className="group relative bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:shadow-pine-900/10 transition-all duration-500 ease-out border border-white">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-4">
        <img 
          src={trail.imageUrl} 
          alt={trail.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${config.color} backdrop-blur-md bg-opacity-90`}>
            {trail.difficulty}
          </span>
        </div>
        <button className="absolute bottom-3 right-3 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-pine-900">
            <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Content */}
      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-pine-900 font-display leading-tight group-hover:text-pine-600 transition-colors">
            {trail.name}
          </h3>
          <div className="flex flex-col items-end">
             <span className="text-lg font-bold text-pine-900">{trail.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-pine-500 text-sm mb-4 font-medium">
          <MapPin className="w-4 h-4 mr-1.5" />
          {trail.location}
        </div>

        <div className="flex items-center justify-between mt-4 p-3 bg-sand-50 rounded-2xl">
            <div className="flex flex-col">
                <span className="text-xs text-pine-400 uppercase tracking-wider font-bold mb-0.5">Distancia</span>
                <div className="flex items-center text-pine-800 font-semibold">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-citrus-600" />
                    {trail.distanceKm} km
                </div>
            </div>
            <div className="w-px h-8 bg-pine-100"></div>
            <div className="flex flex-col items-end">
                <span className="text-xs text-pine-400 uppercase tracking-wider font-bold mb-0.5">Desnivel</span>
                <div className="flex items-center text-pine-800 font-semibold">
                    <Mountain className="w-3.5 h-3.5 mr-1.5 text-citrus-600" />
                    +{trail.elevationGainM}m
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};