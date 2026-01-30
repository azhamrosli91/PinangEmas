
import React from 'react';
import { Quote, Star } from 'lucide-react';

const SoftwareTestimonial: React.FC = () => {
    return (
        <div className="py-24 border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
                <Quote className="w-96 h-96 text-gold" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center space-x-1 mb-10">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
                    </div>

                    <h4 className="text-3xl md:text-5xl font-black text-white italic leading-tight mb-12">
                        "Pinang Emas didn't just build a portal; they architected a solution that scaled our operations by 400% in a single year. Their technical depth is unparalleled in the region."
                    </h4>

                    <div className="flex items-center space-x-6">
                        <img src="/assets/ainsofiah.png" alt="Aina Sofiah" className="w-20 h-20 rounded-full border-2 border-gold grayscale hover:grayscale-0 transition-all duration-500" />
                        <div>
                            <p className="font-black text-white text-2xl tracking-tight">Aina Sofiah</p>
                            <p className="text-gold font-bold uppercase tracking-[0.2em] text-xs">HR Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareTestimonial;
