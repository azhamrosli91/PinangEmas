
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
import { TESTIMONIALS, SERVICES } from './constants';
import { Quote, ChevronUp } from 'lucide-react';

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
  const featuredTestimonial = TESTIMONIALS[0];

  return (
    <div className="min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#AA771C] z-[100] transition-all duration-75"
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

            <section className="py-10 bg-[#F8F5EE] border-y border-[#AA771C]/10 overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 text-[#101010]/70">
                  <span className="text-xl md:text-2xl font-medium tracking-tight">NEXUS CORE</span>
                  <span className="text-xl md:text-3xl font-serif uppercase tracking-[0.18em]">Aurelius</span>
                  <span className="text-xl md:text-2xl font-black lowercase tracking-tight">ar software malaysia</span>
                  <span className="text-xl md:text-2xl font-light uppercase tracking-tighter">Velocity Systems</span>
                </div>
              </div>
            </section>

            <Services onServiceSelect={navigateToService} />
            <About />

            <section className="py-24 bg-[#FFFDF8]">
              <div className="container mx-auto px-6">
                <div className="mb-14">
                  <h2 className="text-[#AA771C] text-xs font-black tracking-[0.28em] uppercase mb-4 flex items-center">
                    <span className="w-8 h-px bg-[#AA771C] mr-4"></span>
                    Client Stories
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-black text-[#101010]">Client Stories</h3>
                </div>

                <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 items-start">
                  <div className="pt-12 border-t border-[#AA771C]/15">
                    <div className="mb-8 p-5 bg-[#F8F5EE] inline-flex rounded-2xl text-[#AA771C]">
                      <Quote className="w-8 h-8 opacity-50" />
                    </div>
                    <p className="text-2xl md:text-3xl italic font-bold leading-snug text-[#101010] max-w-3xl">
                      "{featuredTestimonial.content}"
                    </p>
                    <div className="flex items-center space-x-5 mt-10">
                      <img src={featuredTestimonial.avatar} alt={featuredTestimonial.name} className="w-14 h-14 rounded-full border-2 border-[#AA771C]/40 object-cover" />
                      <div>
                        <p className="font-black text-[#101010]">{featuredTestimonial.name}</p>
                        <p className="text-xs text-[#AA771C] font-bold uppercase tracking-widest">{featuredTestimonial.role} @ {featuredTestimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  <Contact compact />
                </div>
              </div>
            </section>
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
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full gold-gradient text-black shadow-2xl transition-all duration-500 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          } hover:scale-110 active:scale-95 group`}
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default App;
