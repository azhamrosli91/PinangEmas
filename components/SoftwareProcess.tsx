
import React from 'react';
import { Search, Code2, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

const SoftwareProcess: React.FC = () => {
    const steps = [
        {
            title: 'Discovery & Strategy',
            description: 'We dive deep into your business DNA to identify pain points and architect a solution that drives actual ROI.',
            icon: <Search className="w-6 h-6" />,
            tag: 'Step 01'
        },
        {
            title: 'Architecture & UX',
            description: 'Beyond aesthetics, we design the "engine" and the journey. High-performance databases meet intuitive interfaces.',
            icon: <Code2 className="w-6 h-6" />,
            tag: 'Step 02'
        },
        {
            title: 'Agile Engineering',
            description: 'Clean code, rigorous testing, and continuous feedback. We build your software in transparent, iterative sprints.',
            icon: <ShieldCheck className="w-6 h-6" />,
            tag: 'Step 03'
        },
        {
            title: 'Launch & Evolution',
            description: 'Post-deployment isn\'t the end. We monitor, optimize, and scale your platform as your user base grows.',
            icon: <Rocket className="w-6 h-6" />,
            tag: 'Step 04'
        }
    ];

    return (
        <div className="py-24 border-t border-white/5">
            <div className="text-center mb-20">
                <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Our Methodology</h4>
                <h2 className="text-3xl md:text-5xl font-black text-white">How We <span className="text-gold italic">Engineer</span> Success</h2>
            </div>

            <div className="relative">
                {/* Connection Line (Desktop) */}
                <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent -z-10"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="card-glass p-8 rounded-[2.5rem] bg-[#0c0c0c]/50 hover:bg-[#AA771C]/5 border-white/5 hover:border-gold/30 transition-all duration-500 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500 border border-white/10 group-hover:border-gold/30">
                                        {step.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#AA771C]/60 bg-[#AA771C]/5 px-3 py-1 rounded-full border border-[#AA771C]/20">
                                        {step.tag}
                                    </span>
                                </div>
                                <h5 className="text-xl font-black text-white mb-4 group-hover:text-gold transition-colors">{step.title}</h5>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {step.description}
                                </p>
                                {i < 3 && (
                                    <div className="lg:hidden flex items-center text-gold/30 pt-4">
                                        <ChevronRight className="w-6 h-6 rotate-90 mx-auto" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftwareProcess;
