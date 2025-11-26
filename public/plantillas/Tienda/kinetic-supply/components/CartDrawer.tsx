import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
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
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer Panel */}
      <div 
        className={`fixed inset-y-0 right-0 max-w-md w-full bg-[#09090b] border-l border-neon z-[70] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-muted/30 flex items-center justify-between bg-surface">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-neon animate-pulse"></div>
             <h2 className="text-xl font-sans font-bold uppercase tracking-wider">Supply Crate</h2>
          </div>
          <button onClick={onClose} className="hover:text-neon hover:rotate-90 transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
              <span className="font-mono text-6xl mb-4">∅</span>
              <p className="font-mono text-sm uppercase tracking-widest">No items detected</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-surface border border-muted/30 p-3 group hover:border-white transition-colors">
                <div className="w-20 h-24 bg-black border border-muted/30 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-sans font-bold uppercase text-sm leading-none">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-muted hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[10px] font-mono text-neon mt-1">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-muted/50">
                      <button className="px-2 py-1 hover:bg-white hover:text-black transition-colors text-xs"><Minus className="w-3 h-3" /></button>
                      <span className="px-2 text-xs font-mono min-w-[30px] text-center">{item.quantity}</span>
                      <button className="px-2 py-1 hover:bg-white hover:text-black transition-colors text-xs"><Plus className="w-3 h-3" /></button>
                    </div>
                    <span className="font-mono font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neon p-6 bg-surface">
            <div className="space-y-2 mb-6 font-mono text-sm">
               <div className="flex justify-between text-muted">
                  <span>SUBTOTAL</span>
                  <span>${total.toFixed(2)}</span>
               </div>
               <div className="flex justify-between text-muted">
                  <span>SHIPPING</span>
                  <span>CALCULATED AT NEXT STEP</span>
               </div>
               <div className="flex justify-between text-xl font-bold text-neon border-t border-muted/30 pt-2 mt-2">
                  <span>TOTAL</span>
                  <span>${total.toFixed(2)}</span>
               </div>
            </div>
            <button className="w-full bg-neon text-black py-4 font-sans font-black uppercase text-lg hover:bg-white transition-colors clip-path-slant">
              Initiate Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};