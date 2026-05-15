
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onServiceSelect: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  return (
    <section id="services" className="py-24 relative bg-[#FFFDF8]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#AA771C] text-xs font-black tracking-[0.28em] uppercase mb-5 flex items-center">
              <span className="w-8 h-px bg-[#AA771C] mr-4"></span>
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#101010] mb-4 leading-[1.08]">
              Solutions Crafted with <span className="text-[#AA771C]">Precision.</span>
            </h3>
          </div>
          <div className="max-w-sm">
             <p className="text-[#101010]/75 text-base leading-relaxed">
               We don't just build software. We engineer competitive advantages through innovation and excellence.
             </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative h-full cursor-pointer"
              onClick={() => onServiceSelect(service.id)}
            >
              <div className="bg-white p-7 rounded-2xl h-full min-h-[330px] flex flex-col items-center text-center transition-all duration-500 border border-[#AA771C]/35 hover:border-[#AA771C] hover:shadow-[0_20px_45px_rgba(170,119,28,0.16)]">
                <div className="mb-6 relative">
                  <div className="relative w-20 h-20 rounded-2xl bg-[#F8F2DF] border border-[#AA771C]/25 flex items-center justify-center text-[#AA771C]">
                    <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-black text-[#101010] mb-4 leading-tight group-hover:text-[#AA771C] transition-colors">{service.title}</h4>
                <p className="text-[#101010]/75 leading-relaxed mb-8 flex-grow text-sm">
                  {service.description}
                </p>
                
                <div className="text-[10px] font-black uppercase tracking-widest text-[#AA771C] group-hover:text-[#101010] transition-colors">
                  View Case Study Details
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <div className="inline-block rounded-xl border border-[#AA771C]/40 bg-white group cursor-pointer" onClick={() => onServiceSelect(SERVICES[0].id)}>
            <div className="px-8 py-4 flex items-center space-x-2">
              <span className="text-[#101010] font-bold">Need a custom feature?</span>
              <span className="text-[#AA771C] font-black underline decoration-2 underline-offset-4">Let's discuss.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
