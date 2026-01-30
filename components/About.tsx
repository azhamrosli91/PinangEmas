
import React from 'react';
import { ShieldCheck, Zap, Globe, Target, Cpu, Headphones, Lock } from 'lucide-react';
import LazyImage from './LazyImage';

const About: React.FC = () => {
  const values = [
    {
      title: 'Reliability',
      description: 'Gold standard systems that never go down when you need them most.',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: 'Speed',
      description: 'Optimized performance for faster processing and deployment.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scale',
      description: 'Solutions that grow with your business, globally.',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const advantages = [
    {
      title: 'Bespoke Strategy',
      description: 'We architect solutions that fit your specific business DNA, not generic templates.',
      icon: <Target className="w-6 h-6 text-[#AA771C]" />
    },
    {
      title: 'Innovation First',
      description: 'Access to the latest in AI and n8n automation to keep you ahead of the curve.',
      icon: <Cpu className="w-6 h-6 text-[#AA771C]" />
    },
    {
      title: 'Security Centric',
      description: 'Enterprise-grade security protocols baked into every single layer of your software.',
      icon: <Lock className="w-6 h-6 text-[#AA771C]" />
    },
    {
      title: 'Dedicated Support',
      description: 'Direct access to our senior engineering team for post-launch excellence.',
      icon: <Headphones className="w-6 h-6 text-[#AA771C]" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Core Vision Row */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/5">
                <LazyImage 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Modern Tech Team" 
                  className="w-full h-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-8 gold-gradient rounded-3xl text-black shadow-2xl max-w-xs z-10">
                <p className="text-4xl font-black mb-2">14+</p>
                <p className="font-bold uppercase tracking-wider text-xs">Years of industry leadership and technical excellence in high-end development.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">About Pinang Emas</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Engineering Success Through Quality Code</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Pinang Emas started with a simple vision: to bring enterprise-level IT solutions to businesses of all sizes without compromising on the quality of service. With over a decade of experience, we believe that technology should be a multiplier for business value, not a hurdle.
            </p>
            
            <div className="space-y-8">
              {values.map((v, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className="mt-1 p-3 rounded-xl bg-white/5 text-[#AA771C] group-hover:bg-[#AA771C] group-hover:text-black transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-1">{v.title}</h5>
                    <p className="text-gray-400">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Subsection */}
        <div className="relative pt-16 border-t border-white/5">
          <div className="text-center mb-16">
            <h4 className="text-[#AA771C] text-sm font-black tracking-[0.3em] uppercase mb-4">The Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white">Why Choose <span className="text-gold italic">Us?</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="card-glass p-8 rounded-3xl border-white/5 hover:border-[#AA771C]/30 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#AA771C]/10 transition-all duration-500">
                  {adv.icon}
                </div>
                <h5 className="text-xl font-bold text-white mb-3 group-hover:text-[#AA771C] transition-colors">{adv.title}</h5>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#AA771C]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default About;
