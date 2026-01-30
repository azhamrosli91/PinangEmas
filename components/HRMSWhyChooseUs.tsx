
import React from 'react';
import { Gift, Infinity, Smartphone, ShieldCheck, Heart } from 'lucide-react';

const HRMSWhyChooseUs: React.FC = () => {
    const points = [
        {
            title: '100% Free Forever',
            description: 'Zero subscription fees, no hidden charges, and no credit card required. Our gift to the Malaysian business community.',
            icon: <Gift className="w-8 h-8" />
        },
        {
            title: 'Unlimited Employees',
            description: 'Whether you have 5 staff or 5,000, our system scales with you without any extra cost or performance degradation.',
            icon: <Infinity className="w-8 h-8" />
        },
        {
            title: 'Ultra-Easy to Use',
            description: 'Designed with simplicity in mind. Your HR team can master the entire dashboard in minutes, not days.',
            icon: <Smartphone className="w-8 h-8" />
        },
        {
            title: 'High Security',
            description: 'All personal information are encrypted. We prioritize privacy as our gold standard.',
            icon: <ShieldCheck className="w-8 h-8" />
        }
    ];

    return (
        <div className="py-24 border-y border-white/5 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6">
                    <Heart className="w-3.5 h-3.5 text-gold animate-pulse" />
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em]">Community First</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Why Trust Our <span className="text-gold italic">Free HRMS?</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-20">
                    We believe high-quality HR tools should be accessible to every business. Our platform combines enterprise robustness with radical accessibility.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((p, i) => (
                        <div key={i} className="card-glass p-8 rounded-[2.5rem] group hover:border-gold/40 transition-all duration-500 hover:bg-gold/5">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-gold/30">
                                {p.icon}
                            </div>
                            <h5 className="text-xl font-black text-white mb-4 group-hover:text-gold transition-colors">{p.title}</h5>
                            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {p.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HRMSWhyChooseUs;
