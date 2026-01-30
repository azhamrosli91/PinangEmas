
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle, ArrowRight, Star, MessageCircle, ExternalLink } from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../constants';

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
  onNavigate: (id: string) => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service]);

  const nextService = SERVICES[(SERVICES.findIndex(s => s.id === service.id) + 1) % SERVICES.length];

  const handleAction = () => {
    if (service.id === 'hrms-system') {
      window.open('https://hrms.pinangemas.com.my', '_blank');
    } else {
      const message = `Hello Pinang Emas, I'm interested in your ${service.title} service. I saw your expertise in development and would like to get a quote.`;
      window.open(`https://wa.me/601110245454?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const isHrms = service.id === 'hrms-system';

  return (
    <div className="min-h-screen pt-24 pb-32 bg-dark-bg animate-in fade-in duration-700">
      {/* Cinematic Hero */}
      <div className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 gold-gradient opacity-[0.03] -z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AA771C]/10 rounded-full blur-[140px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
        
        <div className="container mx-auto px-6">
          <button 
            onClick={onBack}
            className="flex items-center text-[#AA771C] font-black uppercase tracking-widest text-xs mb-12 hover:translate-x-[-8px] transition-transform group"
          >
            <ArrowLeft className="mr-3 w-4 h-4" /> Back to Solutions
          </button>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3">
              <div className="w-20 h-20 rounded-2xl bg-[#AA771C]/10 flex items-center justify-center text-[#AA771C] mb-8 ring-1 ring-[#AA771C]/20 shadow-[0_0_30px_rgba(170,119,28,0.15)]">
                {React.cloneElement(service.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "text-gold italic block md:inline" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mb-10">
                {service.longDescription}
              </p>
              
              {/* Call to Action for non-pricing services or general quote */}
              {!service.pricing && (
                <button 
                  onClick={handleAction}
                  className="px-12 py-6 rounded-2xl gold-gradient text-black font-black text-xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(170,119,28,0.3)] flex items-center group"
                >
                  {isHrms ? <ExternalLink className="mr-3 w-6 h-6" /> : <MessageCircle className="mr-3 w-6 h-6" />}
                  {isHrms ? 'Register Now' : 'Get the Quote Now'}
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              )}
            </div>
            
            <div className="lg:w-1/3">
              <div className="card-glass p-8 rounded-[2rem] border-white/10 relative">
                <div className="absolute -top-4 -right-4 bg-gold px-4 py-2 rounded-xl text-black font-black text-xs uppercase tracking-tighter transform rotate-12">
                  Premium Tier
                </div>
                <h4 className="text-white font-black text-xl mb-6">Key Benefits</h4>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-300 font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section - Conditionally Rendered */}
      {service.pricing && (
        <div className="container mx-auto px-6 py-24 border-y border-white/5">
          <div className="mb-16 text-center">
            <h2 className="text-[#AA771C] text-sm font-black tracking-[0.3em] uppercase mb-4">Investment Plans</h2>
            <p className="text-4xl font-black text-white">Transparent. Professional. <span className="text-gold italic">Valuable.</span></p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1600px] mx-auto">
            {service.pricing.map((plan, i) => (
              <div key={i} className={`card-glass p-8 rounded-[2rem] flex flex-col relative transition-all duration-500 hover:scale-[1.02] ${plan.isPopular ? 'border-[#AA771C]/50 bg-white/5 shadow-[0_0_40px_rgba(170,119,28,0.1)]' : 'border-white/5'}`}>
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#AA771C] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-white font-black text-lg mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-black text-gold">{plan.price}</span>
                  <span className="text-gray-500 text-[10px] ml-2 font-bold uppercase tracking-widest">
                    / {plan.period || 'one-time'}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features?.map((f, j) => (
                    <li key={j} className="flex items-start text-[10px] text-gray-300">
                      <CheckCircle className="w-3 h-3 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleAction}
                  className="w-full py-4 rounded-xl gold-gradient text-black font-black text-xs hover:opacity-90 transition-all flex items-center justify-center space-x-2"
                >
                  {isHrms ? 'Get Started Free' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
          
          {/* Custom Quote CTA */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl border border-dashed border-white/10">
            <h4 className="text-white font-bold text-xl mb-4">{isHrms ? 'Ready to modernize your HR?' : 'Need something more?'}</h4>
            <p className="text-gray-400 mb-8">
              {isHrms 
                ? 'Join hundreds of Malaysian companies optimizing their workforce with Pinang Emas HRMS. Direct portal access available now.' 
                : 'For custom enterprise requirements, multiple agents, or complex integrations, please reach out to us directly via WhatsApp.'}
            </p>
            <button 
              onClick={handleAction}
              className={`px-10 py-5 rounded-2xl ${isHrms ? 'bg-gold text-black' : 'bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366]'} font-black flex items-center justify-center mx-auto hover:scale-105 transition-all group`}
            >
              {isHrms ? <ExternalLink className="mr-3 w-5 h-5" /> : <MessageCircle className="mr-3 w-5 h-5" />}
              {isHrms ? 'Register Now at hrms.pinangemas.com.my' : 'Get Quote Now'}
            </button>
          </div>
        </div>
      )}

      {/* Feature Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-[#AA771C] text-sm font-black tracking-[0.3em] uppercase mb-4">Core Capabilities</h2>
          <p className="text-4xl font-black text-white">Engineered for Reliability.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {service.features.map((feature, i) => (
            <div key={i} className="card-glass p-12 rounded-[2.5rem] hover:bg-white/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#AA771C] mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Project CTA */}
      <div className="container mx-auto px-6 pt-24">
        <div 
          onClick={() => onNavigate(nextService.id)}
          className="group cursor-pointer card-glass p-12 rounded-[3rem] border-[#AA771C]/10 flex flex-col md:flex-row items-center justify-between hover:border-[#AA771C]/40 transition-all overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-[0.02] transition-opacity"></div>
          <div>
            <p className="text-[#AA771C] text-xs font-black uppercase tracking-[0.3em] mb-4">Next Offering</p>
            <h3 className="text-4xl md:text-5xl font-black text-white group-hover:text-gold transition-colors">{nextService.title}</h3>
          </div>
          <div className="mt-8 md:mt-0 w-20 h-20 rounded-full gold-gradient flex items-center justify-center text-black group-hover:scale-110 transition-transform">
            <ArrowRight className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
