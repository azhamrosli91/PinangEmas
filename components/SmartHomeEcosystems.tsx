
import React from 'react';
import { Wifi, Mic, Smartphone, ShieldCheck, Zap, Home } from 'lucide-react';

const SmartHomeEcosystems: React.FC = () => {
    const ecosystems = [
        {
            name: 'Tuya Smart',
            description: 'The world\'s most flexible IoT platform, supporting over 90,000 different smart product categories.',
            icon: <Zap className="w-6 h-6 text-orange-400" />
        },
        {
            name: 'Google & Alexa',
            description: 'Voice-first living. Command your entire environment using natural language through Assistant or Alexa.',
            icon: <Mic className="w-6 h-6 text-blue-400" />
        },
        {
            name: 'Xiaomi & Aqara',
            description: 'High-precision Zigbee sensors that provide industry-leading stability and exceptional battery life.',
            icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
        }
    ];

    return (
        <div className="py-24 border-t border-white/5 bg-[#080808]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">The Unified Ecosystem</h4>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Best-in-Class <br /><span className="text-gold italic">Integrations.</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            We don't believe in closed systems. We architect smart environments that combine the best hardware from Tuya, Google, Amazon, and Xiaomi into one seamless experience.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {['App Control', 'Voice Control', 'Sensor Logic', 'Energy Stats'].map((tag, i) => (
                                <div key={i} className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-gold/30 transition-all duration-300">
                                    <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(170,119,28,0.5)]"></div>
                                    <span className="text-white font-bold text-sm tracking-tight">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                        {ecosystems.map((eco, idx) => (
                            <div key={idx} className="card-glass p-10 rounded-[2.5rem] border-white/5 hover:border-gold/30 transition-all duration-500 group flex items-center space-x-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shrink-0">
                                    {eco.icon}
                                </div>
                                <div>
                                    <h5 className="text-2xl font-black text-white mb-2 group-hover:text-gold transition-colors">{eco.name}</h5>
                                    <p className="text-gray-500 text-base leading-relaxed">{eco.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartHomeEcosystems;
