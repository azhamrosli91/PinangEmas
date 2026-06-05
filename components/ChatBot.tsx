
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { SERVICES } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Selamat sejahtera! Saya Emas AI, konsultan teknikal anda. Bagaimana saya boleh membantu perniagaan anda hari ini?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        Anda ialah Emas AI, konsultan teknikal profesional untuk Pinang Emas, sebuah syarikat perisian IT premium di Malaysia.
        Jawab dalam Bahasa Melayu kecuali pengguna meminta bahasa lain. Nada anda profesional, pakar, membantu dan sedikit premium.
        
        PENGETAHUAN PERKHIDMATAN DINAMIK:
        Pemahaman anda tentang keupayaan kami mestilah berdasarkan perkhidmatan semasa Pinang Emas seperti dalam rekod rasmi syarikat.
        Perkhidmatan semasa yang disahkan ialah: ${SERVICES.map(s => s.title).join(', ')}.
        
        Fokus utama:
        - Kami pakar dalam Perisian Tersuai, Solusi AI dan Aliran Kerja n8n.
        - Kami mempunyai lebih 7 tahun kecemerlangan teknikal dalam pasaran Malaysia.
        - Galakkan pengguna mendapatkan sebut harga atau menghubungi kami untuk keperluan projek khusus.
        - Pastikan jawapan ringkas, bijak dan sangat bermaklumat.
      `;

      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || 'Maaf, saya menghadapi masalah memproses permintaan itu. Sila cuba lagi atau hubungi pasukan jualan kami terus.';
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Maaf, sambungan AI saya terganggu sebentar. Sila cuba lagi sebentar lagi.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {/* Chat Window */}
      <div 
        className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] md:h-[600px] card-glass rounded-[2rem] flex flex-col transition-all duration-500 origin-bottom-right shadow-2xl overflow-hidden border-[#AA771C]/20 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="gold-gradient p-6 flex items-center justify-between text-black">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-black/10 rounded-xl backdrop-blur-md">
              <Bot size={20} />
            </div>
            <div>
              <p className="font-black text-sm uppercase tracking-wider">Emas AI</p>
              <div className="flex items-center text-[10px] font-bold opacity-70">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1.5 animate-pulse"></span>
                Konsultan Aktif
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-black/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide bg-black/40">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[85%] space-x-3 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${
                  m.role === 'user' ? 'bg-white/5 border-white/10' : 'bg-[#AA771C]/20 border-[#AA771C]/30'
                }`}>
                  {m.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-[#AA771C]" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-white/5 border border-white/10 text-white rounded-tr-none' 
                    : 'bg-[#AA771C]/5 border border-[#AA771C]/20 text-gray-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#AA771C]/20 border border-[#AA771C]/30 flex items-center justify-center">
                  <Loader2 size={14} className="text-[#AA771C] animate-spin" />
                </div>
                <div className="p-4 bg-[#AA771C]/5 border border-[#AA771C]/20 rounded-2xl rounded-tl-none flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-[#AA771C]/40 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#AA771C]/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#AA771C]/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-black/60 border-t border-white/5">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya tentang perkhidmatan kami..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:border-[#AA771C] outline-none transition-colors"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 text-[#AA771C] hover:bg-white/5 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[9px] text-center text-white/20 mt-3 flex items-center justify-center">
            <Sparkles size={10} className="mr-1" />
            Dikuasakan oleh Gemini 3 Flash
          </p>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full gold-gradient shadow-[0_15px_30px_rgba(170,119,28,0.4)] flex items-center justify-center text-black transition-all duration-500 hover:scale-110 active:scale-90 relative ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black animate-bounce flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
