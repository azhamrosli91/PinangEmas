import React from 'react';
import { ArrowRight, AtSign, Share2 } from 'lucide-react';

interface FooterProps {
  onNavigateToTerms?: () => void;
  onNavigateToPrivacy?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateToTerms, onNavigateToPrivacy }) => {
  return (
    <footer className="border-t border-white/5 bg-[#0F172A] py-16 text-slate-400">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-14 grid gap-10 md:grid-cols-4">
          <div>
            <a href="#" className="mb-6 block text-xl font-extrabold text-white">
              Pinang Emas
            </a>
            <p className="mb-8 max-w-xs leading-7">
              Penyelesaian IT pintar untuk pertumbuhan SME Malaysia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61580371376291"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-slate-300 transition-colors hover:bg-[#D4AF37] hover:text-[#0F172A]"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@pinangemassolution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-slate-300 transition-colors hover:bg-[#D4AF37] hover:text-[#0F172A]"
              >
                <AtSign className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Pautan Pantas</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="transition-colors hover:text-[#FFE088]">Perkhidmatan</a></li>
              <li><a href="#about" className="transition-colors hover:text-[#FFE088]">Tentang Kami</a></li>
              <li><a href="#contact" className="transition-colors hover:text-[#FFE088]">Hubungi Kami</a></li>
              <li><a href="#" className="transition-colors hover:text-[#FFE088]">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Undang-undang</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={onNavigateToPrivacy}
                  className="text-left transition-colors hover:text-[#FFE088]"
                >
                  Privasi
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToTerms}
                  className="text-left transition-colors hover:text-[#FFE088]"
                >
                  Terma & Syarat
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Langgan Newsletter</h4>
            <p className="mb-4 text-sm leading-6">Dapatkan tips automasi terus ke inbox anda.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Emel anda"
                className="min-w-0 flex-1 border-0 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:ring-1 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                aria-label="Langgan newsletter"
                className="flex w-12 items-center justify-center bg-[#D4AF37] text-[#0F172A]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs md:flex-row">
          <p>&copy; {new Date().getFullYear()} Pinang Emas. Hak Cipta Terpelihara.</p>
          <p className="font-mono uppercase">Malaysia Based Consultancy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
