
import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetailPage from './components/ServiceDetailPage';
import { TESTIMONIALS, SERVICES } from './constants';
import {
  Quote,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  Check,
  Share2
} from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'service-detail'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeShareId, setActiveShareId] = useState<string | null>(null);
  const [theme, setTheme] = useState<'default' | 'midnight'>(() => {
    const saved = localStorage.getItem('pinang-emas-theme');
    return (saved as 'default' | 'midnight') || 'default';
  });

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

  useEffect(() => {
    if (theme === 'midnight') {
      document.documentElement.classList.add('midnight');
    } else {
      document.documentElement.classList.remove('midnight');
    }
    localStorage.setItem('pinang-emas-theme', theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme(prev => prev === 'default' ? 'midnight' : 'default');
  };

  const handleCopyLink = (id: string, content: string) => {
    const shareText = `"${content}" - Shared from Pinang Emas Premium IT Solutions`;
    navigator.clipboard.writeText(shareText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSocialShare = (platform: 'twitter' | 'linkedin' | 'facebook', content: string) => {
    const text = encodeURIComponent(`"${content}" - Check out Pinang Emas for Premium IT Solutions!`);
    const url = encodeURIComponent(window.location.href);
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }
    window.open(shareUrl, '_blank');
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

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

            <section className="py-16 bg-dark-surface border-y border-white/5 overflow-hidden">
              <div className="container mx-auto px-6">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">Empowering Digital Giants Globally</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 hover:opacity-50 transition-opacity grayscale">
                  <span className="text-2xl md:text-3xl font-black tracking-tighter italic">NEXUS.CORE</span>
                  <span className="text-2xl md:text-3xl font-bold font-serif uppercase tracking-widest">Aurelius</span>
                  <span className="text-2xl md:text-3xl font-black lowercase tracking-tight">AR Software Malaysia</span>
                  <span className="text-2xl md:text-3xl font-light uppercase tracking-tighter">Velocity Systems</span>
                  <span className="text-2xl md:text-3xl font-black tracking-[0.2em]">AZRA GREEN</span>
                </div>
              </div>
            </section>

            <Services onServiceSelect={navigateToService} />
            <About />

            <section className="py-32 relative overflow-hidden bg-dark-surface">
              <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                  <h2 className="text-[#AA771C] text-sm font-black tracking-[0.3em] uppercase mb-6">Client Stories</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-white">Trust is Our Primary <br /><span className="text-gold italic">Currency.</span></h3>
                </div>

                <div className="max-w-4xl mx-auto relative px-4 sm:px-12 group/carousel">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-700"
                      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                      {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="w-full flex-shrink-0 px-4">
                          <div className="card-glass p-8 md:p-16 rounded-[3rem] relative border-white/5 group/card">
                            <div className="absolute top-8 right-8 flex items-center space-x-2">
                              {/* Share Menu */}
                              <div className={`flex items-center space-x-2 transition-all duration-300 ${activeShareId === t.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                                <button
                                  onClick={() => handleSocialShare('twitter', t.content)}
                                  className="p-2 rounded-full bg-white/5 hover:bg-[#AA771C]/20 text-gray-400 hover:text-gold transition-colors"
                                  title="Share on Twitter"
                                >
                                  <Twitter className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleSocialShare('linkedin', t.content)}
                                  className="p-2 rounded-full bg-white/5 hover:bg-[#AA771C]/20 text-gray-400 hover:text-gold transition-colors"
                                  title="Share on LinkedIn"
                                >
                                  <Linkedin className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleSocialShare('facebook', t.content)}
                                  className="p-2 rounded-full bg-white/5 hover:bg-[#AA771C]/20 text-gray-400 hover:text-gold transition-colors"
                                  title="Share on Facebook"
                                >
                                  <Facebook className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleCopyLink(t.id, t.content)}
                                  className="p-2 rounded-full bg-white/5 hover:bg-[#AA771C]/20 text-gray-400 hover:text-gold transition-colors relative"
                                  title="Copy text"
                                >
                                  {copiedId === t.id ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                                </button>
                              </div>

                              <button
                                onClick={() => setActiveShareId(activeShareId === t.id ? null : t.id)}
                                className={`p-3 rounded-full bg-white/5 text-[#AA771C] hover:bg-[#AA771C] hover:text-black transition-all ${activeShareId === t.id ? 'bg-[#AA771C] text-black scale-110' : ''}`}
                                title="Share Testimonial"
                              >
                                <Share2 className="w-5 h-5" />
                              </button>
                            </div>

                            <div className="mb-8 p-5 bg-white/5 inline-flex rounded-2xl text-[#AA771C]">
                              <Quote className="w-8 h-8 opacity-40" />
                            </div>

                            <p className="text-gray-300 text-xl md:text-2xl italic mb-10 leading-relaxed font-medium">"{t.content}"</p>

                            <div className="flex items-center space-x-6">
                              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-[#AA771C] object-cover" />
                              <div>
                                <p className="font-black text-white text-lg">{t.name}</p>
                                <p className="text-xs text-[#AA771C] font-bold uppercase tracking-widest">{t.role} @ {t.company}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => setActiveIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-[#AA771C] hover:scale-125 transition-transform"><ChevronLeft /></button>
                  <button onClick={() => setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length)} className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-[#AA771C] hover:scale-125 transition-transform"><ChevronRight /></button>
                </div>
              </div>
            </section>

            <Contact />
          </>
        ) : (
          selectedService && (
            <ServiceDetailPage
              service={selectedService}
              onBack={() => navigateHome()}
              onNavigate={navigateToService}
            />
          )
        )}
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-28 right-8 z-50 p-4 rounded-full gold-gradient text-black shadow-2xl transition-all duration-500 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          } hover:scale-110 active:scale-95 group`}
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default App;
