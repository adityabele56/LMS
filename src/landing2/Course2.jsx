// Components/Courses2.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Courses2 = () => {
  const courses = [
    { title: "Digital Marketing", tag: "Strategy", level: "Intermediate", desc: "Master SEO, SEM and Social Media algorithms.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
    { title: "UI/UX Design", tag: "Creative", level: "Beginner", desc: "Build industry-grade interfaces using Figma & Adobe.", img: "data:image/webp;base64,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" },
    { title: "Business Strategy", tag: "Leadership", level: "Advanced", desc: "Scale business operations with data-driven models.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800" }
  ];

  return (
    <section className="py-32 px-6 lg:px-20 bg-[#FCFBFA] relative overflow-hidden">
      {/* Background Subtle Title - Matches Logo Navy Tint */}
      <div className="absolute top-10 left-10 text-[120px] font-black text-[#0A2647]/5 select-none hidden lg:block uppercase">
        OFFERINGS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span> {/* Gold Line */}
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">Curated Tracks</span>
            </motion.div>
            <h2 className="text-5xl font-serif text-[#0A2647] leading-tight">
              Push the Boundaries of <br /> <span className="italic text-[#D4AF37]">Knowledge.</span>
            </h2>
          </div>
          {/* View All Button with Gold Border */}
          <button className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-all text-[#0A2647]">
            View All Programs
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-5 rounded-sm shadow-[0_10px_40px_rgba(10,38,71,0.04)] hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-50"
            >
              {/* Image Container with Logo Colors */}
              <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={course.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-[#0A2647]/90 backdrop-blur-md text-[8px] font-black uppercase tracking-widest text-white border-b border-[#D4AF37]">
                    {course.tag}
                  </span>
                </div>
              </div>

              {/* Content - Navy and Gold Accents */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">
                  <span className="text-[#0A2647]">Eduvion Elite</span>
                  <span>{course.level}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-[#0A2647] group-hover:text-[#D4AF37] transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2">
                  {course.desc}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  {/* Enroll Button - Navy to Gold Hover */}
                  <button className="relative px-6 py-3 bg-[#0A2647] text-white text-[9px] font-bold uppercase tracking-[0.2em] overflow-hidden group/btn shadow-md">
                    <span className="relative z-10 group-hover:text-[#0A2647] transition-colors duration-500">Enroll Now</span>
                    <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </button>
                  <span className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:shadow-lg transition-all cursor-pointer">
                    →
                  </span>
                </div>
              </div>

              {/* Decorative Gold Line at Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses2;