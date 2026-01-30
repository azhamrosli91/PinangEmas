
import React from 'react';
import { Settings, ShieldCheck, Share2, CheckCircle2 } from 'lucide-react';

const SmartHomeServices: React.FC = () => {
    const services = [
        {
            title: 'Ecosystem Architecture',
            description: 'Complete technical setup of your smart home or office foundation. We configure hubs, mesh networks, and primary device clusters.',
            icon: <Settings className="w-8 h-8" />,
            features: ['Network Optimization', 'Hub Stabilization', 'Device Commissioning']
        },
        {
            title: 'Security Hardening',
            description: 'Transforming your space into a fortress. Implementation of AI-powered CCTV, biometrics, and reactive security sensors.',
            icon: <ShieldCheck className="w-8 h-8" />,
            features: ['CCTV Remote Access', 'Smart Entry Systems', 'Real-time Alerts']
        },
        {
            title: 'Global Integration',
            description: 'Bridging the gap between brands. We ensure your existing Tuya, Aqara, and Xiaomi devices work as one unified system.',
            icon: <Share2 className="w-8 h-8" />,
            features: ['Cross-Brand Logic', 'Voice Mastery', 'Legacy Integration']
        }
    ];

    return (
        <div className="py-24 border-t border-white/5 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Professional Expertise</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-white">How We <span className="text-gold italic">Empower You.</span></h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        From initial consultation to final automation logic, Pinang Emas provides the technical muscle to make your smart vision a reality.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <div key={idx} className="group relative">
                            <div className="card-glass p-12 rounded-[3.5rem] bg-[#0c0c0c]/80 border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-10 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500 border border-white/10 group-hover:border-gold/40">
                                    {s.icon}
                                </div>

                                <h5 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors">{s.title}</h5>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{s.description}</p>

                                <ul className="space-y-3 pt-8 border-t border-white/5">
                                    {s.features.map((f, i) => (
                                        <li key={i} className="flex items-center text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-gold/60 transition-colors">
                                            <CheckCircle2 size={12} className="mr-2 text-gold" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmartHomeServices;
