// Components/Hero2.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero2 = () => {
  // Original Animation Variants - No Change
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FCFBFA] px-15">
      
      {/* 1. Background - Adjusted for Light Blue Tint & Low Visibility */}
      <div className="absolute inset-0 z-0">
        {/* Gold Glow remains same */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[120px]"
        />
        
        {/* Background Image with Blue Tint Overlay */}
        <div className="absolute inset-0 bg-[#0A2647]/5 z-[1]"></div> {/* Ye line Blue tint degi */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600" 
          className="w-full h-full object-cover opacity-[0.25] grayscale" // Visibility aur kam kar di (0.05)
          alt="bg" 
        />
      </div>

      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT: Content - No Change in Logic */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">
              Elite Learning Experience
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-serif text-[#0A2647] leading-[1.1]">
            Learn essential  <br />
            <span className="italic font-normal text-[#D4AF37]">Career </span> of <br />
            and life skills
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-md leading-relaxed border-l-4 border-[#D4AF37]/20 pl-6">
            Give your teams the AI-assisted tools to deliver engaging learning experiences that impact what matters – performance, retention, and growth – with Eduvion
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-6 pt-4">
            <button className="group relative px-10 py-4 bg-[#0A2647] text-white text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all">
              <span className="relative z-10">Join the Elite</span>
              <motion.div 
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-[#D4AF37] -translate-x-full"
              />
            </button>
            <button className="px-10 py-4 border border-[#0A2647]/20 text-[#0A2647] text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-sm">
              Our Vision
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image Composition - No Change */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div 
            whileHover={{ rotateY: -10, rotateX: 5, perspective: 1000 }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[12px] border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000" 
              alt="Education" 
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl z-20"
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Global Mentors</p>
            <div className="text-3xl font-serif text-[#0A2647] font-bold italic">500+</div>
            <div className="w-full h-1 bg-[#D4AF37] mt-2"></div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero2;