
import React from 'react';
import { ShieldCheck, Zap, Layers, BarChart3, Clock, Rocket } from 'lucide-react';

const AutomationWhyChooseUs: React.FC = () => {
    const points = [
        {
            title: 'Architected for Scale',
            description: 'We build workflows that handle thousands of requests per second, ensuring your business never misses a beat during peak hours.',
            icon: <Layers className="w-6 h-6" />
        },
        {
            title: 'AI-Native Integration',
            description: 'Every workflow we design is ready for the future, with native support for OpenAi, Anthropic, and custom LLM agents built-in.',
            icon: <Rocket className="w-6 h-6" />
        },
        {
            title: 'Ironclad Reliability',
            description: 'Gold-standard error handling and auto-recovery mechanisms are baked into every node, guaranteeing 99.9% uptime for your operations.',
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: 'Real-time Intelligence',
            description: 'Live dashboards and monitoring tools let you see exactly how your data is moving and where your business is saving time.',
            icon: <BarChart3 className="w-6 h-6" />
        }
    ];

    return (
        <div className="py-24 border-t border-white/5 bg-[#0a0a0a]/50">
            <div className="text-center mb-16">
                <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">The Premium Choice</h4>
                <h2 className="text-3xl md:text-5xl font-black text-white">Why Setup with <span className="text-gold italic">Pinang Emas?</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {points.map((p, i) => (
                    <div key={i} className="card-glass p-8 rounded-3xl group hover:border-gold/30 transition-all duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                            {p.icon}
                        </div>
                        <h5 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{p.title}</h5>
                        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {p.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutomationWhyChooseUs;
