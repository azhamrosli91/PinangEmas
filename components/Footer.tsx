import React from 'react';
import { LOGO_URL } from '../constants';

interface FooterProps {
  onNavigateToTerms?: () => void;
  onNavigateToPrivacy?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateToTerms, onNavigateToPrivacy }) => {
  return (
    <footer className="py-16 border-t border-[#AA771C]/10 bg-[#FFFDF8]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <img src={LOGO_URL} alt="Pinang Emas" className="w-10 h-10 rounded-lg bg-[#101010] p-1" />
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-[#101010]">Pinang</span>
                <span className="text-[#AA771C] ml-1">Emas</span>
              </span>
            </div>
            <p className="text-[#101010]/70 max-w-sm mb-8">
              We create the next generation of imagination. We bridge your journey from imagination and digital reality.
            </p>
            <p className="text-[#AA771C] text-xs font-black uppercase tracking-widest mb-8">
              Online Services Only - Exclusively for Malaysia
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580371376291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#101010]/55 hover:text-[#AA771C] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@pinangemassolution"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#101010]/55 hover:text-[#AA771C] transition-colors"
              >
                YouTube
              </a>
              <a href="#" className="text-sm text-[#101010]/55 hover:text-[#AA771C] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#101010] font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-[#101010]/65 text-sm">
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Customize Software</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">n8n Automation</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">HRMS Systems</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Affordable Hosting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#101010] font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-[#101010]/65 text-sm">
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-[#AA771C] transition-colors">Careers</a></li>
              <li>
                <button
                  onClick={onNavigateToPrivacy}
                  className="hover:text-[#AA771C] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToTerms}
                  className="hover:text-[#AA771C] transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-[#AA771C]/10 text-[#101010]/50 text-xs">
          <p>© {new Date().getFullYear()} Pinang Emas IT Solutions. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with Excellence in Malaysia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
