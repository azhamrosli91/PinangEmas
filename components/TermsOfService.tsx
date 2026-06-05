import React from 'react';
import { ArrowLeft, Scale, Shield, FileText } from 'lucide-react';

interface TermsOfServiceProps {
    onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen py-24 bg-dark-surface">
            <div className="container mx-auto px-6 max-w-5xl">
                <button
                    onClick={onBack}
                    className="flex items-center text-[#AA771C] hover:text-[#101010] transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Kembali ke Laman Utama
                </button>

                <div className="mb-16">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="p-4 rounded-2xl bg-[#AA771C]/10">
                            <Scale className="w-8 h-8 text-[#AA771C]" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-black text-[#101010]">Terma Perkhidmatan</h1>
                            <p className="text-[#101010]/65 mt-2">Kemas Kini Terakhir: 3 Februari 2026</p>
                        </div>
                    </div>
                </div>

                <div className="prose max-w-none">
                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <FileText className="w-6 h-6 mr-3 text-[#AA771C]" />
                            1. Persetujuan Terhadap Terma
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Dengan mengakses dan menggunakan perkhidmatan Pinang Emas IT Solutions, anda bersetuju untuk terikat dengan Terma Perkhidmatan ini serta undang-undang dan peraturan Malaysia yang berkaitan.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            Terma ini tertakluk kepada undang-undang Malaysia, termasuk Akta Komunikasi dan Multimedia 1998, Akta Perlindungan Data Peribadi 2010 (PDPA) dan Akta Jenayah Komputer 1997.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">2. Perkhidmatan Disediakan</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Pinang Emas menyediakan perkhidmatan IT untuk pelanggan di Malaysia, termasuk:
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>Pembangunan perisian tersuai, reka bentuk web, pembangunan web dan aplikasi mudah alih</li>
                            <li>Solusi kecerdasan buatan (AI)</li>
                            <li>Automasi aliran kerja n8n</li>
                            <li>Sistem Pengurusan Sumber Manusia (HRMS)</li>
                            <li>Perkhidmatan hosting web</li>
                            <li>Automasi rumah dan pejabat pintar</li>
                        </ul>
                        <p className="text-[#101010]/75 leading-relaxed mt-4">
                            Semua perkhidmatan disediakan secara dalam talian. Kami tidak menyediakan pejabat fizikal untuk lawatan pelanggan.
                        </p>
                    </div>

                    {[
                        {
                            title: '3. Perjanjian Perkhidmatan dan Sebut Harga',
                            body: 'Sebut harga projek sah selama 30 hari dari tarikh dikeluarkan kecuali dinyatakan sebaliknya. Skop kerja, jadual bayaran, deposit, milestone dan caj tambahan akan dinyatakan dalam perjanjian perkhidmatan atau dokumen kerja yang berkaitan.'
                        },
                        {
                            title: '4. Hak Harta Intelek',
                            body: 'Selepas bayaran penuh diterima, pelanggan memiliki hasil akhir seperti yang dinyatakan dalam perjanjian. Pinang Emas mengekalkan hak terhadap rangka kerja, alat, metodologi dan harta intelek sedia ada yang digunakan dalam penyampaian perkhidmatan.'
                        },
                        {
                            title: '5. Kerahsiaan dan Perlindungan Data',
                            body: 'Kami komited melindungi maklumat sulit pelanggan mengikut PDPA dan undang-undang Malaysia yang berkaitan. Maklumat sulit tidak akan didedahkan kepada pihak ketiga tanpa persetujuan jelas kecuali jika diperlukan oleh undang-undang.'
                        },
                        {
                            title: '6. Waranti dan Penafian',
                            body: 'Kami akan melaksanakan perkhidmatan dengan kemahiran dan penjagaan munasabah mengikut standard industri. Namun, kami tidak menjamin hasil perniagaan tertentu dan tidak bertanggungjawab terhadap gangguan pihak ketiga di luar kawalan kami.'
                        },
                        {
                            title: '7. Had Liabiliti',
                            body: 'Setakat yang dibenarkan undang-undang Malaysia, jumlah liabiliti kami untuk sebarang tuntutan berkaitan perkhidmatan tidak akan melebihi jumlah bayaran yang telah dibayar untuk perkhidmatan khusus tersebut.'
                        },
                        {
                            title: '8. Tahap Perkhidmatan',
                            body: 'Untuk hosting, kami mensasarkan uptime 99.9%. Penyelenggaraan berjadual akan dimaklumkan lebih awal. Waktu sokongan standard ialah Isnin hingga Jumaat, 9:00 pagi hingga 6:00 petang waktu Malaysia, tidak termasuk cuti umum Malaysia.'
                        },
                        {
                            title: '9. Penamatan',
                            body: 'Pelanggan boleh menamatkan perkhidmatan dengan notis bertulis 30 hari. Bayaran untuk kerja yang telah disiapkan sehingga tarikh penamatan masih perlu dijelaskan. Kami boleh menamatkan perkhidmatan jika berlaku pelanggaran terma, kegagalan bayaran atau aktiviti yang menyalahi undang-undang.'
                        },
                        {
                            title: '10. Pematuhan Undang-undang Malaysia',
                            body: 'Pelanggan bersetuju menggunakan perkhidmatan kami mengikut semua undang-undang Malaysia yang berkaitan dan tidak menggunakan perkhidmatan untuk penipuan, fitnah, kandungan terlarang atau tujuan menyalahi undang-undang.'
                        },
                        {
                            title: '11. Penyelesaian Pertikaian',
                            body: 'Jika berlaku pertikaian, kedua-dua pihak bersetuju cuba menyelesaikan perkara tersebut melalui rundingan secara baik. Jika gagal, pihak-pihak boleh mempertimbangkan mediasi sebelum tindakan undang-undang.'
                        },
                        {
                            title: '12. Perubahan Terma',
                            body: 'Kami berhak mengubah Terma Perkhidmatan ini dari semasa ke semasa. Perubahan akan berkuat kuasa selepas diterbitkan di laman web. Penggunaan berterusan selepas perubahan dianggap sebagai penerimaan terhadap terma baharu.'
                        }
                    ].map((section) => (
                        <div key={section.title} className="card-glass p-8 rounded-3xl mb-8">
                            <h2 className="text-2xl font-bold text-[#101010] mb-4">{section.title}</h2>
                            <p className="text-[#101010]/75 leading-relaxed">{section.body}</p>
                        </div>
                    ))}

                    <div className="card-glass p-8 rounded-3xl mb-8 bg-[#AA771C]/10 border-2 border-[#AA771C]/30">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Shield className="w-6 h-6 mr-3 text-[#AA771C]" />
                            Maklumat Hubungan
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Untuk soalan berkaitan Terma Perkhidmatan ini, hubungi kami:
                        </p>
                        <div className="space-y-2 text-[#101010]/75">
                            <p><strong className="text-[#101010]">Emel:</strong> sales.pinangemas@gmail.com</p>
                            <p><strong className="text-[#101010]">WhatsApp:</strong> +6014-6595979</p>
                            <p><strong className="text-[#101010]">Kawasan Perkhidmatan:</strong> Malaysia sahaja</p>
                        </div>
                    </div>

                    <div className="text-center text-[#101010]/50 text-sm italic mt-12">
                        <p>Dengan menggunakan perkhidmatan Pinang Emas IT Solutions, anda mengakui bahawa anda telah membaca, memahami dan bersetuju dengan Terma Perkhidmatan ini.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
