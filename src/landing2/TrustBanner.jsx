// Components/TrustBanner.jsx
import React from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Counter Logic Component - No Logic Changes
const Counter = ({ value }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, numericValue, { duration: 2, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={nodeRef}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const TrustBanner = () => {
  const stats = [
    { label: "Active Students", value: "15000+" },
    { label: "Expert Mentors", value: "120+" },
    { label: "Course Categories", value: "45+" },
    { label: "Success Rate", value: "98%" }
  ];

  return (
    <div className="relative -mt-16 z-20 px-6 max-w-7xl mx-auto">
      {/* 1. Advanced Glass Container - Subtle Gold Border Hint */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-2xl border border-[#D4AF37]/10 shadow-[0_20px_60px_rgba(10,38,71,0.12)] rounded-sm p-10 md:p-14"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4 group">
              {/* Gold Numbers from Logo (#D4AF37) */}
              <h3 className="text-[#0A2647] text-4xl md:text-5xl font-serif font-bold mb-2 flex justify-center items-center">
                <span className="text-[#D4AF37] mr-1">
                  <Counter value={stat.value} />
                </span>
              </h3>
              
              {/* Decorative Line - Changes from Navy-Fade to Gold on Hover */}
              <div className="h-1 w-8 bg-[#0A2647]/10 mx-auto mb-3 transition-all duration-500 group-hover:w-16 group-hover:bg-[#D4AF37]"></div>
              
              {/* Labels in Navy Blue (#0A2647) */}
              <p className="text-[#0A2647]/70 uppercase tracking-[0.2em] text-[10px] font-black">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Decorative Shadow for Depth with Navy Tint */}
      <div className="absolute inset-x-10 bottom-0 h-4 bg-[#0A2647]/5 blur-2xl -z-10"></div>
    </div>
  );
};

export default TrustBanner;