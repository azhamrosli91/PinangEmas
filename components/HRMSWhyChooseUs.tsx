
import React from 'react';
import { Gift, Infinity, Smartphone, ShieldCheck, Heart } from 'lucide-react';

const HRMSWhyChooseUs: React.FC = () => {
    const points = [
        {
            title: '100% Percuma Selamanya',
            description: 'Tiada yuran langganan, tiada caj tersembunyi dan tiada kad kredit diperlukan. Inilah sumbangan kami kepada komuniti perniagaan Malaysia.',
            icon: <Gift className="w-8 h-8" />
        },
        {
            title: 'Pekerja Tanpa Had',
            description: 'Sama ada anda mempunyai 5 atau 5,000 pekerja, sistem kami berkembang bersama anda tanpa kos tambahan atau penurunan prestasi.',
            icon: <Infinity className="w-8 h-8" />
        },
        {
            title: 'Sangat Mudah Digunakan',
            description: 'Direka dengan fokus kepada kesederhanaan. Pasukan HR anda boleh memahami dashboard dalam beberapa minit, bukan berhari-hari.',
            icon: <Smartphone className="w-8 h-8" />
        },
        {
            title: 'Keselamatan Tinggi',
            description: 'Semua maklumat peribadi dienkripsi. Privasi ialah standard utama kami.',
            icon: <ShieldCheck className="w-8 h-8" />
        }
    ];

    return (
        <div className="py-24 border-y border-[#AA771C]/10 bg-[#FFFDF8]">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6">
                    <Heart className="w-3.5 h-3.5 text-gold animate-pulse" />
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em]">Komuniti Diutamakan</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#101010] mb-6">Mengapa Pilih <span className="text-gold italic">HRMS Percuma Kami?</span></h2>
                <p className="text-[#101010]/70 max-w-2xl mx-auto mb-20">
                    Kami percaya alat HR berkualiti tinggi patut boleh digunakan oleh semua perniagaan. Platform kami menggabungkan ketahanan tahap perusahaan dengan akses yang mudah.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((p, i) => (
                        <div key={i} className="card-glass p-8 rounded-[2.5rem] group hover:border-gold/40 transition-all duration-500 hover:bg-gold/5">
                            <div className="w-16 h-16 rounded-2xl bg-[#F8F2DF] flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform duration-500 border border-[#AA771C]/20 group-hover:border-gold/30">
                                {p.icon}
                            </div>
                            <h5 className="text-xl font-black text-[#101010] mb-4 group-hover:text-gold transition-colors">{p.title}</h5>
                            <p className="text-sm text-[#101010]/55 leading-relaxed group-hover:text-[#AA771C]/75 transition-colors">
                                {p.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HRMSWhyChooseUs;
