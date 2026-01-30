
import React, { useMemo } from 'react';
import { ChevronRight, Zap, Star, Workflow } from 'lucide-react';
import { LOGO_URL } from '../constants';
import LazyImage from './LazyImage';

const Hero: React.FC = () => {
  // Generate a set of particles with random properties
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: `${Math.random() * 4 + 2}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * -20}s`,
    }));
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      {/* Particle Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="gold-particle"
            style={{
              '--size': p.size,
              '--left': p.left,
              '--top': p.top,
              '--duration': p.duration,
              '--delay': p.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AA771C]/10 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] -z-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-[#AA771C] mb-8 tracking-[0.2em] uppercase">
            <span className="flex h-2 w-2 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AA771C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AA771C]"></span>
            </span>
            Premium Software Engineering
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tighter">
            Digital Excellence. <br />
            <span className="text-gold italic">Pinang Emas.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl leading-relaxed font-medium">
            Pinang Emas is your strategic partner for high-impact IT solutions. From bespoke software to AI automation, we build the tech that powers tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-8">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-5 rounded-2xl gold-gradient text-black font-black flex items-center justify-center hover:scale-[1.03] transition-all shadow-[0_20px_50px_rgba(170,119,28,0.3)] group"
            >
              Start Your Project 
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="flex items-center text-white/70 hover:text-white transition-colors font-bold tracking-tight py-2 border-b-2 border-transparent hover:border-[#AA771C]"
            >
              View Our Services
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex items-center space-x-12">
            <div>
              <div className="flex items-center text-[#AA771C] mb-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm font-bold text-white">4.9/5 Rating</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Clutch & G2 Reviews</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-2xl font-black text-white">100%</p>
              <p className="text-sm font-bold text-gray-400">Project Delivery</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">On-time & On-budget</p>
            </div>
          </div>
        </div>

        <div className="relative lg:block hidden h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <div className="relative w-full h-full max-w-lg aspect-square">
              {/* Image Frame */}
              <div className="absolute inset-4 rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] z-20">
                <LazyImage 
                  src={LOGO_URL} 
                  alt="Pinang Emas Brand" 
                  priority={true}
                  className="w-full h-full scale-110 hover:scale-100 transition-transform duration-1000 bg-black/40 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Glow Behind */}
              <div className="absolute inset-0 gold-gradient opacity-20 blur-[100px] rounded-full z-10"></div>
              
              {/* Floating Tech Badges */}
              <div className="absolute top-10 -left-10 card-glass p-5 rounded-2xl z-30 animate-float" style={{ animationDelay: '-1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#AA771C]/20 flex items-center justify-center">
                    <Zap className="text-[#AA771C] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-500">Performance</p>
                    <p className="text-sm font-bold">99.9% Uptime</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-10 card-glass p-5 rounded-2xl z-30 animate-float" style={{ animationDelay: '-3s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Workflow className="text-blue-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-500">Automation</p>
                    <p className="text-sm font-bold">n8n Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
