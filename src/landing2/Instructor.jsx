// Components/Instructor.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Instructor = () => {
  const { scrollYProgress } = useScroll();
  // Parallax effect for the image
  const yImage = useTransform(scrollYProgress, [0.3, 0.6], [0, -80]); 

  const points = ["Ex-Google Strategist", "15+ Years Experience", "Global Keynote Speaker", "Forbes 30 Under 30"];
  const luxuryEase = [0.16, 1, 0.3, 1]; 

  return (
    <section className="py-20 px-6 lg:px-18 bg-[#FCFBFA] overflow-hidden relative font-sans">
      
      {/* 1. Large Background Floating Text - Matched with Navy Logo (#0A2647) */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 1], [50, -200]) }}
        className="absolute top-20 left-0 text-[18vw] font-black text-[#0A2647]/[0.03] whitespace-nowrap select-none -z-0"
      >
        ELITE MENTOR
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT: Image Composition */}
        <div className="lg:col-span-6 relative group">
          
          <motion.div 
            initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.1 }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{ duration: 1.6, ease: luxuryEase }}
            viewport={{ once: true }}
            className="relative z-10 aspect-[3/4] overflow-hidden shadow-[0_50px_100px_rgba(10,38,71,0.08)] bg-gray-100"
          >
            <motion.img 
              style={{ y: yImage }}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200" 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          {/* Floating Badge (Glassmorphism) - Navy Text from Logo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -bottom-10 -right-10 w-44 h-44 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full flex items-center justify-center z-20"
          >
            <p className="text-[#0A2647] text-[10px] font-black tracking-widest text-center uppercase leading-tight p-6">
              Industry <br/> Master <br/> Lead 
            </p>
          </motion.div>

          {/* Decorative Gold Line - Logo Gold (#D4AF37) */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="absolute -left-6 top-0 w-[2px] h-full bg-[#D4AF37]/30 origin-top"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="lg:col-span-6 space-y-10">
          
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="inline-block text-[#D4AF37] text-xs font-black tracking-[0.5em] uppercase"
            >
              Excellence in Tutelage
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%", skewY: 5 }}
              whileInView={{ y: 0, skewY: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
              className="text-7xl lg:text-8xl font-serif text-[#0A2647] leading-[0.9]"
            >
              Excellence <br /> 
              <span className="italic font-normal text-[#D4AF37]">Informed</span> by <br /> 
              Intuition.
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-slate-500 text-lg font-light leading-relaxed max-w-lg border-l-2 border-[#D4AF37]/40 pl-8"
          >
            Bridge the chasm between ambition and achievement. Our curriculum is not just taught; it is experienced through the lens of those who have paved the way.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-4 group"
              >
                {/* Points numbering with Gold Hover */}
                <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[10px] text-[#D4AF37] font-bold group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                  0{i+1}
                </span>
                <span className="text-[#0A2647] text-[10px] font-bold tracking-widest uppercase">{point}</span>
              </motion.div>
            ))}
          </div>

          {/* Primary Navy Button with Gold Slide-up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-6"
          >
            <button className="group relative px-12 py-5 bg-[#0A2647] text-white text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden shadow-xl shadow-[#0A2647]/20">
              <span className="relative z-10 group-hover:text-[#0A2647] transition-colors duration-500">Full Methodology</span>
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;