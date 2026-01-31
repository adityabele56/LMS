// Components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer2 = () => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <footer className="relative bg-[#0A2647] text-[#F9F7F2] pt-32 pb-10 px-6 lg:px-12 overflow-hidden">
      
      {/* 1. Background Image with Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        {/* Logo-Matched Navy Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] via-[#0A2647]/95 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top CTA Bar - Using Gold (#D4AF37) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-20 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 md:mb-0">Ready to start your <br/> <span className="text-[#D4AF37] italic">Elite Journey?</span></h2>
          <button className="group relative px-10 py-5 bg-[#D4AF37] text-[#0A2647] font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden shadow-xl shadow-black/20">
            <span className="relative z-10">Apply for Admission</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tight text-white">Eduvion</span>
              <span className="text-[9px] uppercase tracking-[0.6em] text-[#D4AF37] font-black">Elite Academy</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Crafting the next generation of industry leaders through uncompromising mentorship and global perspective.
            </p>
            {/* Social Links with Gold Hover */}
            <div className="flex gap-6">
              {['FB', 'TW', 'IG', 'LI'].map(social => (
                <span key={social} className="text-[10px] font-bold tracking-widest text-white/30 hover:text-[#D4AF37] transition-all cursor-pointer">
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links - Curriculum */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37]">Curriculum</h4>
            <ul className="space-y-4 text-sm text-white/50">
              {['Digital Mastery', 'Design Thinking', 'Business Strategy', 'Leadership'].map(link => (
                <li key={link} className="hover:text-white hover:translate-x-2 transition-all duration-500 cursor-pointer flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-4 transition-all"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Institutional */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37]">Institutional</h4>
            <ul className="space-y-4 text-sm text-white/50">
              {['About Us', 'Success Stories', 'Privacy Policy', 'Contact Elite'].map(link => (
                <li key={link} className="hover:text-[#D4AF37] cursor-pointer transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter with Gold Accents */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37]">Newsletter</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="PROFESSIONAL EMAIL" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-[10px] tracking-widest focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-white/20"
              />
              <button className="absolute right-0 bottom-4 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:translate-x-1 transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-[9px] text-white/20 tracking-tighter italic">Join 5,000+ professionals already receiving our insights.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/20">
            © 2026 Eduvion Global Academy • Est. Switzerland
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-white/40">
            <span className="hover:text-[#D4AF37] cursor-pointer">Security</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Terms</span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Gold Glow - Branding Touch */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>
    </footer>
  );
};

export default Footer2;