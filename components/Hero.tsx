import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0F172A] pt-20">
      <div className="absolute inset-0">
        <img
          src="/assets/hero-sme-paperwork.png"
          alt="Pemilik SME Malaysia mengurus dokumen operasi di pejabat"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="h-full w-full object-cover object-[58%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-[#0F172A]/45 md:bg-[#0F172A]/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/65 to-[#0F172A]/35 md:from-[#0F172A]/88 md:via-[#0F172A]/46 md:to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 md:px-6">
        <div className="max-w-[340px] sm:max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase text-[#FFE088]">
            Penyelesaian IT SME Malaysia
          </p>

          <h1 className="mb-6 max-w-[340px] text-2xl font-extrabold leading-snug tracking-normal text-white sm:max-w-2xl sm:text-4xl md:text-6xl md:leading-tight">
            Kecemerlangan Digital Melalui Automasi untuk SME.
          </h1>

          <p className="mb-10 max-w-[340px] text-base leading-8 text-white/90 sm:max-w-xl sm:text-lg">
            Kami membantu perniagaan kecil meningkatkan kecekapan dengan penyelesaian automasi yang pintar. Mudahkan operasi anda hari ini.
          </p>

          <div className="flex w-full max-w-[340px] flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center bg-[#D4AF37] px-8 py-4 text-sm font-extrabold text-[#0F172A] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Mulakan Sekarang
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0F172A] sm:w-auto"
            >
              Ketahui Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
