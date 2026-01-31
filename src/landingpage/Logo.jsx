import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-3 cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Shield/Icon Part */}
      <div className="relative">
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 2, 0] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative z-10"
        >
          <img 
            src="/path-to-your-logo.png" // Apne transparent logo ka path yahan daalein
            alt="Eduvion Logo" 
            className="h-12 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </motion.div>

        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
      </div>

      {/* Text Part */}
      <motion.div className="flex flex-col">
        <motion.span 
          className="text-2xl font-black tracking-tight text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Edu<span className="text-blue-500">vion</span>
        </motion.span>
        <motion.span 
          className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Education Excellence
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;