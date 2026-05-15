import React from 'react';
import { ChevronRight, Medal } from 'lucide-react';
import LazyImage from './LazyImage';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[720px] flex items-center pt-28 overflow-hidden bg-[#FFFDF8]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] opacity-20 lg:opacity-100">
        <LazyImage
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=85&w=1400"
          alt="Pinang Emas software team in a bright office"
          priority={true}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F8F2DF] border border-[#AA771C]/15 text-[10px] md:text-xs font-black text-[#AA771C] mb-8 tracking-[0.18em] uppercase">
            <Medal className="w-3.5 h-3.5 mr-2" />
            Premium Software Engineering
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.98] mb-7 tracking-tight text-[#101010]">
            Digital Excellence. <br />
            <span className="text-[#AA771C]">Pinang Emas.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#101010]/80 mb-10 max-w-xl leading-relaxed font-medium">
            Automation for small businesses in Malaysia. Give us your issue, and we will help automate the workflow, reduce manual work, and fix the problem with practical technology.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#contact"
              className="px-9 py-4 rounded-xl border border-[#AA771C] bg-white text-[#101010] font-black flex items-center justify-center hover:bg-[#AA771C] hover:text-white transition-all shadow-[0_18px_38px_rgba(170,119,28,0.16)] group"
            >
              Start Your Project
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="text-[#AA771C] hover:text-[#101010] transition-colors font-bold py-2 border-b border-[#AA771C]/40 hover:border-[#101010]"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
