import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, FileText, Layout, Award, NotepadText } from "lucide-react";

/* ================= CLASSES ================= */
const classes = [
  "Class 12 pass", "Class 12", "Class 11", "Class 10", 
  "Class 9", "Class 8", "Class 7", "Class 6", 
  "Class 1 - 5", "LKG - UKG",
];

/* ================= COMMON CARDS ================= */
// Maine colors ko Navy/Gold theme ke soft variants mein badal diya hai
const commonCards = [
  {
    title: "NCERT",
    subtitle: "Solutions",
    icon: <Layout className="w-12 h-12 text-[#D4AF37]" />,
    bg: "bg-[#0A2647]/5",
  },
  {
    title: "Previous Year",
    subtitle: "Question Papers",
    icon: <FileText className="w-12 h-12 text-[#0A2647]" />,
    bg: "bg-[#D4AF37]/10",
  },
  {
    title: "NCERT",
    subtitle: "Books",
    icon: <BookOpen className="w-12 h-12 text-[#D4AF37]" />,
    bg: "bg-[#0A2647]/5",
  },
  {
    title: "Important",
    subtitle: "Question Papers",
    icon: <Award className="w-12 h-12 text-[#0A2647]" />,
    bg: "bg-[#D4AF37]/10",
  },
  {
    title: "Revision",
    subtitle: "Notes",
    icon: <NotepadText className="w-12 h-12 text-[#D4AF37]" />,
    bg: "bg-[#0A2647]/5",
  },
];

const materials = classes.reduce((acc, cls) => {
  acc[cls] = commonCards;
  return acc;
}, {});

export default function StudyMaterials() {
  const [activeClass, setActiveClass] = useState("Class 11");
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      scroll("right");
    }, 5000);
    return () => clearInterval(timer);
  }, [activeClass]);

  return (
    <section className="w-full bg-[#FCFBFA] px-6 md:px-20 py-24 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black mb-4 block"
          >
            Academic Resources
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A2647]">
            Explore our <span className="italic text-[#D4AF37]">Offerings</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        {/* CLASS TABS - Refined for Luxury Feel */}
        <div className="flex flex-wrap justify-center gap-3 mb-15">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setActiveClass(cls)}
              className={`px-6 py-2 rounded-full border text-[11px] font-bold uppercase tracking-widest transition-all duration-500
                ${
                  activeClass === cls
                    ? "bg-[#0A2647] text-white border-[#0A2647] shadow-xl shadow-[#0A2647]/20"
                    : "bg-transparent text-[#0A2647]/60 border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
            >
              {cls}
            </button>
          ))}
        </div>

        {/* SECTION TITLE */}
        <div className="flex justify-between items-end mb-10 border-l-4 border-[#D4AF37] pl-6">
          <div>
            <h3 className="text-2xl font-serif text-[#0A2647]">Study Materials</h3>
            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Curated for {activeClass}</p>
          </div>
          <div className="flex gap-2">
             <button onClick={() => scroll("left")} className="p-3 rounded-full border border-gray-100 bg-white text-[#0A2647] hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm">
                <ChevronLeft size={20} />
             </button>
             <button onClick={() => scroll("right")} className="p-3 rounded-full border border-gray-100 bg-white text-[#0A2647] hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm">
                <ChevronRight size={20} />
             </button>
          </div>
        </div>

        {/* SLIDER */}
        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-10"
        >
          <AnimatePresence mode="wait">
            {materials[activeClass].map((item, i) => (
              <motion.div
                key={activeClass + i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`min-w-[280px] md:min-w-[320px] h-[380px] rounded-2xl p-8 ${item.bg} border border-white/50 backdrop-blur-sm flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#0A2647]/10`}
              >
                {/* TEXT CONTENT */}
                <div className="space-y-2">
                  <h4 className="text-[#0A2647] text-2xl font-serif group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#0A2647]/60 text-sm font-medium uppercase tracking-tighter">
                    {item.subtitle}
                  </p>
                </div>

                {/* CENTER ICON/ILLUSTRATION */}
                <div className="flex justify-center items-center relative">
                  <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-full scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-40 w-40 rounded-full bg-white flex items-center justify-center shadow-inner relative z-10 border border-gray-50 transform group-hover:scale-110 transition-transform duration-700">
                     {item.icon}
                  </div>
                </div>

                {/* BOTTOM ACTION */}
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[#0A2647]">
                  <span>Access Now</span>
                  <div className="w-8 h-[1px] bg-[#D4AF37]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
    </section>
  );
}