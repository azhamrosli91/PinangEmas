import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

interface ContactProps {
  compact?: boolean;
}

const Contact: React.FC<ContactProps> = ({ compact = false }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const name = (target.elements.namedItem('name') as HTMLInputElement).value;
    const email = (target.elements.namedItem('email') as HTMLInputElement).value;
    const service = (target.elements.namedItem('service') as HTMLSelectElement).value;
    const message = (target.elements.namedItem('message') as HTMLTextAreaElement).value;

    const subject = `Project Enquiry: ${service} - From ${name}`;
    const body = `Full Name: ${name}\nEmail: ${email}\nService Interested In: ${service}\n\nMessage:\n${message}`;

    window.location.href = `mailto:sales.pinangemas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      target.reset();
    }, 5000);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/60146595979?text=Hello%20Pinang%20Emas,%20I%20would%20like%20to%20enquire%20about%20your%20services.', '_blank');
  };

  const inputClass = 'w-full border border-slate-300 bg-white px-4 py-3 text-[#0F172A] outline-none transition-all focus:border-[#0F172A] focus:ring-2 focus:ring-[#D4AF37]/35';
  const labelClass = 'mb-2 block font-mono text-xs font-medium text-slate-600';

  return (
    <section id="contact" className={`${compact ? 'py-12' : 'py-20'} scroll-mt-20 bg-[#F1F5F9]`}>
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="grid overflow-hidden bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] md:grid-cols-5">
          <aside className="bg-[#0F172A] p-8 text-white md:col-span-2 md:p-12">
            <h2 className="mb-6 text-3xl font-bold">Hubungi Kami</h2>
            <p className="mb-10 leading-7 text-slate-300">
              Sedia untuk mentransformasikan perniagaan anda? Pasukan kami sedia membantu.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[#D4AF37]" />
                <p className="leading-6">Pinang Emas<br />Kuala Lumpur, Malaysia</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <p>sales.pinangemas@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <p>+60 14-659 5979</p>
              </div>
            </div>

            <div className="mt-12 h-44 overflow-hidden bg-slate-800">
              <div className="relative h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-white/15"></div>
                <MapPin className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-full text-[#D4AF37]" />
              </div>
            </div>
          </aside>

          <div className="p-8 md:col-span-3 md:p-12">
            {isSubmitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15">
                  <CheckCircle2 className="h-9 w-9 text-green-600" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#0F172A]">Mesej Dihantar</h3>
                <p className="text-slate-600">Terima kasih. Kami akan membalas dalam masa 24 jam.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 font-bold text-[#B88712]"
                >
                  Hantar mesej lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>Nama Penuh</label>
                    <input required name="name" type="text" placeholder="Nama anda" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Emel Perniagaan</label>
                    <input required name="email" type="email" placeholder="emel@syarikat.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Perkhidmatan Diminati</label>
                  <select name="service" className={`${inputClass} appearance-none`}>
                    <option>n8n Workflow</option>
                    <option>HRMS System</option>
                    <option>Xpen Expense Tracker</option>
                    <option>Customize Software</option>
                    <option>AI Solutions</option>
                    <option>Website Hosting</option>
                    <option>Smart Home/Office</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Mesej Anda</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Bagaimana kami boleh membantu anda?"
                    className={inputClass}
                  ></textarea>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-[#0F172A] px-7 py-4 font-bold text-white transition-colors hover:bg-[#1E293B]"
                  >
                    Hantar Mesej <Send className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center border border-slate-300 px-7 py-4 font-bold text-[#0F172A] transition-colors hover:border-[#25D366] hover:bg-[#25D366]/5"
                  >
                    WhatsApp <MessageCircle className="ml-2 h-4 w-4 text-green-600" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
