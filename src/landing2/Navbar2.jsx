// Components/Navbar2.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react'; // Icons for better UI
import imglogo from '../assets/Eduvion-removebg-preview.png';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Products', path: '/products', hasDropdown: true, subgroup: ['Course Library', 'Elite Bootcamp', 'Live Sessions'] },
    { name: 'Platform', path: '/platform', hasDropdown: true, subgroup: ['LMS Interface', 'Mobile App', 'Analytics'] },
    { name: 'Pricing', path: '/pricing', hasDropdown: false },
    { name: 'Solutions', path: '/solutions', hasDropdown: true, subgroup: ['For Universities', 'For Corporates', 'For Individuals'] },
    { name: 'Customers', path: '/customers', hasDropdown: true, subgroup: ['Success Stories', 'Testimonials'] },
    { name: 'Resources', path: '/resources', hasDropdown: true, subgroup: ['Blog', 'Whitepapers', 'Webinars'] },
    { name: 'About us', path: '/about', hasDropdown: true, subgroup: ['Our Story', 'Careers', 'Team'] }
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-12 py-3 bg-[#FCFBFA] sticky top-0 z-[100] shadow-sm border-b border-gray-100 font-sans">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-[110]">
          <img className='h-12 w-auto md:h-15 md:w-40 object-contain' src={imglogo} alt="Logo" />
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-[#0A2647] font-semibold text-sm">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/main py-2">
              <NavLink 
                to={link.path}
                className={({ isActive }) => 
                  `flex items-center gap-1 transition-all duration-300 ${isActive ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37] text-[#0A2647]'}`
                }
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="group-hover/main:rotate-180 transition-transform" />}
                <span className="absolute left-0 bottom-0 h-[2px] bg-[#D4AF37] w-0 group-hover/main:w-full transition-all duration-300"></span>
              </NavLink>

              {/* Desktop Dropdown */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all z-50">
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-sm py-3 min-w-[200px]">
                    {link.subgroup.map((subItem) => (
                      <Link key={subItem} to="#" className="block px-6 py-2 text-[13px] text-[#0A2647] hover:bg-[#FCFBFA] hover:text-[#D4AF37] font-medium transition-colors">
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions (Desktop) & Menu Toggle (Mobile) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6 mr-4">
            <Link to="/login" className="text-[#0A2647] hover:text-[#D4AF37] font-bold text-sm transition-colors">Sign In</Link>
            <Link to="/login" className="bg-[#0A2647] text-white px-6 py-2 rounded-sm hover:bg-[#D4AF37] hover:text-[#0A2647] transition-all text-xs font-bold uppercase tracking-widest shadow-md">
              Get Started
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-[#0A2647] focus:outline-none z-[110]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0A2647]/40 backdrop-blur-sm z-[90] lg:hidden"
            />

            {/* Sidebar Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[350px] bg-white shadow-2xl z-[100] lg:hidden flex flex-col pt-24 px-8 overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col gap-2">
                    <NavLink 
                      to={link.path}
                      onClick={() => !link.hasDropdown && setIsOpen(false)}
                      className="text-[#0A2647] text-lg font-bold hover:text-[#D4AF37] flex justify-between items-center"
                    >
                      {link.name}
                    </NavLink>
                    
                    {/* Mobile Subgroup Display */}
                    {link.hasDropdown && (
                      <div className="flex flex-col gap-2 pl-4 border-l border-gray-100 mt-1">
                        {link.subgroup.map((sub) => (
                          <Link 
                            key={sub} 
                            to="#" 
                            onClick={() => setIsOpen(false)}
                            className="text-[#0A2647]/60 text-sm hover:text-[#D4AF37]"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Buttons in Sidebar */}
              <div className="mt-12 flex flex-col gap-4 pb-10">
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 text-[#0A2647] font-bold border border-[#0A2647]/10"
                >
                  Sign In
                </Link>
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 bg-[#0A2647] text-white font-black uppercase tracking-[0.2em] text-xs"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar2;