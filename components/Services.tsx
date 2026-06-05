
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (id: string) => void;
}

const serviceDisplayCopy: Record<string, { title?: string; description: string }> = {
  'customize-software': {
    title: 'Perisian Tersuai',
    description: 'Pembangunan perisian khas mengikut keperluan unik perniagaan anda.'
  },
  'ai-solutions': {
    title: 'Solusi AI',
    description: 'Solusi AI praktikal untuk automasi sokongan pelanggan, data, dan operasi harian.'
  },
  'n8n-workflow': {
    title: 'Aliran Kerja n8n',
    description: 'Automasi aliran kerja yang kompleks merentasi pelbagai aplikasi tanpa kod.'
  },
  'hrms-system': {
    title: 'HRMS',
    description: 'Sistem pengurusan sumber manusia yang dioptimumkan untuk standard Malaysia.'
  },
  'hosting-website': {
    title: 'Hosting PKS',
    description: 'Hosting mampu milik dan pantas untuk laman web serta aplikasi perniagaan kecil.'
  },
  'smart-home-office': {
    title: 'Rumah/Pejabat Pintar',
    description: 'Automasi ruang rumah dan pejabat dengan kawalan pintar, sensor, dan integrasi IoT.'
  }
};

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  return (
    <section id="services" className="relative scroll-mt-20 bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0F172A]">Perkhidmatan Kami</h2>
          <div className="mx-auto h-1 w-20 bg-[#D4AF37]"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const display = serviceDisplayCopy[service.id];

            return (
              <button
                key={service.id}
                type="button"
                className="group flex min-h-[300px] flex-col bg-white p-8 text-left shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)]"
                onClick={() => onServiceSelect(service.id)}
              >
                <div className="mb-7 text-[#B88712] transition-transform duration-300 group-hover:scale-105">
                  {React.isValidElement(service.icon)
                    ? React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'h-8 w-8' })
                    : service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-[#0F172A] transition-colors group-hover:text-[#B88712]">
                  {display?.title || service.title}
                </h3>
                <p className="mb-8 flex-grow text-base leading-7 text-slate-600">
                  {display?.description || service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] transition-all group-hover:gap-4">
                  Info Lanjut
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
