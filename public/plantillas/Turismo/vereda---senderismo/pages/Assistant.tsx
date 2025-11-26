import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Command } from 'lucide-react';
import { generateHikingAdvice } from '../services/aiService';
import { ChatMessage } from '../types';
import { Button } from '../components/Button';

export const Assistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola explorador! 🌲 Soy tu guía de Vereda. Pregúntame sobre rutas, clima o preparación de equipaje.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setIsLoading(true);

    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    
    // Simulate thinking time for better UX if API is instant
    const responseText = await generateHikingAdvice(userText);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="h-[calc(100vh-140px)] max-w-5xl mx-auto px-4 sm:px-6 mb-6">
      <div className="h-full flex flex-col bg-white rounded-[2.5rem] shadow-2xl shadow-pine-900/5 overflow-hidden border border-white">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-md p-6 border-b border-sand-100 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-citrus-300 flex items-center justify-center shadow-lg shadow-citrus-300/30">
              <Bot className="h-6 w-6 text-pine-900" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-pine-900 font-display">Guía Vereda AI</h2>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-pine-500 text-xs font-medium">En línea y listo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-gradient-to-b from-white to-sand-50/50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] sm:max-w-[75%] items-end gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  msg.role === 'user' ? 'bg-pine-200' : 'bg-white border border-sand-200'
                }`}>
                  {msg.role === 'user' ? <User size={14} className="text-pine-700" /> : <Sparkles size={14} className="text-citrus-600" />}
                </div>

                {/* Bubble */}
                <div className={`p-5 rounded-[1.5rem] text-sm sm:text-base leading-7 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-pine-900 text-white rounded-br-sm' 
                    : 'bg-white text-pine-800 border border-sand-100 rounded-bl-sm'
                }`}>
                  <div className="markdown-body font-sans">
                    {msg.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start w-full">
               <div className="flex flex-row items-end gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-sand-200 flex items-center justify-center mb-1">
                    <Sparkles size={14} className="text-citrus-600" />
                </div>
                <div className="bg-white p-4 rounded-[1.5rem] rounded-bl-sm border border-sand-100 shadow-sm">
                  <div className="flex space-x-2 items-center h-4">
                    <div className="w-1.5 h-1.5 bg-pine-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-pine-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-pine-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-6 bg-white border-t border-sand-100">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta..."
              className="w-full bg-sand-50 border-0 text-pine-900 rounded-full pl-6 pr-14 py-4 focus:ring-2 focus:ring-citrus-400 shadow-inner transition-all"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 bg-pine-900 text-white rounded-full hover:bg-pine-800 disabled:opacity-50 disabled:hover:bg-pine-900 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
          <div className="text-center mt-3">
             <span className="text-[10px] text-pine-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
                <Command size={10} /> AI Powered
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};