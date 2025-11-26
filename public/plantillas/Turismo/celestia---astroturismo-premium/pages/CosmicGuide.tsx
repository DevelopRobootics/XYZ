import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { getCosmicAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const CosmicGuide: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '¡Hola! Soy Celestia, tu guía astronómico. ¿Quieres saber cuál es el mejor momento para ver la Vía Láctea o qué constelaciones son visibles hoy?',
      timestamp: new Date()
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await getCosmicAdvice(input);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12 px-4 bg-[url('https://images.unsplash.com/photo-1534234828563-025114aeb1f6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed">
        <div className="max-w-4xl mx-auto h-[80vh] flex flex-col">
          <Card className="flex-grow flex flex-col h-full bg-space-950/80 backdrop-blur-xl border border-space-700 shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-space-700 flex items-center bg-space-900/50">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mr-4">
                <Sparkles className="text-white h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Guía Cósmica IA</h2>
                <p className="text-xs text-slate-400">Powered by Gemini 2.5</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mt-1 ${msg.role === 'user' ? 'bg-cyan-600 ml-3' : 'bg-purple-600 mr-3'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-cyan-600/20 text-white border border-cyan-500/30 rounded-tr-none' 
                        : 'bg-space-800 text-slate-200 border border-space-700 rounded-tl-none'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      <span className="text-[10px] opacity-50 mt-2 block text-right">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                   <div className="bg-space-800 p-4 rounded-2xl rounded-tl-none border border-space-700 ml-11">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-space-900/50 border-t border-space-700">
              <form onSubmit={handleSend} className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregunta sobre estrellas, planetas o tours..."
                  className="flex-grow bg-space-950 border border-space-700 rounded-full px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  disabled={loading}
                />
                <Button type="submit" disabled={loading || !input.trim()} className="rounded-full w-12 h-12 p-0 flex items-center justify-center">
                  <Send size={20} className={loading ? 'opacity-0' : 'ml-0.5'} />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CosmicGuide;