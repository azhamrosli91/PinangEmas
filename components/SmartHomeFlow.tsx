
import React from 'react';
import { User, Zap, Mic, Wind, Camera, Unlock, ArrowRight, Play } from 'lucide-react';

const SmartHomeFlow: React.FC = () => {
    const scenarios = [
        {
            title: 'Presence Detection',
            trigger: 'Motion detected in hallway',
            action: 'Lights illuminate automatically',
            icon: <User className="w-6 h-6" />,
            subIcon: <Zap className="w-4 h-4 text-gold" />,
            color: 'gold'
        },
        {
            title: 'Voice Activation',
            trigger: '"Hey Google, turn on AC"',
            action: 'Climate control sets to 22°C',
            icon: <Mic className="w-6 h-6" />,
            subIcon: <Wind className="w-4 h-4 text-blue-400" />,
            color: 'blue'
        },
        {
            title: 'Smart AI Security',
            trigger: 'Known face at the door',
            action: 'Smart lock releases entry',
            icon: <Camera className="w-6 h-6" />,
            subIcon: <Unlock className="w-4 h-4 text-emerald-400" />,
            color: 'emerald'
        }
    ];

    return (
        <div className="py-24 border-t border-[#AA771C]/10 relative bg-[#FFF9E8] overflow-hidden">
            {/* Decorative pulse line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#F8F2DF] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4 flex items-center justify-center">
                        <Play className="w-3 h-3 mr-2 fill-gold" />
                        Live Scenarios
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#101010]">How Your Space <span className="text-gold italic">Reacts.</span></h2>
                    <p className="text-[#101010]/70 mt-6 max-w-xl mx-auto">
                        Experience an environment that anticipates your needs through intelligent sensor fusion and AI processing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {scenarios.map((s, idx) => (
                        <div key={idx} className="group relative">
                            <div className="card-glass p-10 rounded-[3rem] border-[#AA771C]/10 hover:border-gold/30 transition-all duration-700 h-full flex flex-col items-center text-center">
                                <div className="relative mb-10">
                                    <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-24 h-24 rounded-3xl bg-[#F8F2DF] flex items-center justify-center border border-[#AA771C]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative">
                                        <div className="text-gold group-hover:text-[#AA771C] transition-colors">
                                            {s.icon}
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white border border-[#AA771C]/20 flex items-center justify-center">
                                            {s.subIcon}
                                        </div>
                                    </div>
                                </div>

                                <h5 className="text-2xl font-black text-[#101010] mb-6 group-hover:text-gold transition-colors">{s.title}</h5>

                                <div className="space-y-4 w-full">
                                    <div className="p-4 rounded-2xl bg-[#F8F2DF] border border-[#AA771C]/10 text-xs font-bold text-[#101010]/70 uppercase tracking-widest flex items-center justify-between">
                                        <span>Input</span>
                                        <span className="text-[#101010] italic">{s.trigger}</span>
                                    </div>

                                    <div className="flex justify-center">
                                        <ArrowRight className="w-5 h-5 text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                                    </div>

                                    <div className="p-4 rounded-2xl bg-gold/5 border border-gold/10 text-xs font-black text-gold uppercase tracking-widest flex items-center justify-between">
                                        <span>Action</span>
                                        <span>{s.action}</span>
                                    </div>
                                </div>

                                <div className="mt-10 flex space-x-1">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-1.5 h-1.5 rounded-full bg-gold/20 ${i === 1 ? 'bg-gold animate-pulse' : ''}`}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmartHomeFlow;
