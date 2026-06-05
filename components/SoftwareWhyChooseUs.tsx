
import React from 'react';
import { Target, Cpu, Users, Award, CheckCircle2 } from 'lucide-react';

const SoftwareWhyChooseUs: React.FC = () => {
    const points = [
        {
            title: '14+ Tahun Kepakaran',
            description: 'Kami bukan pendatang baharu. Kami mengikuti evolusi web lebih sedekad, daripada laman statik hingga enjin AI berskala besar.',
            icon: <Award className="w-8 h-8" />
        },
        {
            title: 'Kepakaran Full-Stack',
            description: 'Kami menguasai keseluruhan stack. Daripada frontend React/Vue hingga backend Node/Python dan DevOps cloud-native, projek anda dikendalikan oleh pasukan berpengalaman.',
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: 'Seni Bina Tersuai',
            description: 'Kami tidak bergantung pada templat. Setiap baris kod ditulis untuk menyelesaikan cabaran teknikal dan objektif perniagaan anda.',
            icon: <Target className="w-8 h-8" />
        },
        {
            title: 'Rakan Strategik, Bukan Sekadar Pembekal',
            description: 'Kami bertindak sebagai lanjutan kepada pasukan teknikal anda, menyediakan nasihat strategik bersama pelaksanaan teknikal.',
            icon: <Users className="w-8 h-8" />
        }
    ];

    return (
        <div className="py-24 border-t border-[#AA771C]/10 bg-[#FFFDF8]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Kelebihan Daya Saing</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-[#101010] mb-8">Mengapa Inovator <br /><span className="text-gold italic">Memilih Kami.</span></h2>
                        <p className="text-[#101010]/70 text-lg leading-relaxed mb-10">
                            Apabila perisian biasa tidak mencukupi, syarikat memilih Pinang Emas untuk kejuruteraan yang benar-benar menyokong operasi mereka.
                        </p>
                        <div className="space-y-4">
                            {['Pemilikan Kod Dijamin', 'Tiada Yuran Lesen Tersembunyi', 'Pemantauan Keselamatan 24/7'].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 text-[#101010]/80 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        {points.map((point, idx) => (
                            <div key={idx} className="card-glass p-10 rounded-[2.5rem] border-[#AA771C]/10 hover:border-gold/20 transition-all duration-500 group">
                                <div className="w-16 h-16 rounded-2xl bg-[#F8F2DF] flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500 border border-[#AA771C]/20 group-hover:border-gold/40">
                                    {point.icon}
                                </div>
                                <h5 className="text-2xl font-black text-[#101010] mb-4 group-hover:text-gold transition-colors">{point.title}</h5>
                                <p className="text-[#101010]/70 leading-relaxed text-base">
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
