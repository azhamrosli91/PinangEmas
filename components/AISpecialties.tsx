
import React from 'react';
import { Database, Filter, Microscope, ScanEye, BrainCircuit, Activity } from 'lucide-react';

const AISpecialties: React.FC = () => {
    const specialties = [
        {
            title: 'Image Training',
            description: 'Training deep learning models on custom datasets for precise object recognition and visual defect detection.',
            icon: <ScanEye className="w-6 h-6" />,
            tag: 'Computer Vision'
        },
        {
            title: 'Data Science',
            description: 'Applying advanced mathematical models to identify correlations and drive predictive business intelligence.',
            icon: <Microscope className="w-6 h-6" />,
            tag: 'Analytics'
        },
        {
            title: 'Data Cleaning',
            description: 'Automated ETL pipelines that sanitize and structure noisy data for 99.9% accurate AI training.',
            icon: <Filter className="w-6 h-6" />,
            tag: 'Processing'
        }
    ];

    return (
        <div className="py-24 border-t border-white/5 bg-gradient-to-b from-[#080808] to-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 font-black text-[10px] text-gold uppercase tracking-[0.3em]">
                            <BrainCircuit className="w-3 h-3" />
                            <span>Advanced Engineering</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Intelligence Beyond <br /><span className="text-gold italic">Code.</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            From raw data to refined decision-making engines, we provide the full-cycle AI development needed for modern enterprise scale.
                        </p>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                        {specialties.map((item, idx) => (
                            <div key={idx} className="card-glass p-8 rounded-[2rem] border-white/5 hover:border-gold/30 transition-all duration-500 group flex items-center space-x-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-500 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h5 className="text-xl font-black text-white group-hover:text-gold transition-colors">{item.title}</h5>
                                        <span className="text-[9px] font-black uppercase text-gold/40 border border-gold/20 px-2 py-0.5 rounded">{item.tag}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AISpecialties;
