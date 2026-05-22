
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: (sectionId?: string) => void;
  isDetailView: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, isDetailView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Laman Utama', sectionId: '' },
    { name: 'Perkhidmatan', sectionId: 'services' },
    { name: 'Tentang Kami', sectionId: 'about' },
    { name: 'Hubungi Kami', sectionId: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 border-b transition-all duration-300 ${isScrolled || isDetailView ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-sm' : 'bg-white border-transparent'
        }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center px-4 md:px-6">
        <button onClick={() => onNavigateHome()} className="text-left text-lg font-extrabold tracking-tight text-[#0F172A]">
          Pinang Emas
        </button>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigateHome(link.sectionId)}
              className={`border-b-2 pb-1 text-sm font-medium transition-colors duration-200 ${
                link.name === 'Laman Utama'
                  ? 'border-[#D4AF37] text-[#0F172A]'
                  : 'border-transparent text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigateHome('contact')}
          className="ml-8 hidden bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1E293B] md:inline-flex"
        >
          Hubungi Kami
        </button>

        <div className="ml-4 flex items-center md:hidden">
          <button
            className="p-2 text-[#0F172A] outline-none"
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed left-0 top-20 z-[60] flex h-[calc(100dvh-5rem)] w-screen flex-col bg-white md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-grow flex-col items-start justify-start gap-2 overflow-y-auto p-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="w-full border-b border-slate-100 py-5 text-left text-3xl font-extrabold text-[#0F172A] transition-colors hover:text-[#D4AF37]"
              onClick={() => {
                onNavigateHome(link.sectionId);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            className="mt-6 bg-[#0F172A] px-8 py-4 text-base font-extrabold text-white"
            onClick={() => {
              onNavigateHome('contact');
              setIsMobileMenuOpen(false);
            }}
          >
            Mulakan Perbincangan
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
