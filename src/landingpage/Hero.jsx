import React from 'react';

const Hero = () => {
  const partners = ["HubSpot", "loom", "GitLab", "LiveChat", "monday.com"];

  return (
    /* 1. min-h-screen use kiya taaki content kitna bhi ho, scroll allow rahe.
       2. overflow-hidden ko yahan rakha hai taaki sirf side-elements bahar na nikle. */
    <section className="relative min-h-screen pt-32 pb-20 px-6 bg-[#0f081a]">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 text-white/10 text-6xl font-bold select-none animate-pulse">+++</div>
      <div className="absolute bottom-40 right-10 text-white/10 text-7xl font-bold select-none rotate-12">+++</div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10 space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Best courses are <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              waiting to enrich 
            </span><br />
            your skill
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Provides you with the latest online learning system and material 
            that help your knowledge growing.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-bold rounded-full hover:scale-110 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-110 hover:bg-slate-100 transition-all duration-300 shadow-xl">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Content - Visual Illustration */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-violet-500/30 to-transparent rounded-full flex items-center justify-center border border-white/5">
            <img 
              src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-1103.jpg" 
              alt="Learning Illustration"
              className="w-4/5 h-4/5 object-contain rounded-2xl drop-shadow-2xl animate-float"
            />
            {/* Floating Achievement Badges */}
            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-2xl animate-bounce">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="absolute bottom-10 -right-4 bg-fuchsia-500 p-3 rounded-2xl shadow-2xl animate-pulse">
              <span className="text-white font-bold text-sm">New Course!</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- INFINITE MOVING PARTNERS --- */}
      <div className="max-w-7xl mx-auto mt-24 border-t border-white/5 pt-12 overflow-hidden relative">
        <p className="text-slate-500 text-xs uppercase tracking-widest mb-10 font-bold text-center">Our Trusted Partners</p>
        
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            <div className="flex items-center space-x-20 px-10">
              {partners.map((p, i) => (
                <span key={i} className="text-white text-3xl font-bold opacity-20 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">{p}</span>
              ))}
            </div>
            <div className="flex items-center space-x-20 px-10">
              {partners.map((p, i) => (
                <span key={i + 'd'} className="text-white text-3xl font-bold opacity-20 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations - Using standard style tag to avoid JSX error */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;