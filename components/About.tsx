
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
    <section id="about" className="py-20 relative overflow-hidden bg-[#FFFDF8]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1fr_1.2fr] gap-12 items-center mb-20">
          <div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#AA771C]/20">
                <LazyImage
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="Modern Tech Team"
                  className="w-full h-full object-cover grayscale-[35%] opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 gold-gradient rounded-2xl text-black shadow-2xl max-w-[220px] z-10">
                <p className="text-3xl font-black mb-1">14+</p>
                <p className="font-bold uppercase tracking-wider text-[10px]">Years of technical excellence and software delivery.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#AA771C] text-xs font-black tracking-[0.28em] uppercase mb-4">About Pinang Emas</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#101010] mb-5 leading-tight">Engineering Success Through Quality Code</h3>
            <p className="text-[#101010]/75 leading-relaxed mb-7">
              Pinang Emas started with a simple vision: to deliver Malaysian businesses with online, high-impact software solutions that are reliable, fast, and practical.
            </p>

            <div className="space-y-5">
              {values.map((v, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="mt-1 p-2.5 rounded-xl bg-[#F8F2DF] text-[#AA771C] border border-[#AA771C]/15">
                    {v.icon}
                  </div>
                  <div>
                    <h5 className="text-base font-black text-[#101010] mb-1">{v.title}</h5>
                    <p className="text-sm text-[#101010]/70">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#AA771C] text-xs font-black tracking-[0.28em] uppercase mb-4">The Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#101010] mb-10">Why Choose <span className="text-[#AA771C] italic">Us?</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="group">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F2DF] border border-[#AA771C]/20 flex items-center justify-center mb-5">
                  {adv.icon}
                </div>
                <h5 className="text-lg font-black text-[#101010] mb-2">{adv.title}</h5>
                <p className="text-sm text-[#101010]/70 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#AA771C]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default About;
