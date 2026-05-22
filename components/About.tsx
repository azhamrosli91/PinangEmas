
import React from 'react';
import { Headphones, ShieldCheck } from 'lucide-react';
import LazyImage from './LazyImage';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <LazyImage
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=85&w=1200"
              alt="Pasukan teknologi berbincang tentang dashboard perniagaan"
              className="h-[320px] w-full shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:h-[400px]"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
              Navigasi Digital untuk SME Malaysia
            </h2>
            <p className="mb-6 text-base leading-8 text-slate-600">
              Di Pinang Emas, kami percaya bahawa teknologi canggih tidak sepatutnya hanya untuk syarikat besar. Fokus utama kami adalah merapatkan jurang digital bagi SME di Malaysia melalui solusi yang praktikal dan kos-efektif.
            </p>
            <p className="mb-8 text-base leading-8 text-slate-600">
              Kami menggabungkan kepakaran teknikal dengan pemahaman mendalam tentang landskap perniagaan tempatan untuk membina ekosistem kerja yang lebih pintar, cekap, dan bersedia untuk masa hadapan.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#B88712]" />
                <span className="font-bold text-[#0F172A]">Pakar Tempatan</span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-[#B88712]" />
                <span className="font-bold text-[#0F172A]">Sokongan Responsif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
