import React, { useState, useMemo } from 'react';

const PopularCourse = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Design', 'Development', 'Business', 'Data Science', 'Marketing'];
  
  // Sample Data - Industry level structure
  const allCourses = [
    { id: 1, title: "Python for Financial Analysis & Trading", category: "Development", instructor: "Adam Smith", students: "50+", rating: 5.0, lessons: "12x", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400" },
    { id: 2, title: "UI/UX Advanced Masterclass 2024", category: "Design", instructor: "Sarah J.", students: "120+", rating: 4.8, lessons: "25x", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400" },
    { id: 3, title: "Digital Marketing Growth Hacking", category: "Marketing", instructor: "Mike Ross", students: "80+", rating: 4.9, lessons: "15x", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400" },
    { id: 4, title: "Business Strategy & Leadership", category: "Business", instructor: "Harvey S.", students: "200+", rating: 5.0, lessons: "30x", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400" },
    { id: 5, title: "Data Science with Power BI", category: "Data Science", instructor: "Dr. Emily", students: "45+", rating: 4.7, lessons: "18x", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400" },
    { id: 6, title: "React & Tailwind Advanced UI", category: "Development", instructor: "John Doe", students: "95+", rating: 5.0, lessons: "22x", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400" },
  ];

  // Logic: Filter by Category AND Search Query
  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesTab = activeTab === 'All' || course.category === activeTab;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="py-24 px-6 bg-[#0f081a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Popular <span className="text-violet-400">Courses</span>
            </h2>
            <p className="text-slate-500">Explore our most trending courses across the globe.</p>
          </div>

          {/* Search & Filter Container */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64 group">
              <input 
                type="text" 
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a0b2e] border border-white/10 text-white rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-violet-500 transition-all placeholder:text-slate-600"
              />
              <svg className="w-5 h-5 absolute left-4 top-3.5 text-slate-500 group-focus-within:text-violet-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filter Tabs */}
            <div className="bg-[#1a0b2e] p-1.5 rounded-full border border-white/5 flex items-center gap-1 overflow-x-auto no-scrollbar shadow-inner">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                    activeTab === cat 
                    ? 'bg-violet-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid with Animation Transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-[#1a0b2e] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                    {course.lessons} Lessons
                  </div>
                  <div className="absolute bottom-5 right-5 bg-violet-600/90 backdrop-blur-sm text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl">
                    {course.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-white mb-6 min-h-[56px] leading-snug group-hover:text-violet-400 transition-colors">
                    {course.title}
                  </h4>
                  
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-violet-500/30 overflow-hidden shadow-lg">
                        <img src={`https://i.pravatar.cc/150?u=${course.id}`} alt="avatar" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">{course.instructor}</p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Instructor</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-violet-400 text-sm font-black">{course.students}</p>
                      <p className="text-slate-600 text-[10px] uppercase font-bold">Students</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="text-white font-bold text-sm">{course.rating}</span>
                    </div>
                    <button className="relative overflow-hidden text-white text-sm font-black uppercase tracking-widest group/btn">
                      <span className="relative z-10 underline decoration-violet-500 underline-offset-8 group-hover/btn:text-violet-400 transition-all">Enroll Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-500 text-xl font-medium">Bhai, is category mein koi course nahi mila! 😅</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;