import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, GraduationCap, Users, Clock, ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const EliteMentors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);

  const mentors = [
    { name: "Shimon", role: "Mathematics Specialist", college: "IIT Madras", exp: "7+ Years", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
    { name: "Pahul", role: "Chemistry Expert", college: "IIT Bombay", exp: "10+ Years", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { name: "Harsh Priyam", role: "Physics Mentor", college: "BIT Durg", exp: "9+ Years", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    { name: "Shreyas", role: "Applied Physics", college: "NIT Nagpur", exp: "12+ Years", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
    { name: "Ananya", role: "Biology Expert", college: "AIIMS Delhi", exp: "8+ Years", img: "https://images.unsplash.com/photo-1580894732230-2867e633d14e?w=400" }
  ];

  // Filter Logic
  const filteredMentors = mentors.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 bg-[#FCFBFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER & SEARCH BAR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0A2647]">
              Our Elite <span className="text-[#D4AF37] italic">Faculty</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Find the mentor who inspires you.</p>
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search by name or subject..."
              className="w-full bg-white border border-gray-100 py-4 pl-12 pr-4 rounded-2xl shadow-sm focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 transition-all text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* HORIZONTAL CONTROLS */}
        <div className="flex justify-end gap-3 mb-6">
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-100 bg-white text-[#0A2647] hover:bg-[#0A2647] hover:text-white transition-all shadow-sm active:scale-90">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-100 bg-white text-[#0A2647] hover:bg-[#0A2647] hover:text-white transition-all shadow-sm active:scale-90">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* HORIZONTAL SLIDER */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor, i) => (
                <motion.div
                  key={mentor.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="min-w-[300px] md:min-w-[320px] bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="relative h-64 bg-[#0A2647] overflow-hidden">
                    <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale-[30%] group-hover:grayscale-0" />
                  </div>

                  <div className="p-8 text-center">
                    <h3 className="text-xl font-serif text-[#0A2647] mb-1">{mentor.name}</h3>
                    <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest mb-4">{mentor.role}</p>
                    <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs font-medium mb-6">
                      <Star size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                      <span>{mentor.college} • {mentor.exp}</span>
                    </div>

                    <button className="w-full bg-[#0A2647] text-white py-3.5 rounded-xl flex items-center justify-center gap-2 group/btn relative overflow-hidden transition-all duration-300">
                      <span className="relative z-10 text-[10px] font-black uppercase tracking-widest">Profile</span>
                      <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="w-full py-20 text-center text-gray-400 font-serif italic">
                No mentors found matching your search...
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default EliteMentors;