import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Terminal, Minus } from 'lucide-react';
import { ChatMessage, Product } from '../types';
import { getShoppingAdvice } from '../services/geminiService';

interface AIChatBotProps {
  currentProduct?: Product;
}

export const AIChatBot: React.FC<AIChatBotProps> = ({ currentProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Sistema Verde v2.0. ¿En qué puedo asistirte?' }
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
    <div className="fixed bottom-0 right-8 z-50 font-mono">
      {/* Chat Window */}
      <div 
        className={`bg-white border-x border-t border-stone-900 w-80 shadow-2xl transition-all duration-300 ease-out ${
          isOpen ? 'h-96 opacity-100' : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-stone-900 text-[#f4f4f0] p-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
            <span className="text-xs uppercase tracking-widest font-bold">Verde.AI</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-stone-400">
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-72 overflow-y-auto p-4 bg-[#f4f4f0] space-y-4 text-xs">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[90%] p-3 border ${
                  msg.role === 'user' 
                    ? 'bg-stone-200 border-stone-300 text-stone-900' 
                    : 'bg-white border-stone-900 text-stone-900'
                }`}
              >
                <span className="block text-[8px] uppercase tracking-wider mb-1 text-stone-400">
                  {msg.role === 'user' ? 'USR' : 'SYS'}
                </span>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-xs text-stone-400 animate-pulse">Procesando solicitud...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-2 bg-white border-t border-stone-200 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="_"
            className="flex-1 text-xs bg-transparent border-none outline-none px-2 text-stone-900 font-mono placeholder-stone-400"
          />
          <button type="submit" disabled={isLoading} className="px-3 hover:text-stone-500">
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>

      {/* Toggle Button (Only visible when closed) */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`absolute bottom-0 right-0 bg-stone-900 text-white px-6 py-3 flex items-center gap-2 border border-stone-900 transition-transform hover:-translate-y-1 ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        <Terminal className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-widest">AI Chat</span>
      </button>
    </div>
  );
};