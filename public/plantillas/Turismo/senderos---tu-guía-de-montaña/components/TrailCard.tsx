import React from 'react';
import { Trail, Difficulty } from '../types';
import { MapPin, Mountain, Clock, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrailCardProps {
  trail: Trail;
}

const TrailCard: React.FC<TrailCardProps> = ({ trail }) => {
  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case Difficulty.EASY: return 'bg-green-100 text-green-800';
      case Difficulty.MODERATE: return 'bg-yellow-100 text-yellow-800';
      case Difficulty.HARD: return 'bg-orange-100 text-orange-800';
      case Difficulty.EXPERT: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-stone-200 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={trail.imageUrl} 
          alt={trail.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center shadow-sm">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
          <span className="text-sm font-semibold text-stone-800">{trail.rating}</span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getDifficultyColor(trail.difficulty)}`}>
            {trail.difficulty}
          </span>
          <span className="text-stone-500 text-xs flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {trail.location}
          </span>
        </div>

        <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
          {trail.title}
        </h3>
        
        <p className="text-stone-600 text-sm mb-4 line-clamp-2 flex-1">
          {trail.description}
        </p>

        <div className="grid grid-cols-3 gap-2 py-3 border-t border-stone-100 text-xs text-stone-600">
          <div className="flex flex-col items-center">
            <Mountain className="w-4 h-4 mb-1 text-emerald-600" />
            <span>{trail.distance} km</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-4 h-4 mb-1 text-emerald-600" />
            <span>{trail.duration}</span>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-4 h-4 mb-1 text-emerald-600" />
            <span>{trail.elevationGain}m</span>
          </div>
        </div>
        
        <div className="mt-4">
           <Link to={`/trails`} className="block w-full text-center bg-stone-50 hover:bg-stone-100 text-stone-900 font-medium py-2 rounded-lg transition-colors text-sm border border-stone-200">
              Ver Detalles
           </Link>
        </div>
      </div>
    </div>
  );
};

export default TrailCard;