import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, Shield } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  featuredProducts: Product[];
  onAddToCart: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ featuredProducts, onAddToCart }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/445/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Estilo que Define <br />
            <span className="text-indigo-300">Tu Esencia</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
            Descubre la colección de temporada. Diseño minimalista, materiales premium y una experiencia de compra redefinida.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link to="/shop" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Ver Colección <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors">
              Nuestra Historia
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Envío Gratis</h3>
              <p className="text-slate-500 text-sm">En todas las compras superiores a $100. Entregas globales.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Calidad Garantizada</h3>
              <p className="text-slate-500 text-sm">Materiales seleccionados y artesanía de primera clase.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Pago Seguro</h3>
              <p className="text-slate-500 text-sm">Tus transacciones están protegidas con encriptación 256-bit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Selección</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Tendencias</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700">
              Ver todo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 border border-indigo-600 px-6 py-2 rounded-full">
              Ver todo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">¿Necesitas ayuda para elegir?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Nuestro asistente inteligente Lumina está entrenado para recomendarte el producto perfecto basado en tu estilo y necesidades.
          </p>
          <button 
             // This button simulates clicking the bot icon, usually handled via context or props in a real app
             // For template purposes, it's visual.
             className="px-8 py-3 bg-indigo-600 rounded-full font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/50"
          >
            Prueba el Chat IA
          </button>
        </div>
      </section>
    </div>
  );
};