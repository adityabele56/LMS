// Components/Navbar2.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import imglogo from '../assets/1600w-kAK-ljYAGXg-removebg-preview.png'

const Navbar2 = () => {
  // Navigation items updated with subgroups
  const navLinks = [
    { 
      name: 'Products', 
      path: '/landing/products', 
      hasDropdown: true,
      subgroup: ['Course Library', 'Elite Bootcamp', 'Live Sessions'] 
    },
    { 
      name: 'Platform', 
      path: '/landing/platform', 
      hasDropdown: true,
      subgroup: ['LMS Interface', 'Mobile App', 'Analytics']
    },
    { name: 'Pricing', path: '/landing/pricing', hasDropdown: false },
    { 
      name: 'Solutions', 
      path: '/landing/solutions', 
      hasDropdown: true,
      subgroup: ['For Universities', 'For Corporates', 'For Individuals']
    },
    { 
      name: 'Customers', 
      path: '/landing/customers', 
      hasDropdown: true,
      subgroup: ['Success Stories', 'Testimonials']
    },
    { 
      name: 'Resources', 
      path: '/landing/resources', 
      hasDropdown: true,
      subgroup: ['Blog', 'Whitepapers', 'Webinars']
    },
    { 
      name: 'About us', 
      path: '/landing/about', 
      hasDropdown: true,
      subgroup: ['Our Story', 'Careers', 'Team']
    }
  ];

  return (
    // Background lightened slightly to make the Navy logo pop
    <nav className="flex items-center justify-between px-12 py-5 bg-[#FCFBFA] sticky top-0 z-[100] shadow-sm border-b border-gray-100 font-sans">
      {/* Logo */}
      <Link to="/landing" className="flex items-center gap-2 group cursor-pointer">
        <img className='h-15 w-40' src={imglogo} alt="Logo" />
      </Link>

      {/* Center Links - Colors changed to Navy (#0A2647) and Gold (#D4AF37) */}
      <div className="hidden md:flex gap-8 text-[#0A2647] font-semibold text-sm">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group/main py-2">
            <NavLink 
              to={link.path}
              className={({ isActive }) => 
                `flex items-center gap-1 transition-all duration-300 ${
                  isActive ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37] text-[#0A2647]'
                }`
              }
            >
              {link.name}
              
              {link.hasDropdown && (
                <svg 
                  className="w-3 h-3 text-gray-400 group-hover/main:text-[#D4AF37] group-hover/main:rotate-180 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              )}

              {/* Underline Animation - Now Gold */}
              <span className="absolute left-0 bottom-0 h-[2px] bg-[#D4AF37] w-0 group-hover/main:w-full transition-all duration-300"></span>
            </NavLink>

            {/* Subgroup Dropdown Menu */}
            {link.hasDropdown && (
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 invisible group-hover/main:opacity-100 group-hover/main:translate-y-0 group-hover/main:visible transition-all duration-300 ease-out z-50">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-sm py-3 min-w-[200px]">
                  {link.subgroup.map((subItem) => (
                    <Link
                      key={subItem}
                      to="#"
                      className="block px-6 py-2.5 text-[13px] text-[#0A2647] hover:bg-[#FCFBFA] hover:text-[#D4AF37] transition-colors duration-200 font-medium"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons - Colors matched to Logo Shield and Stars */}
      <div className="flex items-center gap-6">
        <Link to="/login" className="text-[#0A2647] hover:text-[#D4AF37] font-bold text-sm transition-colors">
          Sign In
        </Link>
        <Link 
          to="/login" 
          className="bg-[#0A2647] text-white px-7 py-2.5 rounded-sm hover:bg-[#D4AF37] hover:text-[#0A2647] transition-all duration-500 transform hover:-translate-y-1 shadow-lg text-xs font-bold uppercase tracking-widest"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;