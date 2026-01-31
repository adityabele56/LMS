// Components/About.jsx
import React from 'react';

const About2 = () => {
  return (
    <section id="about" className="py-24 px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Visual Storytelling */}
        <div className="relative group">
          {/* Decorative Gold Frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#C5A059] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          
          <div className="relative z-10 overflow-hidden shadow-2xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800" 
              alt="Eduvion Vision" 
              className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-0 right-0 bg-[#0A2647] p-8 text-white max-w-[200px]">
              <p className="text-3xl font-serif text-[#C5A059] font-bold">10+</p>
              <p className="text-xs uppercase tracking-widest opacity-70">Years of Academic Excellence</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content & Mission */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-xs">Our Legacy</span>
            <h2 className="text-5xl font-serif text-[#1B4D3E] leading-tight">
              Redefining Education for the <span className="italic">Modern World</span>
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Eduvion was born out of a simple idea: quality education should be accessible, practical, and industry-aligned. We bridge the gap between theoretical knowledge and real-world application.
          </p>

          {/* Mission & Vision Mini-Cards */}
          <div className="space-y-6 pt-4">
            <div className="flex gap-6 items-start group">
              <div className="text-3xl text-[#0A2647] group-hover:text-[#C5A059] transition-colors">🎯</div>
              <div>
                <h4 className="font-bold text-[#1B4D3E] text-xl">Our Mission</h4>
                <p className="text-gray-500 text-sm">To empower individuals with the skills needed to thrive in an ever-evolving global economy.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group text-slate-800">
              <div className="text-3xl text-[#0A2647] group-hover:text-[#C5A059] transition-colors">👁️</div>
              <div>
                <h4 className="font-bold text-[#1B4D3E] text-xl">Our Vision</h4>
                <p className="text-gray-500 text-sm">To become the world's most trusted platform for professional career transformation.</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button className="relative overflow-hidden group bg-[#1B4D3E] text-white px-10 py-4 rounded-sm transition-all duration-300">
              <span className="relative z-10 font-bold tracking-widest text-xs uppercase">Learn More About Us</span>
              <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About2;