import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

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

  const content = isSubmitted ? (
    <div className="min-h-[360px] flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-6">
        <CheckCircle2 className="w-9 h-9 text-green-600" />
      </div>
      <h4 className="text-2xl font-black text-[#101010] mb-3">Message Sent</h4>
      <p className="text-[#101010]/70">Thank you for reaching out. We'll get back to you within 24 hours.</p>
      <button
        onClick={() => setIsSubmitted(false)}
        className="mt-8 text-[#AA771C] font-bold"
      >
        Send another message
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-[#101010] mb-2">Full Name</label>
          <input
            required
            name="name"
            type="text"
            placeholder="John Doe"
            className="w-full bg-white border border-[#AA771C]/20 rounded-lg px-4 py-3 focus:border-[#AA771C] outline-none transition-colors text-[#101010]"
          />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-[#101010] mb-2">Email Address</label>
          <input
            required
            name="email"
            type="email"
            placeholder="john@example.com"
            className="w-full bg-white border border-[#AA771C]/20 rounded-lg px-4 py-3 focus:border-[#AA771C] outline-none transition-colors text-[#101010]"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-[#101010] mb-2">Service Interested In</label>
        <select name="service" className="w-full bg-white border border-[#AA771C]/20 rounded-lg px-4 py-3 focus:border-[#AA771C] outline-none transition-colors appearance-none text-[#101010]">
          <option>Customize Software</option>
          <option>AI Solutions</option>
          <option>n8n Workflows</option>
          <option>HRMS System</option>
          <option>Website Hosting</option>
          <option>Smart Home/Office</option>
          <option>Enterprise IT</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-[#101010] mb-2">Your Message</label>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us about your project goals..."
          className="w-full bg-white border border-[#AA771C]/20 rounded-lg px-4 py-3 focus:border-[#AA771C] outline-none transition-colors text-[#101010]"
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          className="w-full sm:w-auto px-7 py-4 rounded-xl gold-gradient text-black font-black flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          Send Enquiry <Send className="ml-2 w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full sm:w-auto px-7 py-4 rounded-xl border border-[#AA771C]/25 text-[#101010] font-black flex items-center justify-center hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all"
        >
          Chat on WhatsApp <MessageCircle className="ml-2 w-4 h-4 text-green-600" />
        </button>
      </div>
      <p className="text-[10px] text-[#101010]/55 italic">
        * Pinang Emas provides online services exclusively for the Malaysian market. WhatsApp: +6014-6595979
      </p>
    </form>
  );

  if (compact) {
    return (
      <section id="contact" className="scroll-mt-28">
        <div className="border border-[#AA771C]/30 bg-[#FFF9E8] rounded-3xl p-6 md:p-8 shadow-[0_20px_55px_rgba(170,119,28,0.12)]">
          <h2 className="text-[#AA771C] text-xs font-black tracking-[0.28em] uppercase mb-3">Contact Form</h2>
          <h3 className="text-3xl md:text-4xl font-black text-[#101010] mb-8">Testimonials</h3>
          {content}
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#FFFDF8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto border border-[#AA771C]/30 bg-[#FFF9E8] rounded-3xl p-6 md:p-10 shadow-[0_20px_55px_rgba(170,119,28,0.12)]">
          <h2 className="text-[#AA771C] text-xs font-black tracking-[0.28em] uppercase mb-3">Contact Form</h2>
          <h3 className="text-3xl md:text-4xl font-black text-[#101010] mb-8">Start Your Project</h3>
          {content}
        </div>
      </div>
    </section>
  );
};

export default Contact;
