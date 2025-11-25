import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TOURS } from '../constants';
import { Clock, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Tours: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Expeditions</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose your journey through the cosmos. Small groups, expert guides, unforgettable views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <Card key={tour.id} className="flex flex-col h-full p-0">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={tour.imageUrl} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-indigo-300 text-sm font-bold border border-indigo-500/30">
                  {tour.rating} ★
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{tour.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1">
                  {tour.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-300 text-sm">
                    <Clock size={16} className="mr-3 text-indigo-400" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center text-slate-300 text-sm">
                    <TrendingUp size={16} className="mr-3 text-indigo-400" />
                    Level: {tour.difficulty}
                  </div>
                  <div className="flex items-center text-slate-300 text-sm">
                    <DollarSign size={16} className="mr-3 text-indigo-400" />
                    ${tour.price} per person
                  </div>
                </div>

                <Link to="/contact" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};