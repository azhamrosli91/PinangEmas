import React from 'react';
import {
  Code2,
  BrainCircuit,
  Workflow,
  Users,
  Globe,
  Layers,
  Home
} from 'lucide-react';
import { Service, Testimonial } from './types';

export const LOGO_URL = '/assets/PinangEmasLogo_1.png';

export const SERVICES: Service[] = [
  {
    id: 'customize-software',
    title: 'Perisian Tersuai',
    description: 'Reka bentuk web, pembangunan aplikasi dan kejuruteraan perisian berskala besar berasaskan lebih 14 tahun pengalaman.',
    longDescription: 'Dengan pengalaman khusus lebih 14 tahun dalam pembangunan digital, Pinang Emas menyediakan kejuruteraan digital menyeluruh. Daripada reka bentuk web yang kemas, pembangunan web yang kukuh, aplikasi mudah alih asli hingga aliran automasi kompleks, kami membina perisian yang boleh berkembang untuk perniagaan kecil dan syarikat besar.',
    features: [
      { title: 'Reka Bentuk Web', description: 'Membina identiti visual dan antara muka pengguna yang profesional, premium dan mudah digunakan.' },
      { title: 'Pembangunan Web', description: 'Membangunkan aplikasi web responsif berprestasi tinggi menggunakan rangka kerja moden seperti React dan Next.js.' },
      { title: 'Aplikasi Mudah Alih', description: 'Solusi mudah alih asli dan rentas platform untuk iOS dan Android dengan pengalaman pengguna yang lancar.' },
      { title: 'Reka Bentuk Pangkalan Data', description: 'Mereka struktur data yang kukuh, selamat dan mudah dikembangkan untuk logik perniagaan serta set data berskala besar.' },
      { title: 'Aliran Kerja Automasi', description: 'Membangunkan skrip dan alat dalaman tersuai untuk menghapuskan kerja berulang serta mengoptimumkan operasi.' },
      { title: 'Pembangunan Aplikasi Windows', description: 'Membina aplikasi desktop Windows asli yang pantas, stabil dan sesuai untuk kegunaan perusahaan.' }
    ],
    benefits: ['14+ Tahun Kepakaran Teknikal', 'Reka Bentuk UI/UX Tersuai', 'Seni Bina Boleh Skala', 'Pengurusan Projek Khusus'],
    icon: <Code2 className="w-8 h-8" />
  },
  {
    id: 'ai-solutions',
    title: 'Solusi AI',
    description: 'Menggunakan kecerdasan buatan generasi baharu untuk mengautomasikan tugasan kompleks dan membantu keputusan lebih bijak.',
    longDescription: 'Bawa kuasa Large Language Models dan Machine Learning ke dalam perniagaan anda. Kami mengintegrasikan AI lanjutan untuk mengubah cara anda berinteraksi dengan pelanggan dan menganalisis data dalaman.',
    features: [
      { title: 'Latihan Imej & Computer Vision', description: 'Pembangunan model visual tersuai untuk pengesanan objek, klasifikasi dan pemeriksaan visual industri.' },
      { title: 'Sains Data Ramalan', description: 'Pemodelan statistik lanjutan untuk mengenal pasti corak tersembunyi dan meramal hasil perniagaan dengan lebih tepat.' },
      { title: 'Pembersihan Data Automatik', description: 'Transformasi sistematik data mentah dan tidak tersusun menjadi set latihan berkualiti tinggi untuk inferens AI yang boleh dipercayai.' },
      { title: 'Latihan LLM Tersuai', description: 'Model AI yang ditala khusus untuk memahami istilah industri dan pengetahuan organisasi anda.' }
    ],
    benefits: ['Automasi Pintar 24/7', 'Keputusan Berasaskan Data', 'Kurangkan Kesilapan Manusia'],
    icon: <BrainCircuit className="w-8 h-8" />
  },
  {
    id: 'n8n-workflow',
    title: 'Aliran Kerja n8n',
    description: 'Automasi low-code lanjutan yang menghubungkan semua alat digital anda dalam satu ekosistem.',
    longDescription: 'Hentikan pembaziran masa pada tugasan berulang. Kami menggunakan n8n untuk membina aliran kerja automasi yang berkuasa dan boleh dihos sendiri, menghubungkan CRM, pemasaran dan alat operasi anda.',
    features: [
      { title: 'Penyegerakan Pelbagai Aplikasi', description: 'Segerakkan data merentasi ratusan aplikasi secara masa nyata.' },
      { title: 'Hosting Terurus Selamat 24/7', description: 'Kami hos dan urus semuanya untuk anda di atas infrastruktur selamat berprestasi tinggi dengan pemantauan uptime 24/7.' }
    ],
    benefits: ['Tiada Kemasukan Data Manual', 'Respons Lead Lebih Pantas', 'Penjimatan Masa Ketara'],
    pricing: [
      {
        name: 'Single Spark',
        price: 'RM19',
        description: '1 aliran kerja ringkas dengan pencetus manual atau jadual untuk peringatan atau rutin harian.',
        features: ['1 Aliran Kerja', 'Pencetus Manual/Jadual', 'Tetapan Rutin Harian', 'Hosting cloud kongsi 24/7'],
        period: 'bulan'
      },
      {
        name: 'Triple Flow',
        price: 'RM49',
        description: '2 aliran kerja ringkas seperti pakej Single Spark + 1 tetapan rutin harian lanjutan.',
        isPopular: true,
        features: ['3 Aliran Kerja', 'Semua ciri Single Spark', 'Logik bersepadu', 'Hosting cloud kongsi 24/7'],
        period: 'bulan'
      },
      {
        name: 'Agent Basic',
        price: 'RM79',
        description: '1 agen chatbot untuk Telegram, Teams, WhatsApp, Gmail atau Outlook. Tidak termasuk kos AI; memerlukan ChatGPT API / DeepSeek API / Gemini API.',
        features: [
          '1 Agen Chatbot',
          'Pilihan Pelbagai Platform',
          'Notifikasi Automatik',
          'Memerlukan ChatGPT API / DeepSeek API / Gemini API',
          'Hosting cloud kongsi 24/7'
        ],
        period: 'bulan'
      },
      {
        name: 'Agent Pro',
        price: 'RM149',
        description: '2 agen chatbot seperti Agent Basic untuk keperluan volum lebih tinggi. Tidak termasuk kos AI; memerlukan ChatGPT API / DeepSeek API / Gemini API.',
        features: [
          '2 Agen Chatbot',
          'Routing Lanjutan',
          'Logik Inbox Bersepadu',
          'Memerlukan ChatGPT API / DeepSeek API / Gemini API',
          'Hosting cloud kongsi 24/7'
        ],
        period: 'bulan'
      },
      {
        name: 'Agent Enterprise',
        price: 'RM349',
        description: 'Pelbagai agen dengan penjadualan dan routing lanjutan untuk automasi tahap perusahaan. Tidak termasuk kos AI; memerlukan ChatGPT API / DeepSeek API / Gemini API.',
        features: [
          'Pelbagai Agen',
          'Pelbagai Pencetus Jadual',
          'Tetapan Rutin Harian',
          'Routing Lanjutan',
          'Memerlukan ChatGPT API / DeepSeek API / Gemini API',
          'Hosting cloud kongsi 24/7'
        ],
        period: 'bulan'
      }
    ],
    icon: <Workflow className="w-8 h-8" />
  },
  {
    id: 'hrms-system',
    title: 'Sistem HRMS',
    description: 'Solusi HR lengkap untuk syarikat Malaysia. Percuma sepenuhnya untuk jumlah pekerja tanpa had.',
    longDescription: 'Direka khusus untuk ekosistem perniagaan Malaysia, HRMS kami menyediakan set alat lengkap untuk mengurus tenaga kerja anda. Daripada pematuhan gaji hingga perancangan projek, kami menawarkan modul tahap perusahaan termasuk Pengurusan Pekerja, Cuti & Kehadiran, Pengambilan, Latihan, Penilaian Prestasi, Gaji dan alat Pengurusan Projek bersepadu, semuanya tanpa kos untuk jumlah pekerja tanpa had.',
    features: [
      { title: 'Pengurusan Pekerja', description: 'Profil digital berpusat dengan simpanan dokumen, maklumat keluarga dan sejarah pekerjaan.' },
      { title: 'Cuti & Kehadiran', description: 'Aliran permohonan cuti yang tersusun dengan rekod kehadiran geo-fenced dan pengurusan syif.' },
      { title: 'Gaji & Berkanun', description: 'Pengiraan automatik dengan pematuhan LHDN, KWSP, PERKESO dan EIS untuk syarikat Malaysia.' },
      { title: 'Pengambilan & Latihan', description: 'Saluran pengambilan bakat hujung ke hujung dan penjejakan pembangunan kemahiran pekerja.' },
      { title: 'Penilaian & Prestasi', description: 'Semakan prestasi berstruktur, penjejakan KPI dan sistem maklum balas 360 darjah.' },
      { title: 'Pengurusan Projek & Planner', description: 'Papan Kanban bersepadu dan penjejakan projek untuk menyelaraskan HR dengan operasi.' }
    ],
    benefits: ['100% Percuma Selamanya', 'Sokongan Pekerja Tanpa Had', 'Pematuhan Berkanun Malaysia', 'Modul Bersepadu Semua-dalam-Satu'],
    pricing: [
      {
        name: 'Percuma Selamanya',
        price: 'RM0',
        description: 'Tiada caj tersembunyi. Tiada kad kredit diperlukan. Daftar dan mula urus pasukan anda hari ini.',
        isPopular: true,
        features: [
          'Pekerja Tanpa Had',
          'Pengurusan Cuti & Tuntutan',
          'Pengambilan & Gaji',
          'Planner (Kanban)',
          'Penilaian & Latihan'
        ],
        period: 'bulan'
      }
    ],
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 'hosting-website',
    title: 'Hosting Mampu Milik',
    description: 'Solusi hosting berprestasi tinggi dan mesra bajet, dioptimumkan khusus untuk perniagaan SME kecil.',
    longDescription: 'Kami faham SME memerlukan rumah digital yang boleh dipercayai tanpa kos melampau. Solusi hosting mampu milik kami menyediakan kelajuan tempatan, keselamatan kukuh dan kestabilan yang diperlukan perniagaan anda.',
    features: [
      { title: 'Storan NVMe SSD', description: 'Nikmati akses data sehingga 10x lebih pantas berbanding SSD tradisional untuk muatan halaman yang sangat laju.' },
      { title: 'Peering Tempatan MY', description: 'Pelayan kami dihubungkan secara tempatan di Malaysia untuk latensi serendah mungkin kepada pelanggan domestik anda.' },
      { title: 'SLA Uptime 99.9%', description: 'Kestabilan tahap perusahaan dengan sistem kuasa dan penyejukan redundan supaya perniagaan anda kekal online 24/7.' },
      { title: 'Backup Automatik', description: 'Backup harian di luar tapak memastikan data laman web anda sentiasa selamat dan boleh dipulihkan dengan mudah.' },
      { title: 'SSL Percuma (Let\'s Encrypt)', description: 'Enkripsi standard industri disediakan secara automatik untuk setiap domain bagi melindungi data pengguna dan meningkatkan SEO.' },
      { title: 'Deploy Satu Klik', description: 'Pasang WordPress, Joomla atau aplikasi Node.js tersuai dengan segera melalui panel kawalan yang mudah digunakan.' }
    ],
    benefits: ['Harga Mampu Milik', 'Uptime 99.9%', 'Backup Harian', 'Pemasangan WP Satu Klik'],
    pricing: [
      {
        name: 'SME Starter',
        price: 'RM19',
        description: 'Dihos secara tempatan di Malaysia untuk kelajuan tinggi. Solusi paling kos efektif untuk perniagaan kecil yang mahukan prestasi stabil.',
        isPopular: true,
        features: [
          '4GB RAM',
          '2 CPU Cores',
          '10GB Memori Khusus',
          '1TB Pemindahan Rangkaian',
          'Bandwidth Kongsi'
        ],
        period: 'bulan'
      }
    ],
    icon: <Globe className="w-8 h-8" />
  },
  {
    id: 'smart-home-office',
    title: 'Rumah/Pejabat Pintar',
    description: 'Integrasi IoT tahap seterusnya untuk mengautomasikan ruang kediaman dan tempat kerja anda.',
    longDescription: 'Masuk ke masa hadapan dengan kawalan persekitaran pintar. Kami mengautomasikan lampu, keselamatan dan suhu untuk mencipta ruang yang bertindak balas terhadap kehadiran anda.',
    features: [
      { title: 'Ekosistem Tuya', description: 'Integrasi lengkap dengan peranti berasaskan Tuya untuk rangkaian perkakasan pintar yang luas dan serasi.' },
      { title: 'Kawalan Pembantu Suara', description: 'Operasi tanpa tangan melalui arahan suara Google Assistant dan Amazon Alexa yang lancar.' },
      { title: 'Integrasi Aqara & Xiaomi', description: 'Sensor dan hub Zigbee daripada Aqara/Xiaomi yang sangat stabil dan boleh dipercayai.' },
      { title: 'Dashboard Pintar Bersepadu', description: 'Kawal lampu, suhu dan keselamatan daripada satu antara muka intuitif yang disegerakkan merentas semua peranti.' },
      { title: 'Automasi Senario', description: 'Rutin pintar yang bertindak balas secara automatik kepada kehadiran, masa atau perubahan persekitaran.' }
    ],
    benefits: ['Keselamatan Dipertingkat', 'Penjimatan Kos Tenaga', 'Kemudahan Maksimum'],
    icon: <Home className="w-8 h-8" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aina Sofiah',
    role: 'Pengurus HR',
    company: 'Nexus Tech',
    content: 'Pinang Emas membangunkan HRMS tersuai yang mengubah cara kami mengurus lebih 100 pekerja. Ketelitian mereka benar-benar bertaraf emas.',
    avatar: '/assets/ainsofiah.png'
  },
  {
    id: '2',
    name: 'Sharon Yeap',
    role: 'Ketua Pegawai Eksekutif',
    company: 'Skyline Logistics',
    content: 'Aliran automasi n8n yang mereka laksanakan menjimatkan lebih 20 jam kerja manual kami setiap minggu. Kecekapannya sangat ketara.',
    avatar: '/assets/sharonyeap.webp'
  },
  {
    id: '3',
    name: 'Siti Maryam',
    role: 'Pengasas',
    company: 'Bloom Retail',
    content: 'Bot khidmat pelanggan berkuasa AI daripada Pinang Emas mengendalikan 80% pertanyaan dengan segera. Ia benar-benar mengubah operasi jenama kami.',
    avatar: '/assets/sitimaryam.png'
  }
];
