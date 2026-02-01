import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Target, GraduationCap, Code, ArrowRight } from 'lucide-react';

const TutoringSection = () => {
  const cards = [
    {
      title: "Ace your CBSE/ICSE results!",
      desc: "Highest personal attention, One teacher One student policy for maximum growth.",
      price: "888",
      icon: <UserCheck className="w-6 h-6 text-[#D4AF37]" />,
      tag: "School Topper"
    },
    {
      title: "Your best bet to JEE / NEET!",
      desc: "Individual Attention, Maximum Results! Crack competitive exams with top mentors.",
      price: "1,049",
      icon: <Target className="w-6 h-6 text-[#D4AF37]" />,
      tag: "Entrance Pro"
    },
    {
      title: "Tailored learning for IB & IGCSE!",
      desc: "Your path to Academic Excellence! Specialized curriculum for international boards.",
      price: "1,249",
      icon: <GraduationCap className="w-6 h-6 text-[#D4AF37]" />,
      tag: "Global Standard"
    },
    {
      title: "Master Java & Python Skills!",
      desc: "From Good to Great: Improve your coding skills with industry-leading experts.",
      price: "999",
      icon: <Code className="w-6 h-6 text-[#D4AF37]" />,
      tag: "Tech Expert"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FCFBFA] relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full -z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#D4AF37] uppercase tracking-[0.4em] text-[11px] font-black mb-4 block"
            >
              Personalized Excellence
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0A2647] leading-tight">
              One-to-One <span className="italic text-[#D4AF37]">Tutoring</span>
            </h2>
            <p className="text-[#0A2647]/60 mt-4 text-lg">
              Highest Personal Attention for guaranteed academic transformation.
            </p>
          </div>
          
          {/* Simple Illustration Placeholder / Floating Stats */}
          <div className="hidden lg:flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xl shadow-[#0A2647]/5 border border-gray-50">
            <div className="w-12 h-12 bg-[#0A2647] rounded-full flex items-center justify-center text-[#D4AF37] font-bold">
              99%
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#0A2647]">
              Satisfaction <br/> Rate
            </p>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#0A2647]/10 transition-all duration-500 group"
            >
              {/* Card Header: Icon & Tag */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-[#0A2647]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#0A2647] transition-colors duration-500">
                  <span className="group-hover:text-[#D4AF37] transition-colors duration-500">
                    {card.icon}
                  </span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div className="mb-8 h-40">
                <h3 className="text-[#0A2647] text-xl font-bold mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Pricing */}
              <div className="pt-6 border-t border-gray-50 flex flex-col gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-xs uppercase font-bold">Starts At</span>
                  <span className="text-[#0A2647] text-2xl font-black">₹{card.price}</span>
                  <span className="text-gray-400 text-xs italic">/hr</span>
                </div>

                <button className="w-full bg-[#0A2647] text-white py-4 rounded-xl flex items-center justify-center gap-2 group/btn relative overflow-hidden transition-all duration-300 active:scale-95 shadow-lg shadow-[#0A2647]/10">
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-widest">Find Personal Tutor</span>
                  <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  
                  {/* Gold Slide Hover Effect */}
                  <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutoringSection;