import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  total: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, total }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-stone-900/50 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      <div 
        className={`fixed inset-y-0 right-0 max-w-md w-full bg-[#f4f4f0] border-l border-stone-900 z-[70] transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-stone-900 flex items-center justify-between bg-[#f4f4f0]">
          <h2 className="text-2xl font-serif font-bold italic">Tu Selección</h2>
          <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="font-serif text-xl text-stone-400 italic mb-4">Vacío</span>
              <p className="text-sm text-stone-500 max-w-[200px]">Tu espacio aún necesita vida. Añade algo verde.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border border-stone-200 bg-white p-3 hover:border-stone-900 transition-colors">
                <div className="w-20 h-24 bg-stone-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover filter grayscale-[20%]" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg leading-none">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-stone-400 hover:text-red-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 border border-stone-200 px-2 py-1">
                      <button className="text-xs"><Minus className="w-3 h-3" /></button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button className="text-xs"><Plus className="w-3 h-3" /></button>
                    </div>
                    <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stone-900 p-8 bg-white">
            <div className="flex justify-between items-end mb-6">
              <span className="text-sm text-stone-500 uppercase tracking-widest">Subtotal</span>
              <span className="text-4xl font-serif italic">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-stone-900 text-white py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-stone-700 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};