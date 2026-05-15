
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../constants';

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
    { name: 'Home', sectionId: '' },
    { name: 'Services', sectionId: 'services' },
    { name: 'About', sectionId: 'about' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isDetailView ? 'bg-white/90 backdrop-blur-xl py-3 border-b border-[#AA771C]/10 shadow-sm' : 'bg-white/75 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
        <button onClick={() => onNavigateHome()} className="flex items-center space-x-3 group text-left">
          <div className="w-10 h-10 overflow-hidden rounded-lg bg-[#101010] p-1 group-hover:scale-105 transition-transform duration-500 ring-1 ring-[#AA771C]/20 group-hover:ring-[#AA771C]/40">
            <img src={LOGO_URL} alt="Pinang Emas Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-black tracking-tight">
            <span className="text-[#101010]">Pinang</span>
            <span className="text-[#AA771C] ml-1">Emas</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigateHome(link.sectionId)}
              className={`text-sm font-bold text-[#101010] hover:text-[#AA771C] transition-all duration-300 ${
                link.name === 'Home' ? 'hidden xl:inline-flex' : ''
              }`}
            >
              {link.name}
            </button>
          ))}

          <div className="w-px h-6 bg-[#AA771C]/20 mx-2"></div>

          <button
            onClick={() => onNavigateHome('contact')}
            className="px-6 py-2.5 rounded-full border border-[#AA771C] bg-white text-[#AA771C] font-black text-sm hover:bg-[#AA771C] hover:text-white transition-all shadow-[0_10px_20px_rgba(170,119,28,0.12)]"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden">
          <button
            className="text-[#101010] p-2 outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed top-0 left-0 w-screen h-[100dvh] bg-[#FFFDF8] z-[60] md:hidden transition-all duration-500 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex-grow flex flex-col items-center justify-start space-y-10 p-6 pt-32 pb-10 overflow-y-auto overscroll-contain">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="text-4xl font-black text-[#101010] hover:text-[#AA771C] transition-colors"
              onClick={() => {
                onNavigateHome(link.sectionId);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4">
            <button
              className="px-10 py-5 rounded-full gold-gradient text-black font-black text-xl shadow-2xl hover:scale-105 transition-all"
              onClick={() => {
                onNavigateHome('contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Start Project
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
