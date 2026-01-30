
import React from 'react';
import { Shield, Sparkles, HardDrive, Cpu, Zap, Globe, Lock, Rocket } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
}

interface CoreCapabilitiesProps {
    features: Feature[];
}

const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ features }) => {
    // A set of premium icons to cycle through if none are provided
    const iconPool = [
        <Shield className="w-7 h-7" />,
        <Cpu className="w-7 h-7" />,
        <Zap className="w-7 h-7" />,
        <Lock className="w-7 h-7" />,
        <Rocket className="w-7 h-7" />,
        <Globe className="w-7 h-7" />,
        <HardDrive className="w-7 h-7" />,
        <Sparkles className="w-7 h-7" />,
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#AA771C]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#AA771C]/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-[#AA771C] text-sm font-black tracking-[0.4em] uppercase mb-6 flex items-center">
                            <span className="w-12 h-px bg-gold/30 mr-4"></span>
                            Core Capabilities
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Engineered for <br /><span className="text-gold italic">Unrivaled Reliability.</span>
                        </h3>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Every system we architect is built with a foundation of technical excellence and a commitment to longevity.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="group relative h-full"
                        >
                            {/* Outer Glow on Hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <div className="relative card-glass p-12 rounded-[2.5rem] bg-[#0c0c0c]/80 border-white/5 hover:border-gold/30 h-full transition-all duration-500 flex flex-col items-start">
                                <div className="mb-10 relative">
                                    <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="relative w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#AA771C] border border-white/10 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500">
                                        <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            {iconPool[i % iconPool.length]}
                                        </div>
                                    </div>
                                </div>

                                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
                                    {feature.description}
                                </p>

                                {/* Micro-detail footer */}
                                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-gold/50 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50 shadow-[0_0_8px_rgba(170,119,28,0.5)]"></div>
                                    <span>Enterprise Grade Protocol</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
