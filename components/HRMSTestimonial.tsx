
import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';

const HRMSTestimonial: React.FC = () => {
    return (
        <div className="py-24 border-t border-[#AA771C]/10 relative bg-[#FFFDF8]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-12 -left-12 w-32 h-32 bg-gold/10 rounded-full blur-[60px]"></div>
                        <div className="card-glass p-12 rounded-[3.5rem] border-[#AA771C]/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Quote size={120} className="text-gold" />
                            </div>

                            <div className="flex items-center space-x-1 mb-8">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="fill-gold text-gold" />)}
                            </div>

                            <blockquote className="text-2xl font-medium text-[#101010] leading-relaxed mb-10 italic">
                                "Finding a Free HRMS that actually supports unlimited employees was a game-changer for Nexus Tech. We've managed over 100+ staff on this platform without a single glitch in Malaysian statutory compliance."
                            </blockquote>

                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 rounded-full border-2 border-gold/30 p-1">
                                    <img
                                        src="/assets/ainsofiah.png"
                                        alt="Aina Sofiah"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#101010] font-black text-lg">Aina Sofiah</p>
                                    <p className="text-gold text-xs font-bold uppercase tracking-widest">HR Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xl">
                        <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">The Enterprise Choice</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-[#101010] mb-8">Built for the <br /><span className="text-gold italic">Malaysian Market.</span></h2>
                        <p className="text-[#101010]/70 text-lg leading-relaxed mb-10">
                            Unlike international HR systems, our platform is natively designed for LHDN, EPF, and SOCSO standards. We don't just provide software; we provide compliance peace of mind.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-[#F8F2DF] border border-[#AA771C]/20">
                                <p className="text-[#101010] font-black text-3xl mb-1">100+</p>
                                <p className="text-[#101010]/55 text-xs font-bold uppercase tracking-widest">Active Companies</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-[#F8F2DF] border border-[#AA771C]/20">
                                <p className="text-[#101010] font-black text-3xl mb-1">5.5k</p>
                                <p className="text-[#101010]/55 text-xs font-bold uppercase tracking-widest">Employees Managed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRMSTestimonial;
