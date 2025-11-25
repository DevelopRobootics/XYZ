import React from 'react';
import { Rocket, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { APP_NAME } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold text-white font-['Space_Grotesk']">{APP_NAME}</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Reconnecting humanity with the cosmos. We provide world-class stargazing experiences in the heart of the Dark Sky Reserve.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#/tours" className="text-slate-400 hover:text-white transition-colors">Our Tours</a></li>
              <li><a href="#/observatory" className="text-slate-400 hover:text-white transition-colors">The Observatory</a></li>
              <li><a href="#/" className="text-slate-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#/" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={16} />
                <span>hello@astroventures.com</span>
              </li>
              <li className="text-slate-400">
                123 Galaxy Lane, <br />
                Atacama Desert, Chile
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};