
import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <img src={LOGO_URL} alt="Pinang Emas" className="w-10 h-10 rounded-lg" />
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Pinang</span>
                <span className="text-[#AA771C] ml-1">Emas</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Pioneering the next generation of IT solutions. We bridge the gap between imagination and digital reality.
            </p>
            <p className="text-[#AA771C] text-xs font-black uppercase tracking-widest mb-8">
              Online Services Only • Exclusively for Malaysia
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Customize Software</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">n8n Automation</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">HRMS Systems</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Affordable Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Pinang Emas IT Solutions. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with Excellence in Malaysia 🇲🇾</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
