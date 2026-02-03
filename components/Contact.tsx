
import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, MapPinOff, Globe, Mail } from 'lucide-react';

const Contact: React.FC = () => {
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
    window.open('https://wa.me/601110245454?text=Hello%20Pinang%20Emas,%20I%20would%20like%20to%20enquire%20about%20your%20services.', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:sales.pinangemas@gmail.com';
  };

  return (
    <section id="contact" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto card-glass rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-12 gold-gradient flex flex-col justify-between text-black">
            <div>
              <h3 className="text-4xl font-black mb-6">Let's build something <br />extraordinary.</h3>
              <p className="font-medium text-black/70 mb-12">
                We bridge the gap between imagination and digital reality. Start your journey with Malaysia's premium IT partner.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase font-bold opacity-60 mb-2 flex items-center">
                    <Globe className="w-3 h-3 mr-2" /> Service Availability
                  </p>
                  <p className="text-lg font-black tracking-tight">Exclusively for Malaysia 🇲🇾</p>
                </div>

                <div>
                  <p className="text-xs uppercase font-bold opacity-60 mb-2 flex items-center">
                    <MapPinOff className="w-3 h-3 mr-2" /> Physical Location
                  </p>
                  <p className="text-lg font-bold leading-tight">
                    Online services only. No physical location.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase font-bold opacity-60 mb-2 flex items-center">
                    <MessageCircle className="w-3 h-3 mr-2" /> Direct Enquiries
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="text-xl font-black underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    +6011-10245454
                  </button>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-50">Available via WhatsApp</p>
                </div>

                <div>
                  <p className="text-xs uppercase font-bold opacity-60 mb-2 flex items-center">
                    <Mail className="w-3 h-3 mr-2" /> Email Us
                  </p>
                  <button
                    onClick={handleEmail}
                    className="text-lg font-black underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity break-all"
                  >
                    sales.pinangemas@gmail.com
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all cursor-pointer">Li</div>
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all cursor-pointer">Tw</div>
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all cursor-pointer">Fb</div>
            </div>
          </div>

          <div className="lg:w-2/3 p-12 bg-black/40">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-3xl font-bold mb-4">Message Sent!</h4>
                <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-[#AA771C] font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#AA771C] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#AA771C] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service Interested In</label>
                  <select name="service" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#AA771C] outline-none transition-colors appearance-none text-white">
                    <option className="bg-black">Customize Software</option>
                    <option className="bg-black">AI Solutions</option>
                    <option className="bg-black">n8n Workflows</option>
                    <option className="bg-black">HRMS System</option>
                    <option className="bg-black">Website Hosting</option>
                    <option className="bg-black">Smart Home/Office</option>
                    <option className="bg-black">Enterprise IT</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Your Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#AA771C] outline-none transition-colors"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-5 rounded-xl gold-gradient text-black font-bold flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    Send Enquiry <Send className="ml-2 w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full md:w-auto px-10 py-5 rounded-xl border border-white/10 text-white font-bold flex items-center justify-center hover:bg-white/5 transition-all"
                  >
                    Chat on WhatsApp <MessageCircle className="ml-2 w-4 h-4 text-green-500" />
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 text-center md:text-left italic">
                  * Pinang Emas provides online services exclusively for the Malaysian market.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
