import React from 'react';

const About = () => {
  const features = [
    {
      title: "Flexible Learning",
      desc: "Learn at your own pace with lifetime access to courses on mobile and desktop.",
      icon: "📱",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Expert Mentors",
      desc: "Get taught by industry professionals who have worked at top tech companies.",
      icon: "👨‍🏫",
      color: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
      title: "Certificate of Completion",
      desc: "Boost your resume with industry-recognized certificates after every course.",
      icon: "📜",
      color: "from-orange-500/20 to-amber-500/20"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0f081a] overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Creative Image Stack */}
          <div className="relative group">
            {/* Background Decorative Box */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                alt="Students learning" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 -right-4 md:right-8 bg-[#1a0b2e]/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">10K+</p>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Success Stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-violet-400 font-black uppercase tracking-[0.3em] text-sm">Who We Are</h4>
              <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Empowering Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Next-Gen Skills</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We are more than just an online platform. We are a global community of curious minds, dedicated to bridging the gap between education and career success.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 p-4 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 group cursor-default"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-xl mb-1 group-hover:text-violet-400 transition-colors">{item.title}</h5>
                    <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative px-10 py-4 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95">
                <span className="relative z-10">Learn More About Us</span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>

     <style>
  {`
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 4s ease-in-out infinite;
    }
  `}
</style>
    </section>
  );
};

export default About;