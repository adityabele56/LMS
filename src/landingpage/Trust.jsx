import React from 'react';

const Trust = () => {
  const stats = [
    {
      id: 1,
      label: 'Total Students',
      value: '150K+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'from-blue-400 to-indigo-500',
    },
    {
      id: 2,
      label: 'Expert Teachers',
      value: '1,200+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: 'from-violet-500 to-fuchsia-500',
    },
    {
      id: 3,
      label: 'Total Courses',
      value: '4,500+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-orange-400 to-red-500',
    },
    {
      id: 4,
      label: 'Video Lessons',
      value: '25K+',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-emerald-400 to-teal-500',
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0f081a]">
      <div className="max-w-7xl mx-auto">
        {/* Main Trust Container */}
        <div className="relative group overflow-hidden bg-[#1a0b2e]/50 backdrop-blur-2xl border border-white/5 rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          
          {/* Animated Background Blob */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px] group-hover:bg-violet-600/20 transition-all duration-700"></div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center space-y-4 group/item">
                
                {/* Icon Circle */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 text-white shadow-lg group-hover/item:scale-110 group-hover/item:-rotate-6 transition-all duration-300`}>
                  {stat.icon}
                </div>

                {/* Numbers */}
                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${stat.color} opacity-40 group-hover/item:w-20 group-hover/item:opacity-100 transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Line */}
        <p className="text-center mt-12 text-slate-500 italic text-sm">
          "Trusted by thousands of learners and top companies worldwide to accelerate careers."
        </p>
      </div>
    </section>
  );
};

export default Trust;