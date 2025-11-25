import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FEATURES, TESTIMONIALS } from '../constants';
import { Star, Moon, Telescope, GraduationCap, ArrowRight } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  Moon: <Moon className="h-8 w-8 text-indigo-400" />,
  Telescope: <Telescope className="h-8 w-8 text-indigo-400" />,
  GraduationCap: <GraduationCap className="h-8 w-8 text-indigo-400" />
};

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Starry Sky" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Touch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Universe</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
            Experience the cosmos like never before in the world's premier Dark Sky Reserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours">
              <Button size="lg">Explore Tours</Button>
            </Link>
            <Link to="/observatory">
              <Button variant="outline" size="lg">View Observatory</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Stargaze With Us?</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <Card key={feature.id} className="text-center p-8">
                <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {IconMap[feature.iconName]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intro to Tours */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/600/400?grayscale" 
                alt="Telescope Observation" 
                className="rounded-2xl shadow-2xl shadow-indigo-500/10 border border-white/10"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Expert-Led Night Safaris</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Whether you're a seasoned astrophotographer or seeing the Milky Way for the first time, our curated tours offer something for everyone. We use state-of-the-art equipment to bring distant galaxies within your reach.
              </p>
              <Link to="/tours">
                <Button variant="secondary" className="gap-2">
                  View All Packages <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Traveler Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <Card key={t.id} className="flex gap-4 items-start">
                <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full border-2 border-indigo-500" />
                <div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-4">"{t.comment}"</p>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-indigo-400 text-xs uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};