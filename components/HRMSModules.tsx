
import React from 'react';
import {
    Users,
    Calendar,
    Clock,
    UserPlus,
    GraduationCap,
    BarChart,
    Wallet,
    Briefcase,
    Layout,
    CheckCircle2
} from 'lucide-react';

const HRMSModules: React.FC = () => {
    const modules = [
        { name: 'Pengurusan Pekerja', description: 'Identiti staf digital berpusat.', icon: <Users /> },
        { name: 'Pengurusan Cuti', description: 'Aliran kelulusan digital automatik.', icon: <Calendar /> },
        { name: 'Penjejakan Kehadiran', description: 'Clock-in geo-fenced dan pemantauan syif.', icon: <Clock /> },
        { name: 'Pengambilan Pekerja', description: 'Saluran pengambilan bakat hujung ke hujung.', icon: <UserPlus /> },
        { name: 'Latihan Profesional', description: 'Penjejakan kemahiran dan sijil.', icon: <GraduationCap /> },
        { name: 'Penilaian Prestasi', description: 'Semakan dan penilaian berasaskan KPI.', icon: <BarChart /> },
        { name: 'Gaji Patuh Berkanun', description: 'Pemprosesan automatik LHDN, KWSP dan PERKESO.', icon: <Wallet /> },
        { name: 'Pengurusan Projek', description: 'Pengimbangan tugasan dan beban operasi.', icon: <Briefcase /> },
        { name: 'Planner Bersepadu', description: 'Aliran kerja visual berasaskan Kanban.', icon: <Layout /> }
    ];

    return (
        <div className="py-24 border-t border-[#AA771C]/10 bg-[#FFFDF8]">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Dashboard Bersepadu</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#101010]">Modul <span className="text-gold italic">Lengkap.</span></h2>
                    <p className="text-[#101010]/70 mt-6 max-w-2xl mx-auto">
                        Pinang Emas HRMS bukan sekadar pangkalan data. Ia ialah ekosistem lengkap untuk mengautomasikan operasi tenaga kerja syarikat Malaysia.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((m, idx) => (
                        <div key={idx} className="group relative">
                            <div className="card-glass p-8 rounded-[2.5rem] bg-white border-[#AA771C]/10 hover:border-gold/30 hover:bg-[#AA771C]/5 transition-all duration-500 flex flex-col items-start h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#F8F2DF] flex items-center justify-center text-gold border border-[#AA771C]/20 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 mb-6">
                                    {React.cloneElement(m.icon as React.ReactElement, { size: 28, strokeWidth: 1.5 })}
                                </div>
                                <h5 className="text-xl font-black text-[#101010] mb-2 group-hover:text-gold transition-colors">{m.name}</h5>
                                <p className="text-[#101010]/55 text-sm leading-relaxed mb-6">{m.description}</p>

                                <div className="mt-auto flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-gold/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 size={12} className="text-gold" />
                                    <span>Termasuk Dalam Pakej Percuma</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-[3rem] gold-gradient bg-opacity-10 flex flex-col md:flex-row items-center justify-between border border-gold/20">
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-black font-black text-2xl mb-2">Sedia gunakan modul ini?</h4>
                        <p className="text-black/60 font-bold">Pendaftaran mengambil masa kurang daripada 2 minit. Tiada kad kredit diperlukan.</p>
                    </div>
                    <button
                        onClick={() => window.open('https://hrms.pinangemas.com.my', '_blank')}
                        className="px-12 py-5 bg-white text-[#101010] border border-[#AA771C]/30 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl"
                    >
                        Mula Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HRMSModules;
