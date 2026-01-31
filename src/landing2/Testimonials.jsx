// Components/Testimonials.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Anjali Sharma",
      role: "Senior Product Designer",
      quote: "The best investment I've made for my career. The project-based approach is unmatched.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Rohan Mehta",
      role: "Marketing Director",
      quote: "Eduvion transformed how our team handles digital strategy. Industry-leading insights.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    }
  ];

  const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative py-30 px-6 overflow-hidden text-[#0A2647]">
      
      {/* 1. BACKGROUND LAYER - Matched with Hero Section Tint */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-5 grayscale" // Subtly lowered for clarity
        />
        {/* Navy/Off-White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBFA] via-[#FCFBFA]/90 to-[#FCFBFA]"></div>
        <div className="absolute inset-0 bg-[#0A2647]/[0.02]"></div> {/* Subtle Blue Tint */}
      </div>

      {/* 2. DECORATIVE QUOTES - Logo Gold Tint (#D4AF37) */}
      <div className="absolute top-10 left-10 text-[20rem] font-serif text-[#D4AF37]/10 select-none leading-none z-0">
        “
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#D4AF37] uppercase tracking-[0.6em] text-[10px] font-black mb-12 block"
        >
          Voices of Success
        </motion.span>

        <div className="min-h-[400px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -40, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="space-y-10"
            >
              {/* Dynamic Quote - Navy Text */}
              <h2 className="text-4xl md:text-6xl font-serif italic leading-[1.2] max-w-4xl mx-auto text-[#0A2647]">
                "{reviews[index].quote}"
              </h2>

              {/* User Identity */}
              <div className="flex flex-col items-center gap-6">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="relative"
                >
                  {/* Gold Border for Profile */}
                  <div className="w-24 h-24 rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                    <img 
                      src={reviews[index].img} 
                      alt={reviews[index].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Star Badge - Gold Color */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-xs shadow-lg">
                    ★
                  </div>
                </motion.div>

                <div>
                  <p className="font-serif text-2xl text-[#0A2647]">{reviews[index].name}</p>
                  <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mt-1">
                    {reviews[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. NAVIGATION - Navy to Gold Hover */}
        <div className="flex justify-center items-center gap-12 pt-16">
          <button 
            onClick={prevSlide}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#0A2647] hover:text-[#D4AF37] transition-all"
          >
            <span className="w-12 h-[1px] bg-[#0A2647]/20 group-hover:bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
            Prev
          </button>
          
          <div className="text-[10px] font-bold text-gray-400">
            0{index + 1} / 0{reviews.length}
          </div>

          <button 
            onClick={nextSlide}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#0A2647] hover:text-[#D4AF37] transition-all"
          >
            Next
            <span className="w-12 h-[1px] bg-[#0A2647]/20 group-hover:bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;