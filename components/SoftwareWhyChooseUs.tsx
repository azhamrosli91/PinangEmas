
import React from 'react';
import { Target, Cpu, Users, Award, CheckCircle2 } from 'lucide-react';

const SoftwareWhyChooseUs: React.FC = () => {
    const points = [
        {
            title: '14+ Years Expertise',
            description: 'We aren\'t newcomers. We\'ve navigated the evolution of the web for over a decade, building everything from static sites to massive AI engines.',
            icon: <Award className="w-8 h-8" />
        },
        {
            title: 'Full-Stack Authority',
            description: 'We own the entire stack. From React/Vue frontends to Node/Python backends and cloud-native Devops, your project is in elite hands.',
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: 'Bespoke Architecture',
            description: 'We don\'t use templates. Every line of code is written to solve your specific technical challenges and business objectives.',
            icon: <Target className="w-8 h-8" />
        },
        {
            title: 'Partner, Not Vendor',
            description: 'We act as an extension of your own engineering team, providing strategic consulting alongside technical execution.',
            icon: <Users className="w-8 h-8" />
        }
    ];

    return (
        <div className="py-24 border-t border-white/5 bg-[#080808]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">The Competitive Edge</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Why Innovators <br /><span className="text-gold italic">Select Us.</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            When standard software isn't enough, companies turn to Pinang Emas for engineering that defines industries.
                        </p>
                        <div className="space-y-4">
                            {['Guaranteed Code Ownership', 'No Hidden Licensing Fees', '24/7 Security Monitoring'].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 text-white/80 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        {points.map((point, idx) => (
                            <div key={idx} className="card-glass p-10 rounded-[2.5rem] border-white/5 hover:border-gold/20 transition-all duration-500 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500 border border-white/10 group-hover:border-gold/40">
                                    {point.icon}
                                </div>
                                <h5 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors">{point.title}</h5>
                                <p className="text-gray-400 leading-relaxed text-base">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareWhyChooseUs;
