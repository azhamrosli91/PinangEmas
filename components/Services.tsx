
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onServiceSelect: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  return (
    <section id="services" className="py-32 relative bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#AA771C] text-sm font-black tracking-[0.3em] uppercase mb-6 flex items-center">
              <span className="w-8 h-px bg-[#AA771C] mr-4"></span>
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]">
              Solutions Crafted with <br />
              <span className="text-gold italic">Precision.</span>
            </h3>
          </div>
          <div className="max-w-sm">
             <p className="text-gray-400 text-lg leading-relaxed">
               We don't just build software. We engineer competitive advantages through innovation and excellence.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative h-full cursor-pointer"
              onClick={() => onServiceSelect(service.id)}
            >
              <div className="card-glass p-12 rounded-[2.5rem] h-full flex flex-col items-start transition-all duration-500 hover:bg-white/5 border-white/5 hover:border-[#AA771C]/30 group">
                <div className="mb-10 relative">
                  <div className="absolute inset-0 bg-[#AA771C]/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#AA771C]/40 group-hover:bg-[#AA771C]/5 transition-all duration-500 text-[#AA771C]">
                    <div className="transition-transform duration-500 ease-out group-hover:scale-125 group-hover:rotate-[15deg]">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-2xl font-black text-white mb-5 group-hover:text-[#AA771C] transition-colors">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-10 flex-grow text-base">
                  {service.description}
                </p>
                
                <div className="flex items-center text-xs font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  View Case Study & Details
                  <span className="ml-3 w-8 h-px bg-white/10 group-hover:w-12 group-hover:bg-[#AA771C] transition-all duration-500"></span>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#AA771C]/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 -z-10 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-block p-[1px] rounded-2xl gold-gradient group cursor-pointer" onClick={() => onServiceSelect(SERVICES[0].id)}>
            <div className="px-10 py-5 bg-black rounded-2xl flex items-center space-x-4 group-hover:bg-transparent transition-all">
              <span className="text-white font-bold group-hover:text-black transition-colors">Need a custom feature?</span>
              <span className="text-[#AA771C] font-black underline group-hover:text-black transition-colors decoration-2 underline-offset-4">Let's discuss.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
