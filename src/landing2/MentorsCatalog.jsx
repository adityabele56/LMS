// Components/MentorsCatalog.jsx
import React from 'react';

const MentorsCatalog = () => {
  const mentors = [
    { 
      name: "Sarah Jenkins", 
      role: "Digital Marketing Expert", 
      exp: "12+ Years", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      company: "Ex-Google" 
    },
    { 
      name: "David Chen", 
      role: "UI/UX Design Lead", 
      exp: "10+ Years", 
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      company: "Ex-Meta" 
    },
    { 
      name: "Ananya Rao", 
      role: "Business Strategist", 
      exp: "08+ Years", 
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      company: "Forbes 30U30" 
    },
    { 
      name: "Marcus Thorne", 
      role: "Full Stack Developer", 
      exp: "15+ Years", 
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      company: "Tech Lead at Stripe" 
    },
  ];

  return (
    <section className="py-24 px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-xs italic">The Minds Behind Eduvion</span>
          <h2 className="text-5xl font-serif text-[#1B4D3E]">Meet Your Industry Mentors</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Learn directly from practitioners who have built products at the world's leading tech companies.</p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="group relative">
              {/* Image Container with Hover Overlay */}
              <div className="relative h-[400px] overflow-hidden rounded-sm">
                <img 
                  src={mentor.img} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                
                {/* Social Icons Reveal on Hover */}
                <div className="absolute inset-0 bg-[#0A2647]/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {['In', 'Tw', 'Li'].map((s) => (
                    <div key={s} className="w-10 h-10 border border-[#C5A059] rounded-full flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all cursor-pointer">
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentor Details */}
              <div className="mt-6 text-center space-y-2">
                <div className="inline-block px-3 py-1 bg-[#F9F7F2] text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-2">
                  {mentor.company}
                </div>
                <h3 className="text-xl font-bold text-[#1B4D3E] group-hover:text-[#0A2647] transition-colors">{mentor.name}</h3>
                <p className="text-gray-500 text-sm">{mentor.role}</p>
                <p className="text-[#C5A059] text-xs font-bold tracking-widest pt-2 border-t border-gray-100 mt-4 inline-block">
                  {mentor.exp} EXPERIENCE
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-24 bg-[#1B4D3E] p-12 text-center rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full translate-x-10 -translate-y-10"></div>
          <h3 className="text-2xl text-white font-serif mb-4 italic">Want to join our elite panel of mentors?</h3>
          <button className="bg-[#C5A059] text-[#0A2647] px-8 py-3 font-bold uppercase text-xs tracking-[0.2em] hover:bg-white transition-all">
            Apply as Instructor
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorsCatalog;