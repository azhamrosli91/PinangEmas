
import React from 'react';
import { Settings, ShieldCheck, Share2, CheckCircle2 } from 'lucide-react';

const SmartHomeServices: React.FC = () => {
    const services = [
        {
            title: 'Seni Bina Ekosistem',
            description: 'Tetapan teknikal lengkap untuk asas rumah atau pejabat pintar anda. Kami mengkonfigurasi hub, rangkaian mesh dan kelompok peranti utama.',
            icon: <Settings className="w-8 h-8" />,
            features: ['Pengoptimuman Rangkaian', 'Penstabilan Hub', 'Pentauliahan Peranti']
        },
        {
            title: 'Pengukuhan Keselamatan',
            description: 'Menjadikan ruang anda lebih selamat melalui CCTV berkuasa AI, biometrik dan sensor keselamatan responsif.',
            icon: <ShieldCheck className="w-8 h-8" />,
            features: ['Akses CCTV Jarak Jauh', 'Sistem Masuk Pintar', 'Amaran Masa Nyata']
        },
        {
            title: 'Integrasi Global',
            description: 'Menghubungkan pelbagai jenama. Kami memastikan peranti Tuya, Aqara dan Xiaomi anda berfungsi sebagai satu sistem bersepadu.',
            icon: <Share2 className="w-8 h-8" />,
            features: ['Logik Rentas Jenama', 'Kawalan Suara', 'Integrasi Sistem Lama']
        }
    ];

    return (
        <div className="py-24 border-t border-[#AA771C]/10 bg-[#FFFDF8]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Kepakaran Profesional</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#101010]">Cara Kami <span className="text-gold italic">Memudahkan Anda.</span></h2>
                    <p className="text-[#101010]/70 mt-6 max-w-2xl mx-auto">
                        Daripada konsultasi awal hingga logik automasi akhir, Pinang Emas menyediakan kepakaran teknikal untuk merealisasikan visi ruang pintar anda.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <div key={idx} className="group relative">
                            <div className="card-glass p-12 rounded-[3.5rem] bg-white border-[#AA771C]/10 hover:border-gold/30 transition-all duration-500 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-[#F8F2DF] flex items-center justify-center text-gold mb-10 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500 border border-[#AA771C]/20 group-hover:border-gold/40">
                                    {s.icon}
                                </div>

                                <h5 className="text-2xl font-black text-[#101010] mb-4 group-hover:text-gold transition-colors">{s.title}</h5>
                                <p className="text-[#101010]/70 text-sm leading-relaxed mb-8 flex-grow">{s.description}</p>

                                <ul className="space-y-3 pt-8 border-t border-[#AA771C]/10">
                                    {s.features.map((f, i) => (
                                        <li key={i} className="flex items-center text-[10px] font-black uppercase tracking-widest text-[#101010]/45 group-hover:text-gold/60 transition-colors">
                                            <CheckCircle2 size={12} className="mr-2 text-gold" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmartHomeServices;
