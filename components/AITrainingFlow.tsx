
import React from 'react';
import { Database, Filter, BrainCircuit, Activity, LineChart, Sparkles, Binary, Share2 } from 'lucide-react';

const AITrainingFlow: React.FC = () => {
    const steps = [
        {
            title: 'Data Intake',
            description: 'Ingestion of raw multi-modal data: Images, Text, and Sensor logs.',
            icon: <Database className="w-8 h-8" />,
            color: 'blue'
        },
        {
            title: 'AI Cleaning',
            description: 'Automated sanitation & labeling using proprietary cleaning agents.',
            icon: <Filter className="w-8 h-8" />,
            color: 'purple'
        },
        {
            title: 'Model Training',
            description: 'Deep neural network synthesis on our high-performance GPU clusters.',
            icon: <Binary className="w-8 h-8" />,
            color: 'gold'
        },
        {
            title: 'Live Inference',
            description: 'Deployment to production with real-time feedback loop optimization.',
            icon: <Share2 className="w-8 h-8" />,
            color: 'emerald'
        }
    ];

    return (
        <div className="py-24 relative overflow-hidden">
            {/* Background tech lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gold"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"></div>
            </div>

            <div className="text-center mb-20">
                <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Neural Architecture</h4>
                <h2 className="text-4xl md:text-5xl font-black text-white italic">AI Training <span className="text-gold">Pipeline</span></h2>
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                    From raw noise to intelligent assets—our iterative training loop ensures your models evolve with your business data.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Animated Main Path */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2">
                    <div className="h-full bg-gradient-to-r from-transparent via-gold to-transparent w-full animate-pipeline-flow"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            <div className="flex flex-col items-center">
                                <div className="relative mb-8">
                                    {/* Outer Rings */}
                                    <div className="absolute inset-[-12px] border border-white/5 rounded-full group-hover:border-gold/20 group-hover:rotate-180 transition-all duration-1000"></div>
                                    <div className="absolute inset-[-6px] border border-white/10 rounded-full group-hover:border-gold/40 group-hover:-rotate-180 transition-all duration-1000"></div>

                                    {/* Main Icon Container */}
                                    <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#AA771C] group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(170,119,28,0.3)] transition-all duration-500 relative z-10">
                                        {step.icon}

                                        {/* Floating Particles */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                                    </div>
                                </div>

                                <div className="text-center group-hover:translate-y-[-5px] transition-transform duration-500">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gold/40 mb-2 block">Phase 0{idx + 1}</span>
                                    <h5 className="text-xl font-black text-white mb-3 group-hover:text-gold transition-colors">{step.title}</h5>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto group-hover:text-gray-300 transition-colors">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes pipeline-flow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-pipeline-flow {
          background-size: 200% 100%;
          animation: pipeline-flow 4s infinite linear;
        }
      `}</style>
        </div>
    );
};

export default AITrainingFlow;
