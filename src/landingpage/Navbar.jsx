import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Course', href: '/course' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    // Fixed top-0 left-0 w-full ensures it sticks to the very top edge
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      
      {/* Container: Removed max-w and rounded-2xl to make it touch the browser edges */}
      <div className="w-full bg-[#0f081a]/90 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 py-4 flex items-center justify-between shadow-xl">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-105">
          <div className="bg-gradient-to-tr from-violet-900 to-fuchsia-600 p-2 rounded-lg group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-violet-500/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white text-xl font-bold tracking-tight">Eduvison</span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-slate-300 text-sm font-medium transition-all duration-300 hover:text-white hover:scale-110 group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-violet-700 rounded-full hover:bg-violet-600 hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            <span className="relative z-10">Sign up</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/30" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Full Width */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#0f081a] border-b border-white/10 px-6 py-8 space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block text-slate-300 hover:text-white text-center text-xl font-medium transition-all">
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-violet-700 text-white font-bold rounded-xl">Sign up</button>
        </div>
      </div>
   
    </nav>
    
  );
};

export default Navbar;