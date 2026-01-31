import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'How it Works', 'Careers', 'Contact'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Newsletter', 'Events', 'Courses'],
    },
  ];

  return (
    <footer className="bg-[#0f081a] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-gradient-to-tr from-violet-800 to-fuchsia-500 p-2 rounded-lg group-hover:rotate-12 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">Eduvion</span>
            </div>
            
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Empowering learners worldwide with industry-leading courses and expert-led training. Join the future of education today.
            </p>

            <div className="flex items-center gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-600 hover:-translate-y-2 transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-400 rounded-sm"></div> {/* Placeholder for icons */}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-white font-bold text-lg">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-violet-400 hover:pl-2 transition-all duration-300 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center">
            © 2026 Eduvion. All rights reserved. Designed with ❤️ for Builders.
          </p>
          <div className="flex items-center gap-8">
            <button className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</button>
            <button className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;