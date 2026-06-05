
import React from 'react';
import { Search, Code2, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

const SoftwareProcess: React.FC = () => {
    const steps = [
        {
            title: 'Penemuan & Strategi',
            description: 'Kami memahami operasi perniagaan anda secara mendalam untuk mengenal pasti masalah dan membina solusi yang memberi pulangan sebenar.',
            icon: <Search className="w-6 h-6" />,
            tag: 'Langkah 01'
        },
        {
            title: 'Seni Bina & UX',
            description: 'Bukan sekadar visual, kami mereka enjin sistem dan perjalanan pengguna. Pangkalan data berprestasi tinggi digabungkan dengan antara muka intuitif.',
            icon: <Code2 className="w-6 h-6" />,
            tag: 'Langkah 02'
        },
        {
            title: 'Kejuruteraan Tangkas',
            description: 'Kod bersih, semakan teliti dan maklum balas berterusan. Kami membina perisian anda melalui sprint yang telus dan berulang.',
            icon: <ShieldCheck className="w-6 h-6" />,
            tag: 'Langkah 03'
        },
        {
            title: 'Pelancaran & Evolusi',
            description: 'Selepas deployment bukan penamat. Kami memantau, mengoptimumkan dan mengembangkan platform anda apabila pengguna bertambah.',
            icon: <Rocket className="w-6 h-6" />,
            tag: 'Langkah 04'
        }
    ];

    return (
        <div className="py-24 border-t border-[#AA771C]/10">
            <div className="text-center mb-20">
                <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Metodologi Kami</h4>
                <h2 className="text-3xl md:text-5xl font-black text-[#101010]">Cara Kami <span className="text-gold italic">Membina</span> Kejayaan</h2>
            </div>

            <div className="relative">
                {/* Connection Line (Desktop) */}
                <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent -z-10"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="card-glass p-8 rounded-[2.5rem] bg-white hover:bg-[#AA771C]/5 border-[#AA771C]/10 hover:border-gold/30 transition-all duration-500 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-[#F8F2DF] flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500 border border-[#AA771C]/20 group-hover:border-gold/30">
                                        {step.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#AA771C]/60 bg-[#AA771C]/5 px-3 py-1 rounded-full border border-[#AA771C]/20">
                                        {step.tag}
                                    </span>
                                </div>
                                <h5 className="text-xl font-black text-[#101010] mb-4 group-hover:text-gold transition-colors">{step.title}</h5>
                                <p className="text-[#101010]/70 text-sm leading-relaxed mb-6 flex-grow">
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
