
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
import { BadgeCheck, ChevronUp, ExternalLink, ReceiptText } from 'lucide-react';

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
            Alami sendiri kecanggihan alatan kami. <span className="font-bold text-[#FFE088]">Percuma untuk SME</span> yang ingin bertransformasi.
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
                Uji Alat
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
            <Services onServiceSelect={navigateToService} />
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
        className={`fixed bottom-6 left-6 z-50 rounded-full bg-[#D4AF37] p-4 text-[#0F172A] shadow-2xl transition-all duration-500 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          } hover:scale-105 active:scale-95 group`}
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default App;
