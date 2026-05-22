
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetailPage from './components/ServiceDetailPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import { SERVICES } from './constants';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Bot,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Database,
  ExternalLink,
  MailCheck,
  Megaphone,
  ReceiptText,
  WalletCards
} from 'lucide-react';

interface AutomationShowcaseItem {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  visual: 'manual' | 'workflow' | 'analytics' | 'team';
}

const automationShowcaseItems: AutomationShowcaseItem[] = [
  // Replace these labels, text, and mockup content when final product visuals are ready.
  {
    label: 'Operasi Manual',
    eyebrow: 'Operasi Manual',
    title: 'Proses Manual, Tidak Tersusun',
    description: 'Masih menggunakan kertas, WhatsApp dan Excel. Data berselerak, mudah terlepas pandang dan menyebabkan kelewatan.',
    visual: 'manual'
  },
  {
    label: 'Sistem Automasi Pintar',
    eyebrow: 'Sistem Automasi Pintar',
    title: 'Automasi Pintar, Semua Terkawal',
    description: 'Semua aliran kerja diurus secara automatik melalui satu platform digital moden.',
    visual: 'workflow'
  },
  {
    label: 'Pemantauan Masa Nyata',
    eyebrow: 'Pemantauan Masa Nyata',
    title: 'Pantau Semua Dalam Masa Nyata',
    description: 'Dapatkan data, laporan dan analitik secara real-time untuk buat keputusan lebih pantas dan tepat.',
    visual: 'analytics'
  },
  {
    label: 'Operasi Lebih Efisien',
    eyebrow: 'Operasi Lebih Efisien',
    title: 'Operasi Lebih Efisien, Bisnes Lebih Maju',
    description: 'Kurangkan kerja manual, tingkatkan produktiviti pasukan dan capai lebih banyak dengan sistem yang tersusun.',
    visual: 'team'
  }
];

const MiniMetric: React.FC<{ label: string; value: string; tone?: string }> = ({ label, value, tone = 'text-blue-500' }) => (
  <div className="rounded-md bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
    <p className="mb-1 text-[10px] font-semibold text-slate-400">{label}</p>
    <p className={`text-xl font-extrabold ${tone}`}>{value}</p>
  </div>
);

const AutomationMockup: React.FC<{ type: AutomationShowcaseItem['visual'] }> = ({ type }) => {
  if (type === 'manual') {
    return (
      <div className="relative h-full min-h-[220px] overflow-hidden rounded-[18px] bg-[#0B1220]">
        <img
          src="/assets/hero-sme-paperwork.png"
          alt="Dokumen operasi manual bersama WhatsApp dan Excel"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/35 to-transparent" />
        <div className="absolute right-8 top-7 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-500 text-3xl font-black text-white shadow-[0_18px_45px_rgba(16,185,129,0.45)]">
          X
        </div>
        <div className="absolute bottom-8 right-10 w-28 rounded-[18px] border border-white/20 bg-[#020617]/85 p-3 shadow-2xl">
          <div className="mb-3 h-3 w-16 rounded-full bg-emerald-400" />
          <div className="space-y-2">
            <div className="h-2 rounded-full bg-white/65" />
            <div className="h-2 w-4/5 rounded-full bg-white/40" />
            <div className="h-2 w-3/5 rounded-full bg-emerald-300/80" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'workflow') {
    return (
      <div className="h-full min-h-[240px] rounded-[18px] bg-slate-50 p-5 text-[#0F172A]">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-lg font-extrabold">Dashboard</p>
          <div className="h-2 w-36 rounded-full bg-slate-200" />
        </div>
        <div className="mb-6 grid grid-cols-4 gap-3">
          <MiniMetric label="Tugasan" value="128" />
          <MiniMetric label="Dalam Proses" value="76" tone="text-cyan-500" />
          <MiniMetric label="Selesai" value="52" tone="text-emerald-500" />
          <MiniMetric label="Tertangguh" value="12" tone="text-rose-500" />
        </div>
        <div className="grid grid-cols-[1fr_0.55fr] gap-4">
          <div className="rounded-lg bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
            <p className="mb-5 text-sm font-bold">Aliran Kerja Automasi</p>
            <div className="flex items-center justify-between">
              {['Lead', 'CRM', 'Team', 'Invoice', 'Report'].map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-xs font-bold text-emerald-600">{step}</div>
                  {index < 4 && <div className="h-px flex-1 bg-cyan-300" />}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
            <p className="mb-4 text-sm font-bold">Aktiviti Terkini</p>
            {['Pesanan Baru Diterima', 'Semakan Dokumen', 'Kelulusan Diterima'].map((activity) => (
              <div key={activity} className="mb-3 flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                {activity}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'analytics') {
    return (
      <div className="h-full min-h-[240px] rounded-[18px] bg-slate-50 p-5 text-[#0F172A]">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-lg font-extrabold">Analitik Prestasi</p>
          <span className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-500">7 Hari Terakhir</span>
        </div>
        <div className="mb-5 grid grid-cols-4 gap-3">
          <MiniMetric label="Jumlah Jualan" value="RM245k" tone="text-slate-900" />
          <MiniMetric label="Tugasan Selesai" value="1,250" tone="text-slate-900" />
          <MiniMetric label="Kecekapan" value="92%" tone="text-slate-900" />
          <MiniMetric label="Masa Purata" value="3j 45m" tone="text-slate-900" />
        </div>
        <div className="grid grid-cols-[1fr_0.72fr] gap-4">
          <div className="rounded-lg bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
            <p className="mb-4 text-sm font-bold">Graf Jualan</p>
            <div className="flex h-28 items-end gap-2">
              {[34, 28, 54, 68, 42, 74, 52, 86, 78, 100].map((height, index) => (
                <div key={index} className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-cyan-300" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
            <p className="mb-5 text-sm font-bold">Taburan Tugasan</p>
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-[16px] border-blue-500 border-r-emerald-400 border-t-cyan-300 text-sm font-black">
              62%
            </div>
            <div className="space-y-2 text-xs text-slate-500">
              <p>Selesai 62%</p>
              <p>Dalam Proses 25%</p>
              <p>Tertangguh 13%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[240px] rounded-[18px] bg-slate-50 p-5 text-[#0F172A]">
      <p className="mb-5 text-lg font-extrabold">Pasukan</p>
      <div className="grid grid-cols-[1fr_0.48fr] gap-4">
        <div className="rounded-lg bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <div className="mb-4 grid grid-cols-[1.2fr_1fr_0.7fr_0.7fr] text-xs font-bold text-slate-400">
            <span>Ahli</span><span>Peranan</span><span>Tugasan</span><span>Status</span>
          </div>
          {[
            ['Aiman Hakim', 'Pengurus Operasi', '24'],
            ['Siti Aisyah', 'Eksekutif Projek', '18'],
            ['Izwan Zulkifli', 'Pembangun Sistem', '15'],
            ['Nurul Huda', 'Khidmat Pelanggan', '20']
          ].map((person) => (
            <div key={person[0]} className="grid grid-cols-[1.2fr_1fr_0.7fr_0.7fr] items-center border-t border-slate-100 py-3 text-xs">
              <span className="font-bold">{person[0]}</span>
              <span className="text-slate-500">{person[1]}</span>
              <span>{person[2]}</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-center font-bold text-emerald-600">Aktif</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <p className="mb-5 text-sm font-bold">Ringkasan Prestasi</p>
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-emerald-400 border-r-cyan-200 text-xl font-black">
            92%
          </div>
          <p className="text-sm font-bold text-slate-700">Kecekapan Keseluruhan</p>
          <p className="mt-1 text-xs font-bold text-emerald-500">+8.7%</p>
        </div>
      </div>
    </div>
  );
};

const AutomationTransformationSection: React.FC = () => {
  return (
    <section
      id="automation-transformation"
      className="relative overflow-hidden bg-[#020617] py-20 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,0.35),transparent_30%),radial-gradient(circle_at_18%_48%,rgba(14,165,233,0.18),transparent_34%),linear-gradient(135deg,#020617_0%,#061327_45%,#020617_100%)]" />
      <div className="absolute left-[7.7rem] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="mb-14 max-w-4xl lg:ml-[9.5rem]">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Automasi Digital
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Transformasi Operasi Dengan Automasi Digital
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-blue-400/10 via-blue-400/45 to-blue-400/10 lg:left-[6.25rem]" />

          <div className="space-y-8 md:space-y-0">
            {automationShowcaseItems.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 36, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid gap-6 border-white/10 py-8 pl-16 md:min-h-[300px] md:border-t md:py-0 lg:grid-cols-[8.5rem_0.8fr_1.25fr] lg:items-center lg:gap-10 lg:pl-0"
              >
                <div className="absolute left-0 top-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-400 bg-[#061327] text-lg font-black text-white shadow-[0_0_0_6px_rgba(37,99,235,0.22),0_0_34px_rgba(59,130,246,0.75)] lg:static lg:mx-auto lg:h-16 lg:w-16 lg:text-2xl">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="max-w-xl">
                  <p className="mb-5 inline-flex rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-cyan-200 shadow-[0_0_24px_rgba(37,99,235,0.18)]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-8 text-slate-300">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 46, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-[22px] border border-blue-400/60 bg-[#07152B] p-2 shadow-[0_0_0_1px_rgba(96,165,250,0.18),0_0_44px_rgba(37,99,235,0.45)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/12 via-transparent to-blue-500/10" />
                  <div className="relative overflow-hidden rounded-[18px]">
                    <AutomationMockup type={item.visual} />
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DemoToolsSection: React.FC = () => {
  const tools = [
    {
      title: 'Pinang Emas HRMS',
      description: 'Urus cuti, tuntutan, dan profil pekerja dalam satu platform yang mudah digunakan.',
      href: 'https://hrms.pinangemas.com.my',
      icon: <BadgeCheck className="h-6 w-6" />
    },
    {
      title: 'Xpen Expense Tracker',
      description: 'Jejaki setiap sen perbelanjaan syarikat dan automasikan invois dengan mudah.',
      href: 'https://xpen.pinangemas.com.my',
      icon: <ReceiptText className="h-6 w-6" />
    }
  ];

  return (
    <section className="bg-[#0F172A] py-20 text-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">Cuba Sekarang</h2>
          <p className="text-lg leading-8 text-slate-300">
            Alami sendiri kecanggihan alatan kami. <span className="font-bold text-[#FFE088]">Percuma untuk Perniagaan Anda</span> yang ingin bertransformasi.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <article key={tool.title} className="border border-white/10 bg-white/[0.06] p-8 transition-colors hover:bg-white/[0.10] md:p-10">
              <div className="mb-7 flex h-12 w-12 items-center justify-center bg-[#D4AF37] text-[#0F172A]">
                {tool.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">{tool.title}</h3>
              <p className="mb-8 max-w-xl leading-7 text-slate-300">{tool.description}</p>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] px-6 py-3 font-mono text-sm font-semibold uppercase text-[#0F172A] transition-transform hover:-translate-y-0.5"
              >
                Cuba Sekarang
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const MerchantImpactSection: React.FC = () => {
  return (
    <section id="impact" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <p className="mx-auto mb-12 max-w-5xl text-center text-3xl font-extrabold leading-tight text-[#0F172A] md:text-5xl md:leading-tight">
          Berjaya membantu <span className="text-[#B88712]">4,549 Peniaga Kecil</span>. Membangunkan ekosistem peniagaan pintar, dan meningkatkan hasil jualan perniaga kecil dengan automasi pintar.
        </p>
      </div>
      <img
        src="/assets/merchant-community-cafe.png"
        alt="Komuniti peniaga kecil Malaysia yang dibantu melalui automasi pintar"
        loading="lazy"
        decoding="async"
        className="h-[240px] w-full object-cover object-center sm:h-[320px] md:h-auto"
      />
    </section>
  );
};

const BusinessHelpCarouselSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const helpItems = [
    {
      title: 'Dapatkan lebih banyak bakal pelanggan melalui automasi ads.',
      description: 'Kami bantu susun aliran prospek daripada iklan ke WhatsApp, borang, CRM, atau senarai tindakan pasukan jualan.',
      icon: <Megaphone className="h-8 w-8" />,
      imageSrc: '/assets/business-help-ads-automation.png',
      imageAlt: 'Automasi ads membantu peniaga mendapat lebih ramai bakal pelanggan'
    },
    {
      title: 'Rekod semua duit masuk dan keluar dengan mudah secara percuma.',
      description: 'Pantau transaksi harian, tuntutan, dan perbelanjaan supaya pemilik perniagaan nampak aliran tunai dengan lebih jelas.',
      icon: <WalletCards className="h-8 w-8" />,
      imageSrc: '/assets/business-help-money-tracking.png',
      imageAlt: 'Peniaga kecil merekod duit masuk dan keluar menggunakan telefon'
    },
    {
      title: 'Simpan database pelanggan tanpa perlu risau kehilangan data.',
      description: 'Kumpul dan susun rekod pelanggan secara lebih selamat supaya maklumat penting tidak hilang dalam mesej atau buku nota.',
      icon: <Database className="h-8 w-8" />,
      imageSrc: '/assets/business-help-customer-database.png',
      imageAlt: 'Sistem database pelanggan yang selamat dan mempunyai backup automatik'
    },
    {
      title: 'Automasi email ke pelanggan tentang produk anda.',
      description: 'Hantar follow-up, promosi, resit, pengumuman produk, atau peringatan secara konsisten tanpa kerja manual berulang.',
      icon: <MailCheck className="h-8 w-8" />,
      imageSrc: '/assets/business-help-email-automation.png',
      imageAlt: 'Automasi email menghantar kempen produk kepada pelanggan'
    },
    {
      title: 'Automasi AI sebagai operator pelanggan.',
      description: 'Gunakan AI untuk menjawab soalan lazim, tapis pertanyaan, dan bantu pelanggan sebelum pasukan anda mengambil alih.',
      icon: <Bot className="h-8 w-8" />,
      imageSrc: '/assets/business-help-ai-operator.png',
      imageAlt: 'Automasi AI sebagai operator pelanggan melalui panggilan suara dan WhatsApp'
    }
  ];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? helpItems.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === helpItems.length - 1 ? 0 : current + 1));
  };

  const activeItem = helpItems[activeIndex];

  return (
    <section id="business-help" className="scroll-mt-20 bg-[#F8FAFC] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-tight text-[#0F172A] md:text-5xl">
              Ketahui Apa Kami Bantu Perniagaan Anda
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Paparan sebelumnya"
              className="flex h-12 w-12 items-center justify-center border border-slate-300 bg-white text-[#0F172A] transition-colors hover:border-[#D4AF37] hover:bg-[#D4AF37]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Paparan seterusnya"
              className="flex h-12 w-12 items-center justify-center bg-[#0F172A] text-white transition-colors hover:bg-[#D4AF37] hover:text-[#0F172A]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden bg-[#0F172A] text-white">
            {'imageSrc' in activeItem && activeItem.imageSrc ? (
              <img
                src={activeItem.imageSrc}
                alt={activeItem.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-[260px] w-full object-cover object-center md:h-[420px]"
              />
            ) : (
              <div className="flex h-[260px] w-full items-center justify-center bg-[#111C32] md:h-[420px]">
                <div className="flex h-20 w-20 items-center justify-center bg-[#D4AF37] text-[#0F172A]">
                  {activeItem.icon}
                </div>
              </div>
            )}
            <div className="p-8 md:p-10">
              <p className="mb-4 font-mono text-sm font-semibold text-[#FFE088]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(helpItems.length).padStart(2, '0')}
              </p>
              <h3 className="mb-5 text-2xl font-extrabold leading-tight md:text-3xl">
                {activeItem.title}
              </h3>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                {activeItem.description}
              </p>
            </div>
          </article>

          <div className="grid gap-3">
            {helpItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-4 border p-5 text-left transition-all ${
                  index === activeIndex
                    ? 'border-[#D4AF37] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]'
                    : 'border-slate-200 bg-white/70 hover:border-[#D4AF37]/60 hover:bg-white'
                }`}
              >
                <span className={`font-mono text-sm font-semibold ${index === activeIndex ? 'text-[#B88712]' : 'text-slate-400'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-bold leading-6 text-[#0F172A]">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'service-detail' | 'terms' | 'privacy'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToService = (id: string) => {
    setSelectedServiceId(id);
    setView('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = (sectionId?: string) => {
    setView('home');
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#191C1E] transition-colors duration-500">
      <div
        className="fixed top-0 left-0 z-[100] h-[3px] bg-[#D4AF37] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Header
        onNavigateHome={navigateHome}
        isDetailView={view === 'service-detail'}
      />

      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <MerchantImpactSection />
            <BusinessHelpCarouselSection />
            <Services onServiceSelect={navigateToService} />
            <AutomationTransformationSection />
            <DemoToolsSection />
            <About />
            <Contact />
          </>
        ) : view === 'service-detail' ? (
          selectedService && (
            <ServiceDetailPage
              service={selectedService}
              onBack={() => navigateHome()}
              onNavigate={navigateToService}
            />
          )
        ) : view === 'terms' ? (
          <TermsOfService onBack={() => navigateHome()} />
        ) : view === 'privacy' ? (
          <PrivacyPolicy onBack={() => navigateHome()} />
        ) : null}
      </main>

      <Footer
        onNavigateToTerms={() => {
          setView('terms');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToPrivacy={() => {
          setView('privacy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#D4AF37] p-4 text-[#0F172A] shadow-2xl transition-all duration-500 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          } hover:scale-105 active:scale-95 group`}
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default App;
