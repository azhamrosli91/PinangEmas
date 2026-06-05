import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
                            <Shield className="w-8 h-8 text-[#AA771C]" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-black text-[#101010]">Dasar Privasi</h1>
                            <p className="text-[#101010]/65 mt-2">Kemas Kini Terakhir: 3 Februari 2026</p>
                        </div>
                    </div>
                    <p className="text-[#101010]/75 text-lg leading-relaxed">
                        Dasar Privasi ini menerangkan cara Pinang Emas IT Solutions mengumpul, menggunakan, mendedahkan dan melindungi data peribadi anda selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.
                    </p>
                </div>

                <div className="prose max-w-none">
                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <FileText className="w-6 h-6 mr-3 text-[#AA771C]" />
                            1. Pengenalan dan Komitmen
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Pinang Emas IT Solutions komited melindungi privasi dan keselamatan data peribadi anda mengikut PDPA dan undang-undang Malaysia yang berkaitan.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            Dasar ini terpakai kepada data peribadi yang dikumpul melalui laman web, perkhidmatan dan komunikasi kami. Dengan menggunakan perkhidmatan kami, anda bersetuju terhadap pengumpulan dan penggunaan data seperti diterangkan dalam dasar ini.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Database className="w-6 h-6 mr-3 text-[#AA771C]" />
                            2. Data Peribadi yang Kami Kumpul
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Kami mungkin mengumpul data yang anda berikan secara langsung dan data teknikal yang dikumpul secara automatik apabila anda menggunakan laman web atau perkhidmatan kami.
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li><strong className="text-[#101010]">Maklumat hubungan:</strong> nama, emel, nombor telefon dan nama syarikat</li>
                            <li><strong className="text-[#101010]">Maklumat perniagaan:</strong> keperluan projek, spesifikasi kerja dan maklumat syarikat</li>
                            <li><strong className="text-[#101010]">Maklumat kewangan:</strong> alamat bil dan maklumat pembayaran yang diproses melalui penyedia pembayaran selamat</li>
                            <li><strong className="text-[#101010]">Rekod komunikasi:</strong> emel, mesej, tiket sokongan dan perbualan berkaitan projek</li>
                            <li><strong className="text-[#101010]">Data teknikal:</strong> alamat IP, jenis pelayar, maklumat peranti, halaman dilawati dan corak penggunaan</li>
                        </ul>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Eye className="w-6 h-6 mr-3 text-[#AA771C]" />
                            3. Cara Kami Menggunakan Data Anda
                        </h2>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>Menyediakan, mengekalkan dan menambah baik perkhidmatan IT kami</li>
                            <li>Berkomunikasi dengan anda tentang projek, sokongan dan kemas kini perkhidmatan</li>
                            <li>Memproses bayaran, invois dan urusan bil</li>
                            <li>Menganalisis prestasi laman web dan menambah baik pengalaman pengguna</li>
                            <li>Mematuhi kewajipan undang-undang dan melindungi keselamatan sistem</li>
                            <li>Menghantar bahan pemasaran hanya apabila anda memberikan persetujuan</li>
                        </ul>
                    </div>

                    {[
                        {
                            icon: <Lock className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '4. Asas Pemprosesan di Bawah PDPA',
                            body: 'Kami memproses data peribadi berdasarkan persetujuan anda, keperluan melaksanakan kontrak, pematuhan undang-undang dan kepentingan perniagaan sah yang tidak mengatasi hak anda.'
                        },
                        {
                            icon: <UserCheck className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '5. Perkongsian dan Pendedahan Data',
                            body: 'Kami tidak menjual data peribadi anda. Data mungkin dikongsi dengan penyedia perkhidmatan dipercayai seperti hosting cloud, pemproses bayaran, penyedia emel dan analitik, atau apabila diperlukan oleh undang-undang Malaysia.'
                        },
                        {
                            icon: <Lock className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '6. Langkah Keselamatan Data',
                            body: 'Kami menggunakan enkripsi SSL/TLS, kawalan akses, storan selamat, backup berkala, semakan keselamatan dan prosedur respons insiden untuk melindungi data anda. Tiada sistem yang benar-benar bebas risiko, tetapi kami akan mengambil langkah munasabah untuk melindungi data anda.'
                        },
                        {
                            icon: <UserCheck className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '7. Hak Anda di Bawah PDPA',
                            body: 'Anda boleh meminta akses kepada data peribadi, pembetulan data tidak tepat, penarikan persetujuan, had pemprosesan atau salinan data dalam format yang sesuai. Untuk membuat permintaan, hubungi kami di sales.pinangemas@gmail.com.'
                        },
                        {
                            icon: <Database className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '8. Cookies dan Teknologi Penjejakan',
                            body: 'Kami mungkin menggunakan cookies penting, cookies analitik dan cookies keutamaan untuk fungsi laman web, keselamatan dan penambahbaikan pengalaman pengguna. Anda boleh mengawal cookies melalui tetapan pelayar.'
                        },
                        {
                            icon: <FileText className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '9. Penyimpanan Data',
                            body: 'Data disimpan hanya selama yang diperlukan untuk tujuan yang dinyatakan, hubungan perkhidmatan, pematuhan cukai dan undang-undang, atau sehingga anda menarik balik persetujuan untuk data pemasaran.'
                        },
                        {
                            icon: <Shield className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '10. Pemindahan Data Antarabangsa',
                            body: 'Kami beroperasi terutamanya di Malaysia, namun sesetengah penyedia cloud mungkin menyimpan data di luar Malaysia. Jika pemindahan berlaku, kami memastikan perlindungan kontrak dan keselamatan yang bersesuaian.'
                        },
                        {
                            icon: <FileText className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '11. Privasi Kanak-kanak',
                            body: 'Perkhidmatan kami tidak ditujukan kepada individu bawah 18 tahun. Kami tidak sengaja mengumpul data peribadi kanak-kanak tanpa persetujuan penjaga.'
                        },
                        {
                            icon: <FileText className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '12. Perubahan Dasar Privasi',
                            body: 'Kami boleh mengemas kini Dasar Privasi ini dari semasa ke semasa. Perubahan penting akan dimaklumkan melalui laman web atau emel jika sesuai. Penggunaan berterusan dianggap sebagai penerimaan terhadap dasar terkini.'
                        },
                        {
                            icon: <Shield className="w-6 h-6 mr-3 text-[#AA771C]" />,
                            title: '13. Aduan dan Penguatkuasaan',
                            body: 'Jika anda mempunyai kebimbangan tentang pengendalian data peribadi, sila hubungi kami terlebih dahulu. Jika tidak berpuas hati, anda boleh menghubungi Jabatan Perlindungan Data Peribadi Malaysia di www.pdp.gov.my.'
                        }
                    ].map((section) => (
                        <div key={section.title} className="card-glass p-8 rounded-3xl mb-8">
                            <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                                {section.icon}
                                {section.title}
                            </h2>
                            <p className="text-[#101010]/75 leading-relaxed">{section.body}</p>
                        </div>
                    ))}

                    <div className="card-glass p-8 rounded-3xl mb-8 bg-[#AA771C]/10 border-2 border-[#AA771C]/30">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Shield className="w-6 h-6 mr-3 text-[#AA771C]" />
                            Hubungi Kami Tentang Privasi
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Jika anda mempunyai soalan tentang Dasar Privasi ini atau ingin melaksanakan hak anda di bawah PDPA, sila hubungi kami:
                        </p>
                        <div className="space-y-2 text-[#101010]/75">
                            <p><strong className="text-[#101010]">Pegawai Perlindungan Data</strong></p>
                            <p><strong className="text-[#101010]">Emel:</strong> sales.pinangemas@gmail.com</p>
                            <p><strong className="text-[#101010]">WhatsApp:</strong> +6014-6595979</p>
                            <p><strong className="text-[#101010]">Masa Respons:</strong> Dalam 21 hari mengikut keperluan PDPA</p>
                        </div>
                    </div>

                    <div className="text-center text-[#101010]/50 text-sm italic mt-12">
                        <p>Dasar Privasi ini disediakan selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.</p>
                        <p className="mt-2">Dengan menggunakan perkhidmatan kami, anda mengakui bahawa anda telah membaca dan memahami Dasar Privasi ini.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
