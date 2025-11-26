import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Minus, Square } from 'lucide-react';
import { ChatMessage, Product } from '../types';
import { getShoppingAdvice } from '../services/geminiService';

interface AIChatBotProps {
  currentProduct?: Product;
}

export const AIChatBot: React.FC<AIChatBotProps> = ({ currentProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'KINETIC_AI ONLINE. READY FOR INPUT.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = [...messages, userMsg];
    const responseText = await getShoppingAdvice(history, currentProduct);
    
    const aiMsg: ChatMessage = { role: 'model', text: responseText };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 font-mono">
      
      {/* Main Terminal Window */}
      <div 
        className={`bg-black border border-neon shadow-[0_0_20px_rgba(204,255,0,0.2)] w-80 md:w-96 transition-all duration-300 ease-out origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-neon text-black p-2 flex justify-between items-center border-b border-neon">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Terminal_v0.9</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-black hover:text-neon p-1 transition-colors">
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* CRT Scanline Overlay */}
        <div className="relative h-80 bg-black/90 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>
          
          {/* Messages Area */}
          <div className="h-full overflow-y-auto p-4 space-y-4 text-xs text-neon relative z-0">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end text-white' : 'items-start text-neon'}`}>
                <span className="text-[8px] opacity-50 mb-1 uppercase">
                  {msg.role === 'user' ? '> USER_INPUT' : '> SYS_RESPONSE'}
                </span>
                <div className={`max-w-[90%] p-2 border ${
                   msg.role === 'user' ? 'border-white/30 bg-white/10' : 'border-neon/30 bg-neon/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-center gap-1 text-neon">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-75">.</span>
                  <span className="animate-bounce delay-150">.</span>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-2 bg-black border-t border-neon flex items-center gap-2">
          <span className="text-neon text-sm">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER COMMAND..."
            className="flex-1 bg-transparent border-none outline-none text-xs text-white font-mono placeholder-white/30 uppercase"
          />
          <button type="submit" disabled={isLoading} className="text-neon hover:text-white">
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Launcher Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`absolute bottom-0 right-0 bg-black text-neon border border-neon px-6 py-4 flex items-center gap-3 hover:bg-neon hover:text-black transition-all group ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        <div className="relative">
           <Square className="w-4 h-4 fill-current" />
           <div className="absolute -top-1 -right-1 w-2 h-2 bg-white animate-ping rounded-full"></div>
        </div>
        <span className="font-bold font-sans uppercase tracking-widest text-sm">AI_ASSIST</span>
      </button>
    </div>
  );
};