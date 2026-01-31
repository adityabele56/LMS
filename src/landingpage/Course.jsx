import React, { useState } from 'react';

const Course = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Design', 'Business', 'AI & Data'];

  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Mastery with React & Node",
      category: "Web Development",
      price: "$49.99",
      rating: 4.9,
      students: "12k",
      duration: "45 Hours",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500",
      instructor: "Dr. Angela"
    },
    {
      id: 2,
      title: "Advanced UI/UX Design Systems 2026",
      category: "Design",
      price: "$39.99",
      rating: 4.8,
      students: "8k",
      duration: "30 Hours",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=500",
      instructor: "Alex Banner"
    },
    {
      id: 3,
      title: "Python for Data Science & Machine Learning",
      category: "AI & Data",
      price: "$59.99",
      rating: 5.0,
      students: "15k",
      duration: "60 Hours",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      instructor: "Sarah Jonas"
    },
    {
      id: 4,
      title: "Digital Marketing & Brand Strategy",
      category: "Business",
      price: "$29.99",
      rating: 4.7,
      students: "6k",
      duration: "20 Hours",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      instructor: "Mike Ross"
    }
  ];

  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <section className="py-24 px-6 bg-[#0f081a] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-violet-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Top Rated Courses</h4>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Expand Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Knowledge</span>
            </h2>
          </div>

          {/* Dynamic Filter Tabs */}
          <div className="flex bg-[#1a0b2e] p-1.5 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  filter === cat 
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20' 
                  : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="group relative bg-[#1a0b2e]/50 backdrop-blur-sm border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:border-violet-500/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white text-xs font-bold">
                  {course.duration}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-violet-400 text-xs font-black uppercase tracking-widest">{course.category}</span>
                  <div className="flex items-center gap-1 text-yellow-500 font-bold">
                    ★ <span className="text-white text-sm">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 leading-snug group-hover:text-violet-400 transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between py-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-white font-bold text-xs">
                      {course.instructor.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">{course.instructor}</p>
                      <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Instructor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black text-xl">{course.price}</p>
                    <p className="text-slate-500 text-[10px] uppercase font-bold">Price</p>
                  </div>
                </div>

                <button className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-violet-600 hover:text-white transition-all duration-300 transform active:scale-95 shadow-xl">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;